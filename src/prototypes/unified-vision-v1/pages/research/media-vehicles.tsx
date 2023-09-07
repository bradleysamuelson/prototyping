import React from 'react';
import {
    useHistory
  } from "react-router-dom";
import { IconButton } from '@preamp/core';
import { Clear } from '@preamp/signal';
import mediavehiclesScreenshot from '../../img/research-mediavehicles.png';

export const MediaVehicles: React.FC<any> = ({ ...rest}) => {
    const history = useHistory();
    return (
        <>
            <img src={mediavehiclesScreenshot} alt="Media Vehicles" />
        </>
    )
}