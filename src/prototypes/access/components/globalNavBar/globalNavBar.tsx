import React, { ReactNode } from 'react';
import cx from 'classnames';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { VideoAmp } from '../../../../components/icons/videoamp';
import { Signal, KeyboardArrowDown, KeyboardArrowRight } from '@preamp/signal';
import { OptionsType, DropdownButton, OptionType, ValueType, Select, SelectType } from '@preamp/select';
import { SearchIcon } from '../../../../components/icons/search-icon';
import { BellIcon } from '../../../../components/icons/bell-icon';
import './globalNavBar.scss';


const ElsyIcon = (
    <svg aria-hidden="true" className="va-signal-icon_svg" data-ui="signal-icon_svg--Optimize" focusable="false" role="presentation" viewBox="0 0 24 23"><g><g className="optimize" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="currentColor" fill-rule="nonzero" id="elsy"><circle cx="1.81" cy="1.81" id="Oval" r="1.81"></circle><circle cx="12" cy="1.81" id="Oval-Copy-10" r="1.81"></circle><circle cx="6.905" cy="1.81" id="Oval-Copy-5" r="1.81"></circle><circle cx="17.095" cy="1.81" id="Oval-Copy-11" r="1.81"></circle><circle cx="22.19" cy="1.81" id="Oval-Copy-20" r="1.81"></circle><circle cx="1.81" cy="6.637" id="Oval-Copy" r="1.81"></circle><circle cx="12" cy="6.637" id="Oval-Copy-12" r="1.81"></circle><circle cx="6.905" cy="6.637" id="Oval-Copy-6" r="1.81"></circle><circle cx="17.095" cy="6.637" id="Oval-Copy-13" r="1.81"></circle><circle cx="22.19" cy="6.637" id="Oval-Copy-21" r="1.81"></circle><circle cx="1.81" cy="11.464" id="Oval-Copy-2" r="1.81"></circle><circle cx="12" cy="11.464" id="Oval-Copy-14" r="1.81"></circle><circle cx="6.905" cy="11.464" id="Oval-Copy-7" r="1.81"></circle><circle cx="17.095" cy="11.464" id="Oval-Copy-15" r="1.81"></circle><circle cx="22.19" cy="11.464" id="Oval-Copy-22" r="1.81"></circle><circle cx="1.81" cy="16.291" id="Oval-Copy-3" r="1.81"></circle><circle cx="12" cy="16.291" id="Oval-Copy-16" r="1.81"></circle><circle cx="6.905" cy="16.291" id="Oval-Copy-8" r="1.81"></circle><circle cx="17.095" cy="16.291" id="Oval-Copy-17" r="1.81"></circle><circle cx="22.19" cy="16.291" id="Oval-Copy-23" r="1.81"></circle><circle cx="1.81" cy="21.117" id="Oval-Copy-4" r="1.81"></circle><circle cx="12" cy="21.117" id="Oval-Copy-18" r="1.81"></circle><circle cx="6.905" cy="21.117" id="Oval-Copy-9" r="1.81"></circle><circle cx="17.095" cy="21.117" id="Oval-Copy-19" r="1.81"></circle><circle cx="22.19" cy="21.117" id="Oval-Copy-24" r="1.81"></circle></g></g></g></svg>
)

export interface GlobalNavBarProps {
    brandUI?: boolean;
    user?: string;
    className?: string;
    userOptionsChange?: any;
    company?: string;
    companyOptions?: OptionsType<OptionType>;
    companyDefaultOption?: OptionType;
    onChange?: any;
    hasInputIcon?: boolean;
    inputIcon?: React.ReactNode;
    hasAgencyLogo?: boolean;
    agencyLogo?: React.ReactNode;
    userOptions?: OptionsType<OptionType>;
    logoClick?: any;
    elsyLogoClick?: any;
    hasSwitcher?: boolean;
    singleAdvertiser?: string;
    hasLaunchpadLink?: boolean;
    campaignsClick?: any;
    campaignSection?: boolean;
    reportsClick?: any;
    reportsSection?: boolean;
}
const defaultOptions: OptionsType<OptionType> = [
    { value: 'company1', label: 'Company 1' },
    { value: 'company2', label: 'Company 2' },
];

const defaultUserOptions: OptionsType<OptionType> = [
    {label: 'Manage Preferences', value: '1'},
    {label: 'Logout', value: '2'}
]

