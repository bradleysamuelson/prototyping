import React from 'react';
import cx from 'classnames';
import {Button} from '@preamp/core';
import {Signal, ChevronDown} from '@preamp/signal';
import { Link, Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";



function BudgetView({
    setNavSelected, parentUrl
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('overview');

    React.useEffect(() => {
        setNavSelected('budgets');
    }, []);

    return (
        <div className="campaigns-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <div className='content-header-upper-left'>
                        <div className='breadcrumb'><Link to={`${parentUrl}/budgets`}>All Budgets</Link></div>
                        <h1>BudgetName0001 <Signal className='header-icon' icon={ChevronDown} color='var(--va-grey-600)' size={1} /></h1>
                        <div className='header-data'><span>ID: 0001</span><span>Status: Locked</span></div>
                    </div>
                    <Button>Actions</Button>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='overview'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('overview'), history.push(`${url}`))}>Overview</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='media-budget'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('media-budget'), history.push(`${url}/media-budget`))}>Media budget</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='media-plan-budget'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('media-plan-budget'), history.push(`${url}/media-plan-budget`))}>Media Plan Budget</a>
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
        {id === 'media-budget' && (
            <>
                
            </>
        )}
        {id === 'media-plan-budget' && (
            <>
                
            </>
        )}
      </div>
    );
  }

export default BudgetView;