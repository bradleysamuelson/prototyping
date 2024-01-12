import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PrototypeHome from './pages/prototype-home';
import BrandSurvey from './prototypes/brand/brand-survey';
import LockingPrototype from './prototypes/scenario-locking/locking';
import VisionPrototype from './prototypes/vision/vision';
import EasyMode from './prototypes/easy-mode/easy-mode';
import CreateWorkflow from './prototypes/create-workflow/create-workflow';
import FocusMode from './prototypes/focus-mode/focus-mode';
import DashboardPrototype from './prototypes/dashboard/dashboard';
import Nav from './prototypes/nav/nav';
import InlineEdit from './prototypes/inline-edit/inline-edit';
import Header from './prototypes/header/header';
import Platform from './prototypes/platform/platform';
import SidePanel  from './prototypes/side-panel/side-panel';
import PerformanceChart  from './prototypes/performance-chart/performance-chart';
import ElsyUpdate from './prototypes/elsy-update/elsy';
import PreAmpUpdate from './prototypes/preamp/preamp';
import UnifiedVisionPrototype from './prototypes/unified-vision/unified';
import Access from './prototypes/access/access';
import PivotPrototype from './prototypes/pivot/pivot';
import UnifiedNav from './prototypes/unified-nav/unified-nav';

import '@preamp/mixer';
import './App.scss';


export const App = () => (
    <>
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path='/'>
                <PrototypeHome />
            </Route>
            <Route path='/brand'>
                <BrandSurvey />
            </Route>
            <Route path='/vision'>
                <VisionPrototype />
            </Route>
            <Route path='/easy-mode'>
                <EasyMode />
            </Route>
            <Route path='/create-workflow'>
                <CreateWorkflow />
            </Route>
            <Route path='/focus-mode'>
                <FocusMode />
            </Route>
            <Route exact path='/home'>
                <PrototypeHome />
            </Route>
            <Route path='/buy'>
                <LockingPrototype />
            </Route>
            <Route path='/dashboard'>
                <DashboardPrototype />
            </Route>
            <Route path='/nav'>
                <Nav />
            </Route>
            <Route path='/header'>
                <Header />
            </Route>
            <Route path='/inline-edit'>
                <InlineEdit />
            </Route>
            <Route path='/platform'>
                <Platform />
            </Route>
            <Route path='/side-panel'>
                <SidePanel />
            </Route>
            <Route path='/performance-chart/'>
                <PerformanceChart  />
            </Route>
            <Route path='/elsy'>
                <ElsyUpdate />
            </Route>
            <Route path='/preamp'>
                <PreAmpUpdate />
            </Route>

            <Route path='/unified-vision'>
                <UnifiedVisionPrototype />
            </Route>

            <Route path='/access'>
                <Access />
            </Route>
            <Route path='/pivot'>
                <PivotPrototype />
            </Route>
            <Route path='/unified-nav'>
                <UnifiedNav />
            </Route>
            
        </Router>
    </>
);