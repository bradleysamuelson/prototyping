import React from 'react';
import cx from 'classnames';
import { Button, Card, CardTheme, Notification, NotificationTheme, Search } from '@preamp/core';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Edit, Signal } from '@preamp/signal';
import {
    useHistory,
    useRouteMatch
  } from "react-router-dom";

import { dataOptions } from '../data-options';
import { easymodeInitialData } from '../initial-data';
import { dataIcon } from '../data-icon';

// const dataOptions: OptionsType<OptionType> = [
//     { value: 'alldata', label: 'All Data', buttonLabel: 'Add or Create Data'},
//     { value: 'creatives', label: 'Creatives', buttonLabel: 'Add or Create a Creative'},
//     { value: 'pixels', label: 'Pixels', buttonLabel: 'Add or Create a Pixel'},
//     { value: 'offlineconversions', label: 'Offline Conversions', buttonLabel: 'Add or Create Offline Conversion Data'},
//     { value: 'adschedules', label: 'Ad Schedules', buttonLabel: 'Add or Create an Ad Schedule'},
//     { value: 'linearasrun', label: 'Linear As-Run Logs', buttonLabel: 'Add or Create a Linear As-Run Log'},
//     { value: 'linearpostlogs', label: 'Linear Post Logs', buttonLabel: 'Add or Create a Linear Post Log'},
//     { value: 'linearcostdata', label: 'Linear Cost Data', buttonLabel: 'Add or Create Linear Cost Data'},
//     { value: 'digitalcostdata', label: 'Digital Cost Data', buttonLabel: 'Add or Create Digital Cost Data'},
//     { value: 'lineardaypartdefs', label: 'Linear Daypart Definitions', buttonLabel: 'Add or Create Linear Daypart Definitions'},
//     { value: 'advertiserconstraints', label: 'Advertiser Constraints', buttonLabel: 'Add or Create Advertiser Constraints'},
//     { value: 'investmentstrategies', label: 'Investment Strategies', buttonLabel: 'Add or Create an Investment Strategy'},
//     { value: 'externaldatasources', label: 'External Data Sources', buttonLabel: 'Add or Create External Data Sources'}
// ];
const favoritesData = easymodeInitialData.slice(1, 5);

