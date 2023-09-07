import React from 'react';
import { IconButton } from '@preamp/core';
import { Clear } from '@preamp/signal';
// import { VideoAmp } from '../../../components/icons/videoamp';
import cx from 'classnames';



interface TakeoverProps {
    children?: any,
    leftAction?: React.ReactNode,
    isOpen?: boolean
    onCloseClick?(event?: React.MouseEvent): void;
    title?: string,
} 

export const  Takeover: React.FC<TakeoverProps> = ({
    children, isOpen, leftAction, onCloseClick, title
}:TakeoverProps): React.ReactElement<HTMLDivElement> => {
    // const [currentStep, setCurrentStep] = React.useState<string | null>(localStorage.getItem('dataType'));
    // const [helpOpen, setHelpOpen] = React.useState<boolean>(true);
    // const onHelpToggle = (): void => {
    //     setHelpOpen(!helpOpen);
    // }
    return (
        <>
            <div className={cx('takeover-container', {'takeover-open': isOpen})}>
                <div className='takeover-top-bar'>
                    <div className='takeover-top-bar-left'>
                        {leftAction && leftAction}
                        {title}
                    </div>
                    <IconButton icon={Clear} size='lg' className='takeover-close-btn' onClick={onCloseClick} />
                </div>
                <div className='takeover-content'>
                    {children}
                </div>
            </div>
        </>
    );
};