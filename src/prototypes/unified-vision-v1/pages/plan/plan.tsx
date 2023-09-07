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
export const PlanBudget: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    function onCreateClick(id: string): () => void {
        return (): void => {
            history.push(`${url}/create`);
        };
    }
    React.useEffect(() => {
        selectedNav('plan');
    }, []);
    return (
        <>
            <div className='section-header'>
                <h1 className='page-title u-title-2'>Budget &amp; Plan</h1>
                <Button onClick={() => history.push(`${url}/create`)}>Create a Budget</Button>
            </div>
            <ul className='testnav'>
                <li><a onClick={() => history.push(`${url}`)}>Budget Management</a></li>
                <li><a onClick={() => history.push(`${url}/budget-planning`)}>Budget Planning</a></li>
            </ul>
            <Switch>
                <Route exact path={url} >
                    
                    <div className="placeholder-container">
                        
                        <div className='page-content'>
                        <div>Budget Overview</div> 
                        </div>
                    </div>
                </Route>
                <Route path={`${url}/budget-planning`}>
                    <div className="placeholder-container">
                        <div className='page-content'>
                        Budget Planning
                        </div>
                        <div>Digital Tactics | Linear Network/Daypart Tactics</div>
                    </div>
                </Route>
                <Route path={`${url}/create`}>
                    <div className="placeholder-container">
                        <h1>create a budget takeover</h1>
                    </div>
                </Route>
            </Switch>
        </>
    )
}