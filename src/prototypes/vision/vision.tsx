import React from 'react';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import { VideoAmp } from '../../components/icons/videoamp'

import { AppBar, AppBarItem, Button, ContentPadding, IconButton, Modal } from '@preamp/core';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Book, Organization, Plan, Power, Signal, Users } from '@preamp/signal';

import  Dashboard  from './pages/dashboard/dashboard'

import './styles.scss';

const modifyVersionOptions: OptionsType<OptionType> = [
//   { value: 'version3', label: 'Version 3 (Latest)'},
//   { value: 'version2', label: 'Version 2' },
  { value: 'version1', label: 'Version 1' }
];
const modifyPersonaOptions: OptionsType<OptionType> = [
    { value: 'brand', label: 'Brand'},
    { value: 'agency', label: 'Agency / Advertiser' },
    { value: 'sellside', label: 'Sell Side / Network' }
];



const DashboardIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" fillRule="evenodd">
            <path d="M10,2 L3,2 C2.44771525,2 2,2.44771525 2,3 L2,21 C2,21.5522847 2.44771525,22 3,22 L10,22 C10.5522847,22 11,21.5522847 11,21 L11,3 C11,2.44771525 10.5522847,2 10,2 Z M9,4 L9,20 L4,20 L4,4 L9,4 Z" id="Rectangle" ></path>
            <path d="M21,2 L14,2 C13.4477153,2 13,2.44771525 13,3 L13,10 C13,10.5522847 13.4477153,11 14,11 L21,11 C21.5522847,11 22,10.5522847 22,10 L22,3 C22,2.44771525 21.5522847,2 21,2 Z M20,4 L20,9 L15,9 L15,4 L20,4 Z" id="Rectangle"></path>
            <path d="M21,13 L14,13 C13.4477153,13 13,13.4477153 13,14 L13,21 C13,21.5522847 13.4477153,22 14,22 L21,22 C21.5522847,22 22,21.5522847 22,21 L22,14 C22,13.4477153 21.5522847,13 21,13 Z M20,15 L20,20 L15,20 L15,15 L20,15 Z" id="Rectangle"></path>
        </g>
    </svg>
)

function VisionPrototype() {
    const history = useHistory();
    const [version, setVersion] = React.useState(modifyVersionOptions[0]);
    const [isInfoModalOpen, setIsInfoOpenModal] = React.useState<boolean>(false);
    const [navId, setNavId] = React.useState<string>('');
    const [persona, setPersona] = React.useState<string | null>(localStorage.getItem('myPersona'));
    // const [navLocation, setNavLocation] = React.useState(useLocation().pathname);
    const { url } = useRouteMatch();

    // function onVersionChange(e: any): void {
    //     setVersion(e);
    //     console.log(version)
    // }
    // function onPersonaChange(e: any): void {
    //     setPersona(e.value);
    //     history.push(`${url}/dashboard/${persona}`);
    //     console.log(persona)
    // }
    
    const onPersonaChange = (e: any): void => {
        setPersona(e.value);
        localStorage.setItem('myPersona', e.value);
        setIsInfoOpenModal(false);
        // history.push(`${url}/dashboard/${e.value}`)
    };
    const toggleInfoModal = (): void => {
        setIsInfoOpenModal(!isInfoModalOpen);
    };
    function onNavClick(id: string): () => void {
        return (): void => {
            setNavId(id);
            history.push(`${url}/${id}`);
        };
    }
    // function selectedNav(item:string) {
    //     setNavId(item);
    // };
    const locationUrl = useLocation().pathname;

    // const localPersona:string | null = localStorage.getItem('myPersona');
    
    React.useEffect(() => {
        if (persona === ('' || null)) {
            localStorage.setItem('myPersona', 'agency');
            // localPersona = 'agency';
            setPersona('agency')
        }
        
        // if (persona === '') {
        //     setIsInfoOpenModal(true);
        // }
    }, []);
    
return (
  <>
    <PrototypeBar name="VideoAmp Vision Prototype" home="/home">
        {/* <Select
            inlineLabel={false}
            options={modifyVersionOptions}
            defaultValue={modifyVersionOptions[0]}
            onChange={onVersionChange}
            selectType={SelectType.Compact}
            style={{ width: '10rem' }}
        />
        {version.value != 'version1' && (
            <IconButton icon={Information} className="version-info-icon" onClick={toggleInfoModal} />
        )} */}
        <Button onClick={toggleInfoModal}>Settings</Button>
    </PrototypeBar>
    <header className="va-platform-header">
        
    </header>
    <div className="layout-container">
        <nav className="nav-main">
            <AppBar 
                className="proto-app-bar"
                actions={
                    <AppBarItem tooltipTitle="Logout">
                        <Signal icon={Power} size={1.5} />
                    </AppBarItem>
                }
            >
                <ul>
                    {/* <li className="nav-logo">
                        <AppBarItem
                            onClick={onNavClick('dashboard')}
                            href={url}
                        >
                            <Signal icon={VideoAmp} size={2.5} />
                        </AppBarItem>
                    </li> */}
                    <li>
                        <AppBarItem
                            currentItem={navId === 'dashboard'}
                            onClick={onNavClick('dashboard')}
                            tooltipDescription="View the most important info"
                            tooltipTitle="Dashboard"
                        >
                            <Signal icon={DashboardIcon} size={1.5} />
                        </AppBarItem>
                    </li>
                    <li>
                        <AppBarItem
                            currentItem={navId === 'campaigns'}
                            onClick={onNavClick('campaigns')}
                            tooltipDescription="Create and manage your campaigns"
                            tooltipTitle="Campaigns"
                        >
                            <Signal icon={Plan} size={1.5} />
                        </AppBarItem>
                    </li>
                    <li>
                        <AppBarItem
                            currentItem={navId === 'audience'}
                            onClick={onNavClick('audience')}
                            tooltipDescription="Create and discover advanced audiences"
                            tooltipTitle="Audience Management"
                        >
                            <Signal icon={Users} size={1.5} />
                        </AppBarItem>
                    </li>
                    <li>
                        <AppBarItem
                            currentItem={navId === 'library'}
                            onClick={onNavClick('library')}
                            tooltipDescription="Store and manage your library of assets and pixels"
                            tooltipTitle="Library"
                        >
                            <Signal icon={Book} size={1.5} />
                        </AppBarItem>
                    </li>
                    <li>
                        <AppBarItem
                            currentItem={navId === 'org'}
                            onClick={onNavClick('org')}
                            tooltipDescription="Onboard and manage your organization"
                            tooltipTitle="Organization"
                        >
                            <Signal icon={Organization} size={1.5} />
                        </AppBarItem>
                    </li>
                </ul>
            </AppBar>
        </nav>
        <div className="layout-content">
            <Switch>
                <Route exact path={url} >
                    <Dashboard persona={persona}  />
                </Route>
                <Route exact path={`${url}/dashboard`}>
                    <Dashboard persona={persona}  />
                </Route>
                <Route path={`${url}/campaigns`}>
                    <h1>Campaigns</h1>
                </Route>
                <Route path={`${url}/audience`}>
                    <h1>Audience Management</h1>
                </Route>
                <Route path={`${url}/library`}>
                    <h1>Library</h1>
                </Route>
                <Route path={`${url}/org`}>
                    <h1>Organization</h1>
                </Route>
            </Switch>
        </div>
    </div>

    <Modal
        contentPadding={ContentPadding.Slim}
        isOpen={isInfoModalOpen}
        maxHeight={'500px'}
        maxWidth={'500px'}
        onHide={toggleInfoModal}
        title="Vision Prototype"
        description={version.label}
    >
        <div>
            <p className="mb-8">
                UX vision for the VideoAmp platform. Please select a persona to see the view of that type of user.
            </p>
            <Select
                inlineLabel={false}
                options={modifyPersonaOptions}
                defaultValue={persona === 'brand' ? modifyPersonaOptions[0] : persona === 'agency' ? modifyPersonaOptions[1] : modifyPersonaOptions[2]}
                onChange={onPersonaChange}
                style={{ width: '14rem' }}
                placeholder="Select a Persona"
                label="Choose a Persona"
            />
        </div>
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
    
  </>
)
};

export default VisionPrototype;