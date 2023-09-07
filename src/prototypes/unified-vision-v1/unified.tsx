import React from 'react';
import cx from 'classnames';
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

import { AppBar, AppBarItem, Button, ContentPadding, IconButton, Modal, Tooltip, TooltipPosition } from '@preamp/core';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { ChevronDown, Measure, Book, Organization, Plan, Power, Signal, Users } from '@preamp/signal';


import  { Dashboard } from './pages/dashboard/dashboard';
import { PlanBudget } from './pages/plan/plan';
import { Campaigns } from './pages/campaigns/campaigns';
import { Audiences } from './pages/audiences/audiences';
import { Data } from './pages/data/data';
import { Reports } from './pages/reports/reports';
import { Research } from './pages/research/research';
import { Org } from './pages/org/org';

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




const DashboardIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.25a.75.75 0 0 1 .743.648L10.75 3v18a.75.75 0 0 1-.648.743L10 21.75H3a.75.75 0 0 1-.743-.648L2.25 21V3a.75.75 0 0 1 .648-.743L3 2.25h7Zm11 11a.75.75 0 0 1 .743.648l.007.102v7a.75.75 0 0 1-.648.743L21 21.75h-7a.75.75 0 0 1-.743-.648L13.25 21v-7a.75.75 0 0 1 .648-.743L14 13.25h7ZM9.25 3.75h-5.5v16.5h5.5V3.75Zm11 11h-5.5v5.5h5.5v-5.5ZM21 2.25a.75.75 0 0 1 .743.648L21.75 3v7a.75.75 0 0 1-.648.743L21 10.75h-7a.75.75 0 0 1-.743-.648L13.25 10V3a.75.75 0 0 1 .648-.743L14 2.25h7Zm-.75 1.5h-5.5v5.5h5.5v-5.5Z" fillRule="nonzero"/></svg>
)
const AudiencesIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M8.896 2.25a4.698 4.698 0 1 0 0 9.396 4.698 4.698 0 0 0 0-9.396Zm0 1.5a3.198 3.198 0 1 1 0 6.396 3.198 3.198 0 0 1 0-6.396ZM12.844 14.094a4.698 4.698 0 0 1 4.691 4.45l.007.248v1.975a.75.75 0 0 1-1.493.102l-.007-.102v-1.975a3.198 3.198 0 0 0-2.987-3.191l-.211-.007H4.948a3.198 3.198 0 0 0-3.193 3.017l-.005.181v1.974a.75.75 0 0 1-1.493.102l-.007-.102v-1.974a4.698 4.698 0 0 1 4.483-4.693l.215-.005h7.896Zm7.098.152a4.698 4.698 0 0 1 3.517 4.326l.005.22v1.975a.75.75 0 0 1-1.493.102l-.007-.102v-1.975c0-1.457-.987-2.73-2.398-3.094a.75.75 0 1 1 .376-1.452ZM15.99 2.4a4.698 4.698 0 0 1 0 9.104.75.75 0 1 1-.372-1.454 3.198 3.198 0 0 0 0-6.196.75.75 0 1 1 .372-1.454Z"/></g></svg>
)
const DatabaseIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 1c-1.299 0-2.54.083-3.679.242l-.56.086C4.357 1.896 2 3.18 2 5c0 1.819 2.358 3.104 5.76 3.672l.561.086C9.46 8.918 10.701 9 12 9s2.54-.083 3.679-.242l.56-.086C19.643 8.104 22 6.82 22 5c0-1.819-2.358-3.104-5.76-3.672l-.561-.086A26.78 26.78 0 0 0 12 1Zm-.307 2.002L12 3c.617 0 1.217.023 1.794.065l.568.049.551.06c.452.054.883.12 1.29.195l.477.093.451.1.425.108C19.063 4.073 20 4.587 20 5c0 .413-.937.927-2.444 1.33l-.425.107-.451.101-.477.093c-.407.075-.838.14-1.29.195l-.55.06-.569.049a24.638 24.638 0 0 1-3.588 0l-.568-.049-.551-.06c-.452-.054-.883-.12-1.29-.195l-.477-.093-.451-.1-.425-.108C4.937 5.927 4 5.413 4 5c0-.413.937-.927 2.444-1.33l.425-.107.451-.101.477-.093c.407-.075.838-.14 1.29-.195l.55-.06.569-.049c.48-.035.978-.057 1.487-.063ZM21 11a1 1 0 0 1 1 1c0 2.069-3.023 3.443-7.186 3.864l-.602.053-.616.04a29.492 29.492 0 0 1-3.192 0l-.616-.04-.602-.053C5.023 15.443 2 14.069 2 12a1 1 0 0 1 1.993-.117L4 12c0 .227.277.483.773.734l.266.125.3.123.164.061.35.119.38.115c.265.075.548.146.849.213l.464.097.488.09.511.08c.26.037.53.071.806.101l.56.054.579.042a24.952 24.952 0 0 0 3.02 0l.578-.042.561-.054c.276-.03.545-.064.806-.101l.511-.08.488-.09.464-.097c.301-.067.584-.138.848-.213l.381-.115.35-.119.163-.06.301-.124.266-.125c.496-.251.773-.507.773-.734a1 1 0 0 1 1-1Z"/><path d="M21 4a1 1 0 0 1 .993.883L22 5v14c0 2.069-3.023 3.443-7.186 3.864l-.602.053-.616.04a29.492 29.492 0 0 1-3.192 0l-.616-.04-.602-.053c-4.064-.411-7.041-1.73-7.18-3.717L2 19V5a1 1 0 0 1 1.993-.117L4 5v14c0 .227.277.483.773.734l.266.125.3.123.164.061.35.119.38.115c.265.075.548.146.849.213l.464.097.488.09.511.08c.26.037.53.071.806.101l.56.054.579.042a24.952 24.952 0 0 0 3.02 0l.578-.042.561-.054c.276-.03.545-.064.806-.101l.511-.08.488-.09.464-.097c.301-.067.584-.138.848-.213l.381-.115.35-.119.163-.06.301-.124.266-.125c.455-.23.725-.465.767-.677L20 19V5a1 1 0 0 1 1-1Z"/></g></svg>
)
const FileIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M14 1H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-6-6A1 1 0 0 0 14 1Zm-.415 2L19 8.415V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.585Z"/><path d="M14 1a1 1 0 0 1 .993.883L15 2v5h5a1 1 0 0 1 .993.883L21 8a1 1 0 0 1-.883.993L20 9h-6a1 1 0 0 1-.993-.883L13 8V2a1 1 0 0 1 1-1ZM16 12a1 1 0 0 1 .117 1.993L16 14H8a1 1 0 0 1-.117-1.993L8 12h8ZM16 16a1 1 0 0 1 .117 1.993L16 18H8a1 1 0 0 1-.117-1.993L8 16h8ZM10 8a1 1 0 0 1 .117 1.993L10 10H8a1 1 0 0 1-.117-1.993L8 8h2Z"/></g></svg>
)
const GearIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/><path d="M12 0a3 3 0 0 0-3 3v.17l-.007.094a.649.649 0 0 1-.225.397l-.062.044-.06.013a1 1 0 0 0-.13.047.65.65 0 0 1-.717-.13l-.052-.052a3 3 0 0 0-5.124 2.122 3 3 0 0 0 .745 1.978l.195.204c.178.182.23.466.122.71-.116.308-.352.477-.618.483H3a3 3 0 0 0 0 6h.17a.649.649 0 0 1 .59.394.654.654 0 0 1-.125.727l-.052.052a3 3 0 0 0 2.122 5.124 3 3 0 0 0 1.978-.745l.204-.195a.647.647 0 0 1 .71-.122c.308.116.477.352.483.618V21a3 3 0 0 0 6 0v-.17a.649.649 0 0 1 .394-.59.654.654 0 0 1 .727.125l.052.052a3 3 0 0 0 5.124-2.122 3 3 0 0 0-.745-1.978l-.195-.204a.647.647 0 0 1-.122-.71.654.654 0 0 1 .599-.403H21a3 3 0 0 0 0-6h-.17l-.094-.007a.649.649 0 0 1-.397-.225l-.045-.062-.012-.06a1 1 0 0 0-.047-.13.65.65 0 0 1 .13-.717l.052-.052a3 3 0 0 0-2.122-5.124 3 3 0 0 0-1.978.745l-.204.195a.647.647 0 0 1-.71.122.654.654 0 0 1-.403-.599V3a3 3 0 0 0-3-3Zm0 2a1 1 0 0 1 1 1v.09a2.651 2.651 0 0 0 1.606 2.43 2.646 2.646 0 0 0 2.913-.535l.068-.068a1 1 0 1 1 1.416 1.415l-.06.06-.13.143a2.654 2.654 0 0 0-.536 2.433L18.32 9a1 1 0 0 0 .08.394A2.65 2.65 0 0 0 20.827 11H21a1 1 0 0 1 0 2h-.09a2.651 2.651 0 0 0-2.43 1.606 2.646 2.646 0 0 0 .535 2.913l.068.068a1 1 0 1 1-1.415 1.416l-.06-.06a2.654 2.654 0 0 0-2.932-.538 2.646 2.646 0 0 0-1.596 2.421V21a1 1 0 0 1-2 0v-.09a2.66 2.66 0 0 0-1.558-2.376l-.177-.073c-.932-.413-2.09-.203-2.864.554l-.068.068a1 1 0 1 1-1.416-1.415l.06-.06c.765-.783.975-1.94.538-2.932a2.646 2.646 0 0 0-2.421-1.596H3a1 1 0 0 1 0-2h.09a2.66 2.66 0 0 0 2.376-1.558l.073-.177c.413-.932.203-2.09-.554-2.864l-.068-.068a1 1 0 1 1 1.415-1.416l.06.06.143.13a2.654 2.654 0 0 0 2.433.536L9 5.68a1 1 0 0 0 .394-.08A2.65 2.65 0 0 0 11 3.173V3a1 1 0 0 1 1-1Z"/></g></svg>
)

