import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import { GlobalNavBar } from './components/globalNavBar/globalNavBar';
import  Dashboard  from './pages/dashboard';
import CreatePixel from './pages/createPixel';
import Create from './pages/create';
import {Button} from '@preamp/core';
import './styles.scss';
import CreatePixelForm from './pages/createPixelForm';

// update this name
function CreateWorkflow() {
    const { url } = useRouteMatch();
    const onClearModeClick = (): void => {
      localStorage.setItem('easyMode', '');
      window.location.reload();
    }
    const onClearAllDataClick = (): void => {
      localStorage.setItem('easyMode', '');
      localStorage.setItem('dataType', 'alldata');
      localStorage.setItem('newNotification', '');
      localStorage.setItem('newPixel', '');
      localStorage.setItem('newCreative', '');
      window.location.reload();
    }
return (
  <div className="create-workflow-container ">
    <PrototypeBar name="Create Workflow Prototype" home="/home">
      <Button onClick={onClearAllDataClick}>Clear All Data</Button>
        <Button onClick={onClearModeClick}>Clear Easy Mode</Button>
    </PrototypeBar>
    <Switch>
        <Route exact path={url}>
          <GlobalNavBar />
          <Dashboard />
        </Route>
        <Route path={`${url}/create`}>
            <Create />
        </Route>
        <Route path={`${url}/create-pixel`}>
            <CreatePixel />
        </Route>
    </Switch>
  </div>
)
};

export default CreateWorkflow;