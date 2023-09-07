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
export const Accounts: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('accounts');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header content-header-tabs">
                <div className='content-header-upper'>
                    <div className='content-header-left'>
                        <div className='content-header-label'>Organization</div>
                        <h1 className='page-title'>Accounts</h1>
                    </div>
                    <div className='content-header-right'>
                        {/* <Button onClick={() => history.push(`${url}/create`)}>Create</Button> */}
                    </div>
                </div>
                <div className='content-header-tab-container'>
                    <ul className="va-tabs" data-ui="tabs" role="tablist">
                        <li className="va-tab-item va-tab-item--active">
                            <a aria-selected="true" className="va-tab-item__link" role="tab">Users</a>
                        </li>
                        <li className="va-tab-item">
                            <a aria-selected="false" className="va-tab-item__link" role="tab">Roles</a>
                        </li>
                        <li className="va-tab-item ">
                            <a className="va-tab-item__link" role="tab">User Groups</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='content-main'>
                <div className='placeholder-container placeholder-container-full'>Accounts landing screen</div>
            </div>
            {/* <ul className='testnav'>
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
                
            </Switch> */}
            
        </div>
    )
}