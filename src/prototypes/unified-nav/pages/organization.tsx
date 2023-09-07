import React from 'react';
import cx from 'classnames';
import {Button} from '@preamp/core';
import { Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";


function Organization({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('organizations');

    React.useEffect(() => {
        setNavSelected('organization');
    }, []);

    return (
        <div className="organization-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Organization</h1>
                    <Button>Actions</Button>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='organizations'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('organizations'), history.push(`${url}`))}>Organizations</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='users'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('users'), history.push(`${url}/users`))}>Users</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='roles'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('roles'), history.push(`${url}/roles`))}>Roles</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='user-groups'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('user-groups'), history.push(`${url}/user-groups`))}>User Groups</a>
                    </li>
                </ul>
            </div>
            <div className='content'>
                <Switch>
                    <Route exact path={url} >
                        <div className='tab-content'>
                            <div className='tab-content-nav'>
                                <div className='tab-content-left'>
                                    <ul>
                                        <li><a href="javascript:void(0)">Brands</a></li>
                                        <li><a href="javascript:void(0)">Products</a></li>
                                    </ul>
                                </div>
                                <div className='tab-content-right'>

                                </div>
                            </div> 
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
        {id === 'users' && (
            <>
                
            </>
        )}
        {id === 'roles' && (
            <>
                
            </>
        )}
        {id === 'user-groups' && (
            <>
                
            </>
        )}
      </div>
    );
  }


export default Organization;