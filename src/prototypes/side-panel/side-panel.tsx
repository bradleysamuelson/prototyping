import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import { GlobalNavBar } from './components/globalNavBar/globalNavBar';
import  Dashboard  from './pages/dashboard';
import {Button} from '@preamp/core';
import './side-panel-styles.scss';

// update this name
function SidePanel() {
    const { url } = useRouteMatch();
    const onClearAllDataClick = (): void => {
      localStorage.setItem('easyMode', '');
      localStorage.setItem('dataType', 'alldata');
      localStorage.setItem('newNotification', '');
      localStorage.setItem('newPixel', '');
      localStorage.setItem('newCreative', '');
      window.location.reload();
    }
return (
  <div className="side-panel-prototype-container ">
    <PrototypeBar name="View / Edit Side-panel Prototype" home="/home">
    </PrototypeBar>
    <Switch>
        <Route exact path={url}>
          <GlobalNavBar />
          <Dashboard />
        </Route>
    </Switch>
  </div>
)
};

export default SidePanel;