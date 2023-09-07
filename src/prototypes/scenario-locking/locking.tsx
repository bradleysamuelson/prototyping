import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Buy from './buy';
import Plan from './plan';
import PlanV1 from './plan-v1';
import PlanV2 from './plan-v2';
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';

import { ContentPadding, IconButton, Modal } from '@preamp/core';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Information } from '@preamp/signal';

import './scenario-locking.scss';

const modifyVersionOptions: OptionsType<OptionType> = [
    { value: 'version3', label: 'Version 3 (Latest)'},
    { value: 'version2', label: 'Version 2' },
    { value: 'version1', label: 'Version 1' }
];

function LockingPrototype() {
    const [version, setVersion] = React.useState(modifyVersionOptions[0]);
    const [isInfoModalOpen, setIsInfoOpenModal] = React.useState<boolean>(false);
    const { url } = useRouteMatch();
    console.log(version)

    function onVersionChange(e: any): void {
        setVersion(e);
        console.log(version)
    }
    const toggleInfoModal = (): void => {
        setIsInfoOpenModal(!isInfoModalOpen);
    };
return (
  <>
    <PrototypeBar name="Locking Prototype" home="/home">
        <Select
            inlineLabel={false}
            options={modifyVersionOptions}
            defaultValue={modifyVersionOptions[0]}
            onChange={onVersionChange}
            selectType={SelectType.Compact}
            style={{ width: '10rem' }}
        />
        {version.value !== 'version1' && (
            <IconButton icon={Information} className="version-info-icon" onClick={toggleInfoModal} />
        )}
    </PrototypeBar>
    <Modal
                contentPadding={ContentPadding.Slim}
                isLightContent
                isOpen={isInfoModalOpen}
                maxHeight={'200px'}
                maxWidth={'500px'}
                onHide={toggleInfoModal}
                title={`${version.label} -  Info`}
            >
                {version.value === 'version2' && 
                <p>
                   Version 2 of the Scenario Locking prototype removes the ability to create a new scenario from scratch by clicking the 'Create Scenario' button and instead only creates 
                   from an existing Scenario. Creating a new scenario from scratch is not an action a user would take in this workflow.
                </p>
                }
                {version.value === 'version3' && 
                <p>
                   Updated the 'All Other Linear Inventory' tab of the 'Modify and Run New Scenario' takeover to include a new, simplified way to specify locked or modified items vs those left to be reoptimized.
                </p>
                }
            </Modal>

    <Switch>
        <Route exact path={url}>
            <Buy />
        </Route>
        <Route path={`${url}/plan`}>
            {version.value === 'version3' ? <Plan /> : version.value === 'version2' ? <PlanV2 /> : <PlanV1 />}
        </Route>
    </Switch>
  </>
)
};

export default LockingPrototype;