export const  GlobalNavBar: React.FC<GlobalNavBarProps> = ({
        brandUI,
        user, 
        className,
        company, 
        companyOptions,
        companyDefaultOption,
        hasInputIcon,
        inputIcon,
        hasAgencyLogo,
        agencyLogo,
        userOptions,
        userOptionsChange,
        logoClick,
        elsyLogoClick,
        hasSwitcher,
        singleAdvertiser,
        hasLaunchpadLink,
        campaignsClick,
        campaignSection,
        reportsClick,
        reportsSection,
        onChange}: GlobalNavBarProps): React.ReactElement<HTMLDivElement> => {
    const { url } = useRouteMatch();

    return (
        <div className={cx("va-nav-bar", className)}>
            <div className='va-nav-bar-content'>
            <div className="top-bar-left">
                <div className='logo-container' >
                {hasLaunchpadLink ? <a role="aria-button" onClick={logoClick} ><Signal icon={VideoAmp} size="2.5rem" /> </a> : <Signal icon={VideoAmp} size="2.5rem" />}
                {brandUI && (
                    <a role="aria-button" onClick={elsyLogoClick} ><Signal icon={ElsyIcon} className='elsy-logo-icon' size="1.5rem" /></a>
                    )
                }
                </div>
                {brandUI && (
                    <ul className="navbar-nav">
                    <li className="navbar-nav-level1" id="topNavigationInstance">
                        <a data-toggle="dropdown" data-hover="dropdown" >
                            <span>Instance</span> 
                            <Signal icon={KeyboardArrowDown} size={0.75} />
                        </a>
                        <ul className="navbar-nav-menu u-shadow-2">

                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">Instance Overview</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
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
                    <li className={cx("navbar-nav-level1", {'selected': campaignSection})} id="topNavigationCampaign">
                        <a href="javascript:Void(0)" onClick={campaignsClick} >
                            Campaigns
                        </a>
                    </li>
                    <li className={cx("navbar-nav-level1", {'selected': reportsSection})} id="topNavigationReport">
                        <a href="javascript:Void(0)" onClick={reportsClick}>
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
                                <a href="javascript:void(0)" className="@*nav-link nav-toggle*@ ">
                                    <span className="title">Media Vehicles</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">Audiences</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">Locations</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">Inventory Sources</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">Segments</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">DMPs</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">Activation Platforms</span>
                                </a>
                            </li>

                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">Activation Partners</span>
                                </a>
                            </li>
                            <li className="navbar-nav-level2">
                                <a href="javascript:void(0)">
                                    <span className="title">News and Notifications</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li className="navbar-nav-level1" id="topNavigationDatamart">
                        <a href="javascript:void(0)">
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
                                    <li className="navbar-nav-level3" aria-haspopup="true"><a href="javascript:void(0)" className="nav-link nav-toggle">Manage Users</a></li>
                                    <li className="navbar-nav-level3" aria-haspopup="true"><a href="javascript:void(0)" className="nav-link nav-toggle">Manage Instance</a></li>
                                    <li className="navbar-nav-level3" aria-haspopup="true"><a href="javascript:void(0)" className="nav-link nav-toggle">Monitor Usage</a></li>
                                    <li className="navbar-nav-level3" aria-haspopup="true"><a href="javascript:void(0)" className="nav-link nav-toggle">Manage Campaigns</a></li>
                                    <li className="navbar-nav-level3" aria-haspopup="true"><a href="javascript:void(0)" className="nav-link nav-toggle">Configure Instance</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                )}
                
            </div>
            <div className="top-bar-right">
                <div className='search-input'>
                    <Signal icon={SearchIcon} size={1} />
                    <span className='placeholder'>Search</span>
                </div>
                <div className={cx('nav-switcher-container', {'nav-switcher-withagency' : hasAgencyLogo})}>
                    {hasAgencyLogo && <div className='agency-logo-container'><Signal size="42px" icon={agencyLogo} /></div>}
                    {hasSwitcher ? (
                        <>
                            <Select
                                className={cx('va-switcher', {'va-switcher-withicon': hasInputIcon})}
                                options={companyOptions}
                                selectType={SelectType.Link}
                                onChange={onChange}
                                defaultValue={companyDefaultOption}
                                
                            ></Select>
                            </>
                    ) :  (
                        <span className='navbar-advertiser'>{singleAdvertiser}</span>
                    )}
                    
                    {hasInputIcon && <Signal size={1.25} className='switcher-input-icon' icon={inputIcon} />}
                </div>
                <DropdownButton
                    className='user-dropdown'
                    dataUI="primary-dropdown"
                    onChange={userOptionsChange}
                    options={userOptions}
                >
                    UserName
                </DropdownButton>
                
                
                {/* <Signal icon={BellIcon} size={1.5} /> */}
                {/* <div className="user-icon"></div> */}
            </div>
            </div>
        </div>
    );
};

GlobalNavBar.defaultProps = {
    brandUI: false,
    user: 'John',
    company: 'VideoAmp Media Group',
    companyOptions: defaultOptions,
    userOptions: defaultUserOptions,
    hasLaunchpadLink: true
};