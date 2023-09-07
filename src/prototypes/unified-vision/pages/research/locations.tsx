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
export const Locations: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();

    React.useEffect(() => {
        selectedNav('locations');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header">
                <div className='content-header-left'>
                    <div className='content-header-label'>Research</div>
                    <h1 className='page-title'>Locations</h1>
                </div>
                <div className='content-header-right'>
                    {/* <Button onClick={() => history.push(`${url}/create`)}>Create</Button> */}
                </div>
            </div>
            <div className='content-main'>
                <div className='placeholder-container placeholder-container-full'>Locations</div>
            </div>
            
        </div>
    )
}