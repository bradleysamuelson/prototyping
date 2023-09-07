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
export const Inventory: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('inventory');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header">
                <div className='content-header-left'>
                    <h1 className='page-title'>Inventory</h1>
                </div>
                <div className='content-header-right'>
                    <Button className='va-btn-lg' 
                        // onClick={() => history.push(`${url}/create`)}
                    >Create Inventory</Button>
                </div>
            </div>
            <div className='content-main'>
                <div className='placeholder-container placeholder-container-full'>Inventory</div>
            </div>
            
        </div>
    )
}