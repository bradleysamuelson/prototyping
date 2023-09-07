import React from 'react';
import cx from 'classnames';
import {Button} from '@preamp/core';
import { Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";


function Datamart({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('linear');

    React.useEffect(() => {
        setNavSelected('datamart');
    }, []);

    return (
        <div className="datamart-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Datamart</h1>
                    <Button>Actions</Button>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='linear'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('linear'), history.push(`${url}`))}>Linear Inputs</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='digital'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('digital'), history.push(`${url}/digital`))}>Digital Inputs</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='attribution'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('attribution'), history.push(`${url}/attribution`))}>Attribution Inputs</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='categorization'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('categorization'), history.push(`${url}/categorization`))}>Categorization Inputs</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='constraints'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('constraints'), history.push(`${url}/constraints`))}>Constraints</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='investment'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('investment'), history.push(`${url}/investment`))}>Investment Strategies</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='connections'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('connections'), history.push(`${url}/connections`))}>Connections &amp; Data Feeds</a>
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
                                    <li><a href="javascript:void(0)">Ad Schedules</a></li>
                                    <li><a href="javascript:void(0)">Rate Cards</a></li>
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
        {id === 'digital' && (
            <>
                
            </>
        )}
        {id === 'attribution' && (
            <>
                
            </>
        )}
        {id === 'categorization' && (
            <>
                
            </>
        )}
        {id === 'constraints' && (
            <>
                
            </>
        )}
        {id === 'investment' && (
            <>
                
            </>
        )}
        {id === 'connections' && (
            <>
                
            </>
        )}
      </div>
    );
  }


export default Datamart;