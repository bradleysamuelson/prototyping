import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, TextArea, TextField } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Clear, Edit, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";




function Campaigns(props: any) {
    const history = useHistory();
   
    // const [method, setMethod] = React.useState<string>('');
    
    

    return (
        <div className="campaigns-container page-content">
           <div className="content-header">
                <h1>Campaign Management</h1>
                    
            </div>
        </div>
    )

}

export default Campaigns;