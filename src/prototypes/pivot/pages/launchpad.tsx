import React from 'react';
import cx from 'classnames';
import {
	NavLink, useRouteMatch
} from "react-router-dom";
import {Signal, Audiences, Book, Clear, Measure, Organization, Reports} from '@preamp/signal';

const ContentMeasurementIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M16.47 9.247a.75.75 0 0 1 1.133.977l-.073.084-4.444 4.445a.75.75 0 0 1-.994.059l-.084-.077-2.231-2.38-2.23 2.38a.75.75 0 0 1-.974.104l-.086-.07a.75.75 0 0 1-.104-.973l.07-.087 2.778-2.963a.75.75 0 0 1 1.008-.078l.086.078 2.247 2.398 3.898-3.897Z"/><path d="M12 1.225C6.05 1.225 1.225 6.049 1.225 12c0 5.95 4.824 10.775 10.775 10.775 5.95 0 10.775-4.824 10.775-10.775 0-5.95-4.824-10.775-10.775-10.775Zm0 1.55a9.225 9.225 0 1 1 0 18.45 9.225 9.225 0 0 1 0-18.45Z"/></g></svg>
    )

function TileArrow() {
    return (
        <div className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tl">
                <defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter>
                </defs>
                <g filter="url(#a)"><path d="M10 16.605v-.85a5.751 5.751 0 015.75-5.75h5.91" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.6" className="bit tr">
                <defs><filter id="a" x="0" y="0" width="30.66" height="25.6" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
                <g filter="url(#a)"><path d="M9 10.005h5.91a5.751 5.751 0 015.75 5.75v.85" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit bl">
                <defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
                <g filter="url(#a)"><path d="M21.66 15.61h-5.91A5.753 5.753 0 0110 9.85V9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30.66" height="25.61" className="bit br">
                <defs><filter id="a" x="0" y="0" width="30.66" height="25.61" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
                <g filter="url(#a)"><path d="M20.66 8.995v.85a5.753 5.753 0 01-5.75 5.76H9" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="37.857" height="33.299" className="bit arrow">
                <defs><filter id="a" x="4.559" y="0" width="33.299" height="33.299" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="b" x="0" y="6.649" width="36.42" height="20" filterUnits="userSpaceOnUse"><feOffset></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood flood-color="#06BCD4"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs>
                <g filter="url(#a)" transform="translate(-.002 -.001)"><path d="M20.5 9.71l6.942 6.942-6.942 6.943" fill="none" stroke="#06BCD4" stroke-width="2"></path></g>
                <g filter="url(#b)" transform="translate(-.002 -.001)"><path fill="none" stroke="#06BCD4" stroke-width="2" d="M27.42 16.65H9"></path></g>
            </svg>
        </div>
    )
    
}
    


function Launchpad(props: any) {
    const { url } = useRouteMatch();
    return (
        <div className='launchpad-container'>
            <div className='launchpad-tiles'>
                <NavLink exact={true} className="va-tile va-tile-default " to={`${url}/dashboard`} >
                    <Signal size='30px' icon={ContentMeasurementIcon} />
                    <div className="va-tile-content">
                        <header><h4 className="va-tile-title">Content Measurement</h4></header>
                        <div className="va-tile-description">
                            <p className="va-tile-description_container">Get Historical program &amp; commercial average measurement insights for TV airings.</p>
                            <div className="launch">
                                <button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
                                <TileArrow />
                            </div>
                        </div>
                    </div>
                </NavLink>
                <a className="va-tile va-tile-default ">
                    <Signal size='30px' icon={Measure} />
                    <div className="va-tile-content">
                        <header><h4 className="va-tile-title">Ad Measurement</h4></header>
                        <div className="va-tile-description">
                            <p className="va-tile-description_container">Measure linear, digital, or cross-screen media campaigns </p>
                            <div className="launch">
                                <button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
                                <TileArrow />
                            </div>
                        </div>
                    </div>
                </a>
                <a className="va-tile va-tile-default ">
                    <Signal size='30px' icon={Reports} />
                    <div className="va-tile-content">
                        <header><h4 className="va-tile-title">Custom Reports</h4></header>
                        <div className="va-tile-description">
                            <p className="va-tile-description_container">View and explore custom-built reports</p>
                            <div className="launch">
                                <button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
                                <TileArrow />
                            </div>
                        </div>
                    </div>
                </a>
                <a className="va-tile va-tile-default ">
                    <Signal size='30px' icon={Book} />
                    <div className="va-tile-content">
                        <header><h4 className="va-tile-title">Asset Library</h4></header>
                        <div className="va-tile-description">
                            <p className="va-tile-description_container">Store and manage your library of assets & pixels</p>
                            <div className="launch">
                                <button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
                                <TileArrow />
                            </div>
                        </div>
                    </div>
                </a>
                <a className="va-tile va-tile-default ">
                    <Signal size='30px' icon={Audiences} />
                    <div className="va-tile-content">
                        <header><h4 className="va-tile-title">Audiences</h4></header>
                        <div className="va-tile-description">
                            <p className="va-tile-description_container">Curate and discover advanced audiences using first and third-party data</p>
                            <div className="launch">
                                <button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
                                <TileArrow />
                            </div>
                        </div>
                    </div>
                </a>
                <a className="va-tile va-tile-default ">
                    <Signal size='30px' icon={Organization} />
                    <div className="va-tile-content">
                        <header><h4 className="va-tile-title">Organization</h4></header>
                        <div className="va-tile-description">
                            <p className="va-tile-description_container">Onboard and manage users, permissions, and your organization structure</p>
                            <div className="launch">
                                <button className="va-btn va-btn-link va-tile-description_name-link" data-ui="link" type="button">LAUNCH</button>
                                <TileArrow />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Launchpad;