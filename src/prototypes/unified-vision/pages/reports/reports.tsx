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
import { Button, ButtonTheme, IconButton, Search } from '@preamp/core';
import { ChevronDown, Clear, MenuEllipsis, Signal } from '@preamp/signal';
import { VideoAmp } from '../../../../components/icons/videoamp';
import { DropdownButton, OptionType, OptionsType, ValueType, Select, SelectType } from '@preamp/select';

import initiativeOverviewScreenshot from '../../img/initiative-overview-screenshot.png';
import planOverviewScreenshot from '../../img/plan-overview-screenshot.png';
import adMeasurementScreenshot from '../../img/ad-measurement-overview.png';
import planComparisonScreenshot from '../../img/plan-comparison-screenshot.png';

const rowActionOptions: OptionType[] = [
    { label: 'View', value: '1' },
    { label: 'Edit', value: '2' },
    { label: 'Duplicate', value: '3' },
    { label: 'Delete', value: '4' },
];
const typeOptions: OptionsType<OptionType> = [
    { value: 'all', label: 'All Types'},
    { value: 'advanced-media-measurement', label: 'Advanced Media Measurement'},
    { value: 'media-plan-overview', label: 'Media Plan Overview'},
    { value: 'media-plan-comparison', label: 'Media Plan Comparison'},
];
const statusOptions: OptionsType<OptionType> = [
    { value: 'all', label: 'All Statuses'},
    { value: 'draft', label: 'Draft'},
    { value: 'processing', label: 'Processing'},
    { value: 'completed', label: 'Completed'},
    { value: 'failed', label: 'Failed'},
];
const creatorOptions: OptionsType<OptionType> = [
    { value: 'all', label: 'All Creators'},
    { value: 'gina', label: 'Gina Chee'},
    { value: 'josh', label: 'Josh Clark'},
    { value: 'alan', label: 'Alan Maginn'},
    { value: 'hannah', label: 'Hannah Rahr'},
    { value: 'christian', label: 'Christian Rosales'},
    { value: 'brad', label: 'Brad Samuelson'},
    { value: 'stephanie', label: 'Stephanie Wayne'},
];
const advAudienceList: any = [
    { 
        name: 'Beauty Care - Q3 23 Media Measurement', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Hannah Rahr',
        status: 'Completed',
        type: 'Advanced Media Measurement',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Overview Base', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Josh Clark',
        status: 'Failed',
        type: 'Media Plan Overview',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Comparison', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Stephanie Wayne',
        status: 'Processing',
        type: 'Media Plan Comparison',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Media Measurement Base', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Gina Chee',
        status: 'Completed',
        type: 'Advanced Media Measurement',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Media Plan Overview', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Christian Rosales',
        status: 'Completed',
        type: 'Media Plan Overview',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Overview Base', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Catherine Chilton',
        status: 'Completed',
        type: 'Media Plan Overview',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Overview', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Brad Samuelson',
        status: 'Completed',
        type: 'Media Plan Comparison',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Media Measurement Base', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Alan Maginn',
        status: 'Completed',
        type: 'Advanced Media Measurement',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Media Measurement', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Hannah Rahr',
        status: 'Completed',
        type: 'Advanced Media Measurement',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Overview Base', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Josh Clark',
        status: 'Failed',
        type: 'Media Plan Overview',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Comparison', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Stephanie Wayne',
        status: 'Processing',
        type: 'Media Plan Comparison',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Advanced Media Measurement', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Gina Chee',
        status: 'Completed',
        type: 'Advanced Media Measurement',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 AMR', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Christian Rosales',
        status: 'Completed',
        type: 'Ad Measurement',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Overview Base', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Catherine Chilton',
        status: 'Completed',
        type: 'Media Plan Overview',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Plan Comparison', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Brad Samuelson',
        status: 'Completed',
        type: 'Media Plan Comparison',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Beauty Care - Q3 23 Media Measurement', 
        description: 'Date Range: 00/00/0000-00/00/0000',
        created: '5/18/2023',
        createdby: 'Alan Maginn',
        status: 'Completed',
        type: 'Advanced Media Measurement',
        heartIcon: false,
        sharedIcon: false
    },
];
const AlertTriangle = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12.448 2c1.049 0 2.021.548 2.568 1.449l8.478 14.154a3 3 0 0 1-2.576 4.5H3.967a3 3 0 0 1-2.557-4.514l8.47-14.14A3.002 3.002 0 0 1 12.448 2Zm0 2a1 1 0 0 0-.855.481L3.134 18.603a1 1 0 0 0 .844 1.5h16.929a1 1 0 0 0 .863-1.486L13.303 4.48A1 1 0 0 0 12.448 4Z"/><path d="M12.448 8.103a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM12.458 16.103a1 1 0 1 1 0 2h-.01a1 1 0 1 1 0-2h.01Z"/></g></svg>
    )
