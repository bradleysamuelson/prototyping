import React from 'react';
import {
    NavLink,
  Route,
  Switch,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import { TitleBar, Search } from '@preamp/core';
import { KeyboardArrowDown, KeyboardArrowRight, Signal } from '@preamp/signal';
import ElsyDashboard from './pages/elsy-dashboard'
import  ElsyElements  from './pages/elsy-elements';
import CampaignList from './pages/campaign-list';
import Campaign from './pages/campaign';
import BootstrapComponents from './pages/bootstrap';
import './elsy-styles.scss';

// update this name
function ElsyUpdate() {
    const history = useHistory();
    const { url } = useRouteMatch();
    const [navId, setNavId] = React.useState<string>('');
    const [header, setHeader] = React.useState<boolean>(true);
    function onNavClick(id: string): () => void {
        return (): void => {
            setNavId(id);
            history.push(`${url}/${id}`);
        };
    }
return (
    <div className='elsy-elements-container'>
        
        <Switch>
            <Route exact path={url} >
            <header className='va-title-bar'>
            <div className="navbar titlebar-container">
                <div className='navbar-left'>
                    <div className="va-title-bar-title">
                        <NavLink exact={true} activeClassName='nav-item-selected' to={url}>
                            Elsy
                        </NavLink>
                        <div className="menu-toggler sidebar-toggler hide">
                        </div>
                    </div>
        
                    <ul className="navbar-nav">
                        <li className="navbar-nav-level1" id="topNavigationInstance">
                            <a data-toggle="dropdown" data-hover="dropdown" >
                                <span>Instance</span> 
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">

                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Instance Overview</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Products</span>
                                        <Signal icon={KeyboardArrowRight} size={0.75} />
                                    </a>
                                    <ul className="navbar-nav-submenu u-shadow-2">
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/90" className="nav-link nav-toggle">Enterprise Solutions (ID: 90)</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/91" className="nav-link nav-toggle">Credit Cards (ID: 91)</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/92" className="nav-link nav-toggle">Beauty Care (ID: 92)</a></li>
                                    </ul>
                                </li>
            
                            </ul>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationCampaign">
                            <a href="" onClick={onNavClick('campaign-list')}>
                                Campaigns
                            </a>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationReport">
                            <a href="">
                                Reports
                            </a>
                        </li>     
                        <li className="navbar-nav-level1" id="topNavigationResearch">
                            <a data-toggle="dropdown" data-hover="dropdown" href="">
                                <span>Research</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">
                                <li className="navbar-nav-level2">
                                    <a href="" className="@*nav-link nav-toggle*@ ">
                                        <span className="title">Media Vehicles</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Audiences</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Locations</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Inventory Sources</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Segments</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">DMPs</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Activation Platforms</span>
                                    </a>
                                </li>

                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Activation Partners</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">News and Notifications</span>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationDatamart">
                            <a href="">
                                Datamart
                            </a>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationAdmin">
                            <a data-toggle="dropdown" data-hover="dropdown" href="javascript:;">
                                <span>Administration</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">
                                <li className="navbar-nav-level2">
                                    <a href="javascript:void(0)">
                                        <span>Instance Administration</span>    
                                        <Signal icon={KeyboardArrowRight} size={0.75} />                
                                    </a>
                                    <ul className="navbar-nav-submenu u-shadow-2">
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Users</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Instance</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Monitor Usage</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Campaigns</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Configure Instance</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>   
                <div className='navbar-right'> 
                    <ul className="navbar-nav">
                        <li>
                            <Search />
                        </li>
                        <li className="navbar-nav-level1">
                            <a className="" title="Elsy Demo - Client Sandbox (ID: 52)">
                                <span>Elsy Demo - Client Sandbox (ID: 52)</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>   
                            {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-jsg9" >
                                <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-OrganisationsList-container">
                                        
                                    </span>
                                </span>
                            </span>
                            <form action="/Account/SetUserRoleOrganisationContext" id="formSwitchOrg" method="post">
                                <input id="UserSelection" name="UserSelection" type="hidden" value="" />
                                <input id="url" name="url" type="hidden" value="" />
                                <input id="switchedInstanceId" name="switchedInstanceId" type="hidden" value="" />
                            </form> */}
                        </li>
                        <li className="navbar-nav-level1">
                            <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <span className="username username-hide-on-mobile">Username</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2 menu-right">
                                <li className="navbar-nav-level2" >
                                    <a href="/Account/ManageProfile/Preferences/322">Manage Preferences</a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <form action="/Account/LogOff" id="logoutForm" method="post">
                                        <input name="__RequestVerificationToken" type="hidden" value="MF7YKmy_MW9T4O3fVKUAd75EncMYbUWVobOzQ_oxHbco3T099gTNxwYok1y03fps0Usx8FN3J1h_et3hUinMO_MHLe4xf5vYfrR2ivbwpMN1NQJCVzI5NRMEbDXuKmoGqvucTALpnmFrseFKYVs_2A2" />
                                        <a href="">Log off</a>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </header>
                <ElsyDashboard />
            </Route>
            <Route exact path={`${url}/elements`}>
                <ElsyElements></ElsyElements>
            </Route>
            <Route exact path={`${url}/bootstrap`}>
                <BootstrapComponents setHeader={setHeader} />
            </Route>
            
            <Route exact path={`${url}/campaign-list`}>
            <header className='va-title-bar'>
            <div className="navbar titlebar-container">
                <div className='navbar-left'>
                    <div className="va-title-bar-title">
                        <NavLink exact={true} activeClassName='nav-item-selected' to={url}>
                            Elsy
                        </NavLink>
                        <div className="menu-toggler sidebar-toggler hide">
                        </div>
                    </div>
        
                    <ul className="navbar-nav">
                        <li className="navbar-nav-level1" id="topNavigationInstance">
                            <a data-toggle="dropdown" data-hover="dropdown" >
                                <span>Instance</span> 
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">

                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Instance Overview</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Products</span>
                                        <Signal icon={KeyboardArrowRight} size={0.75} />
                                    </a>
                                    <ul className="navbar-nav-submenu u-shadow-2">
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/90" className="nav-link nav-toggle">Enterprise Solutions (ID: 90)</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/91" className="nav-link nav-toggle">Credit Cards (ID: 91)</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/92" className="nav-link nav-toggle">Beauty Care (ID: 92)</a></li>
                                    </ul>
                                </li>
            
                            </ul>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationCampaign">
                            <a href="" onClick={onNavClick('campaign-list')}>
                                Campaigns
                            </a>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationReport">
                            <a href="">
                                Reports
                            </a>
                        </li>     
                        <li className="navbar-nav-level1" id="topNavigationResearch">
                            <a data-toggle="dropdown" data-hover="dropdown" href="">
                                <span>Research</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">
                                <li className="navbar-nav-level2">
                                    <a href="" className="@*nav-link nav-toggle*@ ">
                                        <span className="title">Media Vehicles</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Audiences</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Locations</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Inventory Sources</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Segments</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">DMPs</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Activation Platforms</span>
                                    </a>
                                </li>

                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Activation Partners</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">News and Notifications</span>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationDatamart">
                            <a href="">
                                Datamart
                            </a>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationAdmin">
                            <a data-toggle="dropdown" data-hover="dropdown" href="javascript:;">
                                <span>Administration</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">
                                <li className="navbar-nav-level2">
                                    <a href="javascript:void(0)">
                                        <span>Instance Administration</span>    
                                        <Signal icon={KeyboardArrowRight} size={0.75} />                
                                    </a>
                                    <ul className="navbar-nav-submenu u-shadow-2">
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Users</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Instance</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Monitor Usage</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Campaigns</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Configure Instance</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>   
                <div className='navbar-right'> 
                    <ul className="navbar-nav">
                        <li>
                            <Search />
                        </li>
                        <li className="navbar-nav-level1">
                            <a className="" title="Elsy Demo - Client Sandbox (ID: 52)">
                                <span>Elsy Demo - Client Sandbox (ID: 52)</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>   
                            {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-jsg9" >
                                <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-OrganisationsList-container">
                                        
                                    </span>
                                </span>
                            </span>
                            <form action="/Account/SetUserRoleOrganisationContext" id="formSwitchOrg" method="post">
                                <input id="UserSelection" name="UserSelection" type="hidden" value="" />
                                <input id="url" name="url" type="hidden" value="" />
                                <input id="switchedInstanceId" name="switchedInstanceId" type="hidden" value="" />
                            </form> */}
                        </li>
                        <li className="navbar-nav-level1">
                            <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <span className="username username-hide-on-mobile">Username</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2 menu-right">
                                <li className="navbar-nav-level2" >
                                    <a href="/Account/ManageProfile/Preferences/322">Manage Preferences</a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <form action="/Account/LogOff" id="logoutForm" method="post">
                                        <input name="__RequestVerificationToken" type="hidden" value="MF7YKmy_MW9T4O3fVKUAd75EncMYbUWVobOzQ_oxHbco3T099gTNxwYok1y03fps0Usx8FN3J1h_et3hUinMO_MHLe4xf5vYfrR2ivbwpMN1NQJCVzI5NRMEbDXuKmoGqvucTALpnmFrseFKYVs_2A2" />
                                        <a href="">Log off</a>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </header>
                <CampaignList />
            </Route>
            <Route exact path={`${url}/campaign-list/campaign`}>
            <header className='va-title-bar'>
            <div className="navbar titlebar-container">
                <div className='navbar-left'>
                    <div className="va-title-bar-title">
                        <NavLink exact={true} activeClassName='nav-item-selected' to={url}>
                            Elsy
                        </NavLink>
                        <div className="menu-toggler sidebar-toggler hide">
                        </div>
                    </div>
        
                    <ul className="navbar-nav">
                        <li className="navbar-nav-level1" id="topNavigationInstance">
                            <a data-toggle="dropdown" data-hover="dropdown" >
                                <span>Instance</span> 
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">

                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Instance Overview</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Products</span>
                                        <Signal icon={KeyboardArrowRight} size={0.75} />
                                    </a>
                                    <ul className="navbar-nav-submenu u-shadow-2">
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/90" className="nav-link nav-toggle">Enterprise Solutions (ID: 90)</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/91" className="nav-link nav-toggle">Credit Cards (ID: 91)</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="/Plan/Product/Overview/92" className="nav-link nav-toggle">Beauty Care (ID: 92)</a></li>
                                    </ul>
                                </li>
            
                            </ul>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationCampaign">
                            <a href="" onClick={onNavClick('campaign-list')}>
                                Campaigns
                            </a>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationReport">
                            <a href="">
                                Reports
                            </a>
                        </li>     
                        <li className="navbar-nav-level1" id="topNavigationResearch">
                            <a data-toggle="dropdown" data-hover="dropdown" href="">
                                <span>Research</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">
                                <li className="navbar-nav-level2">
                                    <a href="" className="@*nav-link nav-toggle*@ ">
                                        <span className="title">Media Vehicles</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Audiences</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Locations</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Inventory Sources</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Segments</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">DMPs</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Activation Platforms</span>
                                    </a>
                                </li>

                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">Activation Partners</span>
                                    </a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <a href="">
                                        <span className="title">News and Notifications</span>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationDatamart">
                            <a href="">
                                Datamart
                            </a>
                        </li>
                        <li className="navbar-nav-level1" id="topNavigationAdmin">
                            <a data-toggle="dropdown" data-hover="dropdown" href="javascript:;">
                                <span>Administration</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2">
                                <li className="navbar-nav-level2">
                                    <a href="javascript:void(0)">
                                        <span>Instance Administration</span>    
                                        <Signal icon={KeyboardArrowRight} size={0.75} />                
                                    </a>
                                    <ul className="navbar-nav-submenu u-shadow-2">
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Users</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Instance</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Monitor Usage</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Manage Campaigns</a></li>
                                        <li className="navbar-nav-level3" aria-haspopup="true"><a href="" className="nav-link nav-toggle">Configure Instance</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>   
                <div className='navbar-right'> 
                    <ul className="navbar-nav">
                        <li>
                            <Search />
                        </li>
                        <li className="navbar-nav-level1">
                            <a className="" title="Elsy Demo - Client Sandbox (ID: 52)">
                                <span>Elsy Demo - Client Sandbox (ID: 52)</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>   
                            {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-jsg9" >
                                <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-OrganisationsList-container">
                                        
                                    </span>
                                </span>
                            </span>
                            <form action="/Account/SetUserRoleOrganisationContext" id="formSwitchOrg" method="post">
                                <input id="UserSelection" name="UserSelection" type="hidden" value="" />
                                <input id="url" name="url" type="hidden" value="" />
                                <input id="switchedInstanceId" name="switchedInstanceId" type="hidden" value="" />
                            </form> */}
                        </li>
                        <li className="navbar-nav-level1">
                            <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <span className="username username-hide-on-mobile">Username</span>
                                <Signal icon={KeyboardArrowDown} size={0.75} />
                            </a>
                            <ul className="navbar-nav-menu u-shadow-2 menu-right">
                                <li className="navbar-nav-level2" >
                                    <a href="/Account/ManageProfile/Preferences/322">Manage Preferences</a>
                                </li>
                                <li className="navbar-nav-level2">
                                    <form action="/Account/LogOff" id="logoutForm" method="post">
                                        <input name="__RequestVerificationToken" type="hidden" value="MF7YKmy_MW9T4O3fVKUAd75EncMYbUWVobOzQ_oxHbco3T099gTNxwYok1y03fps0Usx8FN3J1h_et3hUinMO_MHLe4xf5vYfrR2ivbwpMN1NQJCVzI5NRMEbDXuKmoGqvucTALpnmFrseFKYVs_2A2" />
                                        <a href="">Log off</a>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </header>
                <Campaign />
            </Route>
            
        </Switch>
    </div>
)
};

export default ElsyUpdate;