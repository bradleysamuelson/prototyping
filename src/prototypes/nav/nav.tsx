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
import { Select, SelectType, OptionType, ValueType } from '@preamp/select';
import './nav-styles.scss';

const versionOptions: OptionType[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
// update this name
function Nav() {
    const [navOption, setNavOption] = React.useState('option1');
    const { url } = useRouteMatch();
    const onClearAllDataClick = (): void => {
      localStorage.setItem('easyMode', '');
      localStorage.setItem('dataType', 'alldata');
      localStorage.setItem('newNotification', '');
      localStorage.setItem('newPixel', '');
      localStorage.setItem('newCreative', '');
      window.location.reload();
    }
    function handleVersionChange(e: ValueType<OptionType>): void {
      setNavOption(e.value);
  }
return (
  <div className="nav-options-container ">
    <PrototypeBar name="Create Workflow Prototype" home="/home">
      Nav Style Option: &nbsp;
      <Select options={versionOptions} selectType={SelectType.Compact} onChange={handleVersionChange} style={{width:'120px'}} defaultValue={versionOptions[0]}></Select>
    </PrototypeBar>
    <Switch>
        <Route exact path={url}>
          <GlobalNavBar />
          <Dashboard navVersion={navOption} />
        </Route>
    </Switch>
  </div>
)
};

export default Nav;