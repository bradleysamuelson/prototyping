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
import { Button, ButtonTheme, IconButton, TitleBar } from '@preamp/core';
import { Clear, MenuEllipsis, Signal } from '@preamp/signal';
import { AudienceOptimization } from './audience-optimization';
import { MediaPlans } from './media-plan';
import { Performance } from './performance';
import { Monitoring } from './monitoring';
import { Flowchart } from './flowchart';
import { Activities } from './activities';
import { Measurement } from './measurement';
import { InFlight } from './inflight-planning';
import {CreateCampaign} from './create-campaign'

import { VideoAmp } from '../../../../components/icons/videoamp';

import campaignlistScreenshot from '../../img/campaignlist-screenshot.png';
export const Campaigns: React.FC<any> = ({selectedNav, latestObject, latestType, latestStatus, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('campaigns');
    }, []);
    return (
        
            
            
           
        <Switch>
            <Route exact path={url} >
            <div className={cx('page-content')}>
                <div className="content-header">
                    <div className='content-header-left'>
                        <h1 className='page-title'>Campaigns</h1>
                    </div>
                    <div className='content-header-right'>
                        <Button className='va-btn-lg' 
                            // onClick={() => history.push(`${url}/create`)}
                        >Create a Campaign</Button>
                    </div>
                </div>
                <div className='content-main content-main-screenshot'>
                    <a onClick={() => (
                        history.push(`${url}/campaign`),
                        latestObject('Campaign_Name'),
                        latestType('campaign'),
                        latestStatus('Draft'),
                        localStorage.setItem('latestObject', 'Campaign_Name'),
                        localStorage.setItem('latestType', 'campaign'),
                        localStorage.setItem('latestStatus', 'Draft')
                    
                    )}>
                        <img src={campaignlistScreenshot} className='campaignlist-screenshot screenshot' alt="Campaigns" />
                    </a>
                </div>
                </div>
                </Route>
                <Route path={`${url}/campaign`}>
                <div className='page-content page-content-takeover'>
                    <div className="page-takeover">
                        <div className='takeover-titlebar'>
                            <div className='takeover-titlebar-left'>
                                <Signal icon={VideoAmp} size={3} />
                                <div className='titlebar-title'>
                                    <div className='titlebar-brand'>Subway</div>
                                    <h1>Campaign_Name</h1>
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
                                <IconButton icon={Clear} size='lg' onClick={() => history.goBack()}  />
                            </div>
                        </div>
                        <div className='takeover-content'>
                            <div className='takeover-leftnav'>
                                <ul className='takeover-leftnav-menu'>
                                    <li className='takeover-leftnav-menu-item selected'><a className='takeover-leftnav-link'>Overview</a></li>
                                    <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Media Brief</a></li>
                                    <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Plan Versions</a></li>
                                    <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Performance</a></li>
                                    <li className='takeover-leftnav-menu-item'><a className='takeover-leftnav-link'>Monitoring</a></li>
                                </ul>
                            </div>
                            <div className='takeover-content-main'>
                                <div className='takeover-content-main-top'>
                                    <div className='takeover-title'>Overview</div>
                                    <div className='content-header-tab-container'>                                        
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
                                    </div>
                                </div>
                                <div className='takeover-content-main-bottom'>
                                    <div className='placeholder-container placeholder-container-full placeholder-container-clear'>Campaign Overview</div>
                                </div>
                            </div>
                           
                        </div>
                        <Switch>
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
                        </Switch>
                        
                    </div>
                </div>
                </Route>
                <Route path={`${url}/create`}>
                    <CreateCampaign />
                </Route>
            </Switch>
    )
}