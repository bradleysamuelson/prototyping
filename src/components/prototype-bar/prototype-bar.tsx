import React from 'react';
import { Signal } from '@preamp/signal';

import './prototype-bar.scss';

export interface PrototypeBarProps {
    name: string;
    home?: string;
    children?: React.ReactNode;
}

const logoIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 3)" fill="currentColor" fillRule="nonzero"><rect y="8" width="2.615" height="5.385" rx="1.308"/><rect x="5.385" y="10.769" width="2.615" height="8" rx="1.308"/><rect x="10.615" y="2.769" width="2.615" height="13.385" rx="1.308"/><rect x="16" width="2.615" height="8" rx="1.308"/><rect x="21.385" y="5.385" width="2.615" height="5.385" rx="1.308"/></g></svg>
)

export const  PrototypeBar: React.FC<PrototypeBarProps> = ({
    name,
    home,
    children
}: PrototypeBarProps): React.ReactElement<HTMLDivElement> => {
    return (
        <div className="prototype-bar">
            <div className="prototype-bar-content-wrapper">
                <div className="prototype-bar-title-container">
                    {home ? <a href={home}><Signal icon={logoIcon} /></a>
                        :
                        <Signal icon={logoIcon} />
                    }
                    <span className="prototype-bar-title">{name}</span>
                </div>
                <div className="prototype-bar-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

