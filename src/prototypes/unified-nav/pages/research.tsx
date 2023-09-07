import React from 'react';
import cx from 'classnames';
import { Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";


function Research({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('overview');

    React.useEffect(() => {
        setNavSelected('research');
    }, []);

    return (
        <div className="research-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Research</h1>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='overview'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('overview'), history.push(`${url}`))}>Overview</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='reports'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('reports'), history.push(`${url}/reports`))}>Reports</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='research'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('research'), history.push(`${url}/research`))}>Research</a>
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
        {id === 'reports' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">Content Measurement</a></li>
                            <li><a href="javascript:void(0)">Competitive Insights</a></li>
                        </ul>
                    </div>
                    <div className='tab-content-right'>

                    </div>
                </div> 
            </>
        )}
        {id === 'research' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">Media Vehicles</a></li>
                            <li><a href="javascript:void(0)">Audiences</a></li>
                            <li><a href="javascript:void(0)">Locations</a></li>
                            <li><a href="javascript:void(0)">Inventory Sources</a></li>
                            <li><a href="javascript:void(0)">Segments</a></li>
                            <li><a href="javascript:void(0)">DMPs</a></li>
                            <li><a href="javascript:void(0)">Activation Platforms</a></li>
                            <li><a href="javascript:void(0)">Activation Partners</a></li>
                            <li><a href="javascript:void(0)">News &amp; Notifications</a></li>
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


export default Research;