import React from 'react';
import cx from 'classnames';

import { Button, ButtonTheme, Card, CardTheme, ExpandableCard, IconButton, Notification, NotificationTheme, Search, TextField, Tooltip } from '@preamp/core';

import { DropdownButton, OptionsType, OptionType, Select, SelectType, ValueType } from '@preamp/select';
// import { 
//     Audiences, 
//     Dashboard as DashboardIcon, 
//     SvgIcon,
//     MenuItem,
//     Menu } from '@preamp/rev';

import { Add, Check, Clear, ChevronDown, Download, Edit, Signal } from '@preamp/signal';

import {
    useHistory,
    useRouteMatch
  } from "react-router-dom";

import { dataOptions } from '../data-options';
import { dataIcon } from '../data-icon';

interface DataItemTypes {
    name: string;
    created?: string;
    createdby?: string;
    datatype: string;
}

// const allDataCreateOptions: OptionType[] = [
//     { label: 'Create a Pixel', value: 'pixels' },
//     { label: 'Create a Creative', value: 'creatives' }
// ];

const macroEncodingOptions: OptionsType<OptionType> = [
    { value: 'none', label: 'None'},
    { value: 'Plain Text', label: 'Plain Text'},
    { value: 'SHA1', label: 'SHA1'},
    { value: 'MD5', label: 'MD5'},
    { value: 'BASE64', label: 'BASE64'}
]

const accessListTeam: any = [
    { name: 'Michael Scott', description: 'mscott@dundermifflin.com', selected: false },
    { name: 'Jim Halpert', description: 'jhalpert@dundermifflin.com', selected: false },
    { name: 'Jan Levinson', description: 'jlevinson@dundermifflin.com', selected: false },
    { name: 'Dwight Schrute', description: 'dschrute@dundermifflin.com', selected: false },
    { name: 'Pam Beesly', description: 'pbeesly@dundermifflin.com', selected: false },
    { name: 'Ryan Howard', description: 'rhoward@dundermifflin.com', selected: false },
    { name: 'Toby Flenderson', description: 'tflenderson@dundermifflin.com', selected: false },
    { name: 'Creed Bratton', description: 'cbratton@dundermifflin.com', selected: false },
    { name: 'Daryl Philbin', description: 'dphilbin@dundermifflin.com', selected: false },
]
const accessListCompanies: any = [
    { name: 'Dunder Mifflin', description: 'All users under this agency'},
    { name: 'Sabre', description: 'All users under this agency'},
    { name: 'Vance Refigeration', description: 'All users under this agency'}, 
]

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
const EyeIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 3C8.62 3 5.661 4.632 3.145 7.316a20.492 20.492 0 0 0-2.25 2.891l-.239.378-.202.336-.167.29-.13.241-.051.1a1 1 0 0 0 0 .895l.112.215.148.266.29.487.238.378c.637.985 1.387 1.969 2.251 2.89C5.661 19.369 8.62 21 12 21c3.38 0 6.339-1.632 8.855-4.316a20.492 20.492 0 0 0 2.25-2.891l.239-.378.202-.336.167-.29.13-.241.051-.1a1 1 0 0 0 0-.895l-.112-.215-.148-.266-.29-.487-.238-.378a20.492 20.492 0 0 0-2.251-2.89C18.339 4.631 15.38 3 12 3Zm0 2c2.745 0 5.224 1.368 7.395 3.684a18.513 18.513 0 0 1 2.03 2.609l.146.228.134.219.153.26-.153.26a18.513 18.513 0 0 1-2.31 3.056C17.224 17.632 14.745 19 12 19c-2.745 0-5.224-1.368-7.395-3.684a18.513 18.513 0 0 1-2.03-2.609l-.146-.228-.134-.219L2.14 12l.154-.26a18.513 18.513 0 0 1 2.31-3.056C6.776 6.368 9.255 5 12 5Z"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></g></svg>
)
const CopyIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M20 8h-9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-9 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"/><path d="M13 1a3 3 0 0 1 2.995 2.824L16 4v1a1 1 0 0 1-1.993.117L14 5V4a1 1 0 0 0-.883-.993L13 3H4a1 1 0 0 0-.993.883L3 4v9a1 1 0 0 0 .883.993L4 14h1a1 1 0 0 1 .117 1.993L5 16H4a3 3 0 0 1-2.995-2.824L1 13V4a3 3 0 0 1 2.824-2.995L4 1h9Z"/></g></svg>
)
const SendIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M21.293 1.293a1 1 0 0 1 1.497 1.32l-.083.094-11 11a1 1 0 0 1-1.497-1.32l.083-.094 11-11Z"/><path d="m1.67 8.056-.117.049c-.74.362-.747 1.458.04 1.809l8.649 3.843 3.844 8.65c.368.827 1.559.778 1.858-.077l7-20a1 1 0 0 0-1.274-1.274l-20 7Zm18.7-4.427-5.481 15.66-2.975-6.695-.057-.11a1 1 0 0 0-.45-.398L4.71 9.11l15.66-5.481Z"/></g></svg>
)
const inlineEditIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M21 19.121a1 1 0 0 1 .117 1.994L21 21.12h-9a1 1 0 0 1-.117-1.993l.117-.007h9ZM15.793 2.914l-12.5 12.5a1 1 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1a1 1 0 0 0 .464-.264l12.5-12.5a3.121 3.121 0 1 0-4.414-4.414Zm2.497 1.124c.387.104.69.406.793.793l.027.13c.05.347-.065.701-.317.953L6.488 18.218l-2.114.529.529-2.115L17.207 4.328c.252-.251.606-.367.953-.316l.13.026Z"/></g></svg>
);
const CheckCircle = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
)
const ExternalLink = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M11 5a1 1 0 0 1 .117 1.993L11 7H5a1 1 0 0 0-.993.883L4 8v11a1 1 0 0 0 .883.993L5 20h11a1 1 0 0 0 .993-.883L17 19v-6a1 1 0 0 1 1.993-.117L19 13v6a3 3 0 0 1-2.824 2.995L16 22H5a3 3 0 0 1-2.995-2.824L2 19V8a3 3 0 0 1 2.824-2.995L5 5h6ZM21 2a1 1 0 0 1 .993.883L22 3v6a1 1 0 0 1-1.993.117L20 9V4h-5a1 1 0 0 1-.993-.883L14 3a1 1 0 0 1 .883-.993L15 2h6Z"/><path d="M20.293 2.293a1 1 0 0 1 1.497 1.32l-.083.094-11 11a1 1 0 0 1-1.497-1.32l.083-.094 11-11Z"/></g></svg>
)

