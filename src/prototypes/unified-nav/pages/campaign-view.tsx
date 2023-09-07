import React from 'react';
import cx from 'classnames';
import {Button, IconButton} from '@preamp/core';
import {Signal, ChevronDown, KeyboardArrowRight} from '@preamp/signal';
import { Link, Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { Takeover } from '../components/takeover';


function CampaignView({
    setNavSelected, parentUrl
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('overview');

    React.useEffect(() => {
        setNavSelected('campaigns');
    }, []);

    return (
        <div className="campaigns-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <div className='content-header-upper-left'>
                        <div className='breadcrumb'><Link to={`${parentUrl}/campaigns`}>All Campaigns</Link></div>
                        <h1>CampaignName0001 <Signal className='header-icon' icon={ChevronDown} color='var(--va-grey-600)' size={1} /></h1>
                        <div className='header-data'><span>ID: 0001</span><span>Status: Locked</span></div>
                    </div>
                    <Button>Actions</Button>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='overview'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('overview'), history.push(`${url}`))}>Overview</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='media-brief'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('media-brief'), history.push(`${url}/media-brief`))}>Media Brief</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='planning'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('planning'), history.push(`${url}/planning`))}>Planning</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='monitoring'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('monitoring'), history.push(`${url}/monitoring`))}>Monitoring</a>
                    </li>
                </ul>
            </div>
            <div className='content'>
                <Switch>
                    <Route exact path={url} >
                        <div className='tab-content'>
                            
                        </div>
                    </Route>
                    <Route path={`${url}/:id`} children={<Child setTabSelected={setTabSelected} />} />
                     
                </Switch>
            </div>
        </div>
    )

}
type ChildParams = {
    id: string;
  };
function Child({
    setTabSelected
    }: any): React.ReactElement<HTMLElement> {
    const { id } = useParams<ChildParams>();
    
    const [activityNavOpen, setActivityNavOpen] = React.useState<boolean>(false);
    const [planCurrentOpen, setPlanCurrentOpen] = React.useState<boolean>(true);
    const [scenarioOpen, setScenarioOpen] = React.useState<boolean>(false);
    
    const closeTakeover = (): void => {
        setScenarioOpen(false);
    }

    React.useEffect(() => {
        setTabSelected(id);
    }, []);

    return (
    <div className='tab-content'>
        {id === 'media-brief' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">Audience</a></li>
                            <li><a href="javascript:void(0)">Location</a></li>
                            <li><a href="javascript:void(0)">Goals</a></li>
                            <li><a href="javascript:void(0)">Financials</a></li>
                            <li><a href="javascript:void(0)">Content</a></li>
                            <li><a href="javascript:void(0)">Inventory</a></li>
                            <li><a href="javascript:void(0)">Timing</a></li>
                            <li><a href="javascript:void(0)">Preferences</a></li>
                            <li><a href="javascript:void(0)">Properties</a></li>
                        </ul>
                    </div>
                    <div className='tab-content-right'>

                    </div>
                </div>
            </>
        )}
        {id === 'planning' && (
            <>
                <div className='plan-container'>
                    <IconButton 
                        className={cx('expand-icon', {'expand-icon-open': planCurrentOpen})} 
                        icon={KeyboardArrowRight} 
                        size="lg" 
                        onClick={():void => setPlanCurrentOpen(!planCurrentOpen)}
                    />
                    <div className={cx('plan-content', {'plan-content-open': planCurrentOpen})}>
                        <div className='plan-title'>Plan Name - Current</div>
                        <div className='scenario-container'>
                            <div className='scenario' role='button' onClick={(): void => setScenarioOpen(true)}>Scenario - Base</div>
                            <div className='scenario'></div>
                            <div className='scenario'></div>
                            <div className='scenario'></div>
                            <div className='scenario'></div>
                        </div>
                    </div>
                </div>
                <div className='plan-container'>
                    <IconButton className={cx('expand-icon', {'expand-icon-open': planCurrentOpen})} icon={KeyboardArrowRight} size="lg" />
                    <div className='plan-content'></div>
                </div>
                <div className='plan-container'>
                    <IconButton className={cx('expand-icon', {'expand-icon-open': planCurrentOpen})} icon={KeyboardArrowRight} size="lg" />
                    <div className='plan-content'></div>
                </div>
                <div className='plan-container'>
                    <IconButton className={cx('expand-icon', {'expand-icon-open': planCurrentOpen})} icon={KeyboardArrowRight} size="lg" />
                    <div className='plan-content'></div>
                </div>
                <div className='plan-container'>
                    <IconButton className={cx('expand-icon', {'expand-icon-open': planCurrentOpen})} icon={KeyboardArrowRight} size="lg" />
                    <div className='plan-content'></div>
                </div>
                <Takeover title='Scenario - Base' isOpen={scenarioOpen} onCloseClick={(): void => setScenarioOpen(false)}>
                    <div className='takeover-content-left'>
                        <ul className='takeover-left-nav'>
                            <li><a href="javascript:void(0)">Overview</a></li>
                            <li><a href="javascript:void(0)">Analysis</a></li>
                            <li><a href="javascript:void(0)">Flowchart</a></li>
                            <li><a href="javascript:void(0)">Activiteis</a></li>
                            <li><a href="javascript:void(0)">Settings</a></li>
                        </ul>
                    </div>
                    <div className='takeover-content-right'>
                        <div className='placeholder-box'></div>
                    </div>
                </Takeover>
            </>
        )}
        {id === 'monitoring' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">Overview</a></li>
                            <li><a href="javascript:void(0)">Performance</a></li>
                            <li><a href="javascript:void(0)">Monitoring</a></li>
                            <li><a href="javascript:void(0)">Financials</a></li>
                            <li>
                                <a className={cx('expandable-side-nav', {'expanded': activityNavOpen})} href="javascript:void(0)" onClick={(): void => setActivityNavOpen(!activityNavOpen)}>
                                    Activities 
                                </a>
                                <div className={cx('sub-nav-menu', {'sub-nav-menu-open': activityNavOpen})}>
                                    <ul>
                                        <li><a href="javascript:void(0)">Overview</a></li>
                                        <li><a href="javascript:void(0)">Activation Brief</a></li>
                                        <li><a href="javascript:void(0)">Budget Allocation</a></li>
                                        <li><a href="javascript:void(0)">Valuation</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="javascript:void(0)">Execution Summary</a></li>
                        </ul>
                    </div>
                    <div className='tab-content-right'>

                    </div>
                </div>
            </>
        )}
      </div>
    );
  }

export default CampaignView;