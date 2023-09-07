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
import {VideoAmpFull} from '../../components/icons/videoamp-full'

import { AppBar, AppBarItem, Button, ContentPadding, IconButton, Modal, Tooltip, TooltipPosition } from '@preamp/core';
import { DropdownButton, OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Buy, ChevronDown, Measure, Book, Organization, Plan, PlayCircle, Power, Signal, Users } from '@preamp/signal';

import { BellIcon } from '../../components/icons/bell-icon';

import  { Dashboard } from './pages/dashboard/dashboard';
import { Budgets } from './pages/budgets/budgets';
import { Campaigns } from './pages/campaigns/campaigns';
import { Audiences } from './pages/audiences/audiences';
import { DemoAudiences } from './pages/audiences/demo-audiences';
import { Segments } from './pages/audiences/segments';
import { ReportingData } from './pages/data/reporting-data';
import { ReportingAggregates } from './pages/data/reporting-aggregates';
import { DataCollectors } from './pages/data/data-collectors';
import { Reports } from './pages/reports/reports';
import { NationalRatings } from './pages/reports/national-ratings';
import { Research } from './pages/research/research';
import { Planning } from './pages/planning/planning';
import { LinearPlans } from './pages/planning/linear-plans';
import { Accounts } from './pages/org/accounts';
import { BusinessUnits } from './pages/org/business-units';
import { Impressions } from './pages/data/impressions';
import { LinearAdLogs } from './pages/data/linear-ad-logs';
import { OutcomeEvents } from './pages/data/outcome-events';
import { Timeline } from './pages/data/timeline';
import { Executions } from './pages/data/executions';
import { Creatives } from './pages/data/creatives';
import { MediaMetrics } from './pages/data/media-metrics';
import { ResponseMetrics } from './pages/data/response-metrics';
import { BusinessMetrics } from './pages/data/business-metrics';
import { DataFeeds } from './pages/data/data-feeds';
import { Datamart } from './pages/data/datamart';
import { MediaVehicles } from './pages/research/media-vehicles';
import { InventorySources } from './pages/research/inventory-sources';
import { Locations } from './pages/research/locations';
import { ActivationPlatforms } from './pages/research/activation-platforms';
import { Dmps } from './pages/research/dmps';
import { NewsNotifications } from './pages/research/news-notifications';
import { Inventory } from './pages/inventory/inventory';

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
const SubwayIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g  fillRule="evenodd"><path d="m8.705 24-5.589-4.626 5.59-4.62v2.325h3.692c.27 0 .622-.014.869-.042 1.624-.18 2.795-.96 2.795-2.78 0-1.905-1.308-2.52-3.454-3.548-1.072-.513-1.332-.696-1.332-1.02 0-.272.188-.437.518-.437h6.561c4.578 2.797 3.572 7.642 1.482 9.972-1.457 1.624-3.819 2.445-6.615 2.445H8.705V24Z"/><path d="M11.22 2.331C6.59 2.331 3 4.913 3 9.466c0 2.404 1.267 4.279 3.052 5.288h6.645c.423 0 .594-.205.594-.477 0-.385-.347-.54-1.382-1.038C9.63 12.141 8.51 11.52 8.51 9.678c0-1.377.951-2.44 2.496-2.689.27-.043.637-.068 1.073-.068h3.593v2.332l5.589-4.627L15.672 0v2.331H11.22"/></g></svg>
)
const GmIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g  fillRule="evenodd"><path d="M21.92 21.988c-.385.364-.93.48-1.444.492H4.126c-.475 0-.965.027-1.423-.129a1.572 1.572 0 0 1-.887-.694c-.196-.333-.272-.724-.281-1.107V3.977c.004-.314-.016-.63.04-.941.067-.388.236-.773.534-1.039.273-.243.629-.375.987-.428.13-.017.262-.03.394-.034h17.022c.507.013 1.043.138 1.418.5.378.364.518.903.534 1.412.002 5.688 0 11.377.001 17.065-.007.532-.148 1.099-.545 1.476m1.726-20.211A2.982 2.982 0 0 0 21.958.243c-.413-.16-.856-.21-1.294-.243H3.369c-.48.03-.965.087-1.412.276A2.98 2.98 0 0 0 .285 1.929C.1 2.36.033 2.827 0 3.29v17.438c.03.309.051.622.139.921.181.712.612 1.366 1.226 1.776.528.363 1.165.533 1.798.576H20.86c.516-.044 1.034-.159 1.493-.407a2.98 2.98 0 0 0 1.389-1.58c.168-.416.224-.864.258-1.309V3.327c-.032-.531-.119-1.068-.354-1.55"/><path d="M7.868 13.02c-.347-.005-.695.006-1.042-.006a.66.66 0 0 1-.62-.638V8.401a.646.646 0 0 1 .319-.564.793.793 0 0 1 .413-.094h.93c.014 1.733-.004 3.465.009 5.196l-.009.081m1.757-6.793c-.895-.014-1.79-.002-2.685-.006-.415.004-.843-.026-1.241.113-.48.149-.888.516-1.082.981-.147.34-.178.718-.174 1.085v4.164c.013.294.048.594.167.867.18.438.543.796.985.965.246.1.513.142.779.144.497.003.995-.001 1.492.002-.002.284.025.578-.078.85-.103.337-.385.596-.714.714-.515.199-1.074.126-1.612.148.006.511.001 1.022.002 1.533.641-.003 1.293.03 1.922-.122.652-.142 1.29-.47 1.693-1.015.38-.502.535-1.14.546-1.761V6.227M10.953 6.23c1.887-.02 3.775-.003 5.663-.01.438.008.877-.017 1.314.026.544.059 1.078.352 1.35.838.271.45.281.993.273 1.502.001 1.984-.004 3.968.002 5.95-.588.008-1.176.008-1.764 0 .008-2.032 0-4.066.004-6.1.009-.227-.095-.467-.295-.587a.783.783 0 0 0-.437-.105c-.314.001-.63-.003-.944.002v6.795h-1.744l.001-6.796c-.56-.002-1.12-.001-1.681 0v6.796h-1.742V6.23M10.954 16.248c2.174.003 4.347 0 6.521.002.693.003 1.388-.009 2.081.006-.009.51 0 1.021-.004 1.532h-8.6c0-.514-.001-1.027.002-1.54"/></g></svg>	
)
const HelpCircle = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12.258 8.024a2 2 0 0 0-2.224 1.308 1 1 0 0 1-1.887-.664 4 4 0 0 1 7.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8.036 8.036 0 0 1-1.686.848l-.035.013-.011.003-.004.002h-.001s-.002 0-.318-.948l.316.949a1 1 0 0 1-.633-1.897h-.001l.017-.006.074-.027a6.046 6.046 0 0 0 1.172-.6c.69-.46 1.055-.95 1.055-1.419v-.002a2 2 0 0 0-1.662-1.974ZM11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" /></svg>
)
const userOptions: OptionsType<OptionType> = [
    {
        label: 'Hannah Rahr',
        options: [
			{ label: 'Help Center', value: 'helpcenter', icon: HelpCircle },
			{ label: 'Log Out', value: 'logout', icon: Power  },
		]
	}
];
const companyOptions: OptionType[] = [
	{
        label: 'Carat',
        options: [
			{ label: 'Subway', value: 'Subway', icon: SubwayIcon },
			{ label: 'General Motors', value: 'General Motors', icon: GmIcon }
		]
	}
];
const tierOptions: OptionsType<OptionType> = [
    { value: 'Base', label: 'Base'},
    { value: 'Plus', label: 'Plus'},
    { value: 'Pro', label: 'Pro'},
];

function UnifiedVisionPrototype() {
    const [version, setVersion] = React.useState(modifyVersionOptions[0]);
    const [isInfoModalOpen, setIsInfoOpenModal] = React.useState<boolean>(false);
    const [navId, setNavId] = React.useState<string>('dashboard');
    const [persona, setPersona] = React.useState<string | null>(localStorage.getItem('myPersona'));
    const [tier, setTier] = React.useState<string | null>(localStorage.getItem('tier'));
    const [latestObject, setLatestObject] = React.useState<string | null>(localStorage.getItem('latestObject'));
    const [latestType, setLatestType] = React.useState<string | null>(localStorage.getItem('latestType'));
    const [latestStatus, setLatestStatus] = React.useState<string | null>(localStorage.getItem('latestStatus'));
    const [navCollapsed, setNavCollapsed] = React.useState<boolean>(false);
    const [company, setCompany] = React.useState<string | undefined>('Subway');
    const [dataExpanded, setDataExpanded] = React.useState<boolean>(false);
    const [orgExpanded, setOrgExpanded] = React.useState<boolean>(false);
    const [audienceExpanded, setAudienceExpanded] = React.useState<boolean>(false);
    const [researchExpanded, setResearchExpanded] = React.useState<boolean>(false);
    const [planningExpanded, setPlanningExpanded] = React.useState<boolean>(false);
    const [reportsExpanded, setReportsExpanded] = React.useState<boolean>(false);
    const [scrolling, setScrolling] = React.useState(false);
    const [cardTabSelected, setcardTabSelected] = React.useState<string>('recents');
    // const [navLocation, setNavLocation] = React.useState(useLocation().pathname);
    const { url } = useRouteMatch();
    
    const history = useHistory();
    function onNavClick(id: string): () => void {
        return (): void => {
            setNavId(id);
            history.push(`${url}/${id}`);
            if (id != "data-collectors" && id != "reporting-aggregates" && id != "reporting-data") {
                setDataExpanded(false);
            };
            if (id != "accounts" && id != "business-units") {
                setOrgExpanded(false);
            }
            if (id != "advanced-audiences" && id != "demo-audiences" && id != "segments") {
                setAudienceExpanded(false);
            }
            if (id != "research" && id != "media-vehicles" && id != "inventory-sources") {
                setResearchExpanded(false);
            }
            if (id != "planning" && id != "linear-plans") {
                setPlanningExpanded(false);
            }
            if (id != "reports" && id != "national-ratings") {
                setReportsExpanded(false);
            }

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
    function collapseNavItems(): void {
        setAudienceExpanded(false);
        setResearchExpanded(false);
        setDataExpanded(false);
        setOrgExpanded(false);
        setReportsExpanded(false);
        setPlanningExpanded(false);
        console.log('collapse other subnav menus if necessary');
    }
    
    const onPersonaChange = (e: any): void => {
        setPersona(e.value);
        localStorage.setItem('myPersona', e.value);
        setIsInfoOpenModal(false);
        // history.push(`${url}/dashboard/${e.value}`)
    };
    const onTierChange = (e: any): void => {
        setTier(e.value);
        localStorage.setItem('tier', e.value);
        setIsInfoOpenModal(false);
        if (e.value != 'Pro') {
            setcardTabSelected('favorites');
        } 
        // history.push(`${url}/dashboard/${e.value}`)
    };
    const toggleInfoModal = (): void => {
        setIsInfoOpenModal(!isInfoModalOpen);
    };
    const onCompanyChange = (e: any): void => {
        setCompany(e.value);
		localStorage.setItem('platformCompany', e.value);
    };
    
    // function selectedNav(item:string) {
    //     setNavId(item);
    // };
    function userOptionChanged(): void {
        console.log("user option clicked");
    }
    const locationUrl = useLocation().pathname;

    // const localPersona:string | null = localStorage.getItem('myPersona');
    
    

    React.useEffect(() => {
        if (persona === ('' || null)) {
            localStorage.setItem('myPersona', 'agency');
            // localPersona = 'agency';
            setPersona('agency')
        }
        if (tier === ('' || null)) {
            localStorage.setItem('tier', 'Pro');
            // localPersona = 'agency';
            setTier('Pro')
        }
        if (latestObject === ('' || null)) {
            localStorage.setItem('latestObject', 'Campaign_Name');
            // localPersona = 'agency';
            setLatestObject('Report_Name')
        }
        if (latestType === ('' || null)) {
            localStorage.setItem('latestType', 'campaign');
            // localPersona = 'agency';
            setLatestType('campaign')
        }if (latestStatus === ('' || null)) {
            localStorage.setItem('latestStatus', 'Draft');
            // localPersona = 'agency';
            setLatestStatus('Draft')
        }
		const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrolling(true);
		}
		if (window.scrollY === 0) {
			setScrolling(false);
		}

		
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrolling]);
    
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
    
    <div className={cx("layout-container unified-vision-container", {"scrolling" : scrolling})}>
        <nav className={cx(
                    "nav-bar nav-main", 
                    {"nav-bar--collapsed" : navCollapsed}, 
                    // {"nav-bar-option2": props.navVersion === 'option2'}, 
                    // {"nav-bar-option3": props.navVersion === 'option3'}
                )}>
                <div className={cx("nav-items-container", {"nav-items-container--collapsed" : navCollapsed})}>
                    <a className='logo-full' role="button"  onClick={onNavClick('dashboard')}>
                        {navCollapsed ? <Signal icon={VideoAmp} size={2} /> : <Signal icon={VideoAmpFull} size={"71px"}  />}
                    </a>
                    <div className={cx('nav-switcher-container')}>
                        
                        <Select
                            className={cx('va-switcher va-switcher-withicon dark-menu')}
                            options={companyOptions}
                            selectType={SelectType.Link}
                            onChange={onCompanyChange}
                            // menuIsOpen
                            defaultValue={companyOptions[0].options[companyOptions[0].options.map((o:any) => o.value).indexOf(company)]}
                        ></Select>
                        <Signal size={navCollapsed ? 1 : 1.5} className='switcher-input-icon' icon={company === 'Subway' ? SubwayIcon : GmIcon} />
                        <div className="switcher-agency-label">Carat</div>
                    </div>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Dashboard</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "dashboard" })} role="button" onClick={onNavClick('dashboard')} >
                                <div className="nav-item-content">
                                    <Signal icon={DashboardIcon} />
                                    <div className="nav-item-label">Dashboard</div>
                                </div>
                        </a>
                    </Tooltip>
                    {persona != 'sellside' && (
                        <>
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Budgets</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                            <a className={cx("nav-item", {"nav-item-selected": navId === "budgets" })}  role="button" onClick={onNavClick('budgets')}>
                                    <div className="nav-item-content">
                                        <Signal icon={Buy} />
                                        <div className="nav-item-label">Budgets</div>
                                    </div>
                            </a>
                        </Tooltip>
                    
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Premium Video Planning</span></>) : ""}
                            hasArrow={false}
                            // placement={TooltipPosition.Right}
                            placement="right-start"
                            showDelayTime={250}
                        >
                            <div className={cx("nav-item-expander", 
                                {"nav-item-selected": (navId === "planning" || navId === "linear-plans") }, 
                                {"nav-item-expanded": (planningExpanded || navId === "planning" || navId === "linear-plans")})} >
                                <a className="nav-item" role="button" onClick={
                                    ():void => {
                                        collapseNavItems();
                                        if (planningExpanded === true) {
                                            setPlanningExpanded(false)
                                        } else {
                                            setPlanningExpanded(true)
                                        };
                                        if (navCollapsed === true) {
                                            setPlanningExpanded(true);
                                            setNavCollapsed(false);
                                        }
                                    }
                                    }>
                                    <div className="nav-item-content">
                                        <Signal icon={PlayCircle} />
                                        <div className="nav-item-label">Premium Video Planning</div>
                                    </div>
                                    {/* <Signal className='expand-indicator' icon={ChevronDown} size="10px" /> */}
                                </a>
                                <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Legacy Cross Platform Plans</span></>) : ""}>
                                    <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "planning" })}  role="button" onClick={onNavClick('planning')}>
                                        <div className="nav-item-content">
                                            {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Legacy Cross Platform Plans</div>}
                                            
                                        </div>
                                    </a>
                                </Tooltip>
                                <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Legacy Linear Plans</span></>) : ""}>
                                    <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "linear-plans" })} role="button" onClick={onNavClick('linear-plans')}>
                                        <div className="nav-item-content">
                                            {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Legacy Linear Plans</div>}
                                            
                                        </div>
                                    </a>
                                </Tooltip>
                            </div>
                        </Tooltip>
                        </>
                    )}
                    {persona === 'sellside' && (
                        <Tooltip
                            className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                            content={navCollapsed ? (<><span>Inventory</span></>) : ""}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                            >
                                <a className={cx("nav-item", {"nav-item-selected": navId === "inventory" })}  role="button" onClick={onNavClick('inventory')}>
                                        <div className="nav-item-content">
                                            <Signal icon={PlayCircle} />
                                            <div className="nav-item-label">Inventory</div>
                                        </div>
                                </a>
                        </Tooltip>
                    )}
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Campaigns</span></>) : ""}
                        hasArrow={false}
                        placement={TooltipPosition.Right}
                        showDelayTime={250}
                    >
                        <a className={cx("nav-item", {"nav-item-selected": navId === "campaigns" })} role="button" onClick={onNavClick('campaigns')}>
                                <div className="nav-item-content">
                                    <Signal icon={Measure} />
                                    <div className="nav-item-label">Campaigns</div>
                                </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        // content={navCollapsed ? (<><span>Audiences</span><span className="nav-item-sub-label">Create and discover advanced audiences.</span></>) : ""}
                        content={navCollapsed ? (<><span>Audiences</span></>) : ""}
                        hasArrow={false}
                        placement='right-start'
                        showDelayTime={250}
                    >
                        {/* <a className={cx("nav-item", {"nav-item-selected": navId === "audiences" })} role="button" onClick={onNavClick('audiences')}>
                                <div className="nav-item-content">
                                <Signal icon={AudiencesIcon} />
                                <div className="nav-item-label">Audiences </div>
                                </div>
                        </a> */}
                        <div className={cx("nav-item-expander", 
                                {"nav-item-selected": (navId === "audiences" || navId === "advanced-audiences" || navId === "demo-audiences" || navId === "segments") }, 
                                {"nav-item-expanded": (audienceExpanded || navId === "advanced-audiences" || navId === "demo-audiences" || navId === "segments")})} >
                            <a className="nav-item" role="button" onClick={
                                    ():void => {
                                        collapseNavItems();
                                        if (audienceExpanded === true) {
                                            setAudienceExpanded(false)
                                        } else {
                                            setAudienceExpanded(true)
                                        };
                                        if (navCollapsed === true) {
                                            setAudienceExpanded(true);
                                            setNavCollapsed(false);
                                        }
                                    }
                                    }>
                                <div className="nav-item-content">
                                    <Signal icon={AudiencesIcon} />
                                    <div className="nav-item-label">Audiences</div>
                                </div>
                                {/* <Signal className='expand-indicator' icon={ChevronDown} size="10px" /> */}
                            </a>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Advanced Audiences</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "advanced-audiences" })} role="button" onClick={onNavClick('advanced-audiences')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Advanced Audiences</div>}
                                        
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Demo Audiences</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "demo-audiences" })} role="button" onClick={onNavClick('demo-audiences')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Demo Audiences</div>}
                                        
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Segments</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "segments" })} role="button" onClick={onNavClick('segments')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Segments</div>}
                                        
                                    </div>
                                </a>
                            </Tooltip>
                        </div>
                        
                    </Tooltip>
                    
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Research </span></>) : ""}
                        hasArrow={false}
                        placement='right-start'
                        showDelayTime={250}
                    >
                        {/* <a className={cx("nav-item", {"nav-item-selected": navId === "research" })} role="button" onClick={onNavClick('research')}>
                            <div className="nav-item-content">
                                <Signal icon={Book} />
                                <div className="nav-item-label">Research </div>
                            </div>
                        </a> */}
                        <div className={cx("nav-item-expander", 
                                {"nav-item-selected": (
                                    navId === "research" || 
                                    navId === "media-vehicles" || 
                                    navId === "inventory-sources" || 
                                    navId === "locations" || 
                                    navId === "activation-platforms" || 
                                    navId === "dmps" || 
                                    navId === "news-notifications") }, 
                                {"nav-item-expanded": (
                                    researchExpanded || 
                                    navId === "media-vehicles" || 
                                    navId === "inventory-sources" || 
                                    navId === "locations" || 
                                    navId === "activation-platforms" || 
                                    navId === "dmps" || 
                                    navId === "news-notifications")})} >
                            <a className="nav-item" role="button" onClick={
                                    ():void => {
                                        collapseNavItems();
                                        if (researchExpanded === true) {
                                            setResearchExpanded(false)
                                        } else {
                                            setResearchExpanded(true)
                                        }

                                        if (navCollapsed === true) {
                                            setResearchExpanded(true);
                                            setNavCollapsed(false);
                                        }
                                    }
                                }>
                                <div className="nav-item-content">
                                    <Signal icon={Book} />
                                    <div className="nav-item-label">Research</div>
                                </div>
                                {/* <Signal className='expand-indicator' icon={ChevronDown} size="10px" /> */}
                            </a>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Activation Platforms</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "activation-platforms" })} role="button" onClick={onNavClick('activation-platforms')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Activation Platforms</div>}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>DMPs</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "dmps" })} role="button" onClick={onNavClick('dmps')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">DMPs</div>}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Inventory Sources</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "inventory-sources" })} role="button" onClick={onNavClick('inventory-sources')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Inventory Sources</div>}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Locations</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "locations" })} role="button" onClick={onNavClick('locations')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Locations</div>}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Media Vehicles</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "media-vehicles" })} role="button" onClick={onNavClick('media-vehicles')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Media Vehicles</div>}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>News &amp; Notifications</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "news-notifications" })} role="button" onClick={onNavClick('news-notifications')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">News &amp; Notifications</div>}
                                    </div>
                                </a>
                            </Tooltip>
                                    
                        </div>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Data</span></>) : ""}
                        hasArrow={false}
                        placement='right-start'
                        showDelayTime={250}
                    >
                        {/* <a className={cx("nav-item", {"nav-item-selected": navId === "data" })} role="button" onClick={onNavClick('data')}>
                            <div className="nav-item-content">
                                <Signal icon={DatabaseIcon} size={1.5} />
                                <div className="nav-item-label">Data</div>
                            </div>
                        </a> */}
                        <div className={cx("nav-item-expander", 
                                {"nav-item-selected": (
                                    navId === "data" || 
                                    navId === "impressions" || 
                                    navId === "linear-ad-logs" || 
                                    navId === "outcome-events" || 
                                    navId === "timeline" || 
                                    navId === "executions" || 
                                    navId === "creatives" || 
                                    navId === "media-metrics" || 
                                    navId === "response-metrics" || 
                                    navId === "business-metrics" || 
                                    navId === "data-feeds" || 
                                    navId === "datamart") }, 
                                {"nav-item-expanded": (
                                    dataExpanded || 
                                    navId === "impressions" || 
                                    navId === "linear-ad-logs" || 
                                    navId === "outcome-events" || 
                                    navId === "timeline" || 
                                    navId === "executions" || 
                                    navId === "creatives" || 
                                    navId === "media-metrics" || 
                                    navId === "response-metrics" || 
                                    navId === "business-metrics" || 
                                    navId === "data-feeds" || 
                                    navId === "datamart")})} >
                            <a className="nav-item" role="button" onClick={
                                    ():void => {
                                        collapseNavItems();
                                        if (dataExpanded === true) {
                                            setDataExpanded(false)
                                        } else {
                                            setDataExpanded(true)
                                        }
                                        if (navCollapsed === true) {
                                            setDataExpanded(true);
                                            setNavCollapsed(false);
                                        }
                                    }
                                }>
                                <div className="nav-item-content">
                                    <Signal icon={DatabaseIcon} />
                                    <div className="nav-item-label">Data</div>
                                </div>
                                {/* <Signal className='expand-indicator' icon={ChevronDown} size="10px" /> */}
                            </a>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Business Metrics</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "business-metrics" })} role="button" onClick={onNavClick('business-metrics')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Business Metrics</div>}
                                        {/* <div className="nav-item-label">Business Metrics</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Creatives</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "creatives" })} role="button" onClick={onNavClick('creatives')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Creatives</div>}
                                        {/* <div className="nav-item-label">Creatives</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Data Feeds</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "data-feeds" })} role="button" onClick={onNavClick('data-feeds')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Data Feeds</div>}
                                        {/* <div className="nav-item-label">Data Feeds</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Datamart</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "datamart" })} role="button" onClick={onNavClick('datamart')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Datamart</div>}
                                        {/* <div className="nav-item-label">Datamart</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Executions</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "executions" })} role="button" onClick={onNavClick('executions')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Executions</div>}
                                        {/* <div className="nav-item-label">Executions</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Impressions</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "impressions" })} role="button" onClick={onNavClick('impressions')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Impressions</div>}
                                        {/* <div className="nav-item-label">Impressions</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Linear Ad Logs</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "linear-ad-logs" })} role="button" onClick={onNavClick('linear-ad-logs')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Linear Ad Logs</div>}
                                        {/* <div className="nav-item-label">Linear Ad Logs</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Media Metrics</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "media-metrics" })} role="button" onClick={onNavClick('media-metrics')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Media Metrics</div>}
                                        {/* <div className="nav-item-label">Media Metrics</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Outcome Events</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "outcome-events" })} role="button" onClick={onNavClick('outcome-events')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Outcome Events</div>}
                                        {/* <div className="nav-item-label">Outcome Events</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Response Metrics</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "response-metrics" })} role="button" onClick={onNavClick('response-metrics')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Response Metrics</div>}
                                        {/* <div className="nav-item-label">Response Metrics</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Timeline</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "timeline" })} role="button" onClick={onNavClick('timeline')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Timeline</div>}
                                        {/* <div className="nav-item-label">Timeline</div> */}
                                    </div>
                                </a>
                            </Tooltip>
                        </div>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Reporting</span></>) : ""}
                        hasArrow={false}
                        placement='right-start'
                        showDelayTime={250}
                    >
                        <div className={cx("nav-item-expander", {"nav-item-selected": (navId === "reports" || navId === "reporting" || navId === "national-ratings") },
                            {"nav-item-expanded": (reportsExpanded || navId === "reports" || navId === "national-ratings")})}>
                            <a className="nav-item" role="button" onClick={
                                    ():void => {
                                        collapseNavItems();
                                        if (reportsExpanded === true) {
                                            setReportsExpanded(false)
                                        } else {
                                            setReportsExpanded(true)
                                        }

                                        if (navCollapsed === true) {
                                            setReportsExpanded(true);
                                            setNavCollapsed(false);
                                        }
                                    }
                                }>
                                <div className="nav-item-content">
                                    <Signal icon={FileIcon} />
                                    <div className="nav-item-label">Reporting</div>
                                </div>
                                {/* <Signal className='expand-indicator' icon={ChevronDown} size="10px" /> */}
                            </a>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Reports</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "reports" })} role="button" onClick={onNavClick('reports')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Reports</div>}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>National Ratings</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "national-ratings" })} role="button" onClick={onNavClick('national-ratings')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">National Ratings</div>}
                                    </div>
                                </a>
                            </Tooltip>
                        </div>
                    </Tooltip>
                    <Tooltip
                        className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})}
                        content={navCollapsed ? (<><span>Organization</span></>) : ""}
                        hasArrow={false}
                        placement='right-start'
                        showDelayTime={250}
                    >
                        <div className={cx("nav-item-expander", {"nav-item-selected": (navId === "org" || navId === "accounts" || navId === "products") },
                            {"nav-item-expanded": (orgExpanded || navId === "products" || navId === "accounts")})}>
                            <a className="nav-item" role="button" onClick={
                                    ():void => {
                                        collapseNavItems();
                                        if (orgExpanded === true) {
                                            setOrgExpanded(false)
                                        } else {
                                            setOrgExpanded(true)
                                        }
                                        if (navCollapsed === true) {
                                            setOrgExpanded(true);
                                            setNavCollapsed(false);
                                        }
                                    }
                                }>
                                <div className="nav-item-content">
                                    <Signal icon={GearIcon} />
                                    <div className="nav-item-label">Organization</div>
                                </div>
                                {/* <Signal className='expand-indicator' icon={ChevronDown} size="10px" /> */}
                            </a>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Accounts</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "accounts" })} role="button" onClick={onNavClick('accounts')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Accounts</div>}
                                    </div>
                                </a>
                            </Tooltip>
                            <Tooltip className={cx("nav-bar-tooltip", {"tooltip-hidden": !navCollapsed})} hasArrow={false} placement='right' showDelayTime={250} content={navCollapsed ? (<><span>Products</span></>) : ""}>
                                <a className={cx("nav-item-secondary", {"nav-item-selected": navId === "products" })} role="button" onClick={onNavClick('products')}>
                                    <div className="nav-item-content">
                                        {navCollapsed ? <div className='nav-subitem-collapsed' /> : <div className="nav-item-label">Products</div>}
                                    </div>
                                </a>
                            </Tooltip>
                        </div>
                    </Tooltip>
                
                    <div className={cx("collapse-button-container", {"collapse-button-container-expand": navCollapsed})}>
                        <Tooltip
                            content={navCollapsed ? "Expand" : "Collapse"}
                            hasArrow={false}
                            placement={TooltipPosition.Right}
                            showDelayTime={250}
                        >
                            <IconButton className={cx("collapse-icon", {"icon-expand" : navCollapsed})} icon={ChevronDown} onClick={(): void => { setNavCollapsed(!navCollapsed); collapseNavItems();}} />
                        </Tooltip>
                    </div>
            </div>
        </nav>
        <div className="layout-content">
            <Switch>
                <Route exact path={url} >
                    <Dashboard 
                        selectedNav={setNavId} 
                        company={company} 
                        latestType={latestType} 
                        latestObject={latestObject} 
                        latestStatus={latestStatus} 
                        latestLink={latestType === 'campaign' ? onNavClick('campaigns/campaign') : onNavClick('reports/report')} 
                        tier={tier}
                        cardTabSelected={cardTabSelected}
                        />
                </Route>
                <Route exact path={`${url}/dashboard`}>
                    <Dashboard 
                        selectedNav={setNavId} 
                        company={company} 
                        latestType={latestType} 
                        latestObject={latestObject} 
                        latestStatus={latestStatus} 
                        latestLink={latestType === 'campaign' ? onNavClick('campaigns/campaign') : onNavClick('reports/report')} 
                        tier={tier}
                        cardTabSelected={cardTabSelected}
                    />
                </Route>
                <Route path={`${url}/budgets`}>
                    <Budgets selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/planning`}>
                    <Planning selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/linear-plans`}>
                    <LinearPlans selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/campaigns`}>
                    <Campaigns selectedNav={setNavId} latestObject={setLatestObject} latestType={setLatestType} latestStatus={setLatestStatus} />
                </Route>
                <Route path={`${url}/advanced-audiences`}>
                    <Audiences selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/demo-audiences`}>
                    <DemoAudiences selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/segments`}>
                    <Segments selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/research`}>
                    <Research selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/reporting-data`}>
                    <ReportingData selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/reporting-aggregates`}>
                    <ReportingAggregates selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/data-collectors`}>
                    <DataCollectors selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/reports`}>
                    <Reports selectedNav={setNavId} latestObject={setLatestObject} latestType={setLatestType} latestStatus={setLatestStatus} />
                </Route>
                <Route path={`${url}/national-ratings`}>
                    <NationalRatings selectedNav={setNavId} latestObject={setLatestObject} latestType={setLatestType} latestStatus={setLatestStatus} />
                </Route>
                <Route path={`${url}/accounts`}>
                    <Accounts selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/products`}>
                    <BusinessUnits selectedNav={setNavId} />
                </Route>

                <Route path={`${url}/impressions`}>
                    <Impressions selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/linear-ad-logs`}>
                    <LinearAdLogs selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/outcome-events`}>
                    <OutcomeEvents selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/timeline`}>
                    <Timeline selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/executions`}>
                    <Executions selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/creatives`}>
                    <Creatives selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/media-metrics`}>
                    <MediaMetrics selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/response-metrics`}>
                    <ResponseMetrics selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/business-metrics`}>
                    <BusinessMetrics selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/data-feeds`}>
                    <DataFeeds selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/datamart`}>
                    <Datamart selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/media-vehicles`}>
                    <MediaVehicles selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/inventory-sources`}>
                    <InventorySources selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/locations`}>
                    <Locations selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/activation-platforms`}>
                    <ActivationPlatforms selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/dmps`}>
                    <Dmps selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/news-notifications`}>
                    <NewsNotifications selectedNav={setNavId} />
                </Route>
                <Route path={`${url}/inventory`}>
                    <Inventory selectedNav={setNavId} />
                </Route>
            </Switch>
        </div>
        <div className='right-rail'>
            <div className='right-rail-content'>
                {/* <div className='user-icon'></div> */}
                <DropdownButton
                    dataUI="user-dropdown"
                    onChange={userOptionChanged}
                    options={userOptions}
                    className='user-icon dark-menu'
                >
                    <span className='user-icon-initials'>HR</span>
                </DropdownButton>
                <Signal icon={BellIcon} size={1.25} className='notification-icon' />
            </div>
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
            <Select
                inlineLabel={false}
                options={tierOptions}
                defaultValue={tier === 'Base' ? tierOptions[0] : tier === 'Plus' ? tierOptions[1] : tierOptions[2]}
                onChange={onTierChange}
                style={{ width: '14rem' }}
                placeholder="Select a Tier"
                label="Choose a Tier"
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