const SharedWithOthers = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.38 13.118a2.617 2.617 0 0 1 1.963 2.532v.959a.7.7 0 1 1-1.4 0v-.958c0-.512-.32-.964-.791-1.14l-.121-.038a.7.7 0 0 1 .35-1.355Zm-3.929-.096a2.617 2.617 0 0 1 2.618 2.617v.959a.7.7 0 0 1-1.4 0v-.959c0-.672-.545-1.217-1.218-1.217H4.617c-.672 0-1.217.545-1.217 1.217v.959a.7.7 0 0 1-1.4 0v-.959a2.617 2.617 0 0 1 2.617-2.617h3.834Zm13.352-5.166a.7.7 0 0 1-.016.99l-4.642 4.501a.7.7 0 0 1-.974 0l-2.11-2.046a.7.7 0 1 1 .974-1.005l1.623 1.572 4.155-4.027a.7.7 0 0 1 .99.015ZM6.534 7a2.617 2.617 0 1 1 0 5.234 2.617 2.617 0 0 1 0-5.234Zm3.912.084a2.617 2.617 0 0 1 0 5.07.7.7 0 0 1-.446-1.322l.099-.033a1.217 1.217 0 0 0 0-2.359.7.7 0 1 1 .347-1.356ZM6.534 8.4a1.217 1.217 0 1 0 0 2.434 1.217 1.217 0 0 0 0-2.434Z" fillRule="nonzero"/></svg>
)
const Heart = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.401 2a6.5 6.5 0 0 1 6.502 6.502 6.5 6.5 0 0 1-1.905 4.597l-8.84 8.84a1 1 0 0 1-1.414 0l-8.84-8.84a6.501 6.501 0 0 1 9.194-9.194l.353.352.353-.352a6.5 6.5 0 0 1 4.31-1.899L17.402 2Zm0 2a4.5 4.5 0 0 0-3.183 1.319l-1.06 1.06a1 1 0 0 1-1.414 0l-1.06-1.06a4.501 4.501 0 0 0-6.366 6.366l8.133 8.132 8.133-8.132a4.5 4.5 0 0 0 1.313-2.945l.006-.238A4.5 4.5 0 0 0 17.401 4Z" fillRule="nonzero"/></svg>
)
const HeartFill = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.291 4.612a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" fillRule="evenodd"/></svg>
)
function dropdownChanged(value: ValueType<OptionType>): void {
    console.log('changed', value);
}

