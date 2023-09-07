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
  const mediavehicleList: any = [
      { 
          name: 'Cable TV', 
          description: 'ID: 00',
          type: 'TV',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'blue'
      },
      { 
          name: 'DRTV', 
          description: 'ID: 00',
          type: 'TV',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'purple'
      },
      { 
          name: 'Network TV', 
          description: 'ID: 00',
          type: 'TV',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: true,
          sharedIcon: false,
          iconclass: 'red'
      },
      { 
          name: 'Spot TV', 
          description: 'ID: 00',
          type: 'TV',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'green'
      },
      { 
          name: 'Amazon Freevee', 
          description: 'ID: 00',
          type: 'Online Video',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'dark'
      },
      { 
          name: 'Amazon Prime Video', 
          description: 'ID: 00',
          type: 'Online Video',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'dark'
      },
      { 
          name: 'Canela', 
          description: 'ID: 00',
          type: 'Online Video',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'red'
      },
      { 
          name: 'Crackle TV', 
          description: 'ID: 00',
          type: 'Online Video',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'orange'
      },
      { 
          name: 'Discovery+', 
          description: 'ID: 00',
          type: 'Online Video',
          allowed: true,
          responseadjustment: '1.00/1.20',
          adjustment: 'No Adjustment',
          heartIcon: false,
          sharedIcon: false,
          iconclass: 'dark'
      },
      
  ];
function dropdownChanged(value: ValueType<OptionType>): void {
    console.log('changed', value);
}
export const MediaVehicles: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();

    React.useEffect(() => {
        selectedNav('media-vehicles');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header">
                <div className='content-header-left'>
                    <div className='content-header-label'>Research</div>
                    <h1 className='page-title'>Media Vehicles</h1>
                </div>
                <div className='content-header-right'>
                    {/* <Button onClick={() => history.push(`${url}/create`)}>Create</Button> */}
                </div>
            </div>
            <div className='content-main'>
                
                <div className='content-main-left'>
                   <div className='content-main-sticky'>
                        
                        <div className='search-filter-bar'>
                            <Search placeholder='Search' />
                            <div className='dummy-filter'>
                                <span>Type</span>
                                <Signal icon={ChevronDown} size={0.75} />
                            </div>
                        </div>
                        <div className='list-header'>
                            <div className='list-col-icon'></div>
                            <div className='list-col-name'>Name</div>
                            <div className='list-col-type'>Type</div>
                            <div className='list-col-adjustment'>Response adjustment factor - site visits</div>
                            <div className='list-col-adjustment'>Adjustment Settings</div>
                            <div className='list-col-actions'></div>
                        </div>
                    </div>
                    <div className='list-rows'>
                        {mediavehicleList.map((option:any, index: number) => (
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
                                    <div className='list-col-type'>
                                        <div className='list-item'>{option.type}</div>
                                    </div>
                                    <div className='list-col-adjustment'>
                                        <div className='list-item-adjustment'>
                                            {option.responseadjustment}
                                        </div>
                                    </div>
                                    <div className='list-col-adjustment'>
                                        <div className='list-item-adjustment'>
                                            {option.adjustment}
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
                                    <div className='sidebar-row-description'>Status: Draft</div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Name</div>
                                    <div className='sidebar-row-description'>Status: Draft</div>
                                </div>
                                <div className='sidebar-row-right'><Button className='btn-tertiary'>Keep Editing</Button></div>
                            </div>
                            <div className='sidebar-row'>
                                <div className='sidebar-row-left'>
                                    <div className='sidebar-row-name'>Name</div>
                                    <div className='sidebar-row-description'>Status: Draft</div>
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