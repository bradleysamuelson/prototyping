import React, { ReactNode } from 'react';
import cx from 'classnames';

import {Signal, ChevronDown} from '@preamp/signal'

export interface ExpandPanelProps {
    isExpanded?: boolean;
    isExpandable?: boolean;
    expandButtonText?: string;
    className?: string;
    children?: ReactNode;
    userOptionsChange?: any;
    company?: string;
    onExpand?: any;
    headerContent?: ReactNode;
    panelTitle?: string | React.ReactNode;
    hasIcon?: boolean;
    iconClass?: string;
    headerIcon?: ReactNode;
    headerAction?: ReactNode;
}

export const  ExpandPanel: React.FC<ExpandPanelProps> = ({
    panelTitle,
    isExpanded,
    isExpandable,
    iconClass,
    expandButtonText, 
    children,
    onExpand,
    hasIcon,
    headerContent,
    headerIcon,
    headerAction
}: ExpandPanelProps): React.ReactElement<HTMLDivElement> => {


return (
    <div className={cx('expand-panel panel', {'expand-panel-expanded': isExpanded})}>
        <div className='expand-panel-header'>
            <div className='expand-panel-header-content'>
                <div className='panel-header-left'>
                    <div className='panel-header-left-container'>
                        {hasIcon && <div className={cx('icon-circle', iconClass)}><Signal icon={headerIcon} size={1.5} /></div> }
                        <div className='panel-title'>{panelTitle}</div>
                        {headerContent}
                    </div>
                    {headerAction && <div className='panel-header-action'>{headerAction}</div>}
                </div>
            
            </div>
            {isExpandable && (<div className='expand-panel-expand-action'>
                <button className='expand-button' onClick={onExpand}><span className="expand-arrow" />{expandButtonText}</button>
            </div>)}
        </div>
        <div className='expand-panel-content'>
            {children}
        </div>
    </div>
    );
};

ExpandPanel.defaultProps = {
    isExpanded: false,
    isExpandable: true,
    hasIcon: true,
    expandButtonText: 'Expand',
    panelTitle: 'Title of the Panel'
};