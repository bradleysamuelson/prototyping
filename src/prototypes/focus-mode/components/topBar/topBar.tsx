import React from 'react';
import { VideoAmp } from '../../../../components/icons/videoamp'
import {Clear, Signal} from '@preamp/signal';
import './topBar.scss';

export interface TopBarProps {
    user?: string;
}

export const  TopBar: React.FC<TopBarProps> = ({user}: TopBarProps): React.ReactElement<HTMLDivElement> => {
    return (
        <div className="top-bar-white">
            <div className="top-bar-left">
                <div className="logo-container"><VideoAmp /></div>
                
            </div>
            <div className="top-bar-right">
                {/* <span>Good Afternoon, {user}!</span>
                <div className="user-icon"></div> */}
                <Signal icon={Clear} size={1} />
            </div>
        </div>
    );
};

TopBar.defaultProps = {
    user: 'John'
};