import React from 'react';
import cx from 'classnames';
import { Button, ButtonTheme, Card, CardTheme, IconButton, Notification, NotificationTheme, Search, Tooltip, TooltipPosition } from '@preamp/core';
import { DropdownButton, OptionsType, OptionType, Select, SelectType, ValueType } from '@preamp/select';

import { Audiences, ChevronDown, Measure, Plan,  Signal } from '@preamp/signal';
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
const AddSquareIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M12 7a1 1 0 0 1 .993.883L13 8v8a1 1 0 0 1-1.993.117L11 16V8a1 1 0 0 1 1-1Z"/><path d="M16 11a1 1 0 0 1 .117 1.993L16 13H8a1 1 0 0 1-.117-1.993L8 11h8Z"/></g></svg>
)

function Dashboard(props: any) {
    const [dataType, setData] = React.useState<string | null>(localStorage.getItem('dataType') || 'alldata');
    const [navOption, setNavOption] = React.useState<string | null>(localStorage.getItem('navOption') || 'option1');
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
    function onCreateSetData(id: string, type: string): () => void {
        return (): void => {
            history.push(`${url}/${id}`);
            localStorage.setItem('dataType', type);
        };
    }
    function notificationHide(): void {
        setNotificationState({
            ...notificationState,
            notificationOpen: false
        });
    }
    function allDataCreateChange(e: ValueType<OptionType>): void {
        console.log(e.value);
    }
    
    React.useEffect(() => {
        if(dataType === '' || dataType === null) {
            localStorage.setItem('dataType', 'alldata');
        }
        if(navOption === '' || navOption === null) {
            localStorage.setItem('navOption', 'option1');
        }
        if(newNotification === 'new') {
            localStorage.setItem('newNotification', '');
            setNotificationState({
                ...notificationState,
                notificationOpen: true
            });
        } 
        localStorage.setItem('dataType', 'alldata');
    }, []);
    return (
        <>
            <div className="dashboard-content page-content">
                <div className="content-header">
                    <div className='content-header-left'>
                        <div className='content-header-label'>Carat</div>
                        <h1>{props.company}</h1>
                    </div>
                    <div className='content-header-right'>
                        {/* <DropdownButton
                            className="all-data-create-btn"
                            buttonProps={{
                                theme: ButtonTheme.Secondary
                            }}
                            dataUI="all-data-create"
                            onChange={allDataCreateChange}
                            options={allDataCreateOptions}
                        >Create</DropdownButton> */}
                        <button className='header-action-button'>
                            <Signal icon={AudiencesIcon} size="14px" />
                            Design an Audience
                            <div className='button-line'></div>
                        </button>
                        <button className='header-action-button'>
                            <Signal icon={Measure} size="14px" />
                            Monitor Campaigns
                            <div className='button-line'></div>
                        </button>
                        <button className='header-action-button'>
                            <Signal icon={Measure} size="14px" />
                            Plan New Campaigns
                            <div className='button-line'></div>
                        </button>
                        <button className='header-action-button'>
                            <Signal icon={Plan} size="14px" />
                            Plan 2022 Upfronts
                            <div className='button-line'></div>
                        </button>
                        <button className='header-action-button'>
                            <Signal icon={AddSquareIcon} size="14px" />
                            Create
                            <div className='button-line'></div>
                        </button>
                    </div>
                    
                </div>
                <div className="content-main">
                    <div className="content-main-left">
                        <div className="dashboard-box-container">
                            <div className="dashboard-box">
                                <h3>Campaign Management</h3>
                                <div className='campaign-dv-container'>
                                    {props.company === "Subway" && (
                                        <svg className="campaign-dv" viewBox="0 0 374 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="a"><stop stop-color="#E4B0FD" offset="0%"/><stop stop-color="#5F8BFF" offset="100%"/></linearGradient><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="b"><stop stop-color="#6E8FFF" offset="0%"/><stop stop-color="#13F0FB" offset="100%"/></linearGradient></defs><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 21.403C18.218 21.403 20.769 0 36.801 0c16.032 0 14.575 10.808 36.437 10.808s19.675 10.595 36.072 10.595c16.396 0 25.141-10.807 36.8-10.807 11.66 0 14.94 10.596 36.073 10.596 21.133 0 13.482 21.403 36.801 21.403" stroke="url(#a)" transform="translate(8 39)"/><path d="M218.393 42.863c11.615 0 13.241-41.883 23.462-41.883 10.22 0 9.291 21.149 23.229 21.149 13.937 0 12.543 20.734 22.997 20.734 10.453 0 16.028-21.149 23.46-21.149 7.434 0 9.525 20.734 22.998 20.734S343.133 84.331 358 84.331" stroke="url(#b)" transform="matrix(1 0 0 -1 8 124.311)"/></g></svg>
                                    )}
                                    {props.company === "General Motors" && (
                                        <svg className="campaign-dv" viewBox="0 0 374 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="26.548%" y1="100%" x2="82.923%" y2="100%" id="a"><stop stop-color="#5C93CC" offset="0%"/><stop stop-color="#000082" offset="100%"/></linearGradient><linearGradient x1="16.625%" y1="100%" x2="83.087%" y2="100%" id="b"><stop stop-color="#000082" offset="0%"/><stop stop-color="#92E5FF" offset="100%"/></linearGradient></defs><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 21.403C18.218 21.403 20.769 0 36.801 0c16.032 0 14.575 10.808 36.437 10.808s19.675 10.595 36.072 10.595c16.396 0 25.141-10.807 36.8-10.807 11.66 0 14.94 10.596 36.073 10.596 21.133 0 13.482 21.403 36.801 21.403" stroke="url(#a)" transform="translate(8 39)"/><path d="M218.393 43.36c11.615 0 13.241-41.38 23.462-41.38 10.22 0 9.291 20.895 23.229 20.895 13.937 0 12.543 20.485 22.997 20.485 10.453 0 16.028-20.894 23.46-20.894 7.434 0 9.525 20.485 22.998 20.485S343.133 84.33 358 84.33" stroke="url(#b)" transform="matrix(1 0 0 -1 8 125.311)"/></g></svg>
                                    )}
                                    {/* <svg className="campaign-dv" viewBox="0 0 374 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="a"><stop stop-color="#E4B0FD" offset="0%"/><stop stop-color="#5F8BFF" offset="100%"/></linearGradient><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="b"><stop stop-color="#6E8FFF" offset="0%"/><stop stop-color="#13F0FB" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke-width="2"><path d="M10 54.403C28.218 54.403 30.769 33 46.801 33c16.032 0 14.575 10.808 36.437 10.808s19.675 10.595 36.072 10.595c16.396 0 25.141-10.807 36.8-10.807 11.66 0 14.94 10.596 36.073 10.596 21.133 0 13.482 21.403 36.801 21.403" stroke="url(#a)"/><path d="M228.393 75.863c11.615 0 13.241-41.883 23.462-41.883 10.22 0 9.291 21.149 23.229 21.149 13.937 0 12.543 20.734 22.997 20.734 10.453 0 16.028-21.149 23.46-21.149 7.434 0 9.525 20.734 22.998 20.734s8.594 41.883 23.461 41.883" stroke="url(#b)" transform="matrix(1 0 0 -1 0 151.311)"/></g></svg>     */}
                                </div>
                                <div className='campaign-box-footer'>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                </div>
                            </div>
                            <div className="dashboard-box">
                                <h3>Upfront Planning</h3>
                                <div className="upfront-row">
                                    <div className="upfront-circle filled"></div>
                                    <div className="row-content"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle "></div>
                                    <div className="row-content"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard-mock-table'>
                            <div className='mock-section-header'>
                                <div className='mock-header-left'>
                                    <div className='mock-action-item'></div>
                                </div>
                                <div className='mock-header-right'>
                                    <div className='mock-action-item'></div>
                                    <div className='mock-action-item'></div>
                                    <div className='mock-action-item'></div>
                                </div>
                            </div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                        </div>
                        <div className="mock-footer">
                            <div className='mock-action-item half'></div>
                            <div className='mock-action-item half'></div>
                            <div className='mock-action-item'></div>
                        </div>
                        
                    </div>
                    <div className="content-main-right">
                        <div className='content-right-section'>
                            <div className="mock-section-header">
                                <div className="mock-header-left">
                                    <h4>Recommendations</h4>
                                </div>
                                <div className="mock-header-right">
                                    <div className='mock-action-item'></div>
                                </div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                        </div>
                        <div className='content-right-section'>
                            <div className="mock-section-header">
                                <div className="mock-header-left">
                                    <h4>Recent Activity</h4>
                                </div>
                                <div className="mock-header-right">
                                    <div className='mock-action-item'></div>
                                </div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                        </div>
                        
                        
                        
                    </div>

                </div>
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
        </>
    )
}

export default Dashboard;