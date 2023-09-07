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
import { Button, ButtonTheme, IconButton } from '@preamp/core';
import { AudienceOptimization } from './audience-optimization';
import { MediaPlans } from './media-plan';
import { Performance } from './performance';
import { Monitoring } from './monitoring';
import { Flowchart } from './flowchart';
import { Activities } from './activities';
import { Measurement } from './measurement';
import { InFlight } from './inflight-planning';
import {CreateCampaign} from './create-campaign'

import campaignScreenshot from '../../img/campaign.png'
export const Campaigns: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('campaigns');
    }, []);
    return (
        <div className={cx('page-content-container')}>
            
            <div className='section-header'>
                <h1 className='page-title u-title-2'>Campaign / Media Plan Management</h1>
                <Button onClick={() => (history.push(`${url}/create`))}>Create a Campaign</Button>
            </div>
           
            <Switch>
                <Route exact path={url} >
                    list of campaigns
                    <div className="placeholder-container">
                        
                        <a onClick={() => history.push(`${url}/campaign`)}>Campaign Name 1234</a>
                    </div>
                </Route>
                <Route path={`${url}/campaign`}>
                    <div className="placeholder-container">
                        <h1 className='u-title-2'>Campaign Name 1234</h1>
                        <ul className='testnav'>
                            <li><a onClick={() => history.push(`${url}/campaign/audience-optimization`)}>Audience Optimization (modal)</a></li>
                            <li><a onClick={() => history.push(`${url}/campaign/media-plan`)}>Media Plan</a></li>
                            <li><a onClick={() => history.push(`${url}/campaign/performance`)}>Performance</a> </li>
                            <li><a onClick={() => history.push(`${url}/campaign/monitoring`)}>Monitoring</a></li>
                            <li><a onClick={() => history.push(`${url}/campaign/flowchart`)}>Flowchart</a></li>
                            <li><a onClick={() => history.push(`${url}/campaign/activities`)}>Activities</a></li>
                            <li><a onClick={() => history.push(`${url}/campaign/measurement`)}>Measurement</a></li>
                            <li><a onClick={() => history.push(`${url}/campaign/inflight`)}>In-flight Planning / Share Shifting</a></li>
                        </ul>
                        <div className='page-content'>
                            Campaign View
                            <img src={campaignScreenshot} alt="Logo" />
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
                </Route>
                <Route path={`${url}/create`}>
                    <CreateCampaign />
                </Route>
            </Switch>
        </div>
    )
}