function Dashboard(props: any) {
    const [dataType, setData] = React.useState<string | null>(localStorage.getItem('dataType') || 'alldata');
    const [tabSelected, setTabSelected] = React.useState<number>(1);
    const [requestTabSelected, setRequestTabSelected] = React.useState<number>(2);
    const [activityTabSelected, setActivityTabSelected] = React.useState<number>(1);
    const [newDataItem, setNewDataItem] = React.useState(localStorage.getItem("newPixel") || '');
    const [newCreativeItem, setNewCreativeItem] = React.useState(localStorage.getItem("newCreative") || '');
    const [newNotification, setNewNotification] = React.useState<string | null>(localStorage.getItem('newNotification'));
    const [notificationState, setNotificationState] = React.useState({
        notificationOpen: false,
        notificationTitle: 'Something Happened'
    });
    const onDataChange = (e: any): void => {
        setData(e.value);
        localStorage.setItem('dataType', e.value);
    };
    const history = useHistory();
    const { url } = useRouteMatch();
    function onCreateClick(id: string): () => void {
        return (): void => {
            history.push(`${url}/${id}`);
        };
    }
    function notificationHide(): void {
        setNotificationState({
            ...notificationState,
            notificationOpen: false
        });
    }
    React.useEffect(() => {
        if(dataType === '' || dataType === null) {
            localStorage.setItem('dataType', 'alldata');
        }
        if(newNotification === 'new') {
            localStorage.setItem('newNotification', '');
            setNotificationState({
                ...notificationState,
                notificationOpen: true
            });
        } 
    }, []);
    return (
        <div className="dashboard-container">
            
            <div className="nav-left">
                <div className="nav-item"></div>
                <div className="nav-item nav-item-selected"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
            </div>
            <div className="dashboard-content">
                <div className="content-header">
                    <Select
                        inlineLabel={false}
                        options={dataOptions}
                        defaultValue={dataOptions[dataOptions.map((o:any) => o.value).indexOf(dataType)]}
                        onChange={onDataChange}
                        style={{ width: '14rem' }}
                        label="Data Management"
                        selectType={SelectType.LinkLarge}
                    />
                    {dataType === 'alldata' && (
                        <div>
                            <Button onClick={onCreateClick('create')}>Add or Create Data</Button>
                        </div>
                    )}
                    {dataType != 'alldata' && (
                        <>
        {                   dataOptions.map((option:any, index: number) => (
                                <>
                                    {dataType === option.value && (
                                        <Button 
                                            key={index} 
                                            dataUI={option.label} 
                                            onClick={onCreateClick('create')} 
                                            disabled={(dataType != 'pixels' && dataType != 'creatives')}>
                                            {option.buttonLabel}
                                        </Button>
                                    )}  
                                </>
                            ))}
                        </>
                    )}
                    
                    
                    {/* {dataType === 'pixels' && (
                        <div>
                            <Button onClick={onCreateClick('create-pixel')}>Add or Create a Pixel</Button>
                        </div>
                    )} */}
                </div>
                <div className="content-main">
                    <div className="content-main-left">
                        <div className="tabs-container">
                            <button 
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': tabSelected === 1}
                                )}
                                onClick={():void => setTabSelected(1)}>
                                    My Data
                            </button>
                            <button
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': tabSelected === 2}
                                )} 
                                onClick={():void => setTabSelected(2)}>
                                    Data Shared with Me
                            </button>
                        </div>
                        {tabSelected === 1 && (
                            <>
                            <Search
                                id="basic-search"
                                name="basic-search"
                                placeholder="Search"
                            />
                            <table className="my-data-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(newDataItem != '' && (dataType === 'pixels' || dataType === 'alldata')) && (
                                        <tr className="new-item">
                                            <td><Signal icon={dataIcon} /> <a>{(JSON.parse(newDataItem || "[]").pixelName)}</a></td>
                                            <td>
                                                <div className="created-date">{(JSON.parse(newDataItem || "[]").createdDate)}</div>
                                                <div className="created-by">Me</div>
                                            </td>
                                        </tr>
                                    )}
                                    {(newCreativeItem != '' && (dataType === 'creatives' || dataType === 'alldata')) && (
                                        <tr className="new-item">
                                            <td><Signal icon={dataIcon} /> <a>{(JSON.parse(newCreativeItem || "[]").creativeName)}</a></td>
                                            <td>
                                                <div className="created-date">{(JSON.parse(newCreativeItem || "[]").createdDate)}</div>
                                                <div className="created-by">Me</div>
                                            </td>
                                        </tr>
                                    )}
                                    
                                {easymodeInitialData.map((data, index) => (
                                    <tr key={index}>
                                    {(dataType === 'alldata' || dataType === data.datatype) && (
                                        <>
                                        <td><Signal icon={dataIcon} /> <a>{data.name}</a></td>
                                        <td><div className="created-date">{data.created}</div><div className="created-by">{data.createdby}</div></td>
                                        </>
                                    )}
                                    
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                                
                            </>
                        )}
                        {tabSelected === 2 && (
                            <div className="no-data">
                                You have no data shared with you.
                            </div>
                        )}
                        {/* <div>
                            data type: {dataType}
                        </div> */}
                        
                    </div>
                    <div className="content-main-right">
                        <h3>Requests</h3>
                        <div className="tabs-container">
                            <button 
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': requestTabSelected === 1}
                                )}
                                onClick={():void => setRequestTabSelected(1)}>
                                    My Requests
                            </button>
                            <button
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': requestTabSelected === 2}
                                )} 
                                onClick={():void => setRequestTabSelected(2)}>
                                    Partner Requests
                            </button>
                        </div>
                        {requestTabSelected === 1 && (
                            <div className="no-data">
                                You have sent no requests for data to be shared.
                            </div>
                        )}
                        {requestTabSelected === 2 && (
                            <div className="partner-requests-container">
                                <Card theme={CardTheme.White}><strong>NBCU</strong> has requested access to <a>Data_Object</a></Card>
                                <Card theme={CardTheme.White}><strong>Procter &amp; Gamble</strong> has requested access to <a>Data_Object</a></Card>
                            </div>
                        )}
                        <h3>Favorites</h3>
                        <table className="my-data-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Created</th>
                                </tr>
                            </thead>
                            <tbody>
                            {favoritesData.map((data, index) => (
                                <tr key={index}>
                                {(dataType === 'alldata' || dataType === data.datatype) && (
                                    <>
                                    <td><Signal icon={dataIcon} /> <a>{data.name}</a></td>
                                    <td><div className="created-date">{data.created}</div><div className="created-by">{data.createdby}</div></td>
                                    </>
                                )}
                                
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <hr className="mb-8" />
                        <div className="tabs-container">
                            <button 
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': activityTabSelected === 1}
                                )}
                                onClick={():void => setActivityTabSelected(1)}>
                                    Recent Team Activity
                            </button>
                            <button
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': activityTabSelected === 2}
                                )} 
                                onClick={():void => setActivityTabSelected(2)}>
                                    My Recent Activity
                            </button>
                        </div>
                        {activityTabSelected === 1 && (
                            <div className="timeline-container">
                                {(dataType === 'alldata' || dataType === 'pixels') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">30 seconds ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Edited</strong> <a>Pixel Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Alexis Rose</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'creatives') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">15 minutes ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Edited</strong> <a>Creative Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Johnny Rose</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'adschedules') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">4 hours ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Created</strong> <a>Ad Schedule Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Rolland Schitt</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'pixels') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">6 hours ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Edited</strong> <a>Pixel Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'pixels') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">7 hours ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Edited</strong> <a>Another Pixel Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'advertiserconstraints') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">8 hours ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Edited</strong> <a>Constraint Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Ronnie Lee</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'adschedules') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">1 day ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Created</strong> <a>Ad Schedule Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'offlineconversions') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">2 days ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Created</strong> <a>Offline Conversion Data Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Alexis Rose</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'pixels') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">2 days ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Edited</strong> <a>Pixel Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                                </div>
                                )}
                                {(dataType === 'alldata' || dataType === 'offlineconversions') && (
                                <div className="timeline-line">
                                    <div className="timeline-left">
                                        <span className="time">2 days ago</span> <Signal icon={dataIcon} /> 
                                        <span className="timeline-action"><strong>Created</strong> <a>Offline Conversion Data Name</a></span>
                                    </div>
                                    <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                                </div>
                                )}
                            </div>
                        )}
                        {activityTabSelected === 2 && (
                            <div className="timeline-container">
                            {(dataType === 'alldata' || dataType === 'pixels') && (
                            <div className="timeline-line">
                                <div className="timeline-left">
                                    <span className="time">6 hours ago</span> <Signal icon={dataIcon} /> 
                                    <span className="timeline-action"><strong>Edited</strong> <a>Pixel Name</a></span>
                                </div>
                                <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                            </div>
                            )}
                            {(dataType === 'alldata' || dataType === 'pixels') && (
                            <div className="timeline-line">
                                <div className="timeline-left">
                                    <span className="time">7 hours ago</span> <Signal icon={dataIcon} /> 
                                    <span className="timeline-action"><strong>Edited</strong> <a>Another Pixel Name</a></span>
                                </div>
                                <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                            </div>
                            )}
                            {(dataType === 'alldata' || dataType === 'adschedules') && (
                            <div className="timeline-line">
                                <div className="timeline-left">
                                    <span className="time">1 day ago</span> <Signal icon={dataIcon} /> 
                                    <span className="timeline-action"><strong>Created</strong> <a>Ad Schedule Name</a></span>
                                </div>
                                <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                            </div>
                            )}
                            {(dataType === 'alldata' || dataType === 'pixels') && (
                            <div className="timeline-line">
                                <div className="timeline-left">
                                    <span className="time">2 days ago</span> <Signal icon={dataIcon} /> 
                                    <span className="timeline-action"><strong>Edited</strong> <a>Pixel Name</a></span>
                                </div>
                                <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                            </div>
                            )}
                            {(dataType === 'alldata' || dataType === 'offlineconversions') && (
                            <div className="timeline-line">
                                <div className="timeline-left">
                                    <span className="time">2 days ago</span> <Signal icon={dataIcon} /> 
                                    <span className="timeline-action"><strong>Created</strong> <a>Offline Conversion Data Name</a></span>
                                </div>
                                <div className="timeline-right"><div className="user-avatar"></div><span className="user-name">Me</span></div>
                            </div>
                            )}
                        </div>
                        )}
                    </div>

                </div>
            </div>
            <div className="nav-right">
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
            </div>
            <Notification 
                duration={4000}
                isOpen={notificationState.notificationOpen} 
                title="Success!" 
                theme={NotificationTheme.Success} 
                onHide={notificationHide}>
                    {dataType === 'pixels' && (<>Your new pixel, <strong>{(JSON.parse(newDataItem || "[]").pixelName)}</strong>, has been created!</>)}
                    {dataType === 'creatives' && (<>Your new creative, <strong>{(JSON.parse(newCreativeItem || "[]").creativeName)}</strong>, has been created!</>)}
            </Notification>
        </div>
    )
}

export default Dashboard;