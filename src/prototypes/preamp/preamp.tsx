import React from 'react';
import {
    NavLink,
  Route,
  Switch,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import { TitleBar, Search } from '@preamp/core';
import { KeyboardArrowDown, KeyboardArrowRight, Signal } from '@preamp/signal';
import PreAmpButtons from './pages/preamp-buttons';
import './preamp-update-styles.scss';

// update this name
function PreAmpUpdate() {
    const history = useHistory();
    const { url } = useRouteMatch();
    const [navId, setNavId] = React.useState<string>('');
    function onNavClick(id: string): () => void {
        return (): void => {
            setNavId(id);
            history.push(`${url}/${id}`);
        };
    }
return (
    <div className='preamp-update-container'>
        <header className='va-title-bar'>
            PreAmp Components
        </header>
        <Switch>
            <Route exact path={url} >
                <PreAmpButtons />
            </Route>
            <Route exact path={`${url}/buttons`}>
                <PreAmpButtons />
            </Route>
            
        </Switch>
    </div>
)
};

export default PreAmpUpdate;