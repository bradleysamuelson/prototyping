import React from 'react';
import {
    useHistory
  } from "react-router-dom";
import { IconButton } from '@preamp/core';
import { Clear } from '@preamp/signal';

export const CreateCampaign: React.FC<any> = ({ ...rest}) => {
    const history = useHistory();
    return (
        <div className='page-takeover-container'>
            <div className="page-takeover-content">
                <header className='page-takeover-header'>
                    <h1 className='u-title-2'>Create a Campaign </h1>
                    <IconButton size='1.5rem' onClick={() => (history.goBack())} icon={Clear} />
                </header>
                
            </div>
        </div>
    )
}