import React from 'react';
import { VideoAmp } from '../../../../components/icons/videoamp'
import './topBar.scss';

export interface TopBarProps {
    user?: string;
}

export const  TopBar: React.FC<TopBarProps> = ({user}: TopBarProps): React.ReactElement<HTMLDivElement> => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <VideoAmp /> Procter &amp; Gamble 
            </div>
            <div className="top-bar-right">
                <span>Good Afternoon, {user}!</span>
                <div className="user-icon"></div>
            </div>
        </div>
    );
};

TopBar.defaultProps = {
    user: 'John'
};