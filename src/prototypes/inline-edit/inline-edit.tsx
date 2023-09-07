import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import InlineEditForm from './pages/inline-edit-form'
import './inline-edit-styles.scss';

// update this name
function InlineEdit() {
    const { url } = useRouteMatch();
return (
  <>
    <PrototypeBar name="Inline Edit" home="/home">Inline Edit Components</PrototypeBar>
    <Switch>
        <Route exact path={url}>
            <InlineEditForm />
        </Route>
        {/* <Route path={`${url}/sub`}>
            This is a subroute for this prototype.
        </Route> */}
    </Switch>
  </>
)
};

export default InlineEdit;