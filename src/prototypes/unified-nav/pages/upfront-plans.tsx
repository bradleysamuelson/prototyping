import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, TextArea, TextField } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Clear, Edit, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";


function Upfront({
    setNavSelected
    }: any): React.ReactElement<HTMLElement> {

    const history = useHistory();

    React.useEffect(() => {
        setNavSelected('upfront');
    }, []);
   
    // const [method, setMethod] = React.useState<string>('');
    
    

    return (
        <div className="upfront-container">
           <div className="content-header">
                <div className='content-header-upper'>
                    <h1>Upfront Plans</h1>
                    <Button>Actions</Button>
                </div>
                    
            </div>
        </div>
    )

}

export default Upfront;