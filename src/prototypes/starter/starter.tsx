import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import './scenario-locking.scss';

// update this name
function StarterPrototype() {
    const { url } = useRouteMatch();
return (
  <>
    <PrototypeBar name="Locking Prototype" home="/home">Locking and duplicating Scenarios</PrototypeBar>
    <Switch>
        <Route exact path={url}>
            This is the default route for this prototype. Update the route in the root App.tsx file.
        </Route>
        <Route path={`${url}/sub`}>
            This is a subroute for this prototype.
        </Route>
    </Switch>
  </>
)
};

export default StarterPrototype;