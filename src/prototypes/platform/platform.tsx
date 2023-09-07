import React from 'react';
import cx from 'classnames';
import {
	NavLink,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import { GlobalNavBar } from './components/globalNavBar/globalNavBar';
import  Dashboard  from './pages/dashboard';
import  DataManagement  from './pages/dataManagement';
import {Button, IconButton, Tooltip, TooltipPosition} from '@preamp/core';
import { Audiences as AudiencesIcon, ChevronDown, Measure, Plan, PlayCircle,  Signal } from '@preamp/signal';
import { Select, SelectType, OptionsType, OptionType, ValueType } from '@preamp/select';

import Upfront from './pages/upfront'
import './platform-styles.scss';
import Campaigns from './pages/campaigns';
import Audiences from './pages/audiences';
import Settings from './pages/settings';

const SubwayIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="m8.705 24-5.589-4.626 5.59-4.62v2.325h3.692c.27 0 .622-.014.869-.042 1.624-.18 2.795-.96 2.795-2.78 0-1.905-1.308-2.52-3.454-3.548-1.072-.513-1.332-.696-1.332-1.02 0-.272.188-.437.518-.437h6.561c4.578 2.797 3.572 7.642 1.482 9.972-1.457 1.624-3.819 2.445-6.615 2.445H8.705V24Z"/><path d="M11.22 2.331C6.59 2.331 3 4.913 3 9.466c0 2.404 1.267 4.279 3.052 5.288h6.645c.423 0 .594-.205.594-.477 0-.385-.347-.54-1.382-1.038C9.63 12.141 8.51 11.52 8.51 9.678c0-1.377.951-2.44 2.496-2.689.27-.043.637-.068 1.073-.068h3.593v2.332l5.589-4.627L15.672 0v2.331H11.22"/></g></svg>
)
const GmIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M21.92 21.988c-.385.364-.93.48-1.444.492H4.126c-.475 0-.965.027-1.423-.129a1.572 1.572 0 0 1-.887-.694c-.196-.333-.272-.724-.281-1.107V3.977c.004-.314-.016-.63.04-.941.067-.388.236-.773.534-1.039.273-.243.629-.375.987-.428.13-.017.262-.03.394-.034h17.022c.507.013 1.043.138 1.418.5.378.364.518.903.534 1.412.002 5.688 0 11.377.001 17.065-.007.532-.148 1.099-.545 1.476m1.726-20.211A2.982 2.982 0 0 0 21.958.243c-.413-.16-.856-.21-1.294-.243H3.369c-.48.03-.965.087-1.412.276A2.98 2.98 0 0 0 .285 1.929C.1 2.36.033 2.827 0 3.29v17.438c.03.309.051.622.139.921.181.712.612 1.366 1.226 1.776.528.363 1.165.533 1.798.576H20.86c.516-.044 1.034-.159 1.493-.407a2.98 2.98 0 0 0 1.389-1.58c.168-.416.224-.864.258-1.309V3.327c-.032-.531-.119-1.068-.354-1.55"/><path d="M7.868 13.02c-.347-.005-.695.006-1.042-.006a.66.66 0 0 1-.62-.638V8.401a.646.646 0 0 1 .319-.564.793.793 0 0 1 .413-.094h.93c.014 1.733-.004 3.465.009 5.196l-.009.081m1.757-6.793c-.895-.014-1.79-.002-2.685-.006-.415.004-.843-.026-1.241.113-.48.149-.888.516-1.082.981-.147.34-.178.718-.174 1.085v4.164c.013.294.048.594.167.867.18.438.543.796.985.965.246.1.513.142.779.144.497.003.995-.001 1.492.002-.002.284.025.578-.078.85-.103.337-.385.596-.714.714-.515.199-1.074.126-1.612.148.006.511.001 1.022.002 1.533.641-.003 1.293.03 1.922-.122.652-.142 1.29-.47 1.693-1.015.38-.502.535-1.14.546-1.761V6.227M10.953 6.23c1.887-.02 3.775-.003 5.663-.01.438.008.877-.017 1.314.026.544.059 1.078.352 1.35.838.271.45.281.993.273 1.502.001 1.984-.004 3.968.002 5.95-.588.008-1.176.008-1.764 0 .008-2.032 0-4.066.004-6.1.009-.227-.095-.467-.295-.587a.783.783 0 0 0-.437-.105c-.314.001-.63-.003-.944.002v6.795h-1.744l.001-6.796c-.56-.002-1.12-.001-1.681 0v6.796h-1.742V6.23M10.954 16.248c2.174.003 4.347 0 6.521.002.693.003 1.388-.009 2.081.006-.009.51 0 1.021-.004 1.532h-8.6c0-.514-.001-1.027.002-1.54"/></g></svg>	
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
// update this name
function Platform() {
    const [company, setCompany] = React.useState<string | undefined>(localStorage.getItem('platformCompany') || 'Subway');
	const [navCollapsed, setNavCollapsed] = React.useState<string | null>(localStorage.getItem('navCollapsed') || 'open');
    const prevScrollY = React.useRef(0);

	const [scrolling, setScrolling] = React.useState(false);

	const onCompanyChange = (e: any): void => {
        setCompany(e.value);
		localStorage.setItem('platformCompany', e.value);
    };

	React.useEffect(() => {
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
	
	const { url } = useRouteMatch();
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
	
	React.useEffect(() => {
        if(company === '' || company === undefined) {
            localStorage.setItem('platformCompany', 'Dunder Mifflin');
        }
    }, []);

return (
  <div className={cx("platform-container ", {"scrolling" : scrolling})}>
    <PrototypeBar name="UX Platform Vision" >
		{/* <Button onClick={onClearAllDataClick}>Clear All Data</Button> */}
    </PrototypeBar>
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
	
    <Switch>
        <Route exact path={url}>
          <Dashboard company={company} />
		</Route>
		<Route path={`${url}/upfront`}>
            <Upfront />
        </Route>
		<Route path={`${url}/campaigns`}>
			<Campaigns />
		</Route>
		<Route path={`${url}/audiences`}>
			<Audiences />
		</Route>
		<Route path={`${url}/data`}>
			<DataManagement />
		</Route>
		<Route path={`${url}/settings`}>
			<Settings />
		</Route>
    </Switch>
  </div>
  </div>
)
};

export default Platform;