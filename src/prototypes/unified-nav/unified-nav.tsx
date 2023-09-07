import React from 'react';
import cx from 'classnames';
import {
	Link,
	Route,
	Switch,
	useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import './unified-nav-styles.scss';
import { VideoAmp } from '../../components/icons/videoamp';
import { TextField } from '@preamp/core';
import { Signal, KeyboardArrowDown, KeyboardArrowRight } from '@preamp/signal';
import { OptionsType, DropdownButton, OptionType, ValueType, Select, SelectType } from '@preamp/select';
import { SearchIcon } from '../../components/icons/search-icon';

import Research from './pages/research';
import Home from './pages/home';
import Campaigns from './pages/campaigns';
import Budgets from './pages/budgets';
import Upfront from './pages/upfront-plans';
import Reporting from './pages/reporting';
import Audiences from './pages/audiences';
import Datamart from './pages/datamart';
import Organization from './pages/organization';
import CampaignView from './pages/campaign-view';
import BudgetView from './pages/budget-view';

// update this name
const userOptions: OptionsType<OptionType> = [
    {label: 'Manage Preferences', value: '1'},
    {label: 'Logout', value: '2'}
];
const advertiserOptions: OptionsType<OptionType> = [
    { value: 'Dunder Mifflin', label: 'Dunder Mifflin'},
    { value: 'ACME', label: 'ACME'},
    { value: 'Initech', label: 'Initech'},
    { value: 'Sterling Cooper', label: 'Sterling Cooper'},
    { value: 'Vandelay Industries', label: 'Vandelay Industries'},
    { value: 'Very Good Building Company', label: 'Very Good Building Company'},
    { value: 'Demo Time', label: 'Demo Time'}
];

function UnifiedNav() {
    const { url } = useRouteMatch();
	const [navSelected, setNavSelected] = React.useState<string>('');
    const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
    const [searchFocus, setSearchFocus] = React.useState<boolean>(false);

	

	// React.useEffect(() => {
	// 	setNavSelected(page);
	// }, []);

return (
	<div className={cx("unfied-nav-container ")}>
		<PrototypeBar name="Unified Nav Prototype" home="/home">Proposed navigation update for the PMB</PrototypeBar>

		<div className={cx("va-nav-bar")}>
            <div className='va-nav-bar-content'>
            <div className="top-bar-left">
                <div className='logo-container' >
                	{/* <a role="aria-button" ><Signal icon={VideoAmp} size="2.5rem" /></a> */}
                    <Link to={`${url}`} onClick={():void => setNavSelected('home')}><Signal icon={VideoAmp} size="2.5rem" /></Link>
                </div>
                <div className={cx('nav-switcher-container')}>
                    {/* {hasSwitcher ? ( */}
                        
                            <Select
                                className={cx('va-switcher')}
                                options={advertiserOptions}
                                selectType={SelectType.Link}
                                onChange={(): void => console.log('switcher change')}
                                defaultValue={advertiserOptions[0]}
                                
                            ></Select>
                    
                    
                    {/* <Signal size={1.25} className='switcher-input-icon' icon={inputIcon} /> */}
                </div>
				<ul className="navbar-nav">
                    {/* <li className={cx("navbar-nav-level1", {"selected" : navSelected === 'home'})}>
						<Link to={`${url}`} onClick={():void => setNavSelected('home')}>Home</Link>
                    </li> */}
                    <li className={cx("navbar-nav-level1", {"selected" : navSelected === 'research'})} >
						<Link to={`${url}/research`} onClick={():void => setNavSelected('research')}>Research</Link>
                    </li>
                    <li className={cx("navbar-nav-level1", {"selected" : navSelected === 'campaigns'})} >
						<Link to={`${url}/campaigns`} onClick={():void => setNavSelected('campaigns')}>Campaigns</Link>
                    </li>
					<li className={cx("navbar-nav-level1", {"selected" : navSelected === 'budgets'})} >
						<Link to={`${url}/budgets`} onClick={():void => setNavSelected('budgets')}>Budgets</Link>
                    </li>
					<li className={cx("navbar-nav-level1", {"selected" : navSelected === 'upfront'})} >
						<Link to={`${url}/upfront-plans`} onClick={():void => setNavSelected('upfront')}>Upfront Plans</Link>
                    </li>
                    <li className={cx("navbar-nav-level1", {"selected" : navSelected === 'reporting'})} >
						<Link to={`${url}/reporting`} onClick={():void => setNavSelected('reporting')}>Reporting</Link>
                    </li>   
					<li className={cx("navbar-nav-level1", {"selected" : navSelected === 'audiences'})} >
						<Link to={`${url}/audiences`} onClick={():void => setNavSelected('audiences')}>Audiences</Link>
                    </li>
                    <li className={cx("navbar-nav-level1", {"selected" : navSelected === 'datamart'})} >
						<Link to={`${url}/datamart`} onClick={():void => setNavSelected('datamart')}>Datamart</Link>
                    </li>
                    <li className={cx("navbar-nav-level1", {"selected" : navSelected === 'organization'})} >
						<Link to={`${url}/organization`} onClick={():void => setNavSelected('organization')}>Organization</Link>
                    </li>
                </ul>
                
                
            </div>
            <div className="top-bar-right">
                <div className={cx('search-input', {'search-input-open' : searchOpen})}>
                    <TextField className='search-field' placeholder='Search' onBlur={(): void => (setSearchOpen(false), setSearchFocus(false))} isFocused={searchFocus} />
                    <div className='search-input-icon' role="button" onClick={(): void => (setSearchOpen(true), setSearchFocus(true))}>
                        <Signal icon={SearchIcon} size={1} />
                    </div>
                </div>
                
                <DropdownButton
                    className='user-dropdown'
                    dataUI="primary-dropdown"
                    onChange={(): void => console.log('profile change')}
                    options={userOptions}
                >
                    <span>UserName</span>
                </DropdownButton>
                
                
                {/* <Signal icon={BellIcon} size={1.5} /> */}
                {/* <div className="user-icon"></div> */}
            </div>
            </div>
        </div>
		<div className='page-content'>
			<Switch>
				<Route exact path={url}>
					<Home setNavSelected={setNavSelected} />
				</Route>
				<Route path={`${url}/research`}>
					<Research setNavSelected={setNavSelected} />
				</Route>
                <Route path={`${url}/campaigns/campaign-view`}>
					<CampaignView setNavSelected={setNavSelected} parentUrl={url} />
				</Route>
				<Route path={`${url}/campaigns`}>
					<Campaigns setNavSelected={setNavSelected} />
				</Route>
				<Route exact path={`${url}/budgets`}>
					<Budgets setNavSelected={setNavSelected} />
				</Route>
				<Route path={`${url}/upfront-plans`}>
					<Upfront setNavSelected={setNavSelected} />
				</Route>
				<Route path={`${url}/reporting`}>
					<Reporting setNavSelected={setNavSelected} />
				</Route>
				<Route path={`${url}/audiences`}>
					<Audiences setNavSelected={setNavSelected} />
				</Route>
				<Route path={`${url}/datamart`}>
					<Datamart setNavSelected={setNavSelected} />
				</Route>
				<Route path={`${url}/organization`}>
					<Organization setNavSelected={setNavSelected} />
				</Route>
                <Route path={`${url}/budgets/budget-view`}>
					<BudgetView setNavSelected={setNavSelected} parentUrl={url} />
				</Route>
			</Switch>
		</div>
	</div>
)
};

export default UnifiedNav;