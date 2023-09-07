import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, TextArea, TextField } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Clear, Edit, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import budgetsView from '../img/nav-budgets.png';

function Budgets({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();
    const { url } = useRouteMatch();

    React.useEffect(() => {
        setNavSelected('budgets');
    }, []);
   
    // const [method, setMethod] = React.useState<string>('');
    
    

    return (
        <div className="budgets-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Budgets</h1>
                    <Button>Actions</Button>
                </div>
                    
            </div>
            <div className='content'>
                <div className='tab-content'>
                    <a href="javascript:void(0)" onClick={() => history.push(`${url}/budget-view`)} ><img src={budgetsView} alt="Budgets" /></a>
                </div>
            </div>
        </div>
    )

}

export default Budgets;