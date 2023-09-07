import React, { HTMLInputTypeAttribute } from 'react';
import cx from 'classnames';
import { Button, ButtonTheme, Card, CardTheme, IconButton, Notification, NotificationTheme, Search, TextField, TextFieldType, Tooltip, TooltipPosition } from '@preamp/core';
import { DropdownButton, OptionsType, OptionType, Select, SelectType, ValueType } from '@preamp/select';

import { Audiences, ChevronDown, Measure, Plan,  Signal } from '@preamp/signal';

import { VideoAmp } from '../../../components/icons/videoamp'
import {
    useHistory,
    useRouteMatch
  } from "react-router-dom";

import { dataOptions } from '../data-options';
import { easymodeInitialData } from '../initial-data';
import { dataIcon } from '../data-icon';

const allDataCreateOptions: OptionType[] = [
    { label: 'Create a Pixel', value: 'pixels' },
    { label: 'Create a Creative', value: 'creatives' }
];

const favoritesData = easymodeInitialData.slice(1, 5);
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

function Dashboard(props: any) {
    const [client, setClient] = React.useState<string>('VideoAmp Media Group');
    const [quickActions, setQuickActions] = React.useState<string>('5');
    const [navCollapsed, setNavCollapsed] = React.useState<boolean>(false);
    const [smallMenu, setSmallMenu] = React.useState<boolean>(false);
    const [fontValue, setFontValue] = React.useState<string>('52px');
    const history = useHistory();
    const { url } = useRouteMatch();

    function actionNumber(event?: React.ChangeEvent<HTMLInputElement>): void {
        if(event) {
            setQuickActions(event.currentTarget.value);
        }
    }

    function inlineNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setClient(event.currentTarget.value);
        }
    }
    
    
    return (
        <div className="dashboard-container">
            <div className="va-nav-bar">
            <div className="top-bar-left">
                <VideoAmp /> {client}
            </div>
            <div className="top-bar-right">
                <div className="user-icon"></div>
            </div>
        </div>
            
            <div className={cx(
                    "nav-bar", 
                    {"nav-bar--collapsed" : navCollapsed}, 
                    {"nav-bar-option2": props.navVersion === 'option2'}, 
                    {"nav-bar-option3": props.navVersion === 'option3'}
                )}>
                <div className={cx("nav-items-container", {"nav-items-container--collapsed" : navCollapsed})}>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Dashboard</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                    <div className="nav-item nav-item-selected">
                            <div className="nav-item-content">
                                <Signal icon={DashboardIcon} size={1.5} />
                                <div className="nav-item-label">Dashboard</div>
                            </div>
                    </div>
                        </Tooltip>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Audiences</span><span className="nav-item-sub-label">Create and discover advanced audiences.</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                    <div className="nav-item">
                            <div className="nav-item-content">
                            <Signal icon={AudiencesIcon} size={1.5} />
                            <div className="nav-item-label">Audiences </div>
                            </div>
                    </div>
                        </Tooltip>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Plan</span><span className="nav-item-sub-label">Maximze the effectiveness of your potential investment.</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                    <div className="nav-item">
                            <div className="nav-item-content">
                                <Signal icon={Plan} size={1.5} />
                                <div className="nav-item-label">Plan</div>
                            </div>
                    </div>
                        </Tooltip>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Measure</span><span className="nav-item-sub-label">Measure and optimize your investment.</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                    <div className="nav-item">
                            <div className="nav-item-content">
                                <Signal icon={Measure} size={1.5} />
                                <div className="nav-item-label">Measure</div>
                            </div>
                    </div>
                        </Tooltip>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Reports</span><span className="nav-item-sub-label">Analyze data from your investments.</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                    <div className="nav-item">
                            <div className="nav-item-content">
                                <Signal icon={FileIcon} size={1.5} />
                                <div className="nav-item-label">Reports</div>
                            </div>
                    </div>
                        </Tooltip>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Data Management</span><span className="nav-item-sub-label">Store and manage your data assets.</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                    <div className="nav-item">
                            <div className="nav-item-content">
                                <Signal icon={DatabaseIcon} size={1.5} />
                                <div className="nav-item-label">Data Management</div>
                            </div>
                    </div>
                        </Tooltip>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Settings</span><span className="nav-item-sub-label">Edit your settings.</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                    <div className="nav-item">
                            <div className="nav-item-content">
                                <Signal icon={GearIcon} size={1.5} />
                                <div className="nav-item-label">Settings</div>
                            </div>
                    </div>
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
            </div>
            <div className="dashboard-content">
                <div className="content-header">
                    <h1 className='page-title'>{client}</h1>
                    <div className='quick-actions-container'> 
                        {parseInt(quickActions) > 0 && (
                            <div className='quick-actions'>
                                <div className='header-action-dummy-btn'>Create</div>
                            </div> 
                        )}  

                        {parseInt(quickActions) > 1 && (
                            <div className={cx('quick-actions', {'quick-actions-full' : parseInt(quickActions) > 2})}>
                                <div className='header-action-dummy-btn'>Plan Upfronts</div>
                            </div> 
                        )}  
                        {parseInt(quickActions) > 2 && (
                            <div className='quick-actions quick-actions-full'>
                                <div className='header-action-dummy-btn'>Measure a Baseline</div>
                            </div> 
                        )}  
                        {parseInt(quickActions) > 3 && (
                            <div className='quick-actions quick-actions-full'>
                                <div className='header-action-dummy-btn'>Design an Audience</div>
                            </div> 
                        )}  
                        {parseInt(quickActions) > 4 && (
                            <div className='quick-actions quick-actions-full'>
                                <div className='header-action-dummy-btn'>Measure a Campaign</div>
                            </div> 
                        )}  

                        {parseInt(quickActions) > 2 && (
                            <>
                                <div className='quick-actions quick-actions-small'>
                                    <button className='header-action-dummy-btn' onClick={(): void => setSmallMenu(!smallMenu)}>Quick Actions</button>  

                                    {smallMenu && (
                                        <div className='quick-actions-small-menu' onClick={(): void => setSmallMenu(!smallMenu)}>
                                            {parseInt(quickActions) > 1 && <div className='small-menu-item'>Plan Upfronts</div> }
                                            {parseInt(quickActions) > 2 && <div className='small-menu-item'>Measure a Baseline</div> }
                                            {parseInt(quickActions) > 3 && <div className='small-menu-item'>Design an Audience</div> }
                                            {parseInt(quickActions) > 4 && <div className='small-menu-item'>Measure a Campaign</div> }
                                        </div>
                                    )}  
                                </div>
                            </>
                        )

                        }
                    </div>
                </div>
                <div className="content-main">
                    {/* <TextField label="Change the Title"
                        value={client}
                        onChange={(): void => inlineNameChange()}
                    /> */}
                    <p className='mb-4'>Gray boxes above are included to show the size of the elements with the current styles. Not intended as actual visuals. <br />
                        Adjust the files below to see how the elements act with different sized title and number of quick actions available.
                    </p>
                    <p className='mb-4'>
                        The left nav is also collapsible to give a better sense of space used by the header components (hover and click the arrow to collapse).
                    </p>
                    <p className='mb-8'>
                        When the screen is less than 1024px, all quick actions except for Create will be combined into a dropdown menu.
                    </p>
                    <TextField 
                        className="control-textfield" 
                        onChange={inlineNameChange} 
                        value={client} 
                        label="Page title:"
                    ></TextField>
                    <TextField 
                        label="Number of Quick Action items:"
                        className="control-textfield" 
                        onChange={actionNumber} 
                        value={quickActions}
                        max={'5'}
                        min={'0'}
                        textFieldType={TextFieldType.Number} 
                    ></TextField>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;