import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import FocusModeAudiences from './pages/focus-mode-audiences';
import './styles.scss';

// update this name
function FocusMode() {
    const { url } = useRouteMatch();
return (
  <>
    <PrototypeBar name="Locking Prototype" home="/home">Focus Mode</PrototypeBar>
    <Switch>
        <Route exact path={url}>
            <FocusModeAudiences />
        </Route>
    </Switch>
  </>
)
};

export default FocusMode;