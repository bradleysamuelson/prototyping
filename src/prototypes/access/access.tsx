import React from 'react';
import cx from 'classnames';
import {
	NavLink,
  Route,
  Switch,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import { GlobalNavBar } from './components/globalNavBar/globalNavBar';
import {ExpandPanel} from './components/expand-panel/expandPanel';
import  Dashboard  from './pages/dashboard';
import  DataManagement  from './pages/dataManagement';
import {Button, ButtonTheme, Icon, IconButton, Search, Tooltip, TooltipPosition, ITabItem, Tabs, PillButton, PillButtonGroup, TooltipTheme} from '@preamp/core';
import { Audiences as AudiencesIcon, 
	Allocation, 
	Book, 
	ChevronDown, 
	Clear,
	ForwardArrow, 
	Measure, 
	Organization, 
	Plan, 
	PlayCircle, 
	Power, 
	Reports, 
	Signal, 
	Users,
	Zap 
} from '@preamp/signal';
import { Select, SelectType, OptionsType, OptionType, ValueType } from '@preamp/select';
import { VideoAmp } from '../../components/icons/videoamp';

import Upfront from './pages/upfront'
import './access-styles.scss';
import Campaigns from './pages/campaigns';
import CampaignView from './pages/campaignview';
import Audiences from './pages/audiences';
import Settings from './pages/settings';

import activationExpanded from './img/activation-expanded.png';
import mediaCurrencyExpanded from './img/media-currency-expanded.png';
import audienceMeasurementExpanded from './img/audience-measurement-expanded.png';
import contentMeasurementExpanded from './img/content-measurement-expanded.png';
import upfrontExpanded from './img/upfront-expanded.png';
import mediaPlanOptimizationExpanded from './img/media-plan-optimization.png';
import mediaPlanReOptimizationExpanded from './img/media-plan-reoptimization.png';
import outcomeExpanded from './img/outcome-expanded.png';
import audiencesConfigExpanded from './img/audiences-config-expanded.png';
import campaignMonitoringExpanded from './img/campaign-monitoring-expanded.png';
import campaignList from './img/campaignlist.png';
import campaignOverview from './img/viewcampaign.png';
import reportViewScreen from './img/report-takeover.png';
import audMeasurementLatest from './img/aud-measurement-latest.png';
import upfrontplan from './img/upfrontplan.png';
import cardScreen from './img/card.png';
import reportList from './img/reportlist.png';
import upsellImage from './img/upsell.png';
import budgetsExpanded from './img/budgets-expanded.png';
import campaignsExpanded from './img/campaigns-expanded.png';
import datamartExpanded from './img/datamart-expanded.png';
import MediaBudgetExpanded from './img/media-budget-management-expanded.png';
import audienceMeasurementReporting from './img/audience-measurement-reporting-expanded.png';
import partnerLibrary from './img/partner-library-expanded.png';
import outcomeMeasurement from './img/outcome-measurement-expanded.png';
import postCampaign from './img/post-campaign-expanded.png';
import cmro from './img/cmro-expanded.png';
import mpbo from './img/mpbo-expanded.png';

const advertiserOptions: OptionsType<OptionType> = [
    { value: 'Dunder Mifflin', label: 'Dunder Mifflin'},
    { value: 'ACME', label: 'ACME'},
    { value: 'Initech', label: 'Initech'},
    { value: 'Sterling Cooper', label: 'Sterling Cooper'},
    { value: 'Vandelay Industries', label: 'Vandelay Industries'},
    { value: 'Very Good Building Company', label: 'Very Good Building Company'},
    { value: 'Demo Time', label: 'Demo Time'}
];
const userOptions: OptionsType<OptionType> = [
    {label: 'Manage Preferences', value: '1'},
    {label: 'Logout', value: '2'}
];
const tierOptions: OptionsType<OptionType> = [
    { value: 'Baseline', label: 'Media Currency Baseline'},
    { value: 'Plus', label: 'Media Currency Plus'},
    { value: 'Pro', label: 'Media Currency Pro'},
    { value: 'MOLite', label: 'Media Optimization Lite'},
    { value: 'MOPlus', label: 'Media Optimization Plus'},
    { value: 'MOPro', label: 'Media Optimization Pro'}
];

const SubwayIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="m8.705 24-5.589-4.626 5.59-4.62v2.325h3.692c.27 0 .622-.014.869-.042 1.624-.18 2.795-.96 2.795-2.78 0-1.905-1.308-2.52-3.454-3.548-1.072-.513-1.332-.696-1.332-1.02 0-.272.188-.437.518-.437h6.561c4.578 2.797 3.572 7.642 1.482 9.972-1.457 1.624-3.819 2.445-6.615 2.445H8.705V24Z"/><path d="M11.22 2.331C6.59 2.331 3 4.913 3 9.466c0 2.404 1.267 4.279 3.052 5.288h6.645c.423 0 .594-.205.594-.477 0-.385-.347-.54-1.382-1.038C9.63 12.141 8.51 11.52 8.51 9.678c0-1.377.951-2.44 2.496-2.689.27-.043.637-.068 1.073-.068h3.593v2.332l5.589-4.627L15.672 0v2.331H11.22"/></g></svg>
)
const GmIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M21.92 21.988c-.385.364-.93.48-1.444.492H4.126c-.475 0-.965.027-1.423-.129a1.572 1.572 0 0 1-.887-.694c-.196-.333-.272-.724-.281-1.107V3.977c.004-.314-.016-.63.04-.941.067-.388.236-.773.534-1.039.273-.243.629-.375.987-.428.13-.017.262-.03.394-.034h17.022c.507.013 1.043.138 1.418.5.378.364.518.903.534 1.412.002 5.688 0 11.377.001 17.065-.007.532-.148 1.099-.545 1.476m1.726-20.211A2.982 2.982 0 0 0 21.958.243c-.413-.16-.856-.21-1.294-.243H3.369c-.48.03-.965.087-1.412.276A2.98 2.98 0 0 0 .285 1.929C.1 2.36.033 2.827 0 3.29v17.438c.03.309.051.622.139.921.181.712.612 1.366 1.226 1.776.528.363 1.165.533 1.798.576H20.86c.516-.044 1.034-.159 1.493-.407a2.98 2.98 0 0 0 1.389-1.58c.168-.416.224-.864.258-1.309V3.327c-.032-.531-.119-1.068-.354-1.55"/><path d="M7.868 13.02c-.347-.005-.695.006-1.042-.006a.66.66 0 0 1-.62-.638V8.401a.646.646 0 0 1 .319-.564.793.793 0 0 1 .413-.094h.93c.014 1.733-.004 3.465.009 5.196l-.009.081m1.757-6.793c-.895-.014-1.79-.002-2.685-.006-.415.004-.843-.026-1.241.113-.48.149-.888.516-1.082.981-.147.34-.178.718-.174 1.085v4.164c.013.294.048.594.167.867.18.438.543.796.985.965.246.1.513.142.779.144.497.003.995-.001 1.492.002-.002.284.025.578-.078.85-.103.337-.385.596-.714.714-.515.199-1.074.126-1.612.148.006.511.001 1.022.002 1.533.641-.003 1.293.03 1.922-.122.652-.142 1.29-.47 1.693-1.015.38-.502.535-1.14.546-1.761V6.227M10.953 6.23c1.887-.02 3.775-.003 5.663-.01.438.008.877-.017 1.314.026.544.059 1.078.352 1.35.838.271.45.281.993.273 1.502.001 1.984-.004 3.968.002 5.95-.588.008-1.176.008-1.764 0 .008-2.032 0-4.066.004-6.1.009-.227-.095-.467-.295-.587a.783.783 0 0 0-.437-.105c-.314.001-.63-.003-.944.002v6.795h-1.744l.001-6.796c-.56-.002-1.12-.001-1.681 0v6.796h-1.742V6.23M10.954 16.248c2.174.003 4.347 0 6.521.002.693.003 1.388-.009 2.081.006-.009.51 0 1.021-.004 1.532h-8.6c0-.514-.001-1.027.002-1.54"/></g></svg>	
)
const PlayOutlineIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 3v18a1 1 0 0 0 1.54.841l14-9a1 1 0 0 0 0-1.682l-14-9A1 1 0 0 0 4 3Zm2 1.831L17.15 12 6 19.168V4.831Z"  fillRule="nonzero"/></svg>
)
const AwardIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"/><path d="M15.658 12.889a1 1 0 0 1 1.101.745l.022.114 1.21 9.12a1 1 0 0 1-1.41 1.04l-.095-.05L12 21.165l-4.486 2.691A1 1 0 0 1 6 22.975l.009-.107 1.21-9.11a1 1 0 0 1 1.991.147l-.009.117-.937 7.053 3.222-1.932a1 1 0 0 1 .906-.063l.122.063 3.221 1.932-.936-7.063a1 1 0 0 1 .745-1.101l.114-.022Z"/></g></svg>
)
const SlidersIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M4 13a1 1 0 0 1 .993.883L5 14v7a1 1 0 0 1-1.993.117L3 21v-7a1 1 0 0 1 1-1ZM4 2a1 1 0 0 1 .993.883L5 3v7a1 1 0 0 1-1.993.117L3 10V3a1 1 0 0 1 1-1ZM12 11a1 1 0 0 1 .993.883L13 12v9a1 1 0 0 1-1.993.117L11 21v-9a1 1 0 0 1 1-1ZM12 2a1 1 0 0 1 .993.883L13 3v5a1 1 0 0 1-1.993.117L11 8V3a1 1 0 0 1 1-1ZM20 15a1 1 0 0 1 .993.883L21 16v5a1 1 0 0 1-1.993.117L19 21v-5a1 1 0 0 1 1-1ZM20 2a1 1 0 0 1 .993.883L21 3v9a1 1 0 0 1-1.993.117L19 12V3a1 1 0 0 1 1-1Z"/><path d="M7 13a1 1 0 0 1 .117 1.993L7 15H1a1 1 0 0 1-.117-1.993L1 13h6ZM15 7a1 1 0 0 1 .117 1.993L15 9H9a1 1 0 0 1-.117-1.993L9 7h6ZM23 15a1 1 0 0 1 .117 1.993L23 17h-6a1 1 0 0 1-.117-1.993L17 15h6Z"/></g></svg>
)
const CalendarIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M19 3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3ZM5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/><path d="M16 1a1 1 0 0 1 .993.883L17 2v4a1 1 0 0 1-1.993.117L15 6V2a1 1 0 0 1 1-1ZM8 1a1 1 0 0 1 .993.883L9 2v4a1 1 0 0 1-1.993.117L7 6V2a1 1 0 0 1 1-1ZM21 9a1 1 0 0 1 .117 1.993L21 11H3a1 1 0 0 1-.117-1.993L3 9h18Z"/></g></svg>
)
const EnterpriseIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M20.5 6.036h-16a2.5 2.5 0 0 0-2.5 2.5V18.66a2.5 2.5 0 0 0 2.5 2.5h16a2.5 2.5 0 0 0 2.5-2.5V8.536a2.5 2.5 0 0 0-2.5-2.5Zm-16 1h16a1.5 1.5 0 0 1 1.5 1.5V18.66a1.5 1.5 0 0 1-1.5 1.5h-16a1.5 1.5 0 0 1-1.5-1.5V8.536a1.5 1.5 0 0 1 1.5-1.5Z"/><path d="M14.5 2c1.326 0 2.41 1.04 2.495 2.352l.005.166V20.66a.5.5 0 0 1-.992.09L16 20.66V4.518c0-.793-.6-1.442-1.364-1.512L14.5 3h-4c-.781 0-1.425.605-1.494 1.38L9 4.518V20.66a.5.5 0 0 1-.992.09L8 20.66V4.518a2.51 2.51 0 0 1 2.336-2.513L10.5 2h4Z"/></g></svg>
)
const CreditCardIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M21.5 3h-18A2.5 2.5 0 0 0 1 5.5v12.143a2.5 2.5 0 0 0 2.5 2.5h18a2.5 2.5 0 0 0 2.5-2.5V5.5A2.5 2.5 0 0 0 21.5 3Zm-18 1h18A1.5 1.5 0 0 1 23 5.5v12.143a1.5 1.5 0 0 1-1.5 1.5h-18a1.5 1.5 0 0 1-1.5-1.5V5.5A1.5 1.5 0 0 1 3.5 4Z"/><path d="M23.5 9.054a.5.5 0 0 1 .09.992l-.09.008h-22a.5.5 0 0 1-.09-.992l.09-.008h22Z"/></g></svg>
)
const GiftIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M20.5 11.09a.5.5 0 0 1 .492.41l.008.09v10.089a.5.5 0 0 1-.41.492l-.09.008h-16a.5.5 0 0 1-.492-.41L4 21.678v-10.09a.5.5 0 0 1 .992-.09l.008.09v9.589h15v-9.589a.5.5 0 0 1 .41-.492l.09-.008Z"/><path d="M22.5 6.045h-20a.5.5 0 0 0-.5.5v5.044a.5.5 0 0 0 .5.5h20a.5.5 0 0 0 .5-.5V6.545a.5.5 0 0 0-.5-.5Zm-.5.999v4.045H3V7.044h19Z"/><path d="M12.5 6.045a.5.5 0 0 1 .492.41l.008.09v15.134a.5.5 0 0 1-.992.09l-.008-.09V6.545a.5.5 0 0 1 .5-.5Z"/><path d="M8 1C6.342 1 5 2.354 5 4.022c0 1.669 1.342 3.023 3 3.023h4.5a.5.5 0 0 0 .49-.598l-.047-.212a7.902 7.902 0 0 0-.034-.133l-.088-.316a10.211 10.211 0 0 0-.82-2.003C11.064 2.063 9.748 1 8 1Zm0 1c1.315 0 2.343.83 3.123 2.262l.164.317c.21.428.384.877.525 1.327l.042.138H8c-1.104 0-2-.904-2-2.022C6 2.904 6.896 2 8 2Z"/><path d="M17 1c-1.747 0-3.063 1.062-4.002 2.783-.317.583-.57 1.204-.764 1.824l-.055.18-.088.315-.061.249a4.232 4.232 0 0 0-.02.096.5.5 0 0 0 .49.598H17c1.658 0 3-1.354 3-3.023C20 2.354 18.658 1 17 1Zm0 1c1.104 0 2 .904 2 2.022l-.005.151A2.01 2.01 0 0 1 17 6.045l-3.855-.001.043-.138a9.229 9.229 0 0 1 .689-1.644C14.657 2.829 15.685 2 17 2Z"/></g></svg>
)
const ActivityIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.051 2.684c.29-.87 1.479-.91 1.85-.119l.048.119 5.05 15.154 2.052-6.154a1 1 0 0 1 .833-.677L18 11h4a1 1 0 0 1 .117 1.993L22 13h-3.28l-2.771 8.316c-.29.87-1.479.91-1.85.119l-.048-.119L9 6.161l-2.051 6.155a1 1 0 0 1-.833.677L6 13H2a1 1 0 0 1-.117-1.993L2 11h3.279l2.772-8.316Z" fillRule="nonzero"/></svg>
)
const BudgetIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 0a1 1 0 0 1 .993.883L13 1v22a1 1 0 0 1-1.993.117L11 23V1a1 1 0 0 1 1-1Z"/><path d="M17 4a1 1 0 0 1 .117 1.993L17 6H9.5a2.5 2.5 0 0 0-.164 4.995L9.5 11h5a4.5 4.5 0 0 1 .212 8.995L14.5 20H6a1 1 0 0 1-.117-1.993L6 18h8.5a2.5 2.5 0 0 0 .164-4.995L14.5 13h-5a4.5 4.5 0 0 1-.212-8.995L9.5 4H17Z"/></g></svg>
)

