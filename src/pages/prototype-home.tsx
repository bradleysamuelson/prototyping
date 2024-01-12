import React from 'react';
import { Link } from 'react-router-dom';
import './prototype-home.scss';
import { VideoAmp } from '../components/icons/videoamp';
import {Signal} from '@preamp/signal';

function PrototypeHome() {

    return (
        <div className="prototype-home-container">
            <div className='prototype-home-header'>
                <h1>Prototypes:</h1>
            </div>
            <div className='prototype-list-container'>
                <div className='va-panel latest-prototypes'>
                    <h3 className='u-title-2 mb-8'>Latest:</h3>
                    <ul className="prototype-list">
                        <li>
                            <Link to='/unified-nav'>Unified navigation prototype for the Platform for Media Buyers</Link>
                        </li>
                        <li>
                            <Link to='/access'>Platform for Media Buyers co-location prototype</Link>
                        </li>
                        <li>
                            <Link to='/pivot'>Sell Side Pivot Table Prototype</Link>
                        </li>
                    </ul>
                    <div className='secondary-prototypes'>
                        <div className='workflows'>
                            <h3 className='va-title-3'>Workflows</h3>
                            <ul className="prototype-list">
                                <li>
                                    <Link to='/unified-vision'>Unified Vision for the new VideoAmp platform</Link>
                                </li>
                                <li>
                                    <Link to='/platform'>New Platform update - interactions and visual design</Link>
                                </li>
                                <li>
                                    <Link to='/create-workflow'>Creation Workflow (Pixels)</Link>
                                </li>
                                
                                <li>
                                    <Link to='/performance-chart'>Performance Chart screen filter interactions</Link>
                                </li>

                                <li>
                                    <Link to='/buy'>Locking and Rerunning Scenario Prototype</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='experiments'>
                            <h3 className='va-title-3'>Experiments</h3>
                            <ul className="prototype-list">
                                <li>
                                    <Link to='/nav'>Navigation experiment for the new platform</Link>
                                </li>
                                <li>
                                    <Link to='/focus-mode'>Focus Mode in the creation workflow</Link>
                                </li>
                                <li>
                                    <Link to='/header'>Experiment for header interactions and flow.</Link>
                                </li>
                                <li>
                                    <Link to='/inline-edit'>Inline Edit interaction experiment</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'>Dashboard ticker</Link>
                                </li>
                                <li>
                                    <Link to='/side-panel'>Side panel potential interactions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='archived-prototypes'>
                    <h3 className='va-title-3'>Archived Prototypes:</h3>
                    <ul className="prototype-list">
                        <li>
                            <Link to='/vision'>VideoAmp Vision Prototype</Link>
                        </li>
                        <li>
                            <Link to='/easy-mode'>Easy / Expert modes for Creation Workflows (v1)</Link>
                        </li>

                        <li>
                            <Link to='/brand'>VideoAmp Brand Survey</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    );
}

export default PrototypeHome;