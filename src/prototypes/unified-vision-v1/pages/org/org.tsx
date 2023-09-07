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
export const Org: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('org');
    }, []);
    return (
        <>
            <div className='section-header'>
                <h1 className='page-title u-title-2'>Organization</h1>
                {/* <Button href={`${url}/create`}>Create</Button> */}
            </div>
            <ul className='testnav'>
                <li><a onClick={() => history.push(`${url}`)}>Brands</a></li>
                <li><a onClick={() => history.push(`${url}/products`)}>Products</a></li>
                <li><a onClick={() => history.push(`${url}/users`)}>Users</a></li>
                <li><a onClick={() => history.push(`${url}/roles`)}>Roles</a></li>
                <li><a onClick={() => history.push(`${url}/user-groups`)}>User Groups</a></li>
            </ul>
            <Switch>
                <Route exact path={url} >
                    <div className="placeholder-container">
                        Brands
                    </div>
                </Route>
                <Route path={`${url}/products`}>
                    <div className="placeholder-container">
                        Products
                        <ul className='testnav'>
                            <li>KPIs</li>
                            <li>Tactic Setup</li>
                        </ul>
                    </div>
                </Route>
                <Route path={`${url}/users`}>
                    <div className="placeholder-container">
                        Users
                    </div>
                </Route>
                <Route path={`${url}/roles`}>
                    <div className="placeholder-container">
                        Roles
                    </div>
                </Route>
                <Route path={`${url}/user-groups`}>
                    <div className="placeholder-container">
                        User Groups
                    </div>
                </Route>
                
            </Switch>
            
        </>
    )
}