function Dashboard(props: any) {
    const [dataType, setData] = React.useState<string>('pixels');
    const [tabSelected, setTabSelected] = React.useState<number>(1);
    const [sidePanelTabSelected, setSidePanelTabSelected] = React.useState<number>(1);
    const [activityTabSelected, setActivityTabSelected] = React.useState<number>(1);
    const [newDataItem, setNewDataItem] = React.useState(localStorage.getItem("newPixel") || '');
    const [newCreativeItem, setNewCreativeItem] = React.useState(localStorage.getItem("newCreative") || '');
    const [newNotification, setNewNotification] = React.useState<string | null>(localStorage.getItem('newNotification'));
    const [sidePanelOpen, setSidePanelOpen] = React.useState<boolean>(false);
    const [notificationState, setNotificationState] = React.useState({
        notificationOpen: false,
        notificationTitle: 'Something Happened'
    });
    const [pixel1Name, setPixel1Name] = React.useState<string>('MyPixelName');
    const [pixel2Name, setPixel2Name] = React.useState<string>('Q3 2021 Pixel');
    const [pixel3Name, setPixel3Name] = React.useState<string>('Another Pixel');
    const [selectedPixel, setSelectedPixel] = React.useState<string>('');
    const [selectedRow, setSelectedRow] = React.useState<number>(100);
    const [sidePanelEditOpen, setSidePanelEditOpen] = React.useState<boolean>(false);
    const [pixelSaved, setPixelSaved] = React.useState<boolean>(false);
    const [searchValue, setSearchValue] = React.useState<string>('');

    const [accessSelectOpen, setAccessSelectOpen] = React.useState<boolean>(false);
    const [accessItems, setAccessItems] = React.useState([
        { name: 'Michael Scott', description: 'mscott@dundermifflin.com', selected: false },
        { name: 'Jim Halpert', description: 'jhalpert@dundermifflin.com', selected: false },
        { name: 'Jan Levinson', description: 'jlevinson@dundermifflin.com', selected: false },
    ]);
    const [accessPanelObject, setAccessPanelObject] = React.useState<Array<object>>([]);

    // function handleAddAccess(item: any): void {
    //     let tempObj = accessPanelObject;
    //     tempObj.push(item);
    //     setAccessPanelObject(tempObj);
    // }
    function handleAddAccess(item: any): void {
        // updatePermissionList(permissionList: any => [...permissionList, {"name": item}]);
        const temp = [...accessPanelObject];
        // accessPanelObject.push(item);
        let joined = temp.push(item);
        // setAccessPanelObject(joined);
        setAccessPanelObject(accessPanelObject => {
            return [...accessPanelObject,item] 
        });
        console.log(accessPanelObject);
        // const index = temp.findIndex(object => object.name === item);
        // console.log(item);
        // if (index === -1) {
        //     setAccessPanelObject([...accessPanelObject, { 'name': item }]);
            
        // }
    }

    
    function handleRemoveAccess(item: any): void {
        // updatePermissionList(permissionList: any => [...permissionList, {"name": item}]);
        // let newList = permissionList;
        // newList.splice(newList.indexOf(item)-1, 1)
        // updatePermissionList(newList);
        // console.log(item);
        const temp = [...accessItems];
        const newObj = temp.filter(val => val.name != item)
        // const pos = temp.findIndex(el => el.name != item);
        // console.log(pos);
        // temp.splice(item, 1);
        // temp.filter(item => item != item);
        // const value = item.target.getAttribute('value')
        // const temp = permissionList.filter(thing:any => item.value !== value);
        setAccessItems(newObj);
        // setPermissionSelected({...permissionSelected, [item]: false});
    }


    const onSearch = React.useCallback(
        (value: string): void => {
            setSearchValue(value);
        },
        [setSearchValue]
    );

    const [sideMacros, setSideMacros] = React.useState({
        rendering: false,
        tracking: false,
        dcm: false,
        dsp: false,
        external: false,
        privacy: false,
        cpm: false,
        other: false
    });
    const [editMacros, setEditMacros] = React.useState({
        rendering: false,
        tracking: false,
        dcm: false,
        dsp: false,
        external: false,
        privacy: false,
        cpm: false,
        other: false
    });

    const [pixel1Data, setPixel1Data] = React.useState({
        pixelname: pixel1Name,
        pixeldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque lorem id neque placerat feugiat.',
        pixelId: '3464',
        todayDetections: '1.2M',
        totalDetections: '30.6M'
    });
    const [pixel2Data, setPixel2Data] = React.useState({
        pixelname: pixel2Name,
        pixeldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque lorem id neque placerat feugiat.',
        pixelId: '5284',
        todayDetections: '3.4M',
        totalDetections: '22.7M'
    });
    const [pixel3Data, setPixel3Data] = React.useState({
        pixelname: pixel2Name,
        pixeldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        pixelId: '6281',
        todayDetections: '1.1M',
        totalDetections: '12.3M'
    });
    const [inlineEdit, setInlineEdit] = React.useState({
        editName: '',
        editNameActive: false,
        editNameEdited: false,
        editDescription: '',
        editDescriptionActive: false,
        editDescriptionEdited: false,
        editMovieFanActive: false,
        editMovieFanEdited: false,
        editGenresEdited: false,
        editStarWarsEdited: false,
     });
    
    const [basicAnchorEl, setBasicAnchorEl] = React.useState<any>(null);
    const onDataChange = (e: any): void => {
        setData(e.value);
        localStorage.setItem('dataType', e.value);
    };
    const history = useHistory();
    const { url } = useRouteMatch();
    const selectedAccess: any = []

    const easymodeInitialData: DataItemTypes[] = [
    
        {
            name: pixel1Name,
            created: '12/15/2021',
            createdby: 'Moira Rose',
            datatype: 'pixels'
        }, 
        {
            name: pixel2Name,
            created: '12/15/2021',
            createdby: 'Moira Rose',
            datatype: 'pixels'
        },
        {
            name: pixel3Name,
            created: '07/01/2021',
            createdby: 'Moira Rose',
            datatype: 'pixels'
        },
    
    ];

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
        localStorage.setItem('dataType', e.value);
        setData(e.value);
        history.push(`${url}/create`);
    }
    const onCloseBasicMenu = React.useCallback((): void => {
        setBasicAnchorEl(null);
    }, []);


    function inlineNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setInlineEdit({...inlineEdit, editName: (event.currentTarget.value)})
        }
    }
    function onPixelSaved(): void {
        setPixelSaved(true);
        setTimeout((): void => {
            setPixelSaved(false);
        }, 2000);
    }
    function inlineNameBlur(): void {
        if (inlineEdit.editName != '') {
            setSelectedPixel(inlineEdit.editName);
            if (selectedPixel === pixel1Name) {
                setPixel1Name(inlineEdit.editName);
            }
            if (selectedPixel === pixel2Name) {
                setPixel2Name(inlineEdit.editName);
            }
            if (selectedPixel === pixel3Name) {
                setPixel3Name(inlineEdit.editName);
            }
            setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: true});
            onPixelSaved();
            // isSaving();
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            }, 2000);
        }
    }
    function inlineNameKeyPress(event: any): void {
        if (event.key === 'Enter' && inlineEdit.editName != '') {
            setSelectedPixel(inlineEdit.editName);
            if (selectedPixel === pixel1Name) {
                setPixel1Name(inlineEdit.editName);
            }
            if (selectedPixel === pixel2Name) {
                setPixel2Name(inlineEdit.editName);
            }
            if (selectedPixel === pixel3Name) {
                setPixel3Name(inlineEdit.editName);
            }
            setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: true});
            // isSaving();
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            }, 2000);
        }
    }
    function expandAllSideMacros(): void {
        setSideMacros({...sideMacros, 
            rendering: true,
            tracking: true,
            dcm: true,
            dsp: true,
            external: true,
            privacy: true,
            cpm: true,
            other: true })
    }
    function collapseAllSideMacros(): void {
        setSideMacros({...sideMacros, 
            rendering: false,
            tracking: false,
            dcm: false,
            dsp: false,
            external: false,
            privacy: false,
            cpm: false,
            other: false })
    }
    function expandAllEditMacros(): void {
        setEditMacros({...editMacros, 
            rendering: true,
            tracking: true,
            dcm: true,
            dsp: true,
            external: true,
            privacy: true,
            cpm: true,
            other: true })
    }
    function collapseAllEditMacros(): void {
        setEditMacros({...editMacros, 
            rendering: false,
            tracking: false,
            dcm: false,
            dsp: false,
            external: false,
            privacy: false,
            cpm: false,
            other: false })
    }


    // React.useEffect(() => {
    //     if(dataType === '' || dataType === null) {
    //         localStorage.setItem('dataType', 'pixels');
    //     }
    //     if(newNotification === 'new') {
    //         localStorage.setItem('newNotification', '');
    //         setNotificationState({
    //             ...notificationState,
    //             notificationOpen: true
    //         });
    //     } 
    // }, []);
    return (
        <div className="dashboard-container">
            
            <div className="global-nav-left">
                <div className="nav-item">
                    {/* <DashboardIcon /> */}
                    <Signal icon={DashboardIcon} size={1.5} />
                </div>
                <div className="nav-item">
                    {/* <Audiences /> */}
                    <Signal icon={AudiencesIcon} size={1.5} />
                </div>
                <div className="nav-item nav-item-selected">
                    <Signal icon={DatabaseIcon} size={1.5} />
                </div>
                <div className="nav-item">
                    <Signal icon={FileIcon} size={1.5} />
                </div>
                <div className="nav-item">
                    <Signal icon={GearIcon} size={1.5} />
                </div>
            </div>
            <div className="dashboard-content">
                <div className="content-header">
                    <div className="content-header-row">
                        <Select
                            inlineLabel={false}
                            options={dataOptions}
                            defaultValue={dataOptions[dataOptions.map((o:any) => o.value).indexOf(dataType)]}
                            onChange={onDataChange}
                            isDisabled
                            style={{ width: '14rem' }}
                            label="Data Management"
                            selectType={SelectType.LinkLarge}
                        />
                    
                        {dataType != 'alldata' && (
                            <>
            {                   dataOptions.map((option:any, index: number) => (
                                    <>
                                        {dataType === option.value && (
                                            <Button 
                                                key={index} 
                                                theme={ButtonTheme.Secondary}
                                                dataUI={option.label} 
                                                
                                                disabled={(dataType != 'pixels' && dataType != 'creatives')}>
                                                {option.buttonLabel}
                                            </Button>
                                        )}  
                                    </>
                                ))}
                            </>
                        )}
                        </div>
                        <div className="content-header-row">
                            <Search
                                id="basic-search"
                                name="basic-search"
                                placeholder="Search"
                            />
                        </div>
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
                                disabled
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
                            <table className="my-data-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Created</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                {easymodeInitialData.map((data, index) => (
                                    <>
                                    <tr key={index} className={cx({'row-selected': selectedRow === index})}>
                                    {(dataType === 'alldata' || dataType === data.datatype) && (
                                        <>
                                        <td><Signal icon={dataIcon} /> <a>{data.name}</a></td>
                                        <td>Pixel</td>
                                        <td><div className="created-date">{data.created}</div><div className="created-by">{data.createdby}</div></td>
                                        <td>
                                            <div className="actions-container">
                                                <IconButton size='1rem' icon={EyeIcon} onClick={(): void => {setSidePanelOpen(true); setSelectedPixel(data.name); setSelectedRow(index)}} />
                                                <IconButton size='1rem' icon={CopyIcon} />
                                                <IconButton size='1rem' icon={SendIcon} />
                                            </div>
                                        </td>
                                        </>
                                    )}
                                    
                                    </tr>
                                    <tr className='spacer-row'><td colSpan={4}></td></tr>
                                    </>
                                ))}
                                </tbody>
                            </table>
                                
                            </>
                        )}
                        
                        
                    </div>
                    

                </div>
            </div>
            <div className={cx('blocker', {'blocker-visible': sidePanelOpen})} onClick={(): void => {setSidePanelOpen(false); setSelectedRow(100); setSidePanelEditOpen(false)}}></div>
            <div className={cx('side-panel', {'side-panel--open': sidePanelOpen}, {'side-panel--edit-open': sidePanelEditOpen})}>
                <div className='side-panel-main'>   
                    <div className='side-panel-top'>
                        <div className="side-panel-util">
                            <IconButton icon={ExternalLink} size="0.875rem" />
                            <IconButton icon={Clear} onClick={(): void => {setSidePanelOpen(false); setSelectedRow(100); setSidePanelEditOpen(false)}}></IconButton>
                        </div>
                        <div className="side-panel-header-container">
                            {inlineEdit.editNameActive === false ? (
                                <>
                                <button className="side-panel-header" 
                                    onClick={(): void => {
                                        setInlineEdit({...inlineEdit, editName: selectedPixel, editNameActive: true});
                                    }
                                }><span>{selectedPixel}</span> <Signal icon={inlineEditIcon} size={1}className="inline-edit-icon" /></button>
                                <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editNameEdited})} /> 
                                </>
                                ) : (
                                <TextField 
                                    className="title-edit-textfield" 
                                    autofocus
                                    onChange={inlineNameChange} 
                                    value={inlineEdit.editName} 
                                    onBlur={inlineNameBlur}
                                    onKeyPress={inlineNameKeyPress}
                                    append={(
                                        <IconButton icon={Clear} onClick={(): void => {setInlineEdit({...inlineEdit, editName: '', editNameActive: false}); }} />
                                    )}
                                ></TextField>
                            )}
                        </div>
                        <div className="tabs-container">
                            <button 
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': sidePanelTabSelected === 1}
                                )}
                                onClick={():void => {setSidePanelTabSelected(1); setSidePanelEditOpen(false)}}>
                                    Overview
                            </button>
                            <button
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': sidePanelTabSelected === 2}
                                )} 
                                onClick={():void => {setSidePanelTabSelected(2); setSidePanelEditOpen(false)}}>
                                    Settings
                            </button>
                            <button
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': sidePanelTabSelected === 3}
                                )} 
                                onClick={():void => {setSidePanelTabSelected(3); setSidePanelEditOpen(false)}}>
                                    Pixel Tags
                            </button>
                            <button
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': sidePanelTabSelected === 4}
                                )} 
                                onClick={():void => {setSidePanelTabSelected(4); setSidePanelEditOpen(false)}}>
                                    Analytics
                            </button>
                            <button
                                className={cx(
                                    'tab-button',
                                    {'tab-button-selected': sidePanelTabSelected === 5}
                                )} 
                                onClick={():void => {setSidePanelTabSelected(5); setSidePanelEditOpen(false)}}>
                                    Access
                            </button>
                        </div>
                        {sidePanelTabSelected === 5 && (
                            <div className='search-access-container'>
                                <div className={cx('access-search-blocker', {'access-search-blocker-active': accessSelectOpen})} role="button" onClick={(): void => setAccessSelectOpen(false)}></div>
                                
                                <Search className='access-search-input' 
                                        onSearch={onSearch} 
                                        onFocus={(): void => setAccessSelectOpen(true)} 
                                        onClear={(): void => setSearchValue('')}
                                />
                                        {/* {accessPanelObject.map((user:any, index: number) => (
                                            <span key={index}>
                                                {user.name}
                                            </span>
                                        ))} */}
                                        
                                        {accessSelectOpen && (
                                        <div className='access-selection'>
                                            <div className='access-selection-header'>Your Team</div>
                                            {accessListTeam.filter((user: any) => (user.name.toLowerCase()).includes(searchValue.toLowerCase())).length === 0 && (
                                                <div className='access-empty-search'>There are no team members who match your search.</div>
                                            )}
                                            {accessListTeam.filter((user: any) => (user.name.toLowerCase()).includes(searchValue.toLowerCase()))
                                                .map((user:any, index: number) => (
                                                    <>
                                                    <div className='access-selection-row' key={user.index}>
                                                        <div className='access-avatar'></div>
                                                        <div className='access-name'>
                                                            {user.name}
                                                            <div className='access-name-description'>{user.description}</div>
                                                        </div>
                                                        <IconButton className='access-add-btn' icon={Add} size="1rem" onClick={(): void => handleAddAccess(user)} />
                                                    </div>
                                                    </>
                                                ) 
                                            )}
                                            <div className='access-selection-header'>Companies</div>
                                            {accessListCompanies.filter((company: any) => (company.name.toLowerCase()).includes(searchValue.toLowerCase())).length === 0 && (
                                                <div className='access-empty-search'>There are no companies that match your search.</div>
                                            )}
                                            {accessListCompanies.filter((company: any) => (company.name.toLowerCase()).includes(searchValue.toLowerCase()))
                                                .map((company:any, index: number) => (
                                                    <div className='access-selection-row' key={company.index}>
                                                        <div className='access-avatar'></div>
                                                        <div className='access-name'>
                                                            {company.name}
                                                            <div className='access-name-description'>{company.description}</div>
                                                        </div>
                                                        <IconButton className='access-add-btn' icon={Add} size="1rem" />
                                                    </div>
                                                    ) 
                                            )}
                                            <div className='access-selection-buttons'>
                                                <Button theme={ButtonTheme.Link} onClick={(): void => setAccessSelectOpen(false)}>Cancel</Button>
                                                <Button theme={ButtonTheme.Primary}>Add Permission</Button>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                        )}
                            

                    </div>
                    <div className="side-panel-main-body">
                        
                        <div className="tabs-content">
                            {sidePanelTabSelected === 1 && (
                                <>
                                <div className="side-panel-section">
                                    {selectedPixel === pixel1Name && (
                                        <p>{pixel1Data.pixeldescription}</p>
                                    )}
                                    {selectedPixel === pixel2Name && (
                                        <p>{pixel2Data.pixeldescription}</p>
                                    )}
                                    {selectedPixel === pixel3Name && (
                                        <p>{pixel3Data.pixeldescription}</p>
                                    )}
                                </div>
                                <div className="side-panel-section">
                                    <div className='va-label'>Who Has Access</div>

                                    <div className='users-list'>
                                        {accessItems.map((user:any, index: number) => (
                                            <div key={index} className='access-user'>
                                                <Tooltip content={user.name}><span className="access-user-tooltip"></span></Tooltip>
                                            </div>
                                        ))}
                                                
                                    </div>
                                    {/* {selectedPixel === pixel1Name && (

                                        <div className='users-list'>
                                            <div className='access-user'></div>
                                            <div className='access-user'></div>
                                            <div className='access-user'></div>
                                        </div>
                                    )}
                                    {selectedPixel === pixel2Name && (
                                        <div className='users-list'>
                                            <div className='access-user'></div>
                                            <div className='access-user'></div>
                                            <div className='access-user'></div>
                                            <div className='access-user'></div>
                                            <div className='access-user'></div>
                                            <div className='access-user'></div>
                                        </div>
                                    )}
                                    {selectedPixel === pixel3Name && (
                                        <div className='no-data'>
                                            No other users have access.
                                        </div>

                                    )} */}

                                </div>
                                <div className="side-panel-section">
                                    <div className='va-label'>Household Stats</div>
                                    {selectedPixel === pixel1Name && (
                                        <div className='stats-list'>
                                        <div className='stats-metric'><span>{pixel1Data.pixelId}</span><span className='stats-metric-label'>Pixel ID</span></div>
                                        <div className='stats-metric'><span>{pixel1Data.todayDetections}</span><span className='stats-metric-label'>Today's Detections</span></div>
                                        <div className='stats-metric'><span>{pixel1Data.totalDetections}</span><span className='stats-metric-label'>Total Detections</span></div>
                                        </div>
                                    )}
                                    {selectedPixel === pixel2Name && (
                                        <div className='stats-list'>
                                            <div className='stats-metric'><span>{pixel2Data.pixelId}</span><span className='stats-metric-label'>Pixel ID</span></div>
                                            <div className='stats-metric'><span>{pixel2Data.todayDetections}</span><span className='stats-metric-label'>Today's Detections</span></div>
                                            <div className='stats-metric'><span>{pixel2Data.totalDetections}</span><span className='stats-metric-label'>Total Detections</span></div>
                                        </div>
                                    )}
                                    {selectedPixel === pixel3Name && (
                                        <div className='stats-list'>
                                            <div className='stats-metric'><span>{pixel3Data.pixelId}</span><span className='stats-metric-label'>Pixel ID</span></div>
                                            <div className='stats-metric'><span>{pixel3Data.todayDetections}</span><span className='stats-metric-label'>Today's Detections</span></div>
                                            <div className='stats-metric'><span>{pixel3Data.totalDetections}</span><span className='stats-metric-label'>Total Detections</span></div>
                                        </div>
                                    )}
                                </div>
                                <div className="side-panel-section">
                                    <div className='va-label'>URL Tags</div>
                                    <ExpandableCard 
                                        isExpanded
                                        expandableContent={(
                                        <>
                                            
                                            <div className='card-actions'>
                                                <Signal icon={CopyIcon} size={0.875} />
                                                <Signal icon={Download} size={0.875} />
                                            </div>
                                            <div className='card-content'>https://b.videoamp.com/d2/d10cfcf1-9a60-11ec-9488-911095d7daa9/3464/impressionvpxid=3464&bwb=16&vdid=[%IDFA%]&ecid=[%campaignID%]&epid=[%placementID%]&crid=[%creativeID%]&pubid=[%siteID%]&cb=%n&cp1=[%FT_IMPRESSIONID%]&cp2=[%D9_ID%]</div>
                                        </>
                                    )} >
                                        <div className='panel-card-header'>Video Tag</div>
                                    </ExpandableCard>
                                    <ExpandableCard 
                                        isExpanded={false}
                                        expandableContent={(
                                        <>
                                            
                                            <div className='card-actions'>
                                                <Signal icon={CopyIcon} size={0.875} />
                                                <Signal icon={Download} size={0.875} />
                                            </div>
                                            <div className='card-content'>https://b.videoamp.com/d2/d10cfcf1-9a60-11ec-9488-911095d7daa9/3464/impressionvpxid=3464&bwb=16&vdid=[%IDFA%]&ecid=[%campaignID%]&epid=[%placementID%]&crid=[%creativeID%]&pubid=[%siteID%]&cb=%n&cp1=[%FT_IMPRESSIONID%]&cp2=[%D9_ID%]</div>
                                        </>
                                    )} >
                                        <div className='panel-card-header'>Image Tag</div>
                                    </ExpandableCard>
                                    <ExpandableCard 
                                        isExpanded={false}
                                        expandableContent={(
                                        <>
                                            
                                            <div className='card-actions'>
                                                <Signal icon={CopyIcon} size={0.875} />
                                                <Signal icon={Download} size={0.875} />
                                            </div>
                                            <div className='card-content'>https://b.videoamp.com/d2/d10cfcf1-9a60-11ec-9488-911095d7daa9/3464/impressionvpxid=3464&bwb=16&vdid=[%IDFA%]&ecid=[%campaignID%]&epid=[%placementID%]&crid=[%creativeID%]&pubid=[%siteID%]&cb=%n&cp1=[%FT_IMPRESSIONID%]&cp2=[%D9_ID%]</div>
                                        </>
                                    )} >
                                        <div className='panel-card-header'>Script Tag</div>
                                    </ExpandableCard>
                                </div>
                                    
                                </>
                            )}
                            {sidePanelTabSelected === 2 && (
                                <>
                                    <div className='edit-button-row'>
                                        <h3>Macros</h3>
                                        <span>
                                            {(sideMacros.rendering && sideMacros.tracking && sideMacros.cpm && sideMacros.dcm && sideMacros.dsp && sideMacros.external && sideMacros.other && sideMacros.privacy)
                                                ? (<Button theme={ButtonTheme.Link} onClick={collapseAllSideMacros}>Collapse All Macros</Button>) : (
                                                    <Button theme={ButtonTheme.Link} onClick={expandAllSideMacros}>Expand All Macros</Button>
                                                )
                                            }
                                            <Button theme={ButtonTheme.Secondary} disabled={sidePanelEditOpen} onClick={():void => setSidePanelEditOpen(true)}>Edit</Button>
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.rendering})} onClick={(): void => setSideMacros({...sideMacros, rendering: !sideMacros.rendering})}>
                                                Rendering Macros 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.rendering})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.rendering})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>Publisher ID</span><span>[%tp_SiteID%Page_#412_Publisher-ID-3131_Random]</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>Creative Name</span><span>[%tp_AdName%#0134-WhereYaAt?_01930_]</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>App Name</span><span>[%tp_SiteID%Page_#412_Publisher-ID-3131_PixelID]</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>Channel</span><span>[%tp_AdID%]</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.tracking})} onClick={(): void => setSideMacros({...sideMacros, tracking: !sideMacros.tracking})}>
                                                Tracking Macros 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.tracking})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.tracking})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>Device ID</span><span>&#123;&#123;USER_ID&#125;&#125;</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.dcm})} onClick={(): void => setSideMacros({...sideMacros, dcm: !sideMacros.dcm})}>
                                                DCM 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.dcm})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.dcm})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>DCM Site ID</span><span>%esid!</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.dsp})} onClick={(): void => setSideMacros({...sideMacros, dsp: !sideMacros.dsp})}>
                                                DSP 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.dsp})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.dsp})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>Unique ID</span><span>#[ad.ref.random]</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.external})} onClick={(): void => setSideMacros({...sideMacros, external: !sideMacros.external})}>
                                                External 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.external})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.external})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>External Line Item Name</span><span>[[LINE_ITEM_ID_ALT]]</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.privacy})} onClick={(): void => setSideMacros({...sideMacros, privacy: !sideMacros.privacy})}>
                                                Privacy 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.privacy})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.privacy})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='macro-label'>CCPA Privacy</span><span>[[US_PRIVACY_STRING]]</span></div>
                                                    <div className='macros-row-right'><span className='macro-label'>Encoding</span><span>Plain Text</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.cpm})} onClick={(): void => setSideMacros({...sideMacros, cpm: !sideMacros.cpm})}>
                                                CPM 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.cpm})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.cpm})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='no-data'>No Macros Applied</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='accordion-container'>
                                            <div className={cx('accordion', {'accordion-open': sideMacros.other})} onClick={(): void => setSideMacros({...sideMacros, other: !sideMacros.other})}>
                                                Other 
                                                <Signal className={cx('accordion-icon', {'accordion-icon-up': sideMacros.other})} icon={ChevronDown} />
                                            </div>
                                            <div className={cx('accordion-content', {'accordion-content-open': sideMacros.other})}>
                                                <div className='macros-row'>
                                                    <div className='macros-row-left'><span className='no-data'>No Macros Applied</span></div>
                                                </div>
                                            </div>
                                        </div>


                                        
                                        
                                    </div>
                                </>
                            )}
                            {sidePanelTabSelected === 3 && (
                                <div className="side-panel-section">
                                    <Card 
                                    title="Video Tag"
                                    theme={CardTheme.White}
                                        action={(
                                        <>
                                            
                                            <div className='card-actions'>
                                                <Signal icon={CopyIcon} size={0.875} />
                                                <Signal icon={Download} size={0.875} />
                                            </div>
                                            
                                        </>
                                    )} >
                                        <div className='card-content'>https://b.videoamp.com/d2/d10cfcf1-9a60-11ec-9488-911095d7daa9/3464/impressionvpxid=3464&bwb=16&vdid=[%IDFA%]&ecid=[%campaignID%]&epid=[%placementID%]&crid=[%creativeID%]&pubid=[%siteID%]&cb=%n&cp1=[%FT_IMPRESSIONID%]&cp2=[%D9_ID%]</div>
                                    </Card>
                                    <Card 
                                    title="Image Tag"
                                    theme={CardTheme.White}
                                        action={(
                                        <>
                                            
                                            <div className='card-actions'>
                                                <Signal icon={CopyIcon} size={0.875} />
                                                <Signal icon={Download} size={0.875} />
                                            </div>
                                            
                                        </>
                                    )} >
                                        <div className='card-content'>https://b.videoamp.com/d2/d10cfcf1-9a60-11ec-9488-911095d7daa9/3464/impressionvpxid=3464&bwb=16&vdid=[%IDFA%]&ecid=[%campaignID%]&epid=[%placementID%]&crid=[%creativeID%]&pubid=[%siteID%]&cb=%n&cp1=[%FT_IMPRESSIONID%]&cp2=[%D9_ID%]</div>
                                    </Card>
                                    <Card 
                                    title="Script Tag"
                                    theme={CardTheme.White}
                                        action={(
                                        <>
                                            
                                            <div className='card-actions'>
                                                <Signal icon={CopyIcon} size={0.875} />
                                                <Signal icon={Download} size={0.875} />
                                            </div>
                                            
                                        </>
                                    )} >
                                        <div className='card-content'>https://b.videoamp.com/d2/d10cfcf1-9a60-11ec-9488-911095d7daa9/3464/impressionvpxid=3464&bwb=16&vdid=[%IDFA%]&ecid=[%campaignID%]&epid=[%placementID%]&crid=[%creativeID%]&pubid=[%siteID%]&cb=%n&cp1=[%FT_IMPRESSIONID%]&cp2=[%D9_ID%]</div>
                                    </Card>
                                    
                                </div>
                            )}
                            {sidePanelTabSelected === 4 && (
                                <div className="side-panel-section">
                                    <svg className="campaign-dv" viewBox="0 0 374 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="a"><stop stop-color="#E4B0FD" offset="0%"/><stop stop-color="#5F8BFF" offset="100%"/></linearGradient><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="b"><stop stop-color="#6E8FFF" offset="0%"/><stop stop-color="#13F0FB" offset="100%"/></linearGradient></defs><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 21.403C18.218 21.403 20.769 0 36.801 0c16.032 0 14.575 10.808 36.437 10.808s19.675 10.595 36.072 10.595c16.396 0 25.141-10.807 36.8-10.807 11.66 0 14.94 10.596 36.073 10.596 21.133 0 13.482 21.403 36.801 21.403" stroke="url(#a)" transform="translate(8 39)"/><path d="M218.393 42.863c11.615 0 13.241-41.883 23.462-41.883 10.22 0 9.291 21.149 23.229 21.149 13.937 0 12.543 20.734 22.997 20.734 10.453 0 16.028-21.149 23.46-21.149 7.434 0 9.525 20.734 22.998 20.734S343.133 84.331 358 84.331" stroke="url(#b)" transform="matrix(1 0 0 -1 8 124.311)"/></g></svg>
                                    
                                </div>
                            )}
                            {sidePanelTabSelected === 5 && (
                                <>

                                    
                                <div className="side-panel-section">
                                    
                                    <div className='existing-access-container' >
                                        {accessItems.length === 0 && (
                                            <div className='access-empty-search'>You have not given access to any users or groups.</div>
                                        )}
                                        {(accessItems.length > 0) &&
                                            accessItems.map((user:any, index: number) => (
                                                <div className='access-selection-row' key={index}>
                                                    <div className='access-avatar'></div>
                                                    <div className='access-name'>
                                                        {user.name}
                                                        <div className='access-name-description'>{user.description}</div>
                                                    </div>
                                                    <IconButton className='access-add-btn' icon={Clear} size="1rem" onClick={(): void => handleRemoveAccess(user.name)} />
                                                </div>
                                            ) 
                                        )}

                                    </div>
                                </div>
                                </>
                            )}
                            </div>
                    </div>
                </div>
                <div className='side-panel-edit-container'>
                    <div className='edit-panel-header'>
                        <h3>Set up your optional Macros</h3>
                        <p>All Macros are optional. To help save time, we prefilled default macros based on your selected tracking platform. You can override or delete any macros that do not apply. </p>
                    </div>
                    <div className='edit-panel-content'>
                        <div className='edit-search-row'>
                            <Search />
                            {(editMacros.rendering && editMacros.tracking && editMacros.cpm && editMacros.dcm && editMacros.dsp && editMacros.external && editMacros.other && editMacros.privacy)
                                ? (<Button theme={ButtonTheme.Link} onClick={collapseAllEditMacros}>Collapse All Macros</Button>) : (
                                    <Button theme={ButtonTheme.Link} onClick={expandAllEditMacros}>Expand All Macros</Button>
                                )
                            }
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.rendering})} onClick={(): void => setEditMacros({...editMacros, rendering: !editMacros.rendering})}>
                                Rendering  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.rendering})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.rendering})}>
                            <div className='macros-row'>
                                <div className='macros-row-left'>
                                        <TextField label="Publisher ID" value="[%tp_SiteID%Page_#412_Publisher-ID-3131_Random]" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="Creative Name" value="[%tp_AdName%#0134-WhereYaAt?_01930_]" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="App Name" value="[%tp_SiteID%Page_#412_Publisher-ID-3131_PixelID]" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="Channel" value="[%tp_AdID%]" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.tracking})} onClick={(): void => setEditMacros({...editMacros, tracking: !editMacros.tracking})}>
                                Tracking  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.tracking})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.tracking})}>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="Device ID" value="{{USER_ID}}" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.dcm})} onClick={(): void => setEditMacros({...editMacros, dcm: !editMacros.dcm})}>
                                DCM  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.dcm})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.dcm})}>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="DCM Site ID" value="%esid!" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.dsp})} onClick={(): void => setEditMacros({...editMacros, dsp: !editMacros.dsp})}>
                                DSP  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.dsp})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.dsp})}>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="Unique ID" value="#{ad.ref.random}" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.external})} onClick={(): void => setEditMacros({...editMacros, external: !editMacros.external})}>
                                External  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.external})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.external})}>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="External LineItem Name" value="{{LINE_ITEM_ID_ALT}}" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.privacy})} onClick={(): void => setEditMacros({...editMacros, privacy: !editMacros.privacy})}>
                                Privacy  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.privacy})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.privacy})}>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="CCPA Privacy" value="{{US_PRIVACY_STRING}}" />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[1]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.cpm})} onClick={(): void => setEditMacros({...editMacros, cpm: !editMacros.cpm})}>
                                CPM  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.cpm})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.cpm})}>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="Media Cost CPM" placeholder='Media Cost CPM' />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[0]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-container'>
                            <div className={cx('accordion', {'accordion-open': editMacros.other})} onClick={(): void => setEditMacros({...editMacros, other: !editMacros.other})}>
                                Other  
                                <Signal className={cx('accordion-icon', {'accordion-icon-up': editMacros.other})} icon={ChevronDown} />
                            </div>
                            <div className={cx('accordion-content', {'accordion-content-open': editMacros.other})}>
                                <div className='macros-row'>
                                    <div className='macros-row-left'>
                                        <TextField label="Custom Parameter 1" placeholder='Custom Parameter 1' />
                                    </div>
                                    <div className='macros-row-right'>
                                        <Select options={macroEncodingOptions} defaultValue={macroEncodingOptions[0]} label="Encoding"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='edit-button-container'>
                        <Button theme={ButtonTheme.Link} onClick={(): void => setSidePanelEditOpen(false)}>Cancel</Button>
                        <Button theme={ButtonTheme.Secondary} onClick={(): void => {setSidePanelEditOpen(false); onPixelSaved();}}>Save</Button>
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
            <Notification
                customIcon={(<Signal icon={CheckCircle} />)}
                isOpen={pixelSaved}
                onHide={notificationHide}
                title="Save complete!"
            >
            </Notification>
        </div>
    )
}

export default Dashboard;