import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, TextArea, TextField } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Edit, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";
import { dataIcon } from '../data-icon';

const trackingPlatformOptions: OptionsType<OptionType> = [
    { value: 'A&E', label: 'A&E' },
    { value: 'Acuity', label: 'Acuity' },
    { value: 'AdTheorent', label: 'AdTheorent' },
    { value: 'Aki Technologies', label: 'Aki Technologies' },
    { value: 'AMC', label: 'AMC' },
    { value: 'Amobee', label: 'Amobee' },
    { value: 'Beeswax', label: 'Beeswax' },
    { value: 'BET', label: 'BET' },
    { value: 'Buzzfeed', label: 'Buzzfeed' }
];

const dataOptions: OptionsType<OptionType> = [
    { value: 'Creative', label: 'Creative'},
    { value: 'Pixel', label: 'Pixel'},
    { value: 'Offline Conversion', label: 'Offline Conversion'},
    { value: 'Ad Schedule', label: 'Ad Schedule'},
    { value: 'Linear As-Run Log', label: 'Linear As-Run Log'},
    { value: 'Linear Post Log', label: 'Linear Post Log'},
    { value: 'Linear Cost Data', label: 'Linear Cost Data'},
    { value: 'Digital Cost Data', label: 'Digital Cost Data'},
    { value: 'Linear Daypart Definition', label: 'Linear Daypart Definition'},
    { value: 'Advertiser Constraint', label: 'Advertiser Constraint'},
    { value: 'Investment Strategie', label: 'Investment Strategie'},
    { value: 'External Data Source', label: 'External Data Source'}
];

const macroOptions: OptionsType<OptionType> = [
    { value: 'none', label: 'None'},
    { value: 'Digital Rate Card', label: 'Digital Rate Card'}
]
const macroEncodingOptions: OptionsType<OptionType> = [
    { value: 'none', label: 'None'},
    { value: 'Plain Text', label: 'Plain Text'},
    { value: 'SHA1', label: 'SHA1'},
    { value: 'MD5', label: 'MD5'},
    { value: 'BASE64', label: 'BASE64'}
]

