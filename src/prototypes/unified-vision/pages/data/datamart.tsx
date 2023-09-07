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
export const Datamart: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('datamart');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header content-header-tabs">
                <div className='content-header-upper'>
                    <div className='content-header-left'>
                        <div className='content-header-label'>Data</div>
                        <h1 className='page-title'>Datamart</h1>
                    </div>
                    <div className='content-header-right'>
                        {/* <Button className='va-btn-lg' 
                            // onClick={() => history.push(`${url}/create`)}
                        >Add Impression Data</Button> */}
                    </div>
                </div>
            </div>
            <div className='content-main'>
                <div className='placeholder-container placeholder-container-full'>Datamart</div>
            </div>
            
        </div>
    )
}