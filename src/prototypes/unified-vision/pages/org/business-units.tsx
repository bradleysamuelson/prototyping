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
import { Button, ButtonTheme, Search } from '@preamp/core';
import { ChevronDown, MenuEllipsis, Signal } from '@preamp/signal';
import { DropdownButton, OptionType, ValueType } from '@preamp/select';

const rowActionOptions: OptionType[] = [
    { label: 'View', value: '1' },
    { label: 'Edit', value: '2' },
    { label: 'Duplicate', value: '3' },
    { label: 'Delete', value: '4' },
];
const productList: any = [
    { 
        name: 'Enterprise Solutions', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'enterprise'
    },
    { 
        name: 'Credit Cards', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'creditcards'
    },
    { 
        name: 'Beauty Care', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: true,
        sharedIcon: false,
        iconclass: 'beautycare'
    },
    { 
        name: 'Energy Drink', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'energydrink'
    },
    
];
function dropdownChanged(value: ValueType<OptionType>): void {
    console.log('changed', value);
}
export const BusinessUnits: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('products');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header ">
                {/* <div className='content-header-upper'> */}
                    <div className='content-header-left'>
                        <div className='content-header-label'>Organization</div>
                        <h1 className='page-title'>Products</h1>
                    </div>
                    <div className='content-header-right'>
                    <Button className='va-btn-lg' 
                            // onClick={() => history.push(`${url}/create`)}
                        >Create a Product</Button>
                    </div>
                {/* </div> */}
                {/* <div className='content-header-tab-container'>
                    <ul className="va-tabs" data-ui="tabs" role="tablist">
                        <li className="va-tab-item va-tab-item--active">
                            <a aria-selected="true" className="va-tab-item__link" role="tab">KPIs</a>
                        </li>
                        <li className="va-tab-item">
                            <a aria-selected="false" className="va-tab-item__link" role="tab">Tactics</a>
                        </li>
                        <li className="va-tab-item ">
                            <a className="va-tab-item__link" role="tab">Custom Filters</a>
                        </li>
                        <li className="va-tab-item ">
                            <a aria-selected="false" className="va-tab-item__link" role="tab">Locations</a>
                        </li>
                        <li className="va-tab-item ">
                            <a aria-selected="false" className="va-tab-item__link" role="tab">Linked Audiences</a>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className='content-main'>
                
                <div className='content-main-left'>
                   <div className='content-main-sticky'>
                        
                        <div className='search-filter-bar'>
                            <Search placeholder='Search' />
                            <div className='dummy-filter'>
                                <span>Status</span>
                                <Signal icon={ChevronDown} size={0.75} />
                            </div>
                        </div>
                        <div className='list-header'>
                            <div className='list-col-icon'></div>
                            <div className='list-col-name'>Name</div>
                            <div className='list-col-kpi'>KPIs</div>
                            <div className='list-col-status'>Campaigns Used</div>
                            <div className='list-col-status'>Status</div>
                            <div className='list-col-actions'></div>
                        </div>
                    </div>
                    <div className='list-rows'>
                        {productList.map((option:any, index: number) => (
                            <div className='list-row' key={index}>
                                <div className='list-row-left'>
                                    <div className='list-col-icon'>
                                        <div className={cx('list-item-icon', option.iconclass)}></div>
                                    </div>
                                    <div className='list-col-name'>
                                        <div className='list-item-name'>
                                            <a className='item-name-link'>{option.name}</a> 
                                        </div>
                                        <div className='list-item-description'>{option.description}</div>
                                    </div>
                                    <div className='list-col-kpi'>
                                        <div className='list-item'>{option.kpi}</div>
                                    </div>
                                    <div className='list-col-status'>
                                        <div className='list-item'>
                                            {option.campaigns}
                                        </div>
                                    </div>
                                    <div className='list-col-status'>
                                        <div className='list-item'>
                                            {option.status}
                                        </div>
                                    </div>
                                </div>
                                <div className='list-col-actions'>
                                    {/* <Signal icon={MenuEllipsis} size={1} /> */}
                                    <DropdownButton
                                        dataUI="icon-dropdown"
                                        icon={MenuEllipsis}
                                        onChange={dropdownChanged}
                                        options={rowActionOptions}
                                        shouldCloseOnSelect={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='content-main-right'>
                    <div className='content-sidebar'>
                        <div className='sidebar-header'>Most Recent</div>
                        <div className='sidebar-section-content'>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left sidebar-row-left-icon'>
                                    <div className='sidebar-row-name-container'>
                                        <div className='sidebar-row-name'>Name</div>
                                        <div className='sidebar-row-description'>Metadata or description</div>
                                    </div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left sidebar-row-left-icon'>
                                    <div className='sidebar-row-name-container'>
                                        <div className='sidebar-row-name'>Name</div>
                                        <div className='sidebar-row-description'>Metadata or description</div>
                                    </div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                        </div>
                        <div className='sidebar-divider'></div>
                        <div className='sidebar-header'>Favorites</div>
                        <div className='sidebar-section-content'>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Name</div>
                                    <div className='sidebar-row-description'>Metadata or description</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Name</div>
                                    <div className='sidebar-row-description'>Metadata or description</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                        </div>
                        <div className='sidebar-divider'></div>
                        <div className='sidebar-header'>Jump Back In</div>
                        <div className='sidebar-section-content'>
                        <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Name</div>
                                    <div className='sidebar-row-description'>Metadata or description</div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Name</div>
                                    <div className='sidebar-row-description'>Metadata or description</div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Name</div>
                                    <div className='sidebar-row-description'>Metadata or description</div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}