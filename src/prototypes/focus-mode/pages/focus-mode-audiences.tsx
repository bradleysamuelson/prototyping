import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, RadioButtonGroup, RadioButton, Search, TextField, Toggle, Tooltip } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Clear, ChevronDown, Edit, ForwardArrow, Signal } from '@preamp/signal';
import { DropdownButton, OptionsType, OptionType, Select, SelectType, ValueType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";
import { TopBar } from '../components/topBar/topBar';

// const trackingPlatformOptions: OptionsType<OptionType> = [
//     { value: 'A&E', label: 'A&E' },
//     { value: 'Acuity', label: 'Acuity' },
//     { value: 'AdTheorent', label: 'AdTheorent' },
//     { value: 'Aki Technologies', label: 'Aki Technologies' },
//     { value: 'AMC', label: 'AMC' },
//     { value: 'Amobee', label: 'Amobee' },
//     { value: 'Beeswax', label: 'Beeswax' },
//     { value: 'BET', label: 'BET' },
//     { value: 'Buzzfeed', label: 'Buzzfeed' }
// ];

const permissionOptions: OptionsType<OptionType> = [
    { value: 'Full Access', label: 'Full Access'},
    { value: 'Partial View', label: 'Partial View'},
    { value: 'Can Edit', label: 'Can Edit'},
    { value: 'Read Only', label: 'Read Only'}
]

function FocusModeAudiences(props: any) {
    const history = useHistory();
    const [easyMode, setEasyMode] = React.useState<string | null>(localStorage.getItem('easyMode'));
    const [modeSelection, setModeSelection] = React.useState<string>('');
    const [saveCheck, setSaveCheck] = React.useState<boolean>(false);
    const [createStep, setCreateStep] = React.useState<number>(2);
    // const [macroTab, setMacroTab] = React.useState<string>('rendering');
    const [helpOpen, setHelpOpen] = React.useState<boolean>(true);
    const [dataSource, setDataSource] = React.useState<string>('');
    const [segmentDelivery, setSegmentDelivery] = React.useState<string>('');
    const [dataType, setData] = React.useState<string | null>(localStorage.getItem('dataType'));
    const [showText, setShowText] = React.useState<boolean>(false);
    const [focusStep, setFocusStep] = React.useState<number>(1);
    const [showTips, setShowTips] = React.useState<boolean>(true);
    const [cbsPermission, setCbsPermission] = React.useState<string>('Full Access');
    const [nbcPermission, setNbcPermission] = React.useState<string>('Full Access');
    const [hboPermission, setHboPermission] = React.useState<string>('Partial View');
    const [userPermission, setUserPermission] = React.useState<string>('Can Edit');
    const [permissionRules, setPermissionRules] = React.useState<boolean>(false);
    const [permissionEntity, setPermissionEntity] = React.useState<string>('');
    
    // const [method, setMethod] = React.useState<string>('');
    
    const onNextClick = (): void => {
        if (modeSelection === 'easy') {
            setEasyMode('easy');
            if(saveCheck) {
                localStorage.setItem('easyMode', 'easy');
            }
        } else {
            setEasyMode('expert');
            if(saveCheck) {
                localStorage.setItem('easyMode', 'expert');
            }
        }
    };
    const saveModeToggle = (checked: boolean): void => setSaveCheck(!saveCheck);
    const circleCheck: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
    )
    const lightbulb: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 1 1-.979-.206 7.97 7.97 0 0 1 1.756-3.557l.225-.253c.917-.982 1.346-2.339 1.157-3.724-.33-2.119-2.05-3.82-4.123-4.008C9.666 7.095 7.286 9.232 7.286 12c0 1.116.433 2.206 1.187 3.043l.166.175c.979.978 1.617 2.274 1.854 3.7a.5.5 0 0 1-.986.164c-.189-1.132-.667-2.16-1.39-2.961l-.185-.196A5.584 5.584 0 0 1 6.286 12ZM10.357 22.214A1.693 1.693 0 0 0 12 23.43c.786 0 1.429-.5 1.643-1.215h-3.286Z"/><path d="M14.286 18.571H9.643c-.562 0-1 .439-1 1V21.5c0 .562.438 1 1 1h4.714l.112-.006c.512-.054.891-.48.823-1.002l-.007-.037v-1.884c0-.561-.437-1-1-1ZM9.642 21.5v-1.929h4.644V21.5H9.642Z"/><path d="M12 12.857a.5.5 0 0 1 .492.41l.008.09V19a.5.5 0 0 1-.992.09L11.5 19v-5.643a.5.5 0 0 1 .5-.5Z"/><path d="M12.646 12.004a.5.5 0 0 1 .617-.072l.078.06 1.072 1a.5.5 0 0 1-.612.786l-.07-.055-.72-.671-.657.659a.5.5 0 0 1-.638.058l-.07-.058-.658-.659-.718.67a.5.5 0 0 1-.64.037l-.067-.06a.5.5 0 0 1-.036-.64l.06-.067 1.072-1a.5.5 0 0 1 .618-.051l.077.063.646.646.646-.646Z"/></g></svg>
    )
    const lightbulbOn: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="nonzero"><path d="M6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 0 1-.592.386c-.27-.057-3.471-.041-3.744.004a.5.5 0 0 1-.575-.41c-.189-1.133-.667-2.16-1.39-2.962l-.185-.196A5.584 5.584 0 0 1 6.286 12Z" fill="#9EFF00"/><g fill="#000"><path d="M12 1.5a.5.5 0 0 1 .492.41L12.5 2v2.857a.5.5 0 0 1-.992.09l-.008-.09V2a.5.5 0 0 1 .5-.5ZM4.504 4.504a.5.5 0 0 1 .637-.058l.07.058 2.143 2.142a.5.5 0 0 1-.638.765l-.07-.057L4.504 5.21a.5.5 0 0 1 0-.707ZM4.857 11.5a.5.5 0 0 1 .09.992l-.09.008H2a.5.5 0 0 1-.09-.992L2 11.5h2.857ZM22 11.5a.5.5 0 0 1 .09.992L22 12.5h-2.857a.5.5 0 0 1-.09-.992l.09-.008H22ZM18.79 4.504a.5.5 0 0 1 .764.637l-.058.07-2.142 2.143a.5.5 0 0 1-.765-.638l.057-.07 2.143-2.142ZM6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 0 1-.979-.206 7.97 7.97 0 0 1 1.756-3.557l.225-.253c.917-.982 1.346-2.339 1.157-3.724-.33-2.119-2.05-3.82-4.123-4.008C9.666 7.095 7.286 9.232 7.286 12c0 1.116.433 2.206 1.187 3.043l.166.175c.979.978 1.617 2.274 1.854 3.7a.5.5 0 0 1-.986.164c-.189-1.132-.667-2.16-1.39-2.961l-.185-.196A5.584 5.584 0 0 1 6.286 12ZM10.357 22.214A1.693 1.693 0 0 0 12 23.43c.786 0 1.429-.5 1.643-1.215h-3.286Z"/><path d="M14.286 18.571H9.643c-.562 0-1 .439-1 1V21.5c0 .562.438 1 1 1h4.714l.112-.006c.512-.054.891-.48.823-1.002l-.007-.037v-1.884c0-.561-.437-1-1-1ZM9.642 21.5v-1.929h4.644V21.5H9.642Z"/><path d="M12 12.857a.5.5 0 0 1 .492.41l.008.09V19a.5.5 0 0 1-.992.09L11.5 19v-5.643a.5.5 0 0 1 .5-.5Z"/><path d="M12.646 12.004a.5.5 0 0 1 .617-.072l.078.06 1.072 1a.5.5 0 0 1-.612.786l-.07-.055-.72-.671-.657.659a.5.5 0 0 1-.638.058l-.07-.058-.658-.659-.718.67a.5.5 0 0 1-.64.037l-.067-.06a.5.5 0 0 1-.036-.64l.06-.067 1.072-1a.5.5 0 0 1 .618-.051l.077.063.646.646.646-.646Z"/></g></g></svg>
    )
    function changeData(value: string): void {
        setData(value);
        localStorage.setItem('dataType', value);
        setCreateStep(2);
    }
    function changeCreateStep(value: number): void {
        setCreateStep(value);
    }
    function dataSourceHandler(selectedValue: string): void {
        setDataSource(selectedValue);
    };
    function segmentDeliveryHandler(selectedValue: string): void {
        setSegmentDelivery(selectedValue);
    };
    // function cbsChange(value: string): void {
    //     setCbsPermission(value);
    // }
    // function cbsChange(value: ValueType<OptionType>): void {
    //     setCbsPermission(value);
    // }
    const cbsChange = (e: any): void => {
        setCbsPermission(e.value);
        if (e.value === 'Partial View') {
            setPermissionRules(true);
            setPermissionEntity('Viacom CBS');
        }
    };
    const nbcChange = (e: any): void => {
        setNbcPermission(e.value);
        if (e.value === 'Partial View') {
            setPermissionRules(true);
            setPermissionEntity('NBC Universal');
        }
    };
    const hboChange = (e: any): void => {
        setHboPermission(e.value);
        if (e.value === 'Partial View') {
            setPermissionRules(true);
            setPermissionEntity('HBO');
        }
    };
    const userChange = (e: any): void => {
        setUserPermission(e.value);
        if (e.value === 'Partial View') {
            setPermissionRules(true);
            setPermissionEntity('Ellie Sattler');
        }
    };

    return (
        <div className="focus-mode-container">
            <TopBar />
            <div className="page-header">
                <div className="page-header-left">
                    <div className="breadcrumb">
                        Procter &amp; Gamble &gt; Audience Management
                    </div>
                    <h1>Create an Audience</h1>
                </div>
                <div className="page-header-right">
                    {/* <Toggle name="show-suggestions" label="Show Suggestions" checked={showTips} onChange={(): void => setShowTips(!showTips)} /> */}
                    <div className="tools">
                        {showTips ? (
                            <Tooltip content="Hide Suggestions" hasArrow>
                            <IconButton onClick={(): void => setShowTips(false)} icon={lightbulbOn} size="1.75rem" />
                            </Tooltip>
                        ) : (
                            <Tooltip content="Show Suggestions" hasArrow>
                            <IconButton onClick={(): void => setShowTips(true)} icon={lightbulb} size="1.75rem" />
                            </Tooltip>
                        )}
                        
                    </div>
                </div>
            </div>
            <div className="metric-bar">
                <div className="metric">
                    <div className="metric-value">&mdash;</div>
                    <div className="metric-label">VideoAmp HH</div>
                </div>
                <div className="metric">
                    <div className="metric-value">&mdash;</div>
                    <div className="metric-label">Addressable HH Size</div>
                </div>
                <div className="metric">
                    <div className="metric-value">&mdash;</div>
                    <div className="metric-label">HH UE</div>
                </div>
            </div>
            <div className="content-container">
                <div className="content-left">
                    <h3>General</h3>
                    <div className="form-row container--name">
                        <TextField 
                            label="Audience Name"
                            placeholder="Name your audience segment"
                        ></TextField>
                        {showTips && (
                        <div className="tips-container">
                            <div className="content">This is the name of the audience that will be displayed to other users and data delivery service.</div>
                            <div className="content">
                                <h3>May We Suggest?</h3>
                                <p className="mb-8">audiencenamesuggestion 1 <br />
                                audience_name_suggestion1 <br />
                                audience name suggestion 3</p>

                                <button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="form-row">
                        <RadioButtonGroup
                            isInline
                            key={`data-source`}
                            name={'radioButtonGroup'}
                            onChange={dataSourceHandler}
                            required={false}
                            selectedValue={dataSource}
                            title={'Data Source'}
                        >
                            <div className="container--source" key={`data-source-1`}>
                            <RadioButton
                                key={`data-source-1`}
                                label={'Footprint 4'}
                                name={'footprint4'}
                                value={'footprint4'}
                            />
                            {showTips && (
                            <div className="tips-container">
                                <div className="content">The current production footprint. Select this one to get the outputs you are used to.</div>
                                <div className="content">
                                    <p><button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button></p>
                                </div>
                            </div>
                            )}
                            </div>
                            <div className="container--source" key={`data-source-2`}>
                            <RadioButton
                                key={`data-source-2`}
                                label={'Footprint 4 with streamers'}
                                name={'footprint4streamers'}
                                value={'footprint4streamers'}
                            />
                            {showTips && (
                            <div className="tips-container">
                                <div className="content">The latest and greatest footprint with expanded network coverage.</div>
                                <div className="content">
                                    <p><button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button></p>
                                </div>
                            </div>
                            )}
                            </div>
                            <div className="container--source" key={`data-source-3`}>
                            <RadioButton
                                key={`data-source-3`}
                                label={'Footprint 5'}
                                name={'footprint5'}
                                value={'footprint5'}
                            />
                            {showTips && (
                            <div className="tips-container">
                                <div className="content">The latest and greatest footprint with expanded network coverage and incorporation of streamers.</div>
                                <div className="content">
                                    <p><button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button></p>
                                </div>
                            </div>
                            )}
                            </div>
                        </RadioButtonGroup>
                        
                    </div>
                    <div className="form-row">
                        <RadioButtonGroup
                            isInline
                            key={`segment-delivery`}
                            name={'radioButtonGroup'}
                            onChange={segmentDeliveryHandler}
                            required={false}
                            selectedValue={segmentDelivery}
                            title={'Segment Delivery'}
                        >
                            <div className="container--delivery" key={`segment-delivery-1`}>
                            <RadioButton
                                key={`segment-delivery-1`}
                                label={'LiveRamp'}
                                name={'liveramp'}
                                value={'liveramp'}
                            />
                            {showTips && (
                            <div className="tips-container">
                                <div className="content">Start sending this segment so you can target this segment through LiveRamp</div>
                                <div className="content">
                                    <h3>Threshold</h3>
                                    <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p><button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button></p>
                                </div>
                            </div>
                            )}
                            </div>
                            <div className="container--delivery" key={`segment-delivery-2`}>
                            <RadioButton
                                key={`segment-delivery-2`}
                                label={'Beeswax'}
                                name={'beeswax'}
                                value={'beeswax'}
                            />
                            {showTips && (
                            <div className="tips-container">
                                <div className="content">Start sending this segment so you can target this segment through Beeswax</div>
                                <div className="content">
                                    <h3>Threshold</h3>
                                    <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p><button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button></p>
                                </div>
                            </div>
                            )}
                            </div>
                        </RadioButtonGroup>
                    </div>
                    <h3>Audience Composition</h3>
                    <div className="content-box">
                        <h4>Compositing an Audience</h4>
                        <div className="content-box-columns">
                            <div className="column-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className="column-2">
                                <strong>Grouping</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <div className="content-row button-container">
                            <Button theme={ButtonTheme.Secondary}>Start Building</Button>
                            <div className="checkbox-container">
                                <Checkbox label="Don't show me this text again" name="showtext" checked={showText} onChange={():void => setShowText(!showText)}></Checkbox>
                            </div>
                        </div>
                    </div>
                    {focusStep === 2 && (
                        <>
                            <button className="focus-blocker" onClick={():void => setFocusStep(1)}>
                                <div className="blocker-content">
                                    <div className="blocker-title">1</div>
                                    <div className="blocker-description">Review and adjust the audience settings and add more segments to your audience</div>
                                    <div className="blocker-arrow blocker-arrow--left"><span>LFG!</span></div>
                                </div>
                            </button>
                        </>
                    )}
                </div>
                <div className="content-right">
                    <h3>Add a Permission</h3>
                    <Search />
                    {/* <h3>Allowing Segment Access to a Company</h3>
                    <div className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <h3>Allowing Access to a User</h3>
                    <div className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> */}
                    <div className="permission-row">
                        <div className="permission-avatar"></div>
                        <div className="permission-title">Everyone at Viacom CBS <span className="permission-details">10 members</span></div>
                        <div className="permission-button">
                            {cbsPermission === 'Partial View' ? (
                                <button className="rulesbutton" onClick={(): void => (
                                    setPermissionRules(true),
                                    setPermissionEntity('Viacom CBS')
                                    )}>{cbsPermission}</button>
                            ) : ( <span>{cbsPermission}</span> )}
                            
                            <DropdownButton
                                dataUI="dropdown-cbs"
                                icon={ChevronDown}
                                onChange={cbsChange}
                                options={permissionOptions}
                                // style={{ width: 200 }}
                            />
                        </div>
                        <div className="permission-remove">
                            <IconButton icon={Clear} />
                        </div>
                    </div>

                    <div className="permission-row">
                        <div className="permission-avatar"></div>
                        <div className="permission-title">Everyone at NBC Universal <span className="permission-details">8 members</span></div>
                        <div className="permission-button">
                            {nbcPermission === 'Partial View' ? (
                                <button className="rulesbutton" onClick={(): void => (
                                    setPermissionRules(true),
                                    setPermissionEntity('NBC Universal')
                                    )}>{nbcPermission}</button>
                            ) : ( <span>{nbcPermission}</span> )}
                            
                            <DropdownButton
                                dataUI="dropdown-nbc"
                                icon={ChevronDown}
                                onChange={nbcChange}
                                options={permissionOptions}
                                // style={{ width: 200 }}
                            />
                        </div>
                        <div className="permission-remove">
                            <IconButton icon={Clear} />
                        </div>
                    </div>

                    <div className="permission-row">
                        <div className="permission-avatar"></div>
                        <div className="permission-title">Everyone at HBO <span className="permission-details">2 members</span></div>
                        <div className="permission-button">
                            {hboPermission === 'Partial View' ? (
                                <button className="rulesbutton" onClick={(): void => (
                                    setPermissionRules(true),
                                    setPermissionEntity('HBO')
                                    )}>{hboPermission}</button>
                            ) : ( <span>{hboPermission}</span> )}
                            
                            <DropdownButton
                                dataUI="dropdown-hbo"
                                icon={ChevronDown}
                                onChange={hboChange}
                                options={permissionOptions}
                                // style={{ width: 200 }}
                            />
                        </div>
                        <div className="permission-remove">
                            <IconButton icon={Clear} />
                        </div>
                    </div>

                    <div className="permission-row">
                        <div className="permission-avatar"></div>
                        <div className="permission-title">Ellie Sattler <span className="permission-details">esattler@videoamp.com</span></div>
                        <div className="permission-button">
                            {userPermission === 'Partial View' ? (
                                <button className="rulesbutton" onClick={(): void => (
                                    setPermissionRules(true),
                                    setPermissionEntity('Ellie Sattler')
                                    )}>{userPermission}</button>
                            ) : ( <span>{userPermission}</span> )}
                            
                            <DropdownButton
                                dataUI="dropdown-user"
                                icon={ChevronDown}
                                onChange={userChange}
                                options={permissionOptions}
                                // style={{ width: 200 }}
                            />
                        </div>
                        <div className="permission-remove">
                            <IconButton icon={Clear} />
                        </div>
                    </div>
                    
                        <div className={cx("permission-rules", {'permission-rules-open' : permissionRules})}>
                            <div className="rules-panel-top">
                                <IconButton icon={ForwardArrow} size="2rem" onClick={(): void => setPermissionRules(false)} />
                            </div>
                            <div className="rules-panel-content">
                                <h3>Partial View Settings for {permissionEntity}</h3>
                                <div className="rules-panel-row rules-panel-header">
                                    <span className="header-cell">Rule</span>
                                    <span className="header-cell">Setting</span>
                                </div>
                                <div className="rules-panel-row">
                                    <div className="rule-cell">Rule_Name</div>
                                    <div className="rule-cell"><TextField /></div>
                                </div>
                                <div className="rules-panel-row">
                                    <div className="rule-cell">Rule_Name</div>
                                    <div className="rule-cell"><TextField /></div>
                                </div>
                                <div className="rules-panel-row">
                                    <div className="rule-cell">Rule_Name</div>
                                    <div className="rule-cell"><TextField /></div>
                                </div>
                                <div className="rules-panel-row">
                                    <div className="rule-cell">Rule_Name</div>
                                    <div className="rule-cell"><TextField /></div>
                                </div>
                                <div className="rules-panel-row">
                                    <div className="rule-cell">Rule_Name</div>
                                    <div className="rule-cell"><TextField /></div>
                                </div>
                                <div className="rules-panel-buttons">
                                    <Button theme={ButtonTheme.Link} onClick={(): void => setPermissionRules(false)}>Close</Button>
                                    <Button theme={ButtonTheme.Secondary} onClick={(): void => setPermissionRules(false)}>Apply</Button>
                                </div>
                            </div>
                            
                        </div>
                    
                    
                    {focusStep === 1 && (
                        <>
                            <button className="focus-blocker" onClick={():void => setFocusStep(2)}>
                                <div className="blocker-content">
                                    <div className="blocker-title">2</div>
                                    <div className="blocker-description">Assign Permission Access for compaines or users to access this segment</div>
                                    <div className="blocker-arrow blocker-arrow--right"><span>TTM!</span></div>
                                </div>
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="create-footer">
                <Button theme={ButtonTheme.Link}>Cancel</Button>
                <Button theme={ButtonTheme.Primary}>Save Changes</Button>
            </div>
        </div>
    )

}

export default FocusModeAudiences;