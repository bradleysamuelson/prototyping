import React from 'react';
import {Panel} from '@preamp/core';
import cx from 'classnames';

// import '../bootstrap.css';
import '../pmb-bootstrap-theme.css';
import Header from '../../header/header';

function BootstrapComponents(props: any, { setHeader }:any) {
    const [component, setComponent] = React.useState<string>('buttons');
    
    return (
        <div className='page-container-el'>
            <nav >
                <ul className='vertical-nav-items-container components-left-nav'>
                    <li className={cx('vertical-nav-child-item', {'selected':  component === 'buttons'})} role="button" onClick={():void => setComponent('buttons')}>Buttons</li>
                    <li className={cx('vertical-nav-child-item', {'selected':  component === 'navpills'})} role="button" onClick={():void => setComponent('navpills')}>Nav Pills</li>
                    <li className={cx('vertical-nav-child-item', {'selected':  component === 'breadcrumb'})} role="button" onClick={():void => setComponent('breadcrumb')}>Breadcrumb</li>
                    <li className={cx('vertical-nav-child-item', {'selected':  component === 'panels'})} role="button" onClick={():void => setComponent('panels')}>Panels</li>
                    <li className={cx('vertical-nav-child-item', {'selected':  component === 'formcontrol'})} role="button" onClick={():void => setComponent('formcontrol')}>Form Control</li>
                    <li className={cx('vertical-nav-child-item', {'selected':  component === 'tabs'})} role="button" onClick={():void => setComponent('tabs')}>Tabs</li>
                    <li className={cx('vertical-nav-child-item', {'selected':  component === 'alerts'})} role="button" onClick={():void => setComponent('alerts')}>Alerts</li>
                </ul>
            </nav>
            <Panel className='w-full'>
                <h1 className='va-title'>Bootstrap Components</h1>

                {component === 'buttons' && (
                    <>
                <h2 className='u-title-3 mb-5'>Buttons</h2>
                <div className='component-container mb-5'>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-link">Link</button>
                </div>
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-link">Link</button>
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`.btn {
    border-radius: 8px;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 400;
    font-size: 12px;
    border-color: transparent;
    border-width: 2px;
    display: inline-block;
    text-decoration: none;
    height: 32px;
    line-height: 2;
    max-height: 32px;
    padding-bottom: 2px;
    padding-top: 2px;
    font-family: var(--font-semibold);
    transition: all 0.5s ease;
}
.btn:hover {
    transition: all 0.5s ease;
}
.btn:focus {
    outline: none;
}
.btn:focus:not(:focus-visible) {
    border-color: transparent;
}
.btn:active {
    box-shadow: none;
}
.btn + .btn {
    margin-left: 8px;
}

.btn-primary {
    background-color: var(--btn-bg-primary);
    color: var(--btn-text-primary);
    font-weight: 500;
}
.btn-primary:hover {
    background-color: var(--btn-bg-primary-hover);
    color: var(--btn-text-primary);
    border-color: transparent;
}
.btn-primary:active {
    background-color: var(--btn-bg-primary-active);
    color: var(--btn-text-primary);
}
.btn-primary:focus {
    background-color: var(--btn-bg-primary-focus);
    color: var(--btn-text-primary);
    border-color: var(--btn-bg-primary-active);
}

.btn-secondary {
    background-color: var(--btn-bg-secondary);
    color: var(--btn-text-secondary);
}
.btn-secondary:hover {
    background-color: var(--btn-bg-secondary-hover);
    color: var(--btn-text-secondary);
    border-color: transparent;
}
.btn-secondary:active {
    background-color: var(--btn-bg-secondary-active);
    color: var(--btn-text-secondary);
}
.btn-secondary:focus {
    background-color: var(--btn-bg-secondary-focus);
    color: var(--btn-text-secondary);
    border-color: var(--btn-bg-primary-active);
}

.btn-link {
    padding-left: 0;
    padding-right: 0;
    font-weight: 400;
    background-color: transparent;
    color: var(--btn-text-link);
}
.btn-link:hover {
    color: var(--btn-text-link-hover);
}
.btn-link:active {
    color: var(--btn-text-link-active);
}
.btn-link:focus {
    color: var(--btn-text-link-focus);
    text-decoration: underline;
}
`}
                    </pre>
                </div>
                </>
                )}


{component === 'navpills' && (
                    <>
                <h2 className='u-title-3 mb-5'>Nav Pills</h2>
                <div className='component-container mb-5'>
                    <ul className="nav nav-pills">
                        <li role="presentation" className="active"><a href="#">Flowchart</a></li>
                        <li role="presentation"><a href="#">List</a></li>
                        <li role="presentation" className="disabled"><a href="#">Disabled</a></li>
                    </ul>
                </div>
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`<ul class="nav nav-pills">
    <li role="presentation" class="active"><a href="#">Flowchart</a></li>
    <li role="presentation"><a href="#">List</a></li>
    <li role="presentation" class="disabled"><a href="#">Disabled</a></li>
</ul>
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`.nav-pills {
    display: flex;
    align-items: center;
    gap: 8px;
}
.nav-pills > li {
    float: none;
}
.nav-pills li a {
    display: flex;
    text-align: center;
    align-items: center;
    vertical-align: middle;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 12px;
    border-color: transparent;
    border: 1px solid var(--pill-button-default-border);
    border-radius: 20px;
    background-color: var(--pill-button-default-bg);
    color: var(--pill-button-default-color);
    font-weight: 500;
    font-family: var(--font-semibold);
}
.nav-pills li a:hover { 
    color: var(--pill-button-hover-color);
    background-color: var(--pill-button-default-hover-bg);
    border-color: var(--pill-button-default-border-hover);
}
.nav-pills li.active a {
    color: var(--pill-button-active-color);
    background-color: var(--pill-button-active-bg);
    border-color: var(--pill-button-active-bg);
}
.nav-pills li.active a:focus {
    color: var(--pill-button-active-color);
    background-color: var(--pill-button-default-hover-bg);
    border-color: var(--pill-button-active-bg);
}
.nav-pills li.active a:hover {
    background-color: var(--pill-button-active-hover-bg);
    border-color: var(--pill-button-active-hover-bg);
}
.nav-pills li a:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--pill-button-focus-border);
}
.nav-pills li.disabled a, .nav-pills li.disabled a:hover, .nav-pills li.disabled a:focus {
    cursor: default;
    border-color: transparent;
    background-color: var(--pill-button-disabled-bg);
    color: var(--pill-button-disabled-color);
    pointer-events: none;
    box-shadow: none;
}
`}
                    </pre>
                </div>
                </>
)}


{component === 'breadcrumb' && (
                    <>
                <h2 className='u-title-3 mb-5'>Breadcrumb</h2>
                <div className='component-container mb-5'>
                    <ol className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Library</a></li>
                        <li className="active">Data</li>
                    </ol>
                </div>
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`<ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>
</ol>
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`.breadcrumb {
    font-size: 12px;
    background: transparent;
    padding: 8px 0;
    display: flex;
    align-items: center;
}
.breadcrumb li a {
    color: var(--btn-text-link);
}
.breadcrumb li a:hover {
    text-decoration: underline;
    color: var(--btn-text-link-hover);
}
.breadcrumb li a:focus {
    text-decoration: underline;
    color: var(--btn-text-link-active);
    outline: 0;
}

.breadcrumb > li + li:before {
    color: var(--va-base-text);
    content: "\\003E";
    padding: 0 5px;
}
.breadcrumb > .active {
    color: var(--va-base-text);
}
`}
                    </pre>
                </div>
                </>
)}


