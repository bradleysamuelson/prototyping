import React from 'react';
import {
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Button, ButtonTheme, PillButton, PillButtonGroup, PillTheme } from '@preamp/core';
import { Search } from '@preamp/core';
import { DropdownButton, OptionType, ValueType } from '@preamp/select';

import {CreateAudience} from './create-audience';
import audiencesScreenshot from '../../img/audiences.png';
import segmentsScreenshot from '../../img/segments.png'
import { ChevronDown, MenuEllipsis, Signal } from '@preamp/signal';

const rowActionOptions: OptionType[] = [
    { label: 'View', value: '1' },
    { label: 'Edit', value: '2' },
    { label: 'Duplicate', value: '3' },
    { label: 'Delete', value: '4' },
];
const advAudienceList: any = [
    { 
        name: 'Segment Name Lu', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Gina Chee',
        lastupdated: '00/00/000',
        heartIcon: true,
        sharedIcon: true
    },
    { 
        name: 'Segment Luid padding dupe debug', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Gina Chee',
        lastupdated: '00/00/000',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Segment Name', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Christian Rosales',
        lastupdated: '00/00/000',
        heartIcon: true,
        sharedIcon: false
    },
    { 
        name: 'Segment Name', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Brad Samuelson',
        lastupdated: '00/00/000',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Segment Name', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Alan Maginn',
        lastupdated: '00/00/000',
        heartIcon: true,
        sharedIcon: true
    },
    { 
        name: 'Segment Name', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Josh Clark',
        lastupdated: '00/00/000',
        heartIcon: true,
        sharedIcon: true
    },
    { 
        name: 'Segment Name', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Hannah Rahr',
        lastupdated: '00/00/000',
        heartIcon: false,
        sharedIcon: false
    },
    { 
        name: 'Segment Name', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Josh Clark',
        lastupdated: '00/00/000',
        heartIcon: true,
        sharedIcon: true
    },
    { 
        name: 'Segment Name', 
        description: 'HH UE: 121,110.323',
        created: '5/18/2023',
        createdby: 'Hannah Rahr',
        lastupdated: '00/00/000',
        heartIcon: false,
        sharedIcon: true
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
export const Segments: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('segments');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header content-header-tabs">
                <div className='content-header-upper'>
                    <div className='content-header-left'>
                        <div className='content-header-label'>Audiences</div>
                        <h1 className='page-title'>Segments</h1>
                    </div>
                    <div className='content-header-right'>
                        <Button className='va-btn-lg' 
                            // onClick={() => history.push(`${url}/create`)}
                        >Create Segment</Button>
                    </div>
                </div>
                <div className='content-header-tab-container'>
                    <ul className="va-tabs" data-ui="tabs" role="tablist">
                        <li className="va-tab-item va-tab-item--active">
                            <a aria-selected="true" className="va-tab-item__link" role="tab">First-Party Segments</a>
                        </li>
                        <li className="va-tab-item">
                            <a aria-selected="false" className="va-tab-item__link" role="tab">TV Viewership Segments</a>
                        </li>
                        <li className="va-tab-item ">
                            <a className="va-tab-item__link" role="tab">Optimization Segments</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='content-main'>
                
                <div className='content-main-left'>
                   <div className='content-main-sticky'>
                        
                        <div className='search-filter-bar'>
                            <Search placeholder='Search' />
                            <div className='dummy-filter'>
                                <span>Created By</span>
                                <Signal icon={ChevronDown} size={0.75} />
                            </div>
                            <div className='dummy-filter'>
                                <span>Last Updated</span>
                                <Signal icon={ChevronDown} size={0.75} />
                            </div>
                        </div>
                        <div className='list-header'>
                            <div className='list-col-fav'></div>
                            <div className='list-col-name'>Name</div>
                            <div className='list-col-created'>Created</div>
                            <div className='list-col-status'>Last Updated</div>
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
                                            <a className='item-name-link'>{option.name}</a> 
                                            {option.sharedIcon && <Signal icon={SharedWithOthers} size={1.5} />}
                                        </div>
                                        <div className='list-item-description'>{option.description}</div>
                                    </div>
                                    <div className='list-col-created'>
                                        <div className='list-item'>{option.created}</div>
                                        <div className='list-item-description'>{option.createdby}</div>
                                    </div>
                                    <div className='list-col-status'>
                                        <div className='list-item'>
                                            {option.lastupdated}
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
                        <div className='sidebar-header'>Needs Attention</div>
                        <div className='sidebar-section-content'>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left sidebar-row-left-icon'>
                                    <Signal icon={AlertTriangle} size={1} />
                                    <div className='sidebar-row-name-container'>
                                        <div className='sidebar-row-name'>Segment Name</div>
                                        <div className='sidebar-row-description'>Status: Processing Failed</div>
                                    </div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left sidebar-row-left-icon'>
                                    <Signal icon={AlertTriangle} size={1} />
                                    <div className='sidebar-row-name-container'>
                                        <div className='sidebar-row-name'>Segment Name</div>
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
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Processing Failed</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Processing Failed</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Processing Failed</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Processing Failed</div>
                                </div>
                                <div className='sidebar-row-right'><Signal icon={MenuEllipsis} size={1} /></div>
                            </div>
                        </div>
                        <div className='sidebar-divider'></div>
                        <div className='sidebar-header'>Jump Back In</div>
                        <div className='sidebar-section-content'>
                        <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Segment Name</div>
                                    <div className='sidebar-row-description'>Status: Draft </div>
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