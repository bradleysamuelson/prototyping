import React from 'react';
import cx from 'classnames';
import {Button} from '@preamp/core';
import { Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";


function Reporting({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('all');

    React.useEffect(() => {
        setNavSelected('reporting');
    }, []);

    return (
        <div className="reporting-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Reporting</h1>
                    <Button>Actions</Button>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='all'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('all'), history.push(`${url}`))}>All Reports</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='plans-campaign'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('plans-campaign'), history.push(`${url}/plans-campaign`))}>Plans &amp; Campaign Reports</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='measurement'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('measurement'), history.push(`${url}/measurement`))}>Measurement</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='attribution'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('attribution'), history.push(`${url}/attribution`))}>Attribution</a>
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

    React.useEffect(() => {
        setTabSelected(id);
    }, []);
  
    return (
      <div className='tab-content'>
        {id === 'plans-campaign' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">Plan Overviews</a></li>
                            <li><a href="javascript:void(0)">Plan Comparisons</a></li>
                            <li><a href="javascript:void(0)">Campaign Performance</a></li>
                            <li><a href="javascript:void(0)">Campaign Monitoring</a></li>
                            <li><a href="javascript:void(0)">Actiivation</a></li>
                        </ul>
                    </div>
                    <div className='tab-content-right'>

                    </div>
                </div>
            </>
        )}
        {id === 'measurement' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">Audience Insights</a></li>
                            <li><a href="javascript:void(0)">Media Currency</a></li>
                            <li><a href="javascript:void(0)">Incrementality</a></li>
                            <li><a href="javascript:void(0)">Local Incrementality</a></li>
                        </ul>
                    </div>
                    <div className='tab-content-right'>

                    </div>
                </div>
            </>
        )}
        {id === 'attribution' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">Multi-touch</a></li>
                            <li><a href="javascript:void(0)">In-House</a></li>
                            <li><a href="javascript:void(0)">Local Multi-touch</a></li>
                            <li><a href="javascript:void(0)">Local Tune-in</a></li>
                            <li><a href="javascript:void(0)">Local Gaming</a></li>
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


export default Reporting;