function CreatePixel(props: any) {
    const history = useHistory();
    const [easyMode, setEasyMode] = React.useState<string | null>(localStorage.getItem('easyMode'));
    const [modeSelection, setModeSelection] = React.useState<string>('');
    const [saveCheck, setSaveCheck] = React.useState<boolean>(false);
    const [createStep, setCreateStep] = React.useState<number>(2);
    const [macroTab, setMacroTab] = React.useState<string>('rendering');
    const [helpOpen, setHelpOpen] = React.useState<boolean>(true);
    const [dataType, setData] = React.useState<string>('pixels');
    const [newPixel, setNewPixel] = React.useState({
        dataType: dataType,
        connectMethod: '',
        pixelName: '',
        pixelDescription: '',
        pixelMethod: '',
        adServer: 'none',
        trackingPlatform: '',
        macroDeviceType: '',
        macroPublisherName: '',
        macroCreativeName: '',
        macroCreativeID: '',
        macroAppName: '',
        macroChannel: '',
        macroDomain: '',
        macroDeviceTypeEncoding: macroEncodingOptions[0],
        macroPublisherNameEncoding: macroEncodingOptions[0],
        macroCreativeNameEncoding: macroEncodingOptions[0],
        macroCreativeIDEncoding: macroEncodingOptions[0],
        macroAppNameEncoding: macroEncodingOptions[0],
        macroChannelEncoding: macroEncodingOptions[0],
        macroDomainEncoding: macroEncodingOptions[0]
     });
    // const [method, setMethod] = React.useState<string>('');
    const onDataChange = (e: any): void => {
        setData(e.value);
        setNewPixel({...newPixel, dataType: e.value});
    };
    const onHelpToggle = (): void => {
        setHelpOpen(!helpOpen);
    }
    const onEasySelectionClick = (): void => {
        setModeSelection('easy');
    };
    const onExpertSelectionClick = (): void => {
        setModeSelection('expert');
    }
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
    const onSaveNewPixelClick = (): void => {
        let today = new Date().toLocaleDateString()
        const myNewPixel = {
            pixelName: newPixel.pixelName,
            createdDate: today,
        }
        localStorage.setItem("newPixel", JSON.stringify(myNewPixel));
        localStorage.setItem('newNotification', 'new');
        history.push('../easy-mode');
    }
    function pixelNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, pixelName: (event.currentTarget.value)})
        }
    }
    function pixelDescriptionChange(event?: React.ChangeEvent<HTMLTextAreaElement>): void {
        if (event) {
            setNewPixel({...newPixel, pixelDescription: (event.currentTarget.value)})
        }
    }
    const nextButtonClick = (): void => {
        if (createStep < 7 ) {
            setTimeout((): void => {
                setCreateStep(createStep + 1);
            }, 250);
            
            //setHelpOpen(false);
        }
    }
    const prevButtonClick = (): void => {
        if (createStep > 2 ) {
            setTimeout((): void => {
                setCreateStep(createStep - 1);
            }, 250);
            //setHelpOpen(false);
        }
    }
    function pixelConnectMethodClick(method:string) {
        if (newPixel.connectMethod === method) {
            setNewPixel({ ...newPixel, connectMethod: '' });
        } else {
            setNewPixel({ ...newPixel, connectMethod: method });
        }
     }
    function pixelMethodClick(method:string) {
        if (newPixel.pixelMethod === method) {
            setNewPixel({ ...newPixel, pixelMethod: '' });
        } else {
            setNewPixel({ ...newPixel, pixelMethod: method });
        }
     }
     function pixelAdServerClick(adserver:string) {
         if (newPixel.adServer === adserver) {
            setNewPixel({ ...newPixel, adServer: '' });
         } else {
            setNewPixel({ ...newPixel, adServer: adserver });
         }
     }
     function setTrackingPlatform(option: any): void {
        setNewPixel({ ...newPixel, trackingPlatform: option.value });
    }
     function pixelTrackingClick(platform:string) {
        if (newPixel.trackingPlatform === platform) {
           setNewPixel({ ...newPixel, trackingPlatform: '' });
        } else {
           setNewPixel({ ...newPixel, trackingPlatform: platform });
        }
    }
    function macroDeviceTypeChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, macroDeviceType: (event.currentTarget.value)})
        }
    }
    function macroPublisherNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, macroPublisherName: (event.currentTarget.value)})
        }
    }
    function macroCreativeNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, macroCreativeName: (event.currentTarget.value)})
        }
    }
    function macroCreativeIDChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, macroCreativeID: (event.currentTarget.value)})
        }
    }
    function macroAppNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, macroAppName: (event.currentTarget.value)})
        }
    }
    function macroChannelChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, macroChannel: (event.currentTarget.value)})
        }
    }
    function macroDomainChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, macroDomain: (event.currentTarget.value)})
        }
    }
    function setMacroDeviceType(option: any): void {
        setNewPixel({ ...newPixel, macroDeviceTypeEncoding: option });
    }
    function setMacroPublisherName(option: any): void {
        setNewPixel({ ...newPixel, macroPublisherNameEncoding: option });
    }
    function setMacroCreativeName(option: any): void {
        setNewPixel({ ...newPixel, macroCreativeNameEncoding: option });
    }
    function setMacroCreativeID(option: any): void {
        setNewPixel({ ...newPixel, macroCreativeIDEncoding: option });
    }
    function setMacroAppName(option: any): void {
        setNewPixel({ ...newPixel, macroAppNameEncoding: option });
    }
    function setMacroChannel(option: any): void {
        setNewPixel({ ...newPixel, macroChannelEncoding: option });
    }
    function setMacroDomain(option: any): void {
        setNewPixel({ ...newPixel, macroDomainEncoding: option });
    }
    const saveModeToggle = (checked: boolean): void => setSaveCheck(!saveCheck);
    const circleCheck: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
    )
    

    return (
        <div className="takeover">
            <div className={cx("takeover-header", {'expert-header': easyMode==='expert'})}>
                <div className="takeover-header-left">
                    <VideoAmp />
                    {easyMode === 'expert' && (<div className="header-title">
                        <span className="breadcrumb">PROCTER &amp; GAMBLE  &gt;  DATA MANAGEMENT</span>
                        <h1>Add New Data Object</h1>
                    </div>)}
                </div>
                {easyMode != '' && <Button href="../easy-mode" theme={ButtonTheme.Secondary}>Save and Exit</Button>}
                
            </div>
            {(easyMode === '' || easyMode === null) && (
            <div className="takeover-mode-selection">
                <h1>Choose your experience.</h1>
                <span className="description">
                    This setting will persist across the Platform, you can make a change any time in the User Preferences area.
                </span>
                <div className="button-group">
                    <button 
                        className={cx(
                            'select-button', 
                            {'selected': modeSelection==='easy'}
                        )}
                        onClick={onEasySelectionClick}>
                        Make it easy, I'm new here.
                        <span className="uncheck"></span>
                        <span className="check"><Signal icon={circleCheck} /></span>
                    </button>
                    <button 
                        className={cx(
                            'select-button', 
                            {'selected': modeSelection==='expert'}
                        )}
                        onClick={onExpertSelectionClick}>
                        I'm an expert.
                        <span className="uncheck"></span>
                        <span className="check"><Signal icon={circleCheck} /></span>
                    </button>
                </div>
                <div className="check-row">
                    <Checkbox name="saveCheck" checked={saveCheck} onChange={saveModeToggle} label="Save this setting for me" />
                </div>
                <div>
                    <Link to="/easy-mode" className="link-button">Cancel</Link>
                    <Button onClick={onNextClick} disabled={modeSelection === ''}>Next</Button>
                </div>
            </div>
            )}
            {easyMode != '' && (
            <div 
                className={cx(
                            'create-content', 
                            {'create-easy-mode': easyMode==='easy', 'create-expert-mode': easyMode==='expert'}
                        )}>
                {easyMode === 'easy' && (
                    <div className="easy-mode-left">
                        <div className="va-logo-easy-left">
                            <VideoAmp />
                        </div>
                        <div className="easy-left-content">
                            <div className="onboard-data"><Signal icon={dataIcon} /> <span>Onboard Data</span></div>
                        {createStep===2 && (
                            <h1>What are the details for this Pixel?</h1>
                        )}
                        {createStep===3 && (
                                <h1>What type of event is this Pixel for?</h1>
                        )}
                        {createStep===4 && (
                                <h1>Do you want to choose a Creative Ad Server?</h1>
                        )}
                        {createStep===5 && (
                            <h1>Which tracking Platform does this Pixel use?</h1>
                        )}
                        {createStep===6 && (
                            <h1>Set up your optional Macros</h1>
                        )}
                        {createStep===7 && (
                            <>
                                <h1>How does everything check out?</h1>
                                <p className="u-title-4 u-font-medium mb-2">So easy right?</p>
                                <p className="u-body-1">Next time test out your skills with <strong>Expert Mode</strong></p>
                            </>
                        )}
                        <div className={cx("help-content", {'help-content-open': helpOpen})}>
                            {createStep === 2 && (
                                <>
                                <h2>What is the best way to name your Pixel?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 3 && (
                                <>
                                <h2>What are Pixel events?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 4 && (
                                <>
                                <h2>Why is selecting a Creative Ad Server important?</h2>
                                <p>Ad Servers are Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 5 && (
                                <>
                                <h2>What is a tracking Platform?</h2>
                                <p>Tracking Platforms are Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 6 && (
                                <>
                                <h2>What are Macros and how can I use them?</h2>
                                <p>Macros are Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                        </div>
                        {createStep != 7 && (
                            <Button onClick={onHelpToggle} theme={ButtonTheme.Link}>
                                {!helpOpen && <span>Need Help?</span>}
                                {helpOpen && <span>Hide Help</span>}
                            </Button>
                        
                        )}
                        </div>
                        
                        
                        
                        
                        
                    </div>
                )}
                <div className={cx("create-section", {'create-section-macros' : createStep === 6})}>
                    {(easyMode==='expert' || (easyMode==='easy' && createStep === 1)) && (
                        <section className="form-item-container create-pixel-object">
                            <label>Data Object Type</label>
                            <Select
                                    inlineLabel={false}
                                    options={dataOptions}
                                    // style={{ width: '12rem' }}
                                    defaultValue={dataOptions[1]}
                                    onChange={onDataChange}
                                    className='mb-8'
                                />
                            {easyMode==='expert' && <label>Method</label>}
                            <button 
                                className={cx(
                                    'select-button mb-4', 
                                    {'selected': newPixel.connectMethod==='create'}
                                )}
                                onClick={() => pixelConnectMethodClick('create')}>
                                Import my Data
                                <span className="uncheck"></span>
                                <span className="check"><Signal icon={circleCheck} /></span>
                            </button>
                            <button 
                                className={cx(
                                    'select-button mb-4', 
                                    {'selected': newPixel.connectMethod==='request'}
                                )}
                                onClick={() => pixelConnectMethodClick('request')}>
                                Request a Pixel from a Partner
                                <span className="uncheck"></span>
                                <span className="check"><Signal icon={circleCheck} /></span>
                            </button>
                            
                        </section>
                    )}
                    {easyMode === 'expert' && (
                        <>
                        <hr />
                        <h2>Pixel Settings</h2>
                        </>
                    )}
                    <div className={cx('pixel-settings-container', {'pixel-settings-container-expert' : easyMode === 'expert'})}>
                        <div className="pixel-settings-group1">
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 2)) && (
                                <section className="form-item-container create-pixel-details">
                                    <label>Pixel Name</label>
                                    <TextField className="mb-4" placeholder="Enter Pixel Name" onChange={pixelNameChange} value={newPixel.pixelName}></TextField>
                                    <label>Description</label>
                                    <TextArea onChange={pixelDescriptionChange} value={newPixel.pixelDescription}></TextArea>
                                </section>
                            )}
                        </div>
                        <div className="pixel-settings-group2">
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 3)) && (
                                <section className="form-item-container create-pixel-method">
                                    {easyMode==='expert' && <label>Method</label>}
                                    
                                    <button 
                                        className={cx(
                                            'select-button mb-4', 
                                            {'selected': newPixel.pixelMethod==='Impression'}
                                        )}
                                        onClick={() => pixelMethodClick('Impression')}>
                                        Impression
                                        <span className="uncheck"></span>
                                        <span className="check"><Signal icon={circleCheck} /></span>
                                    </button>
                                    <button 
                                        className={cx(
                                            'select-button', 
                                            {'selected': newPixel.pixelMethod==='Conversion'}
                                        )}
                                        onClick={() => pixelMethodClick('Conversion')}>
                                        Conversion
                                        <span className="uncheck"></span>
                                        <span className="check"><Signal icon={circleCheck} /></span>
                                    </button>
                                </section>
                            )}
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 4)) && (
                                <section className="form-item-container create-pixel-adserver">
                                    {easyMode==='expert' && <label>Creative Ad Server</label>}
                                    {easyMode==='expert' && (<button 
                                        className={cx(
                                            'select-button mb-4', 
                                            {'selected': newPixel.adServer==='none'}
                                        )}
                                        onClick={() => pixelAdServerClick('none')}>
                                        None
                                        <span className="uncheck"></span>
                                        <span className="check"><Signal icon={circleCheck} /></span>
                                    </button>)}
                                    <button 
                                        className={cx(
                                            'select-button mb-4', 
                                            {'selected': newPixel.adServer==='DCM/CM360'}
                                        )}
                                        onClick={() => pixelAdServerClick('DCM/CM360')}>
                                        DCM/CM360
                                        <span className="uncheck"></span>
                                        <span className="check"><Signal icon={circleCheck} /></span>
                                    </button>
                                    <button 
                                        className={cx(
                                            'select-button mb-4', 
                                            {'selected': newPixel.adServer==='Innovid'}
                                        )}
                                        onClick={() => pixelAdServerClick('Innovid')}>
                                        Innovid
                                        <span className="uncheck"></span>
                                        <span className="check"><Signal icon={circleCheck} /></span>
                                    </button>
                                    <button 
                                        className={cx(
                                            'select-button', 
                                            {'selected': newPixel.adServer==='Sizmek'}
                                        )}
                                        onClick={() => pixelAdServerClick('Sizmek')}>
                                        Sizmek
                                        <span className="uncheck"></span>
                                        <span className="check"><Signal icon={circleCheck} /></span>
                                    </button>
                                </section>
                            )}
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 5)) && (
                                <section className="form-item-container create-pixel-tracking">
                                    {easyMode==='expert' && (
                                        <Select
                                            inlineLabel={false}
                                            label="Tracking Platform"
                                            options={trackingPlatformOptions}
                                            style={{ width: '12rem' }}
                                            placeholder='Choose a tracking platform'
                                            onChange={setTrackingPlatform}
                                        />
                                    )}
                                    {easyMode==='easy' && (
                                        <>
                                        {trackingPlatformOptions.map((option:any, index: number) => (
                                            <button 
                                                key={index}
                                                className={cx(
                                                    'select-button mb-4', 
                                                    {'selected': newPixel.trackingPlatform===option.value}
                                                )}
                                                onClick={() => pixelTrackingClick(option.value)}>
                                                {option.label}
                                                <span className="uncheck"></span>
                                                <span className="check"><Signal icon={circleCheck} /></span>
                                            </button>
                                        ))}
                                        </>
                                    )}
                                </section>
                            )}
                        </div>
                    </div>
                    {(easyMode==='expert' || (easyMode==='easy' && createStep === 6)) && (
                        <>
                        {easyMode==='easy' && (
                            <div className="macros-tabs">
                                <a className={cx('tab', {'selected': macroTab==='rendering'})}
                                    onClick={() => setMacroTab('rendering')}>Rendering Macros</a>
                                <a className={cx('tab', {'selected': macroTab==='tracking'})}
                                    onClick={() => setMacroTab('tracking')}>Tracking Macros</a>
                                <a className={cx('tab', {'selected': macroTab==='dcm'})}
                                    onClick={() => setMacroTab('dcm')}>DCM Macros</a>
                                <a className={cx('tab', {'selected': macroTab==='dsp'})}
                                    onClick={() => setMacroTab('dsp')}>DSP Macros</a>
                                <a className={cx('tab', {'selected': macroTab==='external'})}
                                    onClick={() => setMacroTab('external')}>External Macros</a>
                                <a className={cx('tab', {'selected': macroTab==='privacy'})}
                                    onClick={() => setMacroTab('privacy')}>Privacy Macros</a>
                                <a className={cx('tab', {'selected': macroTab==='cpm'})}
                                    onClick={() => setMacroTab('cpm')}>CPM Macros</a>
                                <a className={cx('tab', {'selected': macroTab==='other'})}
                                    onClick={() => setMacroTab('other')}>Other Macros</a>
                            </div>
                        )}
                        <section className="form-item-container create-pixel-macros">
                            {/* {easyMode==='expert' && <h2>Rendering Macros</h2>} */}
                            {(macroTab==='rendering' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>Rendering Macros</h2>
                                <hr />
                                <div className="form-line">
                                    
                                    <div className="textfield-container">
                                        <TextField 
                                        label="Device Type"
                                        placeholder="Device Type" 
                                        onChange={macroDeviceTypeChange} 
                                        value={newPixel.macroDeviceType} 
                                        style={{ width: '9rem' }} />
                                    </div>
                                    <Select
                                        label="Encoding"
                                        options={macroEncodingOptions}
                                        style={{ width: '6rem' }}
                                        placeholder="None"
                                        defaultValue={newPixel.macroDeviceTypeEncoding}
                                        isDisabled={newPixel.macroDeviceType === ''}
                                        onChange={setMacroDeviceType}
                                    />
                                </div>
                                <div className="form-line">
                                    <div className="textfield-container">
                                        <TextField 
                                        label="Publisher Name"
                                        placeholder="Publisher Name" 
                                        onChange={macroPublisherNameChange} 
                                        value={newPixel.macroPublisherName} 
                                        style={{ width: '9rem' }} />
                                    </div>
                                    <Select
                                        onChange={setMacroPublisherName}
                                        label="Encoding"
                                        options={macroEncodingOptions}
                                        style={{ width: '6rem' }}
                                        defaultValue={newPixel.macroPublisherNameEncoding}
                                        isDisabled={newPixel.macroPublisherName === ''}
                                    />
                                </div>
                                <div className="form-line">
                                    <div className="textfield-container">
                                        <TextField 
                                        label="Creative Name"
                                        placeholder="Creative Name" 
                                        onChange={macroCreativeNameChange} 
                                        value={newPixel.macroCreativeName} 
                                        style={{ width: '9rem' }} />
                                    </div>
                                    <Select
                                        onChange={setMacroCreativeName}
                                        label="Encoding"
                                        options={macroEncodingOptions}
                                        style={{ width: '6rem' }}
                                        defaultValue={newPixel.macroCreativeNameEncoding}
                                        isDisabled={newPixel.macroCreativeName === ''}
                                    />
                                </div>
                                <div className="form-line">
                                
                                    <div className="textfield-container">
                                        <TextField 
                                        label="Creative ID"
                                        placeholder="Creative ID" 
                                        onChange={macroCreativeIDChange} 
                                        value={newPixel.macroCreativeID} 
                                        style={{ width: '9rem' }} />
                                    </div>
                                    <Select
                                        onChange={setMacroCreativeID}
                                        label="Encoding"
                                        options={macroEncodingOptions}
                                        style={{ width: '6rem' }}
                                        defaultValue={newPixel.macroCreativeIDEncoding}
                                        isDisabled={newPixel.macroCreativeID === ''}
                                    />
                                </div>
                                <div className="form-line">
                                    
                                    <div className="textfield-container">
                                        <TextField 
                                        label="App Name"
                                        placeholder="App Name" 
                                        onChange={macroAppNameChange} 
                                        value={newPixel.macroAppName} 
                                        style={{ width: '9rem' }} />
                                    </div>
                                    <Select
                                        onChange={setMacroAppName}
                                        label="Encoding"
                                        options={macroEncodingOptions}
                                        style={{ width: '6rem' }}
                                        defaultValue={newPixel.macroAppNameEncoding}
                                        isDisabled={newPixel.macroAppName === ''}
                                    />
                                </div>
                                <div className="form-line">
                                    
                                    <div className="textfield-container">
                                        <TextField 
                                        label="Channel"
                                        placeholder="Channel" 
                                        onChange={macroChannelChange} 
                                        value={newPixel.macroChannel}
                                        style={{ width: '9rem' }} />
                                    </div>
                                    <Select
                                        onChange={setMacroChannel}
                                        label="Encoding"
                                        options={macroEncodingOptions}
                                        style={{ width: '6rem' }}
                                        defaultValue={newPixel.macroChannelEncoding}
                                        isDisabled={newPixel.macroChannel === ''}
                                        menuPlacement="top"
                                    />
                                </div>
                                <div className="form-line">
                                    
                                    <div className="textfield-container">
                                        <TextField 
                                        label="Domain"
                                        placeholder="Domain" 
                                        onChange={macroDomainChange} 
                                        value={newPixel.macroDomain} 
                                        style={{ width: '9rem' }} />
                                    </div>
                                    <Select
                                        onChange={setMacroDomain}
                                        label="Encoding"
                                        options={macroEncodingOptions}
                                        style={{ width: '6rem' }}
                                        defaultValue={newPixel.macroDomainEncoding}
                                        isDisabled={newPixel.macroDomain === ''}
                                        menuPlacement="top"
                                    />
                                </div>
                            </div>
                            )}
                            {(macroTab==='tracking' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>Tracking Macros</h2>
                                <hr />
                                <div>
                                    <div className="form-line">
                                        
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Device ID"
                                            placeholder="Device ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                <div className="form-line">
                                        
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Cookie ID"
                                            placeholder="Cookie ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Metro"
                                            placeholder="Metro" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="IP"
                                            placeholder="IP" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Cache Buster"
                                            placeholder="Cache Buster" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="User Agent"
                                            placeholder="User Agent" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                            {(macroTab==='dcm' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>Dcm Macros</h2>
                                <hr />
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Dcm Site ID"
                                            placeholder="Dcm Site ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Dcm Site"
                                            placeholder="Dcm Site" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Dcm Placement"
                                            placeholder="Dcm Placement" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Dcm Campaign"
                                            placeholder="Dcm Campaign" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Dcm Advertiser"
                                            placeholder="Dcm Advertiser" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                            {(macroTab==='dsp' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>Dsp Macros</h2>
                                <hr />
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Unique ID"
                                            placeholder="Unique ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Deal ID"
                                            placeholder="Deal ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                            {(macroTab==='external' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>External Macros</h2>
                                <hr />
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Line Item Name"
                                            placeholder="External Line Item Name" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Line Item ID"
                                            placeholder="External Line Item ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Campaign Name"
                                            placeholder="External Campaign Name" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Campaign ID"
                                            placeholder="External Campaign ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Advertiser ID"
                                            placeholder="External Advertiser ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Advertiser Name"
                                            placeholder="External Advertiser Name" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Client ID"
                                            placeholder="External Client ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Client Name"
                                            placeholder="External Client Name" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Placement ID"
                                            placeholder="External Placement ID" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="External Placement Name"
                                            placeholder="External Placement Name" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                            {(macroTab==='privacy' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>Privacy Macros</h2>
                                <hr />
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="CCPA Privacy"
                                            placeholder="CCPA Privacy" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Do Not Track"
                                            placeholder="Do Not Track" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                            {(macroTab==='cpm' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>Cpm Macros</h2>
                                <hr />
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Media Cost CPM"
                                            placeholder="Media Cost CPM" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Media Spend CPM"
                                            placeholder="Media Spend CPM" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                            {(macroTab==='other' || easyMode==='expert') && (
                            <div className="macro-group-container">
                                <h2>Other Macros</h2>
                                <hr />
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Custom Parameter 1"
                                            placeholder="Custom Parameter 1" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Custom Parameter 2"
                                            placeholder="Custom Parameter 2" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Custom Parameter 3"
                                            placeholder="Custom Parameter 3" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Custom Parameter 4"
                                            placeholder="Custom Parameter 4" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Custom Parameter 5"
                                            placeholder="Custom Parameter 5" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-line">
                                        <div className="textfield-container">
                                            <TextField 
                                            label="Revenue"
                                            placeholder="Revenue" 
                                            // onChange={macroDeviceTypeChange} 
                                            // value={newPixel.macroDeviceType} 
                                            style={{ width: '9rem' }} />
                                        </div>
                                        <Select
                                            label="Encoding"
                                            options={macroEncodingOptions}
                                            style={{ width: '6rem' }}
                                            placeholder="None"
                                            // defaultValue={newPixel.macroDeviceTypeEncoding}
                                            // isDisabled={newPixel.macroDeviceType === ''}
                                            // onChange={setMacroDeviceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                        </section>
                        </>
                    )}
                    {(easyMode==='expert' || (easyMode==='easy' && createStep === 7)) && (
                        <section className="form-item-container create-pixel-macros">
                            {easyMode==='easy' && (
                                <div className="create-easy-review">
                                    <h2>Pixel Settings</h2>
                                    <label>Pixel Name</label>
                                    <div className="easy-review-item">
                                        {newPixel.pixelName}
                                        <IconButton
                                            dataUI="pixelNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => setCreateStep(2)}
                                        />
                                    </div>
                                    <label>Pixel Description</label>
                                    <div className="easy-review-item">
                                        {newPixel.pixelDescription}
                                        <IconButton
                                            dataUI="pixelNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => setCreateStep(2)}
                                        />
                                    </div>
                                    <hr />
                                    <label>Method</label>
                                    <div className="easy-review-item">
                                        {newPixel.pixelMethod}
                                        <IconButton
                                            dataUI="pixelNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => setCreateStep(3)}
                                        />
                                    </div>
                                    <hr />
                                    <label>Creative Ad Server</label>
                                    <div className="easy-review-item">
                                        {newPixel.adServer != '' ? newPixel.adServer : <span>None</span>}
                                        <IconButton
                                            dataUI="pixelNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => setCreateStep(4)}
                                        />
                                    </div>
                                    <hr />
                                    <label>Tracking Platform</label>
                                    <div className="easy-review-item">
                                        {newPixel.trackingPlatform != '' ? newPixel.trackingPlatform : <span>None</span>}
                                        <IconButton
                                            dataUI="pixelNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => setCreateStep(5)}
                                        />
                                    </div>
                                    <h2 className="mt-12">Rendering Macros</h2>
                                    {(
                                        newPixel.macroAppName === '' && 
                                        newPixel.macroChannel === '' && 
                                        newPixel.macroCreativeID === '' && 
                                        newPixel.macroCreativeName === '' && 
                                        newPixel.macroDeviceType === '' &&
                                        newPixel.macroDomain === '' && 
                                        newPixel.macroPublisherName === ''
                                        ) && <span>No Macros applied.</span>}
                                    {newPixel.macroDeviceType != '' && (
                                        <div className="form-line">
                                            <div className="form-line-item">
                                                <label>Device Type</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroDeviceType}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-line-item">
                                                <label>Encoding</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroDeviceTypeEncoding.value}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {newPixel.macroPublisherName != '' && (
                                        <div className="form-line">
                                            <div className="form-line-item">
                                                <label>Publisher Name</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroPublisherName}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-line-item">
                                                <label>Encoding</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroPublisherNameEncoding.value}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {newPixel.macroCreativeName != '' && (
                                        <div className="form-line">
                                            <div className="form-line-item">
                                                <label>Creative Name</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroCreativeName}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-line-item">
                                                <label>Encoding</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroCreativeNameEncoding.value}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {newPixel.macroCreativeName != '' && (
                                        <div className="form-line">
                                            <div className="form-line-item">
                                                <label>Creative ID</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroCreativeID}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-line-item">
                                                <label>Encoding</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroCreativeIDEncoding.value}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {newPixel.macroAppName != '' && (
                                        <div className="form-line">
                                            <div className="form-line-item">
                                                <label>App Name</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroAppName}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-line-item">
                                                <label>Encoding</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroAppNameEncoding.value}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {newPixel.macroChannel != '' && (
                                        <div className="form-line">
                                            <div className="form-line-item">
                                                <label>Channel</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroChannel}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-line-item">
                                                <label>Encoding</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroChannelEncoding.value}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {newPixel.macroDomain != '' && (
                                        <div className="form-line">
                                            <div className="form-line-item">
                                                <label>Domain</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroDomain}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-line-item">
                                                <label>Encoding</label>
                                                <div className="easy-review-item">
                                                    {newPixel.macroDomainEncoding.value}
                                                    <IconButton
                                                        dataUI="pixelNameEdit"
                                                        icon={Edit}
                                                        size="sm"
                                                        onClick={() => setCreateStep(6)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            
                            
                        </section>
                    )}
                    {(easyMode === 'easy' || easyMode === 'expert') && (
                        <div className={cx(
                            'easy-form-footer',
                            `easy-mode-step-${createStep}`,
                            {'expert-form-footer': easyMode==='expert'}
                        )}>
                            {easyMode === 'easy' && (
                                <>
                                    <div className="progress-bar" style={{width: `calc(100% * (${createStep} / 7))`}}></div>
                                    <Button onClick={prevButtonClick} theme={ButtonTheme.Link} disabled={createStep < 3}>Previous</Button>
                                </>
                            )}
                            
                         
                            {(createStep < 7 && easyMode === 'easy') && <Button onClick={nextButtonClick}>Next</Button>}
                            {easyMode==='expert' && <Button theme={ButtonTheme.Link} href="../easy-mode">Cancel</Button>}
                            {(createStep === 7 || easyMode === 'expert') && (
                                <Button 
                                    onClick={onSaveNewPixelClick}
                                    disabled={newPixel.pixelName === ''}
                                >
                                    Save New Pixel
                                </Button>
                            
                            )}
                        </div>
                    )}
                    
                </div>
            </div>
            )}
        </div>
    )

}

export default CreatePixel;