function UnifiedVisionPrototype() {
    const [version, setVersion] = React.useState(modifyVersionOptions[0]);
    const [isInfoModalOpen, setIsInfoOpenModal] = React.useState<boolean>(false);
    const [navId, setNavId] = React.useState<string>('dashboard');
    const [persona, setPersona] = React.useState<string | null>(localStorage.getItem('myPersona'));
    const [navCollapsed, setNavCollapsed] = React.useState<boolean>(false);
    // const [navLocation, setNavLocation] = React.useState(useLocation().pathname);
    const { url } = useRouteMatch();
    
    const history = useHistory();
    function onNavClick(id: string): () => void {
        return (): void => {
            setNavId(id);
            history.push(`${url}/${id}`);
        };
    }
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
    <div className="layout-container unified-vision-container">
        <nav className={cx(
                    "nav-bar nav-main", 
                    {"nav-bar--collapsed" : navCollapsed}, 
                    // {"nav-bar-option2": props.navVersion === 'option2'}, 
                    // {"nav-bar-option3": props.navVersion === 'option3'}
                )}>
                <div className={cx("nav-items-container", {"nav-items-container--collapsed" : navCollapsed})}>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Dashboard</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "dashboard" })} role="button" onClick={onNavClick('dashboard')} >
                                <div className="nav-item-content">
                                    <Signal icon={DashboardIcon} size={1.5} />
                                    <div className="nav-item-label">Dashboard</div>
                                </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Budget &amp; Plan</span><span className="nav-item-sub-label">Maximze the effectiveness of your potential investment.</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "plan" })}  role="button" onClick={onNavClick('plan')}>
                                <div className="nav-item-content">
                                    <Signal icon={Plan} size={1.5} />
                                    <div className="nav-item-label">Budget &amp; Plan</div>
                                </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Campaigns</span><span className="nav-item-sub-label">Manage your campaigns and media plans.</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "campaigns" })} role="button" onClick={onNavClick('campaigns')}>
                                <div className="nav-item-content">
                                    <Signal icon={Plan} size={1.5} />
                                    <div className="nav-item-label">Campaigns</div>
                                </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Audiences</span><span className="nav-item-sub-label">Create and discover advanced audiences.</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "audiences" })} role="button" onClick={onNavClick('audiences')}>
                                <div className="nav-item-content">
                                <Signal icon={AudiencesIcon} size={1.5} />
                                <div className="nav-item-label">Audiences </div>
                                </div>
                        </a>
                    </Tooltip>
                    
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Research &amp; Relationships</span><span className="nav-item-sub-label">Research &amp; Relationships</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "research" })} role="button" onClick={onNavClick('research')}>
                            <div className="nav-item-content">
                                <Signal icon={Measure} size={1.5} />
                                <div className="nav-item-label">Research &amp; Relationships</div>
                            </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Data Management</span><span className="nav-item-sub-label">Store and manage your data assets.</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "data" })} role="button" onClick={onNavClick('data')}>
                            <div className="nav-item-content">
                                <Signal icon={DatabaseIcon} size={1.5} />
                                <div className="nav-item-label">Data Management</div>
                            </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Reports</span><span className="nav-item-sub-label">Analyze data from your investments.</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "reports" })} role="button" onClick={onNavClick('reports')}>
                            <div className="nav-item-content">
                                <Signal icon={FileIcon} size={1.5} />
                                <div className="nav-item-label">Reports</div>
                            </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Organization</span><span className="nav-item-sub-label">Edit your settings.</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "org" })} role="button" onClick={onNavClick('org')}>
                            <div className="nav-item-content">
                                <Signal icon={GearIcon} size={1.5} />
                                <div className="nav-item-label">Organization</div>
                            </div>
                        </a>
                    </Tooltip>
                
                    <div className={cx("collapse-button-container", {"collapse-button-container-expand": navCollapsed})}>
                    <Tooltip
                        content={navCollapsed ? "Expand" : "Collapse"}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <IconButton className={cx("collapse-icon", {"icon-expand" : navCollapsed})} icon={ChevronDown} onClick={(): void => setNavCollapsed(!navCollapsed)} />
                    </Tooltip>
                </div>
            </div>
        </nav>
        <div className="layout-content">
            <Switch>
                <Route exact path={url} >
                    <Dashboard selectedNav={setNavId} />
                </Route>
                <Route exact path={`${url}/dashboard`}>
                    <Dashboard selectedNav={setNavId}  />
                </Route>
                <Route path={`${url}/plan`}>
                    <PlanBudget selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/audiences`}>
                    <Audiences selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/campaigns`}>
                    <Campaigns selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/data`}>
                    <Data selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/research`}>
                    <Research selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/reports`}>
                    <Reports selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/org`}>
                    <Org selectedNav={setNavId} />
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

export default UnifiedVisionPrototype;