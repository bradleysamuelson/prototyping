import React from 'react';
import { Button, ButtonTheme } from '@preamp/core';
export const BudgetPlanning: React.FC<any> = ({selectedNav, ...rest}) => {
    React.useEffect(() => {
        selectedNav('plan');
    }, []);
    return (
        <>
            
            <div className="placeholder-container">
            <div className='page-content'>
                   Budget Planning
                </div>
            </div>
        </>
    )
}