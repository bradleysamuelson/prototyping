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
// import { MediaVehicles } from './media-vehicles';
export const Research: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();

    React.useEffect(() => {
        selectedNav('research');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header">
                <div className='content-header-left'>
                    <h1 className='page-title'>Research</h1>
                </div>
                <div className='content-header-right'>
                    {/* <Button onClick={() => history.push(`${url}/create`)}>Create</Button> */}
                </div>
            </div>
            <div className='content-main'>
                <div className='placeholder-container placeholder-container-full'>Research landing screen</div>
            </div>
            {/* <ul className='testnav'>
                <li><a onClick={() => history.push(`${url}`)}>Research</a></li>
                <li><a onClick={() => history.push(`${url}/entity-permissions`)}>Entity Permissions</a></li>
            </ul>
                    <div className="placeholder-container">
            <Switch>
                <Route exact path={url} >
                
                <ul className='testnav'>
                    <li><a onClick={() => history.push(`${url}`)}>Media Vehicles</a></li>
                    <li><a onClick={() => history.push(`${url}/research/audiences`)}>Audiences</a></li>
                    <li><a onClick={() => history.push(`${url}/research/segments`)}>Segments</a></li>
                    <li><a onClick={() => history.push(`${url}/research/inventory-sources`)}>Inventory Sources</a></li>
                    <li><a onClick={() => history.push(`${url}/research/dmps`)}>DMPS</a></li>
                    <li><a onClick={() => history.push(`${url}/research/locations`)}>Locations</a></li>
                    <li><a onClick={() => history.push(`${url}/research/activation-platforms`)}>Activation Platforms</a></li>
                    <li><a onClick={() => history.push(`${url}/research/activation-partners`)}>Activation Partners</a></li>
                </ul>
                <MediaVehicles />
                </Route>   
                <Route path={`${url}/research`}>
                    <ul className='testnav'>
                        <li><a onClick={() => history.push(`${url}/research/media-vehicles`)}>Media Vehicles</a></li>
                        <li><a onClick={() => history.push(`${url}/research/audiences`)}>Audiences</a></li>
                        <li><a onClick={() => history.push(`${url}/research/segments`)}>Segments</a></li>
                        <li><a onClick={() => history.push(`${url}/research/inventory-sources`)}>Inventory Sources</a></li>
                        <li><a onClick={() => history.push(`${url}/research/dmps`)}>DMPS</a></li>
                        <li><a onClick={() => history.push(`${url}/research/locations`)}>Locations</a></li>
                        <li><a onClick={() => history.push(`${url}/research/activation-platforms`)}>Activation Platforms</a></li>
                        <li><a onClick={() => history.push(`${url}/research/activation-partners`)}>Activation Partners</a></li>
                    </ul>
                    <Switch>
                        <Route path={`${url}/research/media-vehicles`}>
                            <MediaVehicles />
                        </Route>
                        <Route path={`${url}/research/audiences`}>
                            Audiences
                        </Route>
                        <Route path={`${url}/research/segments`}>
                            Segments
                        </Route>
                        <Route path={`${url}/research/inventory-sources`}>
                            Inventory Sources
                        </Route>
                        <Route path={`${url}/research/dmps`}>
                            DMPS
                        </Route>
                        <Route path={`${url}/research/locations`}>
                            Locations
                        </Route>
                        <Route path={`${url}/research/activation-platforms`}>
                            Activation Platforms
                        </Route>
                        <Route path={`${url}/research/activation-partners`}>
                            Activation Partners
                        </Route>
                    </Switch>
                </Route> 
                    
                    
                
                <Route path={`${url}/entity-permissions`}>
                    Entity Permissions
                </Route>
            </Switch>
                    </div> */}
            
        </div>
    )
}