export const Reports: React.FC<any> = ({selectedNav, latestObject, latestType, latestStatus, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const [latestReport, setLatestReport] = React.useState<string | null>(localStorage.getItem('latestReport'));
    const [reportType, setReportType] = React.useState<string | null>(localStorage.getItem('reportType'));
    const [searchInputValue, setSearchInputValue] = React.useState<string>('');
    const [typeFilter, setTypeFilter] = React.useState<string | undefined>('');
    const [statusFilter, setStatusFilter] = React.useState<string | undefined>('');
    const [creatorFilter, setCreatorFilter] = React.useState<string | undefined>('');
    
    
    const typeFilterChange = (e: any): void => {
        setTypeFilter(e.value);
    };
    const statusFilterChange = (e: any): void => {
        setStatusFilter(e.value);
    };
    const creatorFilterChange = (e: any): void => {
        setCreatorFilter(e.value);
    };
    const onClear = React.useCallback((): void => {
        setSearchInputValue('');
    }, []);
    const onSearchChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const { value } = e.currentTarget;

            setSearchInputValue(value);
        },
        [setSearchInputValue]
    );
    React.useEffect(() => {
        selectedNav('reports');
            if (latestReport === ('' || null)) {
                localStorage.setItem('latestReport', 'Report_Name');
                // localPersona = 'agency';
                setLatestReport('Report_Name')
            }
            if (reportType === ('' || null)) {
                localStorage.setItem('reportType', 'Advanced Media Measurement');
                // localPersona = 'agency';
                setReportType('Advanced Media Measurement')
            }
        }, []);
    return (
        <Switch>
            <Route exact path={url} >
            <div className='page-content'>
            <div className="content-header">
                <div className='content-header-left'>
                    <div className='content-header-label'>Reporting</div>
                    <h1 className='page-title'>Reports</h1>
                </div>
                <div className='content-header-right'>
                    <Button className='va-btn-lg' 
                        // onClick={() => history.push(`${url}/create`)}
                    >Create Report</Button>
                </div>
            </div>
            <div className='content-main'>
                <div className='content-main-left'>
                   <div className='content-main-sticky'>
                        <div className='search-filter-bar'>
                            <Search placeholder='Search' onClear={onClear} onChange={onSearchChange} value={searchInputValue} />
                            <div className='filters-container'>
                                <Select
                                    options={typeOptions}
                                    onChange={typeFilterChange}
                                    style={{ width: '12.75rem' }}
                                    className={cx('filter-select', {'selection': typeFilter != ''})}
                                    placeholder='Type'
                                    defaultValue={typeOptions[0]}
                                />
                                <Select
                                    options={statusOptions}
                                    onChange={statusFilterChange}
                                    style={{ width: '7rem' }}
                                    className='filter-select'
                                    placeholder='Status'
                                    defaultValue={statusOptions[0]}
                                />
                                <Select
                                    options={creatorOptions}
                                    onChange={creatorFilterChange}
                                    style={{ width: '9rem' }}
                                    className='filter-select'
                                    placeholder='Created by'
                                    defaultValue={creatorOptions[0]}
                                />
                                {/* <div className='dummy-filter'>
                                    <span>Type</span>
                                    <Signal icon={ChevronDown} size={0.75} />
                                </div> */}
                                {/* <div className='dummy-filter'>
                                    <span>Status</span>
                                    <Signal icon={ChevronDown} size={0.75} />
                                </div> */}
                                {/* <div className='dummy-filter'>
                                    <span>Created by</span>
                                    <Signal icon={ChevronDown} size={0.75} />
                                </div> */}
                                {/* <div className='dummy-filter'>
                                    <span>Modified By</span>
                                    <Signal icon={ChevronDown} size={0.75} />
                                </div> */}
                            </div>
                            
                        </div>
                        <div className='list-header'>
                            <div className='list-col-fav'></div>
                            <div className='list-col-name'>Name</div>
                            <div className='list-col-created'>Created</div>
                            <div className='list-col-status'>Status</div>
                            <div className='list-col-source'>Type</div>
                            <div className='list-col-actions'></div>
                        </div>
                    </div>
                    <div className='list-rows'>
                        {advAudienceList.map((option:any, index: number) => (
                            <div className='list-row' key={index}>
                                <div className='list-row-left'>
                                    <div className='list-col-fav'>
                                        {option.heartIcon ? <Signal icon={HeartFill} size={0.875} /> : <Signal icon={Heart} size={0.875} />} 

                                    </div>
                                    <div className='list-col-name'>
                                        <div className='list-item-name'>
                                            <a className='item-name-link' 
                                                onClick={() => (history.push(`${url}/report`, 
                                                setLatestReport(option.name)),
                                                latestObject(option.name),
                                                latestType('report'),
                                                latestStatus(option.status),
                                                setReportType(option.type),
                                                localStorage.setItem('latestReport', option.name),
                                                localStorage.setItem('latestObject', option.name),
                                                localStorage.setItem('latestType', 'report'),
                                                localStorage.setItem('latestStatus', option.status),
                                                localStorage.setItem('reportType', option.type)
                                            )}>
                                                {option.name}
                                            </a> 
                                            {option.sharedIcon && <Signal icon={SharedWithOthers} size={1.5} />}
                                            {option.heartIcon && <Signal icon={Heart} size={0.875} />}
                                        </div>
                                        <div className='list-item-description'>{option.description}</div>
                                    </div>
                                    <div className='list-col-created'>
                                        <div className='list-item'>{option.created}</div>
                                        <div className='list-item-description'>{option.createdby}</div>
                                    </div>
                                    <div className='list-col-status'>
                                        <div className='list-item'>
                                            {option.status === 'Failed' && <Signal icon={AlertTriangle} size={1} />}
                                            {option.status}
                                        </div>
                                    </div>
                                    <div className='list-col-source'>
                                        <div className='list-item'>{option.type}</div>
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
                        <div className='sidebar-header'>Needs Attention</div>
                        <div className='sidebar-section-content'>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left sidebar-row-left-icon'>
                                    <Signal icon={AlertTriangle} size={1} />
                                    <div className='sidebar-row-name-container'>
                                        <div className='sidebar-row-name'>Report_Name</div>
                                        <div className='sidebar-row-description'>Status: Processing Failed</div>
                                    </div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left sidebar-row-left-icon'>
                                    <Signal icon={AlertTriangle} size={1} />
                                    <div className='sidebar-row-name-container'>
                                        <div className='sidebar-row-name'>Report_Name</div>
                                        <div className='sidebar-row-description'>Status: Processing since 05/16/2023</div>
                                    </div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                        </div>
                        <div className='sidebar-divider'></div>
                        <div className='sidebar-header'>Take the Next Step</div>
                        <div className='sidebar-section-content'>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>VA HH: 13.72M |  HH UE: 41.29M</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>VA HH: 13.72M |  HH UE: 41.29M</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>VA HH: 13.72M |  HH UE: 41.29M</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>VA HH: 13.72M |  HH UE: 41.29M</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                        </div>
                        <div className='sidebar-divider'></div>
                        <div className='sidebar-header'>Jump Back In</div>
                        <div className='sidebar-section-content'>
                        <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Report_Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            </Route>
            <Route path={`${url}/report`}>
                <div className='page-content page-content-takeover'>
                    <div className="page-takeover">
                        <div className='takeover-titlebar'>
                            <div className='takeover-titlebar-left'>
                                <Signal icon={VideoAmp} size={3} />
                                <div className='titlebar-title'>
                                    <div className='titlebar-brand'>Subway</div>
                                    <h1>{latestReport}</h1>
                                </div>
                            </div>
                            <div className='takeover-titlebar-right'>
                                <Signal className='toolbar-menu-icon' icon={MenuEllipsis} size={1} />
                                <div className='shared-user-group'>
                                    <div className='shared-user'>BS</div>
                                    <div className='shared-user'>GC</div>
                                    <div className='shared-user'>CR</div>
                                </div>
                                <div className='button-group'>
                                    <Button theme={ButtonTheme.Secondary}>Explore Details</Button>
                                    <Button theme={ButtonTheme.Primary}>Share</Button>
                                </div>
                                <IconButton icon={Clear} size='lg' onClick={() => history.goBack()} />
                            </div>
                        </div>
                        <div className='takeover-content'>
                            <div className='takeover-leftnav'>
                                {reportType === 'Advanced Media Measurement' ? (
                                    <ul className='takeover-leftnav-menu'>
                                        <li className='takeover-leftnav-menu-item selected'><a className='takeover-leftnav-link'>Overview</a></li>

                                        <li className='takeover-leftnav-menu-header'>Audience Insights</li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Audience Composition</a></li>

                                        <li className='takeover-leftnav-menu-header'>Performance</li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Detail</a></li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Frequency</a></li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Overlap</a></li>

                                        <li className='takeover-leftnav-menu-header'>Optimization</li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Optimization Segments</a></li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Recommendations</a></li>
                                        
                                        <li className='takeover-leftnav-menu-header'>Competitive Insights</li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Competitor Overview</a></li>

                                        <li className='takeover-leftnav-menu-header'></li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Summary</a></li>
                                    </ul>
                                ) : reportType === 'Ad Measurement' ? (
                                    <ul className='takeover-leftnav-menu'>
                                        <li className='takeover-leftnav-menu-item selected'><a className='takeover-leftnav-link'>Overview</a></li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Summary</a></li>
                                    </ul>
                                ): (
                                    <ul className='takeover-leftnav-menu'>
                                        <li className='takeover-leftnav-menu-item selected'><a className='takeover-leftnav-link'>Report Results</a></li>
                                        <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Report Settings</a></li>
                                    </ul>
                                )}
                                
                            </div>
                            <div className='takeover-content-main'>
                                <div className='takeover-content-main-top'>

                                    <div className='takeover-title'>
                                        {reportType === 'Advanced Media Measurement' ? (
                                            <>Overview</>
                                        ) : reportType === 'Ad Measurement' ? (
                                            <>Ad Measurement Report</>
                                        ): (
                                            <>Report Results</>
                                        )}
                                    </div>
                                    {/* <div className='content-header-tab-container'>                                        
                                        <ul className="va-tabs" data-ui="tabs" role="tablist">
                                            <li className="va-tab-item va-tab-item--active">
                                                <a aria-selected="true" className="va-tab-item__link" role="tab">Planning</a>
                                            </li>
                                            <li className="va-tab-item">
                                                <a aria-selected="false" className="va-tab-item__link" role="tab">Reporting</a>
                                            </li>
                                            <li className="va-tab-item ">
                                                <a className="va-tab-item__link" role="tab">Timeline</a>
                                            </li>
                                            <li className="va-tab-item ">
                                                <a aria-selected="false" className="va-tab-item__link" role="tab">Revision History</a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                                <div className='takeover-content-main-bottom'>
                                    {reportType === 'Advanced Media Measurement' ? (
                                            <><img src={initiativeOverviewScreenshot} className='initiative-overview screenshot' alt="Advanced Media Measurement Overview" /></>
                                        ) : reportType === 'Ad Measurement' ? (
                                            <><img src={adMeasurementScreenshot} className='ad-measurement screenshot' alt="Ad Measurement" /></>
                                        ): reportType === 'Media Plan Overview' ? (
                                            <><img src={planOverviewScreenshot} className='plan-overview screenshot' alt="Media Plan Overview" /></>
                                        ) : reportType === 'Media Plan Comparison' ?(
                                            <><img src={planComparisonScreenshot} className='plan-comparison screenshot' alt="Media Plan Comparison" /></>
                                        ) : (
                                            <div className='placeholder-container placeholder-container-full placeholder-container-clear'>Report Results</div>
                                        )}
                                    
                                    
                                </div>
                            </div>
                           
                        </div>
                        {/* <Switch>
                            <Route path={`${url}/campaign/audience-optimization`}>
                                <AudienceOptimization />
                            </Route>
                            <Route path={`${url}/campaign/media-plan`}>
                                <MediaPlans />
                            </Route>
                            <Route path={`${url}/campaign/performance`}>
                                <Performance />
                            </Route>
                            <Route path={`${url}/campaign/monitoring`}>
                                <Monitoring />
                            </Route>
                            <Route path={`${url}/campaign/flowchart`}>
                                <Flowchart />
                            </Route>
                            <Route path={`${url}/campaign/activities`}>
                                <Activities />
                            </Route>
                            <Route path={`${url}/campaign/measurement`}>
                                <Measurement />
                            </Route>
                            <Route path={`${url}/campaign/inflight`}>
                                <InFlight />
                            </Route>
                        </Switch> */}
                        
                    </div>
                    </div>
                </Route>
            </Switch>
            
    )
}