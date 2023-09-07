import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import DashboardLayout from './pages/dashboard';
import './styles.scss';

// update this name
function DashboardPrototype() {
    const { url } = useRouteMatch();
return (
  <>
    <PrototypeBar name="Dashboard Prototype" home="/home"></PrototypeBar>
    <Switch>
        <Route exact path={url}>
            <DashboardLayout />
        </Route>
    </Switch>
  </>
)
};

export default DashboardPrototype;