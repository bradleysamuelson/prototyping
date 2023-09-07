import React from 'react';
import cx from 'classnames';
import {Button} from '@preamp/core';
import { Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";


function Audiences({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();
    const [tabSelected, setTabSelected] = React.useState<string>('audiences');

    React.useEffect(() => {
        setNavSelected('audiences');
    }, []);

    return (
        <div className="research-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Audience Management</h1>
                    <Button>Actions</Button>
                </div>
                <ul className='va-tabs' role='tablist'>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='audiences'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('audiences'), history.push(`${url}`))}>Audiences</a>
                    </li>
                    <li className={cx('va-tab-item', {'va-tab-item--active': tabSelected==='segments'})}>
                        <a className='va-tab-item__link' role='tab' onClick={():void => (setTabSelected('segments'), history.push(`${url}/segments`))}>Segments</a>
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
        {id === 'segments' && (
            <>
                <div className='tab-content-nav'>
                    <div className='tab-content-left'>
                        <ul>
                            <li><a href="javascript:void(0)">First Party</a></li>
                            <li><a href="javascript:void(0)">Third Party</a></li>
                            <li><a href="javascript:void(0)">TV Viewership</a></li>
                            <li><a href="javascript:void(0)">Optimization</a></li>
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


export default Audiences;