const companyOptions: OptionType[] = [
	{
        label: 'Carat',
        options: [
			{ label: 'Subway', value: 'Subway', icon: SubwayIcon },
			{ label: 'General Motors', value: 'General Motors', icon: GmIcon }
		]
	}
];
const loginOptions: OptionsType<OptionType> = [
    { value: 'vaonly', label: 'Log In with no access to the PMB'},
    { value: 'elsyonly', label: 'Log In no access to the VA platform'},
    { value: 'multiple', label: 'Log In with PMB and VA access with Multiple Advertisers'},
    { value: 'single', label: 'Log In with PMB and VA access with a Single Advertiser'}
];
// update this name
function Access() {
    const [company, setCompany] = React.useState<string | undefined>(localStorage.getItem('platformCompany') || '');
	const [navCollapsed, setNavCollapsed] = React.useState<string | null>(localStorage.getItem('navCollapsed') || 'open');
	const [login, setLogin] = React.useState<string | undefined>(localStorage.getItem('accessLogin') || 'yes');
	const [tier, setTier] = React.useState<string>(tierOptions[5].value);
	const [tierLabel, setTierLabel] = React.useState<string>(tierOptions[5].label);
	const [launchpad, setLaunchpad] = React.useState<string | null>(localStorage.getItem('accessLaunchpad'));
	const [selectedAdvertiser, setSelectedAdvertiser] = React.useState<string | undefined>(localStorage.getItem('platformCompany') || '');
	const [brandUI, setBrandUI] = React.useState<boolean>(true);
	const [brandUIaccess, setBrandUIaccess] = React.useState<boolean>(true);
	const [brandUIScreen, setBrandUIScreen] = React.useState<string>('dashboard');
	const [takeoverScreen, setTakeoverScreen] = React.useState<string>('reportview');
	const [VAaccess, setVAaccess] = React.useState<boolean>(true);
	const [pageTakeover, setPageTakeover] = React.useState<boolean>(false);
	const [vaUI, setVaUI] = React.useState<boolean>(false);
	const [singleAdvertiser, setSingleAdvertiser] = React.useState<string | undefined>(localStorage.getItem('singleAdvertiser') || '');
	
	const [expandPanelContent, setExpandPanelContent] = React.useState<boolean>(false);
	const [expandPanelAudience, setExpandPanelAudience] = React.useState<boolean>(true);
	const [expandPanelOutcome, setExpandPanelOutcome] = React.useState<boolean>(true);
	const [expandPanelMediaCurrency, setExpandPanelMediaCurrency] = React.useState<boolean>(true);
	const [expandPanelUpfront, setExpandPanelUpfront] = React.useState<boolean>(false);
	const [expandPanelPlan, setExpandPanelPlan] = React.useState<boolean>(false);
	const [expandPanelProducts, setExpandPanelProducts] = React.useState<boolean>(false);
	const [expandPanelAutomatedCampaign, setExpandPanelAutomatedCampaign] = React.useState<boolean>(false);
	const [expandPanelMPBReoptimization, setExpandPanelMPBReoptimization] = React.useState<boolean>(false);
	const [expandPanelCMRO, setExpandPanelCMRO] = React.useState<boolean>(true);
	const [expandPanelPostCampaign, setExpandPanelPostCampaign] = React.useState<boolean>(true);
	const [expandPanelMultiTouch, setExpandPanelMultiTouch] = React.useState<boolean>(false);
	const [expandPanelIncrementality, setExpandPanelIncrementality] = React.useState<boolean>(false);
	const [expandPanelAudiencesConfig, setExpandPanelAudiencesConfig] = React.useState<boolean>(false);
	const [expandPanelBudgets, setExpandPanelBudgets] = React.useState<boolean>(false);
	const [expandPanelMPBO, setExpandPanelMPBO] = React.useState<boolean>(true);
	const [expandPanelCampaigns, setExpandPanelCampaigns] = React.useState<boolean>(true);
	const [viewTab, setViewTab] = React.useState<string>('capabilities');
	const [viewPills, setViewPills] =  React.useState({
        pillViewAll: true,
        pillStrategy: false,
        pillPlanning: false,
        pillOptimization: false,
        pillMeasurement: false,
        pillConfiguration: false,
        pillData: false,
     });
	 const [viewTimelinePills, setViewTimelinePills] =  React.useState({
        timelineViewAll: true,
        timelineUpfront: false,
        timelineBudget: false,
        timeLineCampaigns: false,
     });

    const prevScrollY = React.useRef(0);

	const [scrolling, setScrolling] = React.useState(false);

	const onCompanyChange = (e: any): void => {
        setCompany(e.value);
		localStorage.setItem('platformCompany', e.value);
    };
	const onTierChange = (e: any): void => {
        setTier(e.value);
		setTierLabel(e.label);
		// localStorage.setItem('platformCompany', e.value);
		//reset panel expand/collapse positions
		setExpandPanelContent(false);
		setExpandPanelAudience(true);
		setExpandPanelMediaCurrency(true);
		setExpandPanelUpfront(false);
		setExpandPanelPlan(false);
		setExpandPanelProducts(false);
		setExpandPanelAutomatedCampaign(false);
		setExpandPanelMPBReoptimization(false);
		setExpandPanelMultiTouch(false);
		setExpandPanelIncrementality(false);
		setExpandPanelAudiencesConfig(false);
		setExpandPanelCMRO(true);
		setExpandPanelPostCampaign(true);
		setExpandPanelMPBO(true);
		setExpandPanelOutcome(true);
		
    };
	const onLogin = (e: any): void => {
        setLogin('yes');
		localStorage.setItem('accessLogin', 'yes');
    };
	const onLogout = (e: any): void => {
        setLogin('');
		localStorage.setItem('accessLogin', '');
    };
	const onUserOptionsChange = (e: any): void => {
        if (e.value = "2") {
			setLogin('');
			localStorage.setItem('accessLogin', '');
			setLaunchpad('launchpad');
		}
    };

	React.useEffect(() => {
		if (launchpad === null) {
			setLaunchpad('');
		// } else {
		// 	setLaunchpad(localStorage.getItem('accessLaunchpad'));
		}
		const handleScroll = () => {
			if (window.scrollY > 80) {
				setScrolling(true);
				console.log('scrolling');
			}
			if (window.scrollY <= 80) {
				setScrolling(false);
				console.log('top');
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrolling]);
	
	const history = useHistory();
    const { url } = useRouteMatch();
	function onGlobalNavClick(id: string): () => void {
        return (): void => {
			if (id === 'dashboard') {
				history.push(`${url}`)
				setBrandUIScreen('dashboard')
			} else {
				history.push(`${url}/${id}`);
				setBrandUIScreen(id)
			}
        };
    }
    const onClearAllDataClick = (): void => {
      localStorage.setItem('easyMode', '');
      localStorage.setItem('dataType', 'alldata');
      localStorage.setItem('newNotification', '');
      localStorage.setItem('newPixel', '');
      localStorage.setItem('platformCompany', '');
      window.location.reload();
    }
  	function handleNavCollapse(): void {
		  if (navCollapsed === 'collapsed') {
			localStorage.setItem('navCollapsed', 'open');
			setNavCollapsed('open');
		  } else {
			localStorage.setItem('navCollapsed', 'collapsed'); 
			setNavCollapsed('collapsed');
		  }
	  }
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
	const CaratIcon = (
		<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M30.745 30.171h-1v-3.89h1.22c1.35 0 2.24.67 2.24 1.8 0 1.37-.96 2.09-2.46 2.09m5.751-2.21c0-2.48-1.67-4.51-5.9-4.51h-4.002v13.681h3.151v-4.41h1.73l2.07 4.41h3.431l-2.8-5.25c1.46-.86 2.32-2.05 2.32-3.921M7.471 26.23c1.07 0 2.16.33 3.14.85l1.181-2.52c-.41-.27-2.07-1.271-4.35-1.271C3.01 23.29 0 26.28 0 30.321c0 4.02 3 7.011 7.441 7.011 1.55 0 3.17-.48 4.351-1.25l-1.18-2.53c-.97.54-2.11.85-3.13.85-2.541 0-4.121-1.56-4.121-4.08-.01-2.531 1.57-4.091 4.11-4.091m41.417-2.77v2.89h3.98v10.801h3.151V26.351H60v-2.89H48.888Zm-31.365 8.82 1.35-3.26 1.33 3.26h-2.68Zm-5.22 4.871h3.21l1.02-2.47h4.69l1.02 2.47h3.281L18.914 23l-6.612 14.152Zm30.374-4.87 1.35-3.261 1.33 3.26h-2.68Zm-5.22 4.87h3.21l1.02-2.47h4.69l1.02 2.47h3.281L44.068 23l-6.612 14.152Z" fillRule="nonzero"/></svg>
	)
	const ElsyIcon = (
		<svg aria-hidden="true" className="va-signal-icon_svg" data-ui="signal-icon_svg--Optimize" focusable="false" role="presentation" viewBox="0 0 24 23"><g><g className="optimize" fill="none" fillRule="evenodd" stroke="none" stroke-width="1"><g fill="currentColor" fill-rule="nonzero" id="elsy"><circle cx="1.81" cy="1.81" id="Oval" r="1.81"></circle><circle cx="12" cy="1.81" id="Oval-Copy-10" r="1.81"></circle><circle cx="6.905" cy="1.81" id="Oval-Copy-5" r="1.81"></circle><circle cx="17.095" cy="1.81" id="Oval-Copy-11" r="1.81"></circle><circle cx="22.19" cy="1.81" id="Oval-Copy-20" r="1.81"></circle><circle cx="1.81" cy="6.637" id="Oval-Copy" r="1.81"></circle><circle cx="12" cy="6.637" id="Oval-Copy-12" r="1.81"></circle><circle cx="6.905" cy="6.637" id="Oval-Copy-6" r="1.81"></circle><circle cx="17.095" cy="6.637" id="Oval-Copy-13" r="1.81"></circle><circle cx="22.19" cy="6.637" id="Oval-Copy-21" r="1.81"></circle><circle cx="1.81" cy="11.464" id="Oval-Copy-2" r="1.81"></circle><circle cx="12" cy="11.464" id="Oval-Copy-14" r="1.81"></circle><circle cx="6.905" cy="11.464" id="Oval-Copy-7" r="1.81"></circle><circle cx="17.095" cy="11.464" id="Oval-Copy-15" r="1.81"></circle><circle cx="22.19" cy="11.464" id="Oval-Copy-22" r="1.81"></circle><circle cx="1.81" cy="16.291" id="Oval-Copy-3" r="1.81"></circle><circle cx="12" cy="16.291" id="Oval-Copy-16" r="1.81"></circle><circle cx="6.905" cy="16.291" id="Oval-Copy-8" r="1.81"></circle><circle cx="17.095" cy="16.291" id="Oval-Copy-17" r="1.81"></circle><circle cx="22.19" cy="16.291" id="Oval-Copy-23" r="1.81"></circle><circle cx="1.81" cy="21.117" id="Oval-Copy-4" r="1.81"></circle><circle cx="12" cy="21.117" id="Oval-Copy-18" r="1.81"></circle><circle cx="6.905" cy="21.117" id="Oval-Copy-9" r="1.81"></circle><circle cx="17.095" cy="21.117" id="Oval-Copy-19" r="1.81"></circle><circle cx="22.19" cy="21.117" id="Oval-Copy-24" r="1.81"></circle></g></g></g></svg>
	)
	const DollarIcon = (
		<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 0a1 1 0 0 1 .993.883L13 1v22a1 1 0 0 1-1.993.117L11 23V1a1 1 0 0 1 1-1Z"/><path d="M17 4a1 1 0 0 1 .117 1.993L17 6H9.5a2.5 2.5 0 0 0-.164 4.995L9.5 11h5a4.5 4.5 0 0 1 .212 8.995L14.5 20H6a1 1 0 0 1-.117-1.993L6 18h8.5a2.5 2.5 0 0 0 .164-4.995L14.5 13h-5a4.5 4.5 0 0 1-.212-8.995L9.5 4H17Z"/></g></svg>
	)
	
	// React.useEffect(() => {
	// 	// setLaunchpad(localStorage)
	// 	if (launchpad === null) {
	// 		setLaunchpad('launchpad');
	// 	} else {
	// 		setLaunchpad(localStorage.getItem('accessLaunchpad'));
	// 	}
    //     // if(company === '' || company === undefined) {
    //     //     localStorage.setItem('platformCompany', 'Dunder Mifflin');
    //     // }
    // }, []);
	const onAdvertiserChange = (e: any): void => {
        setSelectedAdvertiser(e.value);
		setCompany(e.value);
		localStorage.setItem('platformCompany', e.value);
        // setNewPixel({...newPixel, dataType: e.value});
    };
	function toggleExpandPanelContent(): void {
		if (!expandPanelContent) {
			setExpandPanelContent(true);
		} else {
			setExpandPanelContent(false);
		}
	}
	function toggleExpandPanelAudience(): void {
		if (!expandPanelAudience) {
			setExpandPanelAudience(true);
		} else {
			setExpandPanelAudience(false);
		}
	}
	function toggleExpandPanelOutcome(): void {
		if (!expandPanelOutcome) {
			setExpandPanelOutcome(true);
		} else {
			setExpandPanelOutcome(false);
		}
	}
	function toggleExpandPanelMediaCurrency(): void {
		if (!expandPanelMediaCurrency) {
			setExpandPanelMediaCurrency(true);
		} else {
			setExpandPanelMediaCurrency(false);
		}
	}
	function toggleExpandPanelUpfront(): void {
		if (!expandPanelUpfront) {
			setExpandPanelUpfront(true);
		} else {
			setExpandPanelUpfront(false);
		}
	}
	function toggleExpandPanelPlan(): void {
		if (!expandPanelPlan) {
			setExpandPanelPlan(true);
		} else {
			setExpandPanelPlan(false);
		}
	}
	function toggleExpandPanelProducts(): void {
		if (!expandPanelProducts) {
			setExpandPanelProducts(true);
		} else {
			setExpandPanelProducts(false);
		}
	}
	function toggleExpandPanelAutomatedCampaign(): void {
		if (!expandPanelAutomatedCampaign) {
			setExpandPanelAutomatedCampaign(true);
		} else {
			setExpandPanelAutomatedCampaign(false);
		}
	}
	function toggleExpandPanelMPBReoptimization(): void {
		if (!expandPanelMPBReoptimization) {
			setExpandPanelMPBReoptimization(true);
		} else {
			setExpandPanelMPBReoptimization(false);
		}
	}
	function toggleExpandPanelCMRO(): void {
		if (!expandPanelCMRO) {
			setExpandPanelCMRO(true);
		} else {
			setExpandPanelCMRO(false);
		}
	}
	function toggleExpandPanelPostCampaign(): void {
		if (!expandPanelPostCampaign) {
			setExpandPanelPostCampaign(true);
		} else {
			setExpandPanelPostCampaign(false);
		}
	}
	function toggleExpandPanelMultiTouch(): void {
		if (!expandPanelMultiTouch) {
			setExpandPanelMultiTouch(true);
		} else {
			setExpandPanelMultiTouch(false);
		}
	}
	function toggleExpandPanelIncrementality(): void {
		if (!expandPanelIncrementality) {
			setExpandPanelIncrementality(true);
		} else {
			setExpandPanelIncrementality(false);
		}
	}
	function toggleExpandPanelAudiencesConfig(): void {
		if (!expandPanelAudiencesConfig) {
			setExpandPanelAudiencesConfig(true);
		} else {
			setExpandPanelAudiencesConfig(false);
		}
	}
	function toggleExpandPanelBudgets(): void {
		if (!expandPanelBudgets) {
			setExpandPanelBudgets(true);
		} else {
			setExpandPanelBudgets(false);
		}
	}
	function toggleExpandPanelMPBO(): void {
		if (!expandPanelMPBO) {
			setExpandPanelMPBO(true);
		} else {
			setExpandPanelMPBO(false);
		}
	}
	function toggleExpandPanelCampaigns(): void {
		if (!expandPanelCampaigns) {
			setExpandPanelCampaigns(true);
		} else {
			setExpandPanelCampaigns(false);
		}
	}
	function backToLaunchpad(): void {
		setLaunchpad('launchpad');
		localStorage.setItem('accessLaunchpad', '');
	}
	const onAdvertiserOptionChange = (e: any): void => {
		if (e.value === 'single' || e.value === 'multiple') {
			setSingleAdvertiser(e.value);
			localStorage.setItem('singleAdvertiser', e.value);
			setBrandUIaccess(true);
			setVAaccess(true);
			setBrandUI(true);
		} else if (e.value === 'vaonly') {
			setBrandUIaccess(false);
			setBrandUI(false);
			setVAaccess(true);
			setLaunchpad('launchpad');
		} else {
			setVAaccess(false);
			setLaunchpad('');
			setBrandUI(true);
		}
		
    };
	function onFilterViewAll(): void {
		
			setViewPills({
				...viewPills, 
				pillViewAll: true,
				pillStrategy: false,
				pillPlanning: false,
				pillOptimization: false,
				pillMeasurement: false,
				pillConfiguration: false,
				pillData: false,
			})
	}
	function onTimelineViewAll(): void {
		setViewTimelinePills({
			...viewTimelinePills,
			timelineViewAll: true,
			timelineBudget: false,
			timeLineCampaigns: false,
			timelineUpfront: false
		})
	}
	function onFilterButtonSelect(item:string): any {
		if (item === 'strategy') {
			if ( viewPills.pillPlanning && viewPills.pillOptimization && viewPills.pillMeasurement && viewPills.pillConfiguration && viewPills.pillData) {
				onFilterViewAll();
			} else if (!viewPills.pillViewAll && viewPills.pillStrategy && !viewPills.pillPlanning && !viewPills.pillOptimization && !viewPills.pillMeasurement && !viewPills.pillConfiguration && !viewPills.pillData){
				onFilterViewAll();
			} else {
				setViewPills({...viewPills, pillStrategy: !viewPills.pillStrategy, pillViewAll: false});
			}
		}
		if (item === 'planning') {
			if ( viewPills.pillStrategy && viewPills.pillOptimization && viewPills.pillMeasurement && viewPills.pillConfiguration && viewPills.pillData) {
				onFilterViewAll();
			} else if (!viewPills.pillViewAll && !viewPills.pillStrategy && viewPills.pillPlanning && !viewPills.pillOptimization && !viewPills.pillMeasurement && !viewPills.pillConfiguration && !viewPills.pillData){
				onFilterViewAll();
			} else {
				setViewPills({...viewPills, pillPlanning: !viewPills.pillPlanning, pillViewAll: false});
			}
		}
		if (item === 'optimization') {
			if ( viewPills.pillStrategy && viewPills.pillPlanning && viewPills.pillMeasurement && viewPills.pillConfiguration && viewPills.pillData) {
				onFilterViewAll();
			} else if (!viewPills.pillViewAll && !viewPills.pillStrategy && !viewPills.pillPlanning && viewPills.pillOptimization && !viewPills.pillMeasurement && !viewPills.pillConfiguration && !viewPills.pillData){
				onFilterViewAll();
			} else {
				setViewPills({...viewPills, pillOptimization: !viewPills.pillOptimization, pillViewAll: false});
			}
		}
		if (item === 'measurement') {
			if ( viewPills.pillStrategy && viewPills.pillPlanning && viewPills.pillOptimization && viewPills.pillConfiguration && viewPills.pillData) {
				onFilterViewAll();
			} else if (!viewPills.pillViewAll && !viewPills.pillStrategy && !viewPills.pillPlanning && !viewPills.pillOptimization && viewPills.pillMeasurement && !viewPills.pillConfiguration && !viewPills.pillData){
				onFilterViewAll();
			} else {
				setViewPills({...viewPills, pillMeasurement: !viewPills.pillMeasurement, pillViewAll: false});
			}
		}
		if (item === 'configuration') {
			if ( viewPills.pillStrategy && viewPills.pillPlanning && viewPills.pillOptimization && viewPills.pillMeasurement && viewPills.pillData) {
				onFilterViewAll();
			} else if (!viewPills.pillViewAll && !viewPills.pillStrategy && !viewPills.pillPlanning && !viewPills.pillOptimization && !viewPills.pillMeasurement && !viewPills.pillData && viewPills.pillConfiguration){
				onFilterViewAll();
			} else {
				setViewPills({...viewPills, pillConfiguration: !viewPills.pillConfiguration, pillViewAll: false});
			}
		}
		if (item === 'data') {
			if ( viewPills.pillStrategy && viewPills.pillPlanning && viewPills.pillOptimization && viewPills.pillMeasurement && viewPills.pillConfiguration) {
				onFilterViewAll();
			} else if (!viewPills.pillViewAll && !viewPills.pillStrategy && !viewPills.pillPlanning && !viewPills.pillOptimization && !viewPills.pillMeasurement && !viewPills.pillConfiguration && viewPills.pillData){
				onFilterViewAll();
			} else {
				setViewPills({...viewPills, pillData: !viewPills.pillData, pillViewAll: false});
			}
		}
	}
	function onTimelineFilterButtonSelect(item:string): any {
		if (item === 'upfront') {
			if ( viewTimelinePills.timelineBudget && viewTimelinePills.timeLineCampaigns) {
				onTimelineViewAll();
			} else if (!viewTimelinePills.timelineViewAll && viewTimelinePills.timelineUpfront && !viewTimelinePills.timelineBudget && !viewTimelinePills.timeLineCampaigns){
				onTimelineViewAll();
			} else {
				setViewTimelinePills({...viewTimelinePills, timelineUpfront: !viewTimelinePills.timelineUpfront, timelineViewAll: false});
			}
		}
		if (item === 'budgets') {
			if ( viewTimelinePills.timelineUpfront && viewTimelinePills.timeLineCampaigns) {
				onTimelineViewAll();
			} else if (!viewTimelinePills.timelineViewAll && !viewTimelinePills.timelineUpfront && viewTimelinePills.timelineBudget && !viewTimelinePills.timeLineCampaigns){
				onTimelineViewAll();
			} else {
				setViewTimelinePills({...viewTimelinePills, timelineBudget: !viewTimelinePills.timelineBudget, timelineViewAll: false});
			}
		}
		if (item === 'campaigns') {
			if ( viewTimelinePills.timelineUpfront && viewTimelinePills.timelineBudget) {
				onTimelineViewAll();
			} else if (!viewTimelinePills.timelineViewAll && !viewTimelinePills.timelineUpfront && !viewTimelinePills.timelineBudget && viewTimelinePills.timeLineCampaigns){
				onTimelineViewAll();
			} else {
				setViewTimelinePills({...viewTimelinePills, timeLineCampaigns: !viewTimelinePills.timeLineCampaigns, timelineViewAll: false});
			}
		}
	}
	function onCapabilitiesExpandAll(): any {
		setExpandPanelContent(true);
		setExpandPanelAudience(true);
		setExpandPanelMediaCurrency(true);
		setExpandPanelUpfront(true);
		setExpandPanelPlan(true);
		setExpandPanelProducts(true);
		setExpandPanelAutomatedCampaign(true);
		setExpandPanelMPBReoptimization(true);
		setExpandPanelMultiTouch(true);
		setExpandPanelIncrementality(true);
		setExpandPanelAudiencesConfig(true);
		setExpandPanelOutcome(true);
		setExpandPanelBudgets(true);
		setExpandPanelCMRO(true);
		setExpandPanelPostCampaign(true);
		setExpandPanelMPBO(true);
	}
	function onCapabilitiesCollapseAll(): any {
		setExpandPanelContent(false);
		setExpandPanelAudience(false);
		setExpandPanelMediaCurrency(false);
		setExpandPanelUpfront(false);
		setExpandPanelPlan(false);
		setExpandPanelProducts(false);
		setExpandPanelAutomatedCampaign(false);
		setExpandPanelMPBReoptimization(false);
		setExpandPanelMultiTouch(false);
		setExpandPanelIncrementality(false);
		setExpandPanelAudiencesConfig(false);
		setExpandPanelOutcome(false);
		setExpandPanelBudgets(false);
		setExpandPanelCMRO(false);
		setExpandPanelPostCampaign(false);
		setExpandPanelMPBO(false);
	}
	function onTimelineExpandAll(): any {
		setExpandPanelBudgets(true);
		setExpandPanelCampaigns(true);
	}
	function onTimelineCollapseAll(): any {
		setExpandPanelBudgets(false);
		setExpandPanelCampaigns(false);
	}
	
return (
  <div className={cx("access-container ", {"scrolling" : scrolling})}>
    <PrototypeBar name="VA Platform and Brand UI Access Prototpye" >
		{/* <Button onClick={onClearAllDataClick}>Clear All Data</Button> */}
		<Select 
				className='login-options'
				options={tierOptions}
				placeholder="Choose an Tier"
				selectType={SelectType.Compact}
				style={{ width: '10rem' }}
				onChange={onTierChange}
				defaultValue={tierOptions[5]}
			/>
		<Select 
				className='login-options'
				options={loginOptions}
				placeholder="Choose an option"
				selectType={SelectType.Compact}
				style={{ width: '14rem' }}
				onChange={onAdvertiserOptionChange}
			/>
    </PrototypeBar>
	{login === '' && (
		<div className='login-container'>
			<Signal icon={VideoAmp} size={4} />
			<div className='login-title'>VideoAmp Platform</div>
			<Select 
				className='login-options'
				options={loginOptions}
				placeholder="Simulate a login experience"
				onChange={onAdvertiserOptionChange}
			/>
		<Button disabled={singleAdvertiser===''} isFullWidth onClick={onLogin}>Login</Button>
		</div>
	)}
	{login != '' && (
		<>
			{(launchpad === 'launchpad' ) && (
				<>
					<div className='launchpad-container'>
						<div className='launchpad-header'>
							<Signal icon={VideoAmp} size={2} />
							<IconButton 
								icon={Power} 
								size="1.5rem" 
								onClick={onLogout} 
								tooltip={
									<span>
										Logout
									</span>
								}
								tooltipPosition={TooltipPosition.Left}
							/>
						</div>
						<div className='launchpad-tiles'>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={Measure} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Measure</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Measure and optimize your investment to meet your business objective</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={Plan} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Plan</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Maximize the effectiveness of your potential investment in order to reach your audience</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={PlayCircle} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Buy</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Negotiate and execute your linear TV investment</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={Allocation} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Allocate</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Make your bought inventory go further to meet your goals and reach your audience</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={Reports} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Reports</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Understand where your investment is going and how it is performing</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={AudiencesIcon} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Audiences</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Curate and discover advanced audiences using first and third-party data</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={Book} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Library</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Store and manage your library of assets and pixels</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a className="va-tile va-tile-default " data-ui="va-launchpad_tile--initiatives" href="javascript:void(0)" >
								<Signal size='30px' icon={Organization} />
								<div className="va-tile-content">
									<header><h4 className="va-tile-title">Organization</h4></header>
									<div className="va-tile-description">
										<p className="va-tile-description_container">Onboard and manage users, permissions, and your organization structure</p>
										<div className="launch">
											<button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
											<div className="arrow-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
													</defs>
													<g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
													<defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
													<defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
													<g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
													<g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</a>
							
						</div>

						{brandUIaccess && (
							<div className="va-tile va-tile-wide light">
								<div className='va-tile-left'>
									<Signal size='42px' icon={ElsyIcon} />
									<div className="va-tile-content">
										<header><h4 className="va-tile-title">Platform for Media Buyers</h4></header>
										<div className="va-tile-description">
											<p className="va-tile-description_container">Improve campaign performance through share shifting &amp; plan optimizations</p>
										</div>
									</div>
								</div>
								<div className={cx('va-tile-right', {'va-tile-right-single': singleAdvertiser==='single'})}>
									{singleAdvertiser==='single' ? (
										<>
											<div className='advertiser-selection-right'>
												<div className='va-form-label single-advertiser-label'>
													<div className="va-container-label inline-block ">Demo Time <Signal icon={ForwardArrow} size={0.5} /></div>
												</div>
												<Button 
													onClick={():void => (
														setLaunchpad(''), 
														setBrandUI(true), 
														localStorage.setItem('accessLaunchpad', ''),  
														setSelectedAdvertiser('Demo Time'),
														setCompany('VideoAmp'),
														localStorage.setItem('platformCompany', 'Demo Time')
													)}>Let's Go</Button>
											</div>
										</>
										
									) : (
										<>
											<div className='advertiser-selection-left'>
												<Select
													label='Choose an Advertiser'
													inlineLabel={true}
													options={advertiserOptions}
													onChange={onAdvertiserChange}
													menuPlacement="top"
													defaultValue={advertiserOptions[advertiserOptions.map((o:any) => o.value).indexOf(selectedAdvertiser)]}
													isSearchable
												/>
											</div>
											<div className='advertiser-selection-right'>
												<Button className='va-btn-tall' disabled={selectedAdvertiser === ''} onClick={():void => (setLaunchpad(''), setBrandUI(true), localStorage.setItem('accessLaunchpad', '') )}>Let's Go</Button>
											</div>
										</>
									)}
									
								</div>
							</div>
						)}
						
					</div>
				</>
			)
			}
			{(launchpad === '' && !brandUI && vaUI) && (
				<>
				<GlobalNavBar 
					className={cx({'carat': company === 'Subway' || company === 'General Motors'})}
					company={company} 
					companyOptions={companyOptions} 
					companyDefaultOption={companyOptions[0].options[companyOptions[0].options.map((o:any) => o.value).indexOf(company)]}
					onChange={onCompanyChange}
					hasInputIcon
					hasAgencyLogo
					inputIcon={company === 'Subway' ? SubwayIcon : GmIcon}
					agencyLogo={CaratIcon}
					userOptions={userOptions}
					elsyLogoClick={():void => setBrandUIScreen('dashboard')}
				/>
				
				<div className="dashboard-container">
					<div className={cx(
								"nav-bar", 
								{"nav-bar--collapsed" : navCollapsed === 'collapsed'}
					)}>
							<div className={cx("nav-items-container", {"nav-items-container--collapsed" : navCollapsed === 'collapsed'})}>
									<Tooltip
										className={cx("nav-bar-tooltip", {"tooltip-hidden": navCollapsed === 'open'})}
										content={navCollapsed === 'collapsed' ? (<><span>Dashboard</span></>) : ""}
										hasArrow={false}
										placement={TooltipPosition.Right}
										showDelayTime={250}
									>
										<NavLink exact={true} activeClassName='nav-item-selected' to={url}>
										<div className="nav-item ">
											<div className="nav-item-content">
												<Signal icon={DashboardIcon} size={1.5} />
												<div className="nav-item-label">Dashboard</div>
											</div>
										</div>
										</NavLink>
									</Tooltip>
									<Tooltip
										className={cx("nav-bar-tooltip", {"tooltip-hidden": navCollapsed === 'open'})}
										content={navCollapsed === 'collapsed' ? (<><span>Upfront Management</span><span className="nav-item-sub-label">Create and manage your Upfront scenarios.</span></>) : ""}
										hasArrow={false}
										placement={TooltipPosition.Right}
										showDelayTime={250}
									>
										<NavLink exact={true} activeClassName='nav-item-selected' to={`${url}/upfront`}>
										<div className="nav-item">
											<div className="nav-item-content">
												<Signal icon={Plan} size={1.5} />
												<div className="nav-item-label">Upfront Management</div>
											</div>
										</div>
										</NavLink>
									</Tooltip>
									
									<Tooltip
										className={cx("nav-bar-tooltip", {"tooltip-hidden": navCollapsed === 'open'})}
										content={navCollapsed === 'collapsed' ? (<><span>Campaign Management</span><span className="nav-item-sub-label">Create and measure campaigns.</span></>) : ""}
										hasArrow={false}
										placement={TooltipPosition.Right}
										showDelayTime={250}
									>
										<NavLink exact={true} activeClassName='nav-item-selected' to={`${url}/campaigns`}>
										<div className="nav-item">
											<div className="nav-item-content">
												<Signal icon={Measure} size={1.5} />
												<div className="nav-item-label">Campaign Management</div>
											</div>
										</div>
										</NavLink>
									</Tooltip>
									<Tooltip
										className={cx("nav-bar-tooltip", {"tooltip-hidden": navCollapsed === 'open'})}
										content={navCollapsed === 'collapsed' ? (<><span>Audiences</span><span className="nav-item-sub-label">Create and discover advanced audiences.</span></>) : ""}
										hasArrow={false}
										placement={TooltipPosition.Right}
										showDelayTime={250}
									>
										<NavLink exact={true} activeClassName='nav-item-selected' to={`${url}/audiences`}>
										<div className="nav-item">
											<div className="nav-item-content">
											<Signal icon={AudiencesIcon} size={1.5} />
											<div className="nav-item-label">Audiences </div>
											</div>
										</div>
										</NavLink>
									</Tooltip>
									{/* <Tooltip
										className={cx("nav-bar-tooltip", {"tooltip-hidden": navCollapsed === 'open'})}
										content={navCollapsed === 'collapsed' ? (<><span>Reports</span><span className="nav-item-sub-label">Analyze data from your investments.</span></>) : ""}
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
									</Tooltip> */}
									<Tooltip
										className={cx("nav-bar-tooltip", {"tooltip-hidden": navCollapsed === 'open'})}
										content={navCollapsed === 'collapsed' ? (<><span>Data Management</span><span className="nav-item-sub-label">Store and manage your data assets.</span></>) : ""}
										hasArrow={false}
										placement={TooltipPosition.Right}
										showDelayTime={250}
									>
										<NavLink exact={true} activeClassName='nav-item-selected' to={`${url}/data`}>
										<div className="nav-item">
											<div className="nav-item-content">
												<Signal icon={DatabaseIcon} size={1.5} />
												<div className="nav-item-label">Data Management</div>
											</div>
										</div>
										</NavLink>
									</Tooltip>
									<Tooltip
										className={cx("nav-bar-tooltip", {"tooltip-hidden": navCollapsed === 'open'})}
										content={navCollapsed === 'collapsed' ? (<><span>Settings</span><span className="nav-item-sub-label">Edit your settings.</span></>) : ""}
										hasArrow={false}
										placement={TooltipPosition.Right}
										showDelayTime={250}
									>
										<NavLink exact={true} activeClassName='nav-item-selected' to={`${url}/settings`}>
										<div className="nav-item">
											<div className="nav-item-content">
												<Signal icon={GearIcon} size={1.5} />
												<div className="nav-item-label">Settings</div>
											</div>
										</div>
										</NavLink>
									</Tooltip>
							
							<div className={cx("collapse-button-container", {"collapse-button-container-expand": navCollapsed === 'collapsed'})}>
							<Tooltip
									content={navCollapsed === 'collapsed' ? "Expand" : "Collapse"}
									hasArrow={false}
									placement={TooltipPosition.Right}
									showDelayTime={250}
								>
								<IconButton className={cx("collapse-icon", {"icon-expand" : navCollapsed === 'collapsed'})} icon={ChevronDown} onClick={handleNavCollapse} />
								
							</Tooltip>
							</div>
						</div>
					</div>
				
				</div>
				</>
			)
			}
			{(launchpad === '' && brandUI) && (
				<div className='brand-ui-container'>
					<GlobalNavBar 
						className={cx({'carat': company === 'Subway' || company === 'General Motors'})}
						company={selectedAdvertiser} 
						companyOptions={advertiserOptions} 
						companyDefaultOption={advertiserOptions[advertiserOptions.map((o:any) => o.value).indexOf(selectedAdvertiser)]}
						onChange={onAdvertiserChange}
						brandUI
						userOptionsChange={onUserOptionsChange}
						logoClick={backToLaunchpad}
						// elsyLogoClick={():void => setBrandUIScreen('dashboard')}
						elsyLogoClick={onGlobalNavClick('dashboard')}
						hasSwitcher={singleAdvertiser != "single"}
						singleAdvertiser={selectedAdvertiser}
						hasLaunchpadLink={VAaccess}
						// campaignsClick={():void => setBrandUIScreen('campaigns')}
						campaignsClick={onGlobalNavClick('campaigns')}
						campaignSection={brandUIScreen === 'campaigns' || brandUIScreen === 'viewcampaign'}
						// reportsClick={():void => setBrandUIScreen('reports')}
						reportsClick={onGlobalNavClick('reports')}
						reportsSection={brandUIScreen === 'reports' || brandUIScreen === 'viewreport'}
						// hasInputIcon
						
						// inputIcon={company === 'Subway' ? SubwayIcon : GmIcon}
						// agencyLogo={CaratIcon}
					/>
					<Switch>
						<Route exact path={url}>
							{/* <Dashboard company={company} /> */}
						
					<div className='brand-ui-content-container'>
						{brandUIScreen === 'dashboard' && (
						<div className='dashboard-container'>
							
							<div className='dashboard-content'>
								<div className='brand-ui-main'>
									<div className='brand-ui-header'>
										<div className='brand-ui-header-container'>
											<div>
											<span className='tier-label'>{tierLabel} </span>
											{/* {tier === 'MOPro' ? (
												<span className='tier-label'>Media Optimization {tier === 'MOPro' && <span>Pro</span>}</span>
												) : (
												<span className='tier-label'>Media Currency {tier} </span>
												)
											} */}
											<h1 className='u-title-2'>{selectedAdvertiser}</h1>
											</div>
										</div>
										<ul className='va-tabs dashboard-tabs' role='tablist'>
											<li className={cx('va-tab-item', { 'va-tab-item--active': viewTab === 'timeline'})}>
												<a href="javascript:Void(0)" className='va-tab-item__link' role='tab' onClick={(): void => setViewTab('timeline')}>Timeline</a>
											</li>
											<li className={cx('va-tab-item', { 'va-tab-item--active': viewTab === 'capabilities'})}>
												<a href="javascript:Void(0)" className='va-tab-item__link' role='tab' onClick={(): void => setViewTab('capabilities')}>Capabilities <span className='badge-new'>New</span></a>
											</li>
											
										</ul>
									</div>
									
									{viewTab === 'capabilities' && (
									<section className='tab-content' role='tabpanel'>
										<div className='panels-container'>
											<div className={cx('filter-buttons-container', {"scrolling" : scrolling})}>
												<div className='filter-buttons-left'>
													<button className={cx('filter-button', {'selected': viewPills.pillViewAll})} onClick={onFilterViewAll}>View All</button>
													<button className={cx('filter-button', {'selected': viewPills.pillStrategy})} onClick={(): void => onFilterButtonSelect('strategy')}>Strategy &amp; Research</button>
													<button className={cx('filter-button', {'selected': viewPills.pillPlanning})} onClick={(): void => onFilterButtonSelect('planning')}>Planning</button>
													{(tier != 'MOLite' && tier != 'MOPlus') && 
														<button className={cx('filter-button', {'selected': viewPills.pillMeasurement})} onClick={(): void => onFilterButtonSelect('measurement')}>Measurement</button>
													}
													<button className={cx('filter-button', {'selected': viewPills.pillOptimization})} onClick={(): void => onFilterButtonSelect('optimization')}>Optimization</button>
													<button className={cx('filter-button', {'selected': viewPills.pillConfiguration})} onClick={(): void => onFilterButtonSelect('configuration')}>Configuration</button>
													{(tier === 'MOPro' || tier==='MOPlus') && (
														<button className={cx('filter-button', {'selected': viewPills.pillData})} onClick={(): void => onFilterButtonSelect('data')}>Data Integration</button>
													)}
												</div>
												<div className='filter-buttons-right'>
													{(
														expandPanelContent && 
														expandPanelAudience && 
														expandPanelMediaCurrency && 
														expandPanelUpfront && 
														expandPanelPlan && 
														expandPanelProducts && 
														expandPanelAutomatedCampaign && 
														expandPanelMPBReoptimization && 
														expandPanelMultiTouch && 
														expandPanelIncrementality && 
														expandPanelAudiencesConfig && 
														expandPanelBudgets && 
														expandPanelCMRO && 
														expandPanelPostCampaign &&
														expandPanelMPBO
													) ? (
														<Button theme={ButtonTheme.Link} onClick={onCapabilitiesCollapseAll}>Collapse All</Button>
													) : <Button theme={ButtonTheme.Link} onClick={onCapabilitiesExpandAll}>Expand All</Button>

													}
												</div>
												
											</div>
											{(viewPills.pillViewAll || viewPills.pillStrategy) && (<>
												{(tier==='MOLite' || tier==='MOPlus' || tier==='MOPro') && (
													<>
														<div className='panel-category'>Strategy &amp; Research</div>
														<ExpandPanel
															panelTitle='Partner Library'
															isExpanded={expandPanelContent}
															onExpand={toggleExpandPanelContent}
															headerIcon={AwardIcon}
															iconClass="expand-icon-blue"
															expandButtonText={(expandPanelContent ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value panel-metric-value-md'><a href="javascript:void(0)">126</a></div>
																			<span className='panel-metric-label'>
																				Media Vehicles
																			</span>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-value panel-metric-value-md'><a href="javascript:void(0)">29,022</a></div>
																			<span className='panel-metric-label'>
																				Inventory Sources
																			</span>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-value panel-metric-value-md'><a href="javascript:void(0)">49,120</a></div>
																			<span className='panel-metric-label'>
																				Locations
																			</span>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-value panel-metric-value-md'><a href="javascript:void(0)">577</a></div>
																			<span className='panel-metric-label'>
																				Audiences
																			</span>
																		</div>
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<img src={partnerLibrary} alt="Partner Library" />
														</ExpandPanel>
														
													</>
												)}
												{(tier==='Baseline' || tier==='Plus' || tier==='Pro') && (
													<>
														<div className='panel-category'>Strategy &amp; Research</div>
														<ExpandPanel
															panelTitle='Content Measurement for Premium Video'
															isExpanded={expandPanelContent}
															onExpand={toggleExpandPanelContent}
															headerIcon={AwardIcon}
															iconClass="expand-icon-blue"
															expandButtonText={(expandPanelContent ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">7</a> <span className='panel-metric-label'>Content Measurement Reports</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Report</span>
																			<span className='panel-metric-label'>
																				<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('card'))}>CM Report Name that is a realistic length</a>
																			</span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Recently Viewed</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">CM Dashboard Name</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('card'))}><img src={contentMeasurementExpanded} alt="Content Measurement" /></a>
														</ExpandPanel>
													</>
												)}
											</>)}
											{(viewPills.pillViewAll || viewPills.pillMeasurement) && (<>
												{(tier==='MOPro') && (
													<>
														<div className='panel-category'>Audience Measurement</div>
														<ExpandPanel
															contentNoPadding
															panelTitle='Audience Measurement Reporting'
															isExpanded={expandPanelAudience}
															onExpand={toggleExpandPanelAudience}
															headerIcon={AudiencesIcon}
															expandButtonText={(expandPanelAudience ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">30</a> <span className='panel-metric-label'>Measurement Reports</span></div>
																		</div>
																		{/* <div className='panel-metric'>
																			<div className='panel-metric-value'>2 <span className='panel-metric-label'>Local TV Audience Measurement Insights</span></div>
																		</div> */}
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Report</span>
																			<span className='panel-metric-label'>
																				<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('audmeasurementlatest'))}>Master Demo Initiative</a>
																			</span>
																		</div>
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('audmeasurementlatest'))}><img src={audienceMeasurementReporting} alt="Audience Measurement" /></a>
														</ExpandPanel>

														<div className='panel-category'>Outcome Measurement</div>
														<ExpandPanel
															contentNoPadding
															panelTitle='Outcome Measurement Reporting'
															isExpanded={expandPanelOutcome}
															onExpand={toggleExpandPanelOutcome}
															headerIcon={ActivityIcon}
															expandButtonText={(expandPanelOutcome ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">30</a> <span className='panel-metric-label'>Measurement Reports</span></div>
																		</div>
																		{/* <div className='panel-metric'>
																			<div className='panel-metric-value'>2 <span className='panel-metric-label'>Local TV Audience Measurement Insights</span></div>
																		</div> */}
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Report</span>
																			<span className='panel-metric-label'>
																				<a href="javascript:void(0)">Attribution Report (Master Demo Initiative)</a>
																			</span>
																		</div>
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															{/* <a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('audmeasurementlatest'))}> */}
																<img src={outcomeMeasurement} alt="Outcome Measurement" />
																{/* </a> */}
														</ExpandPanel>

														
													</>
												)}
												{(tier==='Baseline' || tier==='Plus' || tier==='Pro') && (
													<>
														<div className='panel-category'>Advertising Audience Measurement</div>
														<ExpandPanel
															panelTitle='Audience Measurement'
															isExpanded={expandPanelAudience}
															onExpand={toggleExpandPanelAudience}
															headerIcon={AudiencesIcon}
															expandButtonText={(expandPanelAudience ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">12</a> <span className='panel-metric-label'>Measurement Reports</span></div>
																		</div>
																		{/* <div className='panel-metric'>
																			<div className='panel-metric-value'>2 <span className='panel-metric-label'>Local TV Audience Measurement Insights</span></div>
																		</div> */}
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Report</span>
																			<span className='panel-metric-label'>
																				<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('audmeasurementlatest'))}>Measurement Report Name that is a realistic length</a>
																			</span>
																		</div>
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('audmeasurementlatest'))}><img src={audienceMeasurementExpanded} alt="Audience Measurement" /></a>
														</ExpandPanel>
														<ExpandPanel
															panelTitle='Media Currency'
															isExpanded={expandPanelMediaCurrency}
															onExpand={toggleExpandPanelMediaCurrency}
															headerIcon={AudiencesIcon}
															expandButtonText={(expandPanelMediaCurrency ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">3</a> <span className='panel-metric-label'>Media Partners</span></div>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">10</a> <span className='panel-metric-label'>Media Currency Reports</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Report</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">MC Report Name that is a realistic length</a></span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Report</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">MC Report Name</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<img src={mediaCurrencyExpanded} alt="Media Currency" />
														</ExpandPanel>
													</>
												)}
											</>)}
											
											{tier === 'Pro' && (
												<>
													{(viewPills.pillViewAll || viewPills.pillMeasurement) && (<>
														<div className='panel-category'>Advertising Outcome Measurement</div>
														<ExpandPanel
															panelTitle='Outcome Measurement'
															isExpanded={expandPanelMultiTouch}
															onExpand={toggleExpandPanelMultiTouch}
															headerIcon={ActivityIcon}
															expandButtonText={(expandPanelMultiTouch ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">12</a> <span className='panel-metric-label'>Measurement Reports</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Plan</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Outcome Report Name that is a realistic length</a></span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Plan</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Plan Version Link</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<img src={outcomeExpanded} alt="Outcome Measurement" />
														</ExpandPanel>
													</>)}
													
													
												</>
											)}
											{(viewPills.pillViewAll || viewPills.pillPlanning) && (<>
												{(tier === 'MOPro' || tier==='MOPlus' || tier==='MOLite')&& (
													<>
														<div className='panel-category'>Budget Management</div>
														<ExpandPanel
															contentNoPadding
															panelTitle='Media Budget Management'
															isExpanded={expandPanelBudgets}
															onExpand={toggleExpandPanelBudgets}
															headerIcon={BudgetIcon}
															expandButtonText={(expandPanelBudgets ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-label-lg'>$10.5M <span className='panel-metric-sublabel'>Total Budgeted</span></div>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-label-lg'>75 <span className='panel-metric-sublabel'># of Line Items</span></div>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-label-lg'>38 <span className='panel-metric-sublabel'># of Campaigns</span></div>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-label-lg'>56 <span className='panel-metric-sublabel'># of Tactics</span></div>
																		</div>
																		
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Recently Viewed</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Upfront Plan Version</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<img src={MediaBudgetExpanded} alt="Media Budget Management" />
														</ExpandPanel>
														<div className='panel-category'>Pre-Campaign Planning</div>
														<ExpandPanel
															contentNoPadding
															panelTitle='Media Plan Optimization'
															isExpanded={expandPanelMPBO}
															onExpand={toggleExpandPanelMPBO}
															headerIcon={Plan}
															expandButtonText={(expandPanelMPBO ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">4</a> <span className='panel-metric-label'>Media Plan Optimizations</span></div>
																		</div>
																		{/* <div className='panel-metric'>
																			<div className='panel-metric-value'>2 <span className='panel-metric-label'>Local TV Audience Measurement Insights</span></div>
																		</div> */}
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Recently Viewed</span>
																			<span className='panel-metric-label'>
																				<a href="javascript:void(0)">Media Plan Optimization Name</a>
																			</span>
																		</div>
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<img src={mpbo} alt="Media Plan Optimization" />
														</ExpandPanel>
													</>
												)}
												{(tier === 'Pro' || tier === 'Plus' || tier === 'Baseline') && (
													<>
														<div className='panel-category'>Upfront Planning for Premium Video</div>
														<ExpandPanel
															panelTitle='Upfront Plans'
															isExpanded={expandPanelUpfront}
															onExpand={toggleExpandPanelUpfront}
															headerIcon={CalendarIcon}
															expandButtonText={(expandPanelUpfront ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">11</a> <span className='panel-metric-label'>Upfront Plan Versions</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>2022 Upfront Plan</span>
																			<span className='panel-metric-label'>
																			<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('upfrontplan'))}>Upfront Plan Version Name that is a realistic length</a>
																			</span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Recently Viewed</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Upfront Plan Version</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('upfrontplan'))}><img src={upfrontExpanded} alt="Upfront Planning for Premium Video" /></a>
														</ExpandPanel>
														<div className='panel-category'>Pre-Campaign Planning</div>
														<ExpandPanel
															panelTitle='Media Plan Budget Optimization'
															isExpanded={expandPanelPlan}
															onExpand={toggleExpandPanelPlan}
															headerIcon={Plan}
															expandButtonText={(expandPanelPlan ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">12</a> <span className='panel-metric-label'>Media Plan Budget Optimizations</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Most Recent Optimization</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">MPBO Optimization Name that is a realistic length</a></span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Plan</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Plan Version Link</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<img src={mediaPlanOptimizationExpanded} alt="Media Plan Budget Optimization" />
														</ExpandPanel>
													</>
												)}
											</>)}
											{(viewPills.pillViewAll || viewPills.pillOptimization) && (
												<>
													{(tier === 'Pro' || tier === 'Plus') && (
													<>
														<div className='panel-category'>In-Campaign Optimization</div>
														<ExpandPanel
															panelTitle='Automated Campaign Monitoring'
															isExpanded={expandPanelAutomatedCampaign}
															onExpand={toggleExpandPanelAutomatedCampaign}
															headerIcon={Zap}
															expandButtonText={(expandPanelAutomatedCampaign ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">3</a> <span className='panel-metric-label'>Campaigns in Market</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Campaign</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)" onClick={():void => setBrandUIScreen('viewcampaign')}>Enterprise Solutions (Apr to Sep 2022)</a></span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Plan</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Plan Version Link</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link} onClick={():void => setBrandUIScreen('campaigns')}>View All</Button>
															)}
														>
															<a href="javascript:Void(0)" onClick={():void => setBrandUIScreen('viewcampaign')}><img src={campaignMonitoringExpanded} alt="Automated Campaign Monitoring" /></a>
														</ExpandPanel>
														<ExpandPanel
															panelTitle={(<>Media Plan Budget <span className='nowrap'>Re-Optimization</span></>)}
															isExpanded={expandPanelMPBReoptimization}
															onExpand={toggleExpandPanelMPBReoptimization}
															headerIcon={Zap}
															expandButtonText={(expandPanelMPBReoptimization ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">30</a> <span className='panel-metric-label'>Media Plan Budget Re-Optimizations</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest <span className='nowrap'>Re-Optimization</span></span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">MPBR Name that is a realistic length</a></span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Plan</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Plan Version Link</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link}>View All</Button>
															)}
														>
															<img src={mediaPlanReOptimizationExpanded} alt="Media Plan Budget Re-Optimization" />
															
														</ExpandPanel>
													</>
													)}
													{(tier === 'MOPro' || tier === 'MOPlus') && (<>
														<div className='panel-category'>In-Campaign Optimization</div>
														<ExpandPanel
															contentNoPadding
															panelTitle='Campaign Monitoring & Re-Optimization'
															isExpanded={expandPanelCMRO}
															onExpand={toggleExpandPanelCMRO}
															headerIcon={Zap}
															expandButtonText={(expandPanelCMRO ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">3</a> <span className='panel-metric-label'>In-Market Campaigns</span></div>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">37</a> <span className='panel-metric-label'>Media Plan Budget Re-Optimizations</span></div>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Plan</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Plan Version Link</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link} >View All</Button>
															)}
														>
															<img src={cmro} alt="Campaign Monitoring & Re-Optimization" />
														</ExpandPanel>
														<div className='panel-category'>Post-Campaign Reconciliation</div>
														<ExpandPanel
															contentNoPadding
															panelTitle='Post Campaign Reporting'
															isExpanded={expandPanelPostCampaign}
															onExpand={toggleExpandPanelPostCampaign}
															headerIcon={Zap}
															expandButtonText={(expandPanelPostCampaign ? "View Less" : "View More")}
															headerContent={(
																<>
																	<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">3</a> <span className='panel-metric-label'>Campaigns in Market</span></div>
																		</div>
																		<div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Campaign</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)" onClick={():void => setBrandUIScreen('viewcampaign')}>Enterprise Solutions (Apr to Sep 2022)</a></span>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Plan</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Plan Version Link</a></span>
																		</div> */}
																	</div>
														
																</>
															)}
															headerAction={(
																<Button theme={ButtonTheme.Link} onClick={():void => setBrandUIScreen('campaigns')}>View All</Button>
															)}
														>
															<img src={postCampaign} alt="Post Campaign Reporting" />
														</ExpandPanel>
													</>
													)}
												</>
											)}
											{(viewPills.pillViewAll || viewPills.pillConfiguration) && (<>
												<div className='panel-category'>Configuration</div>
												{(tier === 'Baseline' || tier === 'Plus' || tier==='Pro') && (<>
													<ExpandPanel
														panelTitle='Products'
														isExpandable={false}
														isExpanded={expandPanelProducts}
														onExpand={toggleExpandPanelProducts}
														headerIcon={SlidersIcon}
														expandButtonText={(expandPanelProducts ? "View Less" : "View More")}
														headerContent={(
															<>
																<div className='panel-metrics-container '>
																	
																	<div className='panel-metric-icon'>
																		<Signal size={1.5} icon={EnterpriseIcon}  />
																		<div className='panel-metric-value'>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Enterprise Solutions</a></span>
																			<span className='panel-metric-sublabel'>ID: 00001</span>
																		</div>
																		
																	</div>
																	<div className='panel-metric-icon'>
																		<Signal size={1.5} icon={CreditCardIcon}  />
																		<div className='panel-metric-value'>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Credit Cards</a></span>
																			<span className='panel-metric-sublabel'>ID: 00002</span>
																		</div>
																	</div>
																	<div className='panel-metric-icon'>
																		<Signal size={1.5} icon={GiftIcon}  />
																		<div className='panel-metric-value'>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Beauty Care</a></span>
																			<span className='panel-metric-sublabel'>ID: 00003</span>
																		</div>
																	</div>
																</div>
													
															</>
														)}
														// headerAction={(
														// 	<Button theme={ButtonTheme.Link}>View All</Button>
														// )}
													>
														<img src={activationExpanded} alt="Activation" />
													</ExpandPanel>
													<ExpandPanel
														panelTitle='Audiences'
														isExpanded={expandPanelAudiencesConfig}
														onExpand={toggleExpandPanelAudiencesConfig}
														headerIcon={PlayOutlineIcon}
														expandButtonText={(expandPanelAudiencesConfig ? "View Less" : "View More")}
														headerContent={(
															<>
																<div className='panel-metrics-container no-icons'>
																	<div className='panel-metric'>
																		<div className='panel-metric-value'><a href="javascript:void(0)">12</a> <span className='panel-metric-label'>Audiences</span></div>
																	</div>
																	<div className='panel-metric'>
																		<span className='panel-metric-sublabel'>Latest Audience</span>
																		<span className='panel-metric-label'><a href="javascript:void(0)">Audience Name</a></span>
																	</div>
																</div>
													
															</>
														)}
														headerAction={(
															<Button theme={ButtonTheme.Link}>View All</Button>
														)}
													>
														<img src={audiencesConfigExpanded} alt="Audiences" />
													</ExpandPanel>
													</>
												)}
												{(tier === 'MOLite' || tier === 'MOPlus' || tier==='MOPro') && (<>
													<ExpandPanel
														panelTitle='Products'
														isExpandable={false}
														isExpanded={expandPanelProducts}
														onExpand={toggleExpandPanelProducts}
														headerIcon={SlidersIcon}
														expandButtonText={(expandPanelProducts ? "View Less" : "View More")}
														headerContent={(
															<>
																<div className='panel-metrics-container no-icons'>
																	<div className='panel-metric'>
																		<div className='panel-metric-value'>6 <span className='panel-metric-label'>Products</span></div>
																	</div>
																	<div className='panel-metric'>
																		<span className='panel-metric-sublabel'>Recently Viewed</span>
																		<span className='panel-metric-label'><a href="javascript:void(0)">Blue Moon LightSky</a></span>
																	</div>
																</div>
													
															</>
														)}
														// headerAction={(
														// 	<Button theme={ButtonTheme.Link}>View All</Button>
														// )}
													>
														{/* <img src={activationExpanded} alt="Activation" /> */}
													</ExpandPanel>
												</>
												)}
											</>)}
											{(viewPills.pillViewAll || viewPills.pillData) && (<>
												{(tier === 'MOPlus' || tier==='MOPro') && (<>
												<div className='panel-category'>Data Integration</div>
												
												<ExpandPanel
													contentNoPadding
													panelTitle='Datamart'
													isExpanded={expandPanelAudiencesConfig}
													onExpand={toggleExpandPanelAudiencesConfig}
													headerIcon={SlidersIcon}
													expandButtonText={(expandPanelAudiencesConfig ? "View Less" : "View More")}
													headerContent={(
														<>
															<div className='panel-metrics-container no-icons'>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">3</a> <span className='panel-metric-label'>Total feeds in the last 7 days</span></div>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">6</a> <span className='panel-metric-label'>Successful in last 24 hrs</span></div>
																		</div>
																		<div className='panel-metric'>
																			<div className='panel-metric-value'><a href="javascript:void(0)">0</a> <span className='panel-metric-label'>Unsuccessful in last 24 hrs</span></div>
																		</div>
																		{/* <div className='panel-metric'>
																			<span className='panel-metric-sublabel'>Latest Audience</span>
																			<span className='panel-metric-label'><a href="javascript:void(0)">Audience Name</a></span>
																		</div> */}
																	</div>
												
														</>
													)}
													headerAction={(
														<Button theme={ButtonTheme.Link}>View All</Button>
													)}
												>
													<img src={datamartExpanded} alt="Datamart" />
												</ExpandPanel>
												</>
												)}
											</>)}
											
										</div>
									</section>
									)}
									{viewTab === 'timeline' && (
									<section className='tab-content' role='tabpanel'>
										<div className='panels-container'>
											<div className='filter-buttons-container'>
												<div className='filter-buttons-left'>
													<button className={cx('filter-button', {'selected': viewTimelinePills.timelineViewAll})} onClick={onTimelineViewAll}>View All</button>
													<button className={cx('filter-button', {'selected': viewTimelinePills.timelineUpfront})} onClick={(): void => onTimelineFilterButtonSelect('upfront')}>Upfront Plans</button>
													<button className={cx('filter-button', {'selected': viewTimelinePills.timelineBudget})} onClick={(): void => onTimelineFilterButtonSelect('budgets')}>Budgets</button>
													<button className={cx('filter-button', {'selected': viewTimelinePills.timeLineCampaigns})} onClick={(): void => onTimelineFilterButtonSelect('campaigns')}>Campaigns</button>
												</div>
												<div className='filter-buttons-right'>
													{(
														expandPanelBudgets && 
														expandPanelCampaigns
													) ? (
														<Button theme={ButtonTheme.Link} onClick={onTimelineCollapseAll}>Collapse All</Button>
													) : <Button theme={ButtonTheme.Link} onClick={onTimelineExpandAll}>Expand All</Button>

													}
												</div>
											</div>
											<div className='panel-category'>Timing</div>
												{(viewTimelinePills.timelineViewAll || viewTimelinePills.timelineUpfront) && (
													<>
													<ExpandPanel
														panelTitle='Upfront Plans'
														// isExpanded={expandPanelUpfront}
														isExpandable={false}
														// onExpand={toggleExpandPanelUpfront}
														headerIcon={CalendarIcon}
														// expandButtonText={(expandPanelUpfront ? "View Less" : "View More")}
														headerContent={(
															<>
																<div className='panel-metrics-container no-icons'>
																	{/* <div className='panel-metric'>
																		<div className='panel-metric-value'><a href="javascript:void(0)">11</a> <span className='panel-metric-label'>Upfront Plan Versions</span></div>
																	</div> */}
																	<div className='panel-metric'>
																		<span className='panel-metric-sublabel'>Upfront Plan</span>
																		<span className='panel-metric-label'>
																		<a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('upfrontplan'))}>2022 Upfront Plan</a>
																		</span>
																	</div>
																	<div className='panel-metric'>
																		<span className='panel-metric-sublabel'>Date Range</span>
																		<span className='panel-metric-label'>Broadcast Year 2022 (Jan1 - Dec31, 2022)</span>
																	</div>
																</div>
													
															</>
														)}
														headerAction={(
															<Button theme={ButtonTheme.Link}>View All</Button>
														)}
													>
														{/* <a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('upfrontplan'))}><img src={upfrontExpanded} alt="Upfront Planning for Premium Video" /></a> */}
													</ExpandPanel>
													</>
												)}
												{(viewTimelinePills.timelineViewAll || viewTimelinePills.timelineBudget) && (
													<>
													<ExpandPanel
														panelTitle='Budgets'
														isExpanded={expandPanelBudgets}
														onExpand={toggleExpandPanelBudgets}
														headerIcon={BudgetIcon}
														expandButtonText={(expandPanelBudgets ? "View Less" : "View More")}
														headerContent={(
															<>
																<div className='panel-metrics-container no-icons'>
																	<div className='panel-metric'>
																		<div className='panel-metric-label-lg'>$2.5M <span className='panel-metric-sublabel'>Budget Amount</span></div>
																	</div>
																	<div className='panel-metric'>
																		<div className='panel-metric-label-lg'>$5.5M <span className='panel-metric-sublabel'>Total Budgeted</span></div>
																	</div>
																	<div className='panel-metric'>
																		<div className='panel-metric-label-lg'>$3M <span className='panel-metric-sublabel'>Total Available</span></div>
																	</div>
																	
																	{/* <div className='panel-metric'>
																		<span className='panel-metric-sublabel'>Recently Viewed</span>
																		<span className='panel-metric-label'><a href="javascript:void(0)">Upfront Plan Version</a></span>
																	</div> */}
																</div>
													
															</>
														)}
														headerAction={(
															<Button theme={ButtonTheme.Link}>View All</Button>
														)}
													>
														<img src={budgetsExpanded} alt="Budgets" />
													</ExpandPanel>
													</>
												)}
												{(viewTimelinePills.timelineViewAll || viewTimelinePills.timeLineCampaigns) && (
													<>
													<ExpandPanel
														panelTitle='Campaigns'
														isExpanded={expandPanelCampaigns}
														onExpand={toggleExpandPanelCampaigns}
														headerIcon={Plan}
														expandButtonText={(expandPanelCampaigns ? "View Less" : "View More")}
														headerContent={(
															<>
																<div className='panel-metrics-container no-icons'>
																	<div className='panel-metric'>
																		<div className='panel-metric-value'><a href="javascript:void(0)">4</a> <span className='panel-metric-label'>Campaigns In-Market</span></div>
																	</div>
																	<div className='panel-metric'>
																		<div className='panel-metric-value'><a href="javascript:void(0)">12</a> <span className='panel-metric-label'>Campaigns Completed</span></div>
																	</div>
																	<div className='panel-metric'>
																		<div className='panel-metric-value'><a href="javascript:void(0)">3</a> <span className='panel-metric-label'>Campaigns Upcoming</span></div>
																	</div>
																	{/* <div className='panel-metric'>
																		<span className='panel-metric-sublabel'>Recently Viewed</span>
																		<span className='panel-metric-label'><a href="javascript:void(0)">Upfront Plan Version</a></span>
																	</div> */}
																</div>
													
															</>
														)}
														headerAction={(
															<Button theme={ButtonTheme.Link} onClick={():void => setBrandUIScreen('campaigns')}>View All</Button>
														)}
													>
														{/* <a href="javascript:void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('upfrontplan'))}> */}
															{/* <img src={campaignsExpanded} alt="Campaigns" /> */}
															<div className="gantt-container">
																<div className='gantt-row gantt-row-header'>
																	<div className='name-col'>
																		
																	</div>
																	<div className='month-col-group'>
																		<div className='month-col'><div><div className='year'>2022</div>Jun</div></div>
																		<div className='month-col'>Jul</div>
																		<div className='month-col'>Aug</div>
																		<div className='month-col'>Sept</div>
																		<div className='month-col'>Oct</div>
																		<div className='month-col'>Nov</div>
																		<div className='month-col'>Dec</div>
																		<div className='month-col new-year'><div><div className='year'>2023</div>Jan</div></div>
																		<div className='month-col'>Feb</div>
																	</div>
																</div>
																<div className='gantt-row group-row'>
																	<div className='name-col'>Beauty Care</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																	</div>
																</div>
																<div className='gantt-row'>
																	<div className='name-col'>
																		General Media
																	</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='row-campaigns'>
																			<div className='campaign-block campaign-1col campaign-postflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $6.5K</div>
																					<div><span className='strong'>Workflow Status:</span> Completed</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Locked</div>
																				</>)}><div className='campaign-block-content'>$6.5K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-2col campaign-postflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $15K</div>
																					<div><span className='strong'>Workflow Status:</span> Completed</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Locked</div>
																				</>)}><div className='campaign-block-content'>$15K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-1col'></div>
																			<div className='campaign-block campaign-2col campaign-inflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $15K</div>
																					<div><span className='strong'>Workflow Status:</span> In-flight</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$15K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-1col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $6.5K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$6.5K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-1col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $6.5K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$6.5K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-1col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $6.5K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$6.5K</div></Tooltip>
																			</div>
																		</div>
																	</div>
																</div>
																<div className='gantt-row'>
																	<div className='name-col'>
																		eCommerce
																	</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='row-campaigns'>

																			<div className='campaign-block campaign-2col'></div>
																			<div className='campaign-block campaign-2col'></div>
																			<div className='campaign-block campaign-1col campaign-postflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $6.5K</div>
																					<div><span className='strong'>Workflow Status:</span> Completed</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Locked</div>
																				</>)}><div className='campaign-block-content'>$6.5K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-2col campaign-inflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $9K</div>
																					<div><span className='strong'>Workflow Status:</span> Inflight</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$9K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-1col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $10K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$10K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-1col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $10K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$10K</div></Tooltip></div>
																		</div>
																	</div>
																</div>

																<div className='gantt-row group-row'>
																	<div className='name-col'>Hair Care</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																	</div>
																</div>
																<div className='gantt-row'>
																	<div className='name-col'>
																		General Media
																	</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='row-campaigns'>
																			<div className='campaign-block campaign-1col'></div>
																			<div className='campaign-block campaign-3col campaign-postflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																			<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $75K</div>
																					<div><span className='strong'>Workflow Status:</span> Completed</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Locked</div>
																				</>)}><div className='campaign-block-content'>$75K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-1col'></div>
																			<div className='campaign-block campaign-1col campaign-inflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																			<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $12K</div>
																					<div><span className='strong'>Workflow Status:</span> Inflight</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$12K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-3col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $24K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$24K</div></Tooltip>
																			</div>
																		</div>
																	</div>
																</div>
																<div className='gantt-row'>
																	<div className='name-col'>
																		eCommerce
																	</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='row-campaigns'>

																			<div className='campaign-block campaign-2col'></div>
																			<div className='campaign-block campaign-2col'></div>
																			<div className='campaign-block campaign-1col'></div>
																			<div className='campaign-block campaign-2col campaign-inflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																			<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $19K</div>
																					<div><span className='strong'>Workflow Status:</span> Inflight</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$19K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-2col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																			<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $20K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$20K</div></Tooltip>
																			</div>
																		</div>
																	</div>
																</div>

																<div className='gantt-row group-row'>
																	<div className='name-col'>Snacks</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																	</div>
																</div>
																<div className='gantt-row'>
																	<div className='name-col'>
																		General Media
																	</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='row-campaigns'>
																			<div className='campaign-block campaign-3col campaign-postflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $20K</div>
																					<div><span className='strong'>Workflow Status:</span> Completed</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Locked</div>
																				</>)}><div className='campaign-block-content'>$20K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-2col campaign-postflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																				<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $15K</div>
																					<div><span className='strong'>Workflow Status:</span> Completed</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Locked</div>
																				</>)}><div className='campaign-block-content'>$15K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-2col campaign-inflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																			<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $21K</div>
																					<div><span className='strong'>Workflow Status:</span> Inflight</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$21K</div></Tooltip>
																			</div>
																			<div className='campaign-block campaign-2col campaign-preflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																			<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> $12K</div>
																					<div><span className='strong'>Workflow Status:</span> Planning</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>$12K</div></Tooltip>
																			</div>
																		</div>
																	</div>
																</div>
																<div className='gantt-row'>
																	<div className='name-col'>
																		eCommerce
																	</div>
																	<div className='month-col-group'>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='month-col'></div>
																		<div className='row-campaigns'>

																			<div className='campaign-block campaign-2col'></div>
																			<div className='campaign-block campaign-2col'></div>
																			<div className='campaign-block campaign-1col'></div>
																			<div className='campaign-block campaign-4col campaign-inflight' onClick={():void => setBrandUIScreen('viewcampaign')} role='button'>
																			<Tooltip theme={TooltipTheme.Light} content={(<>
																					<div><span className='strong'>Campaign:</span> Campaign Name</div>
																					<div><span className='strong'>ID:</span> 12345</div>
																					<div><span className='strong'>Period:</span> XX Month 2022 - XX Month 2022</div>
																					<div><span className='strong'>Budget:</span> 85K</div>
																					<div><span className='strong'>Workflow Status:</span> Inflight</div>
																					<div><span className='strong'>Processing Status:</span> Processed Successfully</div>
																					<div><span className='strong'>Lock Status:</span> Unlocked</div>
																				</>)}><div className='campaign-block-content'>85K</div></Tooltip>
																			</div>
																		</div>
																	</div>
																</div>


																<div className='today-line'></div>
															</div>
														{/* </a> */}
													</ExpandPanel>
													</>
												)}
										</div>
									</section>
									)}
								</div>
								<div className='brand-ui-sidebar'>
									{/* <div className='brand-ui-header-container'>
										<Search className='sidebar-search' placeholder='Search Instance' />
									</div> */}
									<div className='brand-ui-sidebar-content'>
										<div className='panel priorities'>
												<div className='sidebar-panel-header'>
													<div className='sidebar-panel-title'>
														Quick Access
													</div>
													<div className='sidebar-panel-pills'>
														<a href="javascript:void(0)" className='pill-button-compact selected'>Reports</a>
														<a href="javascript:void(0)" className='pill-button-compact'>Key Links</a>
													</div>
												</div>
												<section aria-labelledby='section-1-tab' className='sidebar-panel-content' role='tabpanel'>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={Users} size={1} /></div>
														<div className='key-report'>
															<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={Users} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={AwardIcon} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={AwardIcon} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={AwardIcon} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={Users} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={Users} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={Users} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
													<div className='key-report-item'>
														<div className='key-report-icon'><Signal icon={Users} size={1} /></div>
														<div className='key-report'>
														<a href="javascript:Void(0)" onClick={(): void => (setBrandUI(false), setPageTakeover(true), setTakeoverScreen('reportview'))} className='key-report-name'>Key Report Name</a>
															<div className='key-report-data'>ID: 0000 | Status: Status</div>
														</div>
													</div>
												</section>
										</div>
										{/* <div className='panel upsell' >
											<div className='sidebar-panel-title u-title-3'>Unlock Insights with (Tier Name)</div>
											<div className='sidebar-panel-subtitle'>This is an intriguing description that piques curiousity.</div>
											<div className='sidebar-screenshot'><img src={upsellImage} alt="Unlock new Insights" /></div>
											<Button isFullWidth>Learn More</Button>
										</div> */}
									</div>
								</div>
							</div>
						</div>
						)}
						{/* end dashboard */}
						{brandUIScreen === 'campaigns' && (
							<>
								<div className='img-container'>
									<a href="javascript:Void(0)" onClick={():void => setBrandUIScreen('viewcampaign')}><img src={campaignList} alt="Campaign List" /></a>
								</div>
							</>
						)}
						{brandUIScreen === 'viewcampaign' && (
							<>
								<div className='img-container'>
									<img src={campaignOverview} alt="Campaign Overview" />
								</div>
							</>
						)}
						{brandUIScreen === 'reports' && (
							<>
								<div className='img-container'>
								<a href="javascript:Void(0)" onClick={():void => setBrandUIScreen('viewreport')}><img src={reportList} alt="Reports Overview" /></a>
								</div>
							</>
						)}
						{brandUIScreen === 'viewreport' && (
							<>
								<div className='img-container'>
									<img src={reportViewScreen} alt="Report" />
								</div>
							</>
						)}
					</div>
					</Route>
						{/* <Route path={`${url}/upfront`}>
							<Upfront />
						</Route> */}
						<Route path={`${url}/campaigns`}>
							{/* <Campaigns /> */}
							<div className='img-container'>
								{/* <a href="javascript:Void(0)" onClick={():void => setBrandUIScreen('viewcampaign')}><img src={campaignList} alt="Campaign List" /></a> */}
								<a href="javascript:Void(0)" onClick={onGlobalNavClick('viewcampaign')}><img src={campaignList} alt="Campaign List" /></a>
								
							</div>
						</Route>
						<Route path={`${url}/viewcampaign`}>
							<CampaignView />
							{/* <div className='img-container'>
								<img src={campaignOverview} alt="Campaign Overview" />
							</div> */}
						</Route>
						<Route path={`${url}/reports`}>
							<div className='img-container'>
								<a href="javascript:Void(0)" onClick={onGlobalNavClick('viewreport')}><img src={reportList} alt="Reports Overview" /></a>
							</div>
						</Route>
						<Route path={`${url}/viewreport`}>
							<div className='img-container'>
								<img src={reportViewScreen} alt="Report" />
							</div>
						</Route>
						{/* <Route path={`${url}/audiences`}>
							<Audiences />
						</Route> */}
						{/* <Route path={`${url}/data`}>
							<DataManagement />
						</Route> */}
						{/* <Route path={`${url}/settings`}>
							<Settings />
						</Route> */}
					</Switch>
					
				</div>
			)}
			{(launchpad === '' && !brandUI && pageTakeover) && ( 
				<div className='takeover-container'>
					<div className='takeover-header-bar'>
						<div className='takeover-title'>
							{takeoverScreen === 'reportview' && <span>Report Results - Beauty Care - Q1 22 Plan Overview</span>}
							{takeoverScreen === 'audmeasurementlatest' && <span>Master Demo Initiative</span>}
							{takeoverScreen === 'upfrontplan' && <span>Demo Cross-Platform Plan</span>}
							{takeoverScreen === 'card' && <span>CARD</span>}
						</div>
						<a href="javascript:Void(0);" onClick={():void => (setPageTakeover(false), setBrandUI(true))}><Signal icon={Clear} /></a>
					</div>
					<div className='takeover-content'>
						{takeoverScreen === 'reportview' && <img src={reportViewScreen} alt="report" />}
						{takeoverScreen === 'audmeasurementlatest' && <img src={audMeasurementLatest} alt="Audience Measurement Report" />}
						{takeoverScreen === 'upfrontplan' && <img src={upfrontplan} alt="Upfront Plan" />}
						{takeoverScreen === 'card' && <img src={cardScreen} alt="CARD" />}
					</div>
				</div>
			)}
		</>
	)}
    
	
  </div>
)
};

export default Access;