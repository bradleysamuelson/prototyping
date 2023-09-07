import React from 'react';
export const Dashboard: React.FC<any> = ({selectedNav, ...rest}) => {
    React.useEffect(() => {
        selectedNav('dashboard');
    }, []);
    return (
        <>
                <div className="content-main">
                    <div className="content-main-left">
                        <div className="dashboard-box-container">
                            <div className="dashboard-box">
                                <h3>Section Title</h3>
                                <div className='campaign-dv-container'>
                                    
                                        <svg className="campaign-dv" viewBox="0 0 374 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="26.548%" y1="100%" x2="82.923%" y2="100%" id="a"><stop stop-color="#5C93CC" offset="0%"/><stop stop-color="#000082" offset="100%"/></linearGradient><linearGradient x1="16.625%" y1="100%" x2="83.087%" y2="100%" id="b"><stop stop-color="#000082" offset="0%"/><stop stop-color="#92E5FF" offset="100%"/></linearGradient></defs><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 21.403C18.218 21.403 20.769 0 36.801 0c16.032 0 14.575 10.808 36.437 10.808s19.675 10.595 36.072 10.595c16.396 0 25.141-10.807 36.8-10.807 11.66 0 14.94 10.596 36.073 10.596 21.133 0 13.482 21.403 36.801 21.403" stroke="url(#a)" transform="translate(8 39)"/><path d="M218.393 43.36c11.615 0 13.241-41.38 23.462-41.38 10.22 0 9.291 20.895 23.229 20.895 13.937 0 12.543 20.485 22.997 20.485 10.453 0 16.028-20.894 23.46-20.894 7.434 0 9.525 20.485 22.998 20.485S343.133 84.33 358 84.33" stroke="url(#b)" transform="matrix(1 0 0 -1 8 125.311)"/></g></svg>
                                    
                                    {/* <svg className="campaign-dv" viewBox="0 0 374 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="a"><stop stop-color="#E4B0FD" offset="0%"/><stop stop-color="#5F8BFF" offset="100%"/></linearGradient><linearGradient x1="26.548%" y1="100%" x2="83.087%" y2="100%" id="b"><stop stop-color="#6E8FFF" offset="0%"/><stop stop-color="#13F0FB" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke-width="2"><path d="M10 54.403C28.218 54.403 30.769 33 46.801 33c16.032 0 14.575 10.808 36.437 10.808s19.675 10.595 36.072 10.595c16.396 0 25.141-10.807 36.8-10.807 11.66 0 14.94 10.596 36.073 10.596 21.133 0 13.482 21.403 36.801 21.403" stroke="url(#a)"/><path d="M228.393 75.863c11.615 0 13.241-41.883 23.462-41.883 10.22 0 9.291 21.149 23.229 21.149 13.937 0 12.543 20.734 22.997 20.734 10.453 0 16.028-21.149 23.46-21.149 7.434 0 9.525 20.734 22.998 20.734s8.594 41.883 23.461 41.883" stroke="url(#b)" transform="matrix(1 0 0 -1 0 151.311)"/></g></svg>     */}
                                </div>
                                <div className='campaign-box-footer'>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                    <div className='footer-item-1'><span></span><span className='footer-item-2'></span></div>
                                </div>
                            </div>
                            <div className="dashboard-box">
                                <h3>Section Title</h3>
                                <div className="upfront-row">
                                    <div className="upfront-circle filled"></div>
                                    <div className="row-content"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle "></div>
                                    <div className="row-content"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                                <div className="upfront-row">
                                    <div className="upfront-circle light"></div>
                                    <div className="row-content light"></div>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard-mock-table'>
                            <div className='mock-section-header'>
                                <div className='mock-header-left'>
                                    <div className='mock-action-item'></div>
                                </div>
                                <div className='mock-header-right'>
                                    <div className='mock-action-item'></div>
                                    <div className='mock-action-item'></div>
                                    <div className='mock-action-item'></div>
                                </div>
                            </div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                            <div className="row-content"></div>
                        </div>
                        <div className="mock-footer">
                            <div className='mock-action-item half'></div>
                            <div className='mock-action-item half'></div>
                            <div className='mock-action-item'></div>
                        </div>
                        
                    </div>
                    <div className="content-main-right">
                        <div className='content-right-section'>
                            <div className="mock-section-header">
                                <div className="mock-header-left">
                                    <h4>Recommendations</h4>
                                </div>
                                <div className="mock-header-right">
                                    <div className='mock-action-item'></div>
                                </div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                            <div className="recommendations-row">
                                <div className="row-content"></div>
                                <div className="row-content"></div>
                            </div>
                        </div>
                        <div className='content-right-section'>
                            <div className="mock-section-header">
                                <div className="mock-header-left">
                                    <h4>Recent Activity</h4>
                                </div>
                                <div className="mock-header-right">
                                    <div className='mock-action-item'></div>
                                </div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                            <div className='recent-row'>
                                <div className='mock-action-item half'></div>
                                <div className='recent-circle'></div>
                                <div className='recent-description'></div>
                                <div className='recent-user'></div>
                            </div>
                        </div>
                        
                        
                        
                    </div>

                </div>
        </>
    )
}