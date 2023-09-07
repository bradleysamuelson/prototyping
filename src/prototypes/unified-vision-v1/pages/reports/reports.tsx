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
export const Reports: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('reports');
    }, []);
    return (
        <>
            <div className='section-header'>
                <h1 className='page-title u-title-2'>Reporting</h1>
                <Button onClick={() => history.push(`${url}/create`)}>Create Report</Button>
            </div>
            <Switch>
                <Route exact path={url} >
                    List of Reports
                    <div className="placeholder-container">
                        <div>
                            <a onClick={() => history.push(`${url}/report-view`)}>Report Name 12345</a>
                        </div>
                    </div>
                </Route>
                <Route path={`${url}/report-view`}>
                    <div className="placeholder-container">
                        <h2 className='u-title-2'>Report Name 12345</h2>
                    </div>
                </Route>
                <Route path={`${url}/create`}>
                    <div className="placeholder-container">
                        <h1>create a report takeover</h1>
                    </div>
                </Route>
            </Switch>
            
        </>
    )
}