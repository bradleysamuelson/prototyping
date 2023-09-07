import React from 'react';
import {
  Route,
  Switch,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import {Button} from '@preamp/core';

import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import  Dashboard  from './pages/dashboard';
import  Launchpad  from './pages/launchpad';
import './pivot-styles.scss';


// update this name
function PivotPrototype() {
    const { url } = useRouteMatch();
    const history = useHistory();
return (
  <div className='pivot-container'>
    <PrototypeBar name="Pivot Prototype" home="/home">Prototype of the Pivot Table functionality</PrototypeBar>
    <Switch>
        <Route exact path={url}>
            <Launchpad url={url} />
        </Route>
        <Route path={`${url}/dashboard`}>
            <Dashboard url={url} />
        </Route>
    </Switch>
  </div>
)
};

export default PivotPrototype;