import React from 'react';
import { VideoAmp } from '../../../../components/icons/videoamp'
import './globalNavBar.scss';

export interface GlobalNavBarProps {
    user?: string;
}

export const  GlobalNavBar: React.FC<GlobalNavBarProps> = ({user}: GlobalNavBarProps): React.ReactElement<HTMLDivElement> => {
    return (
        <div className="va-nav-bar">
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

GlobalNavBar.defaultProps = {
    user: 'John'
};