{component === 'panels' && (
                    <>
                <h2 className='u-title-3 mb-5'>Panels</h2>
                <div className='component-container mb-5'>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            Basic panel example with no header.
                        </div>
                    </div>
                </div>
                <div className='component-container mb-5'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Panel header
                        </div>
                        <div className="panel-body">
                            Panel content
                        </div>
                    </div>
                </div>
                
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`<div class="panel panel-default">
    <div class="panel-body">
        Basic panel example with no header.
    </div>
</div>
<div className="panel panel-default">
    <div class="panel-heading">
        Panel header
    </div>
    <div class="panel-body">
        Panel content
    </div>
</div>
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`.panel {
    border: 1px solid var(--va-grey-300);
    border-radius: 4px;
    box-shadow: 0 2px 4px var(--va-grey-300);
}
.panel-default {
    border-color: var(--va-grey-300);
    background-color: white;
}
.panel-body {
    padding: 24px;
}
.panel-heading, .panel-default >.panel-heading {
    padding: 24px;
    background-color: transparent;
    border-bottom: 0;
}
.panel-heading + .panel-body {
    border-top: 1px solid var(--va-grey-300);
}
`}
                    </pre>
                </div>
                </>
)}


{component === 'formcontrol' && (
                    <>
                <h2 className='u-title-3 mb-5'>Text Fields</h2>
                <div className='component-container mb-5'>
                    <input type="text" className="form-control" placeholder="Placeholder Text" aria-describedby="basic-addon1" />
                </div>
                
                
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`<input type="text" class="form-control" placeholder="Placeholder Text" aria-describedby="basic-addon1" />
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`.form-control {
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border-radius: 4px;
    background-color: #fff;
    color: var(--va-base-black);
    font-size: 14px;
    display: flex;
    align-items: center;
    box-shadow: none;
    border-color: var(--va-form-border);
    border-width: var(--va-form-border-width);
    transition: border-color .15s;
    background-clip: padding-box;
}
.form-control:hover {
    border-color: var(--va-form-border-hover);
    box-shadow: 0 0 0 1px var(--va-form-border-hover);
}
.form-control:focus {
    outline: 0;
    border-color: var(--va-form-border-active);
    box-shadow: 0 0 0 1px var(--va-form-border-active);
}
`}
                    </pre>
                </div>
                </>
)}


{component === 'tabs' && (
                    <>
                <h2 className='u-title-3 mb-5'>Tabs</h2>
                <div className='component-container mb-5'>
                    <ul className="nav nav-tabs">
                        <li role="presentation" className="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="#">Profile</a></li>
                        <li role="presentation"><a href="#">Messages</a></li>
                    </ul>
                </div>
                
                
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`<ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Profile</a></li>
    <li role="presentation"><a href="#">Messages</a></li>
</ul>
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`.nav-tabs {
    border-bottom: 1px solid var(--tab-item-border-color);
    display: flex;
    align-items: flex-end;
    padding-bottom: 1px;
}
.nav-tabs > li {
    float: none;
    border-radius: 0;
    margin-bottom: -1px;
}
.nav-tabs > li:hover, .nav-tabs > li:focus-within {
    background: var(--tab-item-hover-bg);
}
.nav-tabs > li > a {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    border-bottom: 2px solid transparent;
    line-height: 1;
    padding: 12px 14px;
    margin-bottom: -1px;
    display: block;
}
.nav-tabs > li > a:hover {
    background-color: transparent;
    border-color: transparent;
}
.nav-tabs > li > a:focus {
    outline: 0;
    background-color: transparent;
    border-color: transparent;
}
.nav-tabs > li.active > a {
    border: 0;
    border-bottom: 2px solid var(--tab-item-active-border-color);
}
.nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
    border: 0;
    border-bottom: 2px solid var(--tab-item-active-border-color);
}
`}
                    </pre>
                </div>
                </>
)}

{component === 'alerts' && (
                    <>
                <h2 className='u-title-3 mb-5'>Alerts</h2>
                <div className='component-container mb-5'>
                    <div className="alert alert-info" role="alert">Info Alert content</div>
                    <div className="alert alert-error" role="alert">Error Alert content</div>
                    <div className="alert alert-success" role="alert">Success Alert content</div>
                    <div className="alert alert-warning" role="alert">Warning Alert content</div>
                </div>
                
                
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`<div class="alert alert-info" role="alert">Info Alert content</div>
<div class="alert alert-error" role="alert">Error Alert content</div>
<div class="alert alert-success" role="alert">Success Alert content</div>
<div class="alert alert-warning" role="alert">Warning Alert content</div>
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`.alert {
    border-radius: 8px;
    display: flex;
    border-style: solid;
    align-items: center;
    padding: 24px;
    font-size: 14px;
    z-index: var(--u-elevation-modal);
    border-width: 0;
    border-left-width: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    background-color: var(--notification-bg-default);
    border-color: var(--notification-border-default);
    color: var(--va-base-text);
    margin-bottom: 10px;
}
.alert-info {
    background-color: var(--notification-bg-default);
    border-color: var(--notification-border-default);
}
.alert-error {
    background-color: var(--notification-bg-error);
    border-color: var(--notification-border-error);
}
.alert-success {
    background-color: var(--notification-bg-success);
    border-color: var(--notification-border-success);
}
.alert-warning {
    background-color: var(--notification-bg-warning);
    border-color: var(--notification-border-warning);
}
`}
                    </pre>
                </div>
                </>
)}










                {/* 
                <h2 className='u-title-3 mb-5'>Tabs</h2>
                <div className='component-container mb-5'>
                    
                </div>
                
                
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre className=''>
{`
`}
                    </pre>
                </div>
                <h3>Styles:</h3>
                <div className='code-container u-well mb-5 '>
                    <pre>
{`
`}
                    </pre>
                </div> 
                */}
                
            </Panel>
            
        </div>
    )
}

export default BootstrapComponents;