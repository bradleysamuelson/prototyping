import React from 'react';
import cx from 'classnames';
import {Button} from '@preamp/core';
import { Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";
import campaignsView from '../img/nav-campaigns.png';


function Campaigns({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('campaigns');

    React.useEffect(() => {
        setNavSelected('campaigns');
    }, []);

    return (
        <div className="campaigns-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Campaigns</h1>
                    <Button>Actions</Button>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='campaigns'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('campaigns'), history.push(`${url}`))}>Campaigns</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='cross-campaign-scenarios'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('cross-campaign-scenarios'), history.push(`${url}/cross-campaign-scenarios`))}>Cross Campaign Scenarios</a>
                    </li>
                </ul>
            </div>
            <div className='content'>
                <Switch>
                    <Route exact path={url} >
                        <div className='tab-content'>
                            <a href="javascript:void(0)" onClick={() => history.push(`${url}/campaign-view`)} ><img src={campaignsView} alt="Campaings" /></a>
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
        {id === 'cross-campaign-scenarios' && (
            <div className='tab-content'>
                             
            </div>
        )}
      </div>
    );
  }

export default Campaigns;