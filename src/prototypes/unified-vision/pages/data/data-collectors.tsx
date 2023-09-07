import React from 'react';
import {
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Button, ButtonTheme } from '@preamp/core';
export const DataCollectors: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('data-collectors');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header content-header-tabs">
                <div className='content-header-upper'>
                    <div className='content-header-left'>
                        <div className='content-header-label'>Data</div>
                        <h1 className='page-title'>Data Collectors</h1>
                    </div>
                    <div className='content-header-right'>
                        {/* <Button onClick={() => history.push(`${url}/create`)}>Create</Button> */}
                    </div>
                </div>
                <div className='content-header-tab-container'>
                    <ul className="va-tabs" data-ui="tabs" role="tablist">
                        <li className="va-tab-item va-tab-item--active">
                            <a aria-selected="true" className="va-tab-item__link" role="tab">Data Feeds</a>
                        </li>
                        <li className="va-tab-item">
                            <a aria-selected="false" className="va-tab-item__link" role="tab">Datamart</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='content-main'>
                <div className='placeholder-container placeholder-container-full'>Data Collectors landing screen</div>
            </div>
            {/* <ul className='testnav'>
                <li><a onClick={() => history.push(`${url}`)}>Linear Inputs</a></li>
                <li><a onClick={() => history.push(`${url}/digital`)}>Digital Inputs</a></li>
                <li><a onClick={() => history.push(`${url}/attribution`)}>Attribution Inputs</a></li>
                <li><a onClick={() => history.push(`${url}/categoriezation`)}>Categorization Inputs</a></li>
                <li><a onClick={() => history.push(`${url}/constraints`)}>Constraints</a></li>
                <li><a onClick={() => history.push(`${url}/investment-strategies`)}>Investment Strategies</a></li>
                <li><a onClick={() => history.push(`${url}/connections`)}>Connections &amp; Data Feeds</a></li>
            </ul>
            <Switch>
                <Route exact path={url} >
                    <div className="placeholder-container">
                        Linear Inputs
                        <ul className='testnav'>
                            <li>Ad Schedules</li>
                            <li>Rate Cards</li>
                        </ul>
                    </div>
                </Route>
                <Route path={`${url}/digital`}>
                    <div className="placeholder-container">
                        Digital Inputs
                        <ul className='testnav'>
                            <li>Impression Data</li>
                            <li>Rate Cards</li>
                        </ul>
                    </div>
                </Route>
                <Route path={`${url}/attribution`}>
                    <div className="placeholder-container">
                        Attribution Inputs
                        <ul className='testnav'>
                            <li>Pixels</li>
                            <li>Files</li>
                        </ul>
                    </div>
                </Route>
                <Route path={`${url}/categoriezation`}>
                    <div className="placeholder-container">
                        Categoriezation Inputs
                        <ul className='testnav'>
                            <li>Custom Day Parts</li>
                            <li>Media Taxonomy</li>
                        </ul>
                    </div>
                </Route>
                <Route path={`${url}/constraints`}>
                    <div className="placeholder-container">
                        Constraints
                    </div>
                </Route>
                <Route path={`${url}/investment-strategies`}>
                    <div className="placeholder-container">
                        Investment Strategies
                    </div>
                </Route>
                <Route path={`${url}/connections`}>
                    <div className="placeholder-container">
                        Connections &amp; Data Feeds
                    </div>
                </Route>
                <Route path={`${url}/create`}>
                    <div className="placeholder-container">
                        <h1>create an audience takeover</h1>
                    </div>
                </Route>
            </Switch> */}
            
        </div>
    )
}