import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, TextArea, TextField } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Clear, Edit, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";

import CreatePixelForm from './createPixelForm';
import CreateCreative from './createCreativeForm';
import { LeftContent } from '../components/leftContent';

import { DataTypeSelection } from '../components/dataTypeSelection';

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

const macroEncodingOptions: OptionsType<OptionType> = [
    { value: 'none', label: 'None'},
    { value: 'Plain Text', label: 'Plain Text'},
    { value: 'SHA1', label: 'SHA1'},
    { value: 'MD5', label: 'MD5'},
    { value: 'BASE64', label: 'BASE64'}
]

function Create(props: any) {
    const history = useHistory();
    const [easyMode, setEasyMode] = React.useState<string | null>(localStorage.getItem('easyMode'));
    const [modeSelection, setModeSelection] = React.useState<string>('');
    const [saveCheck, setSaveCheck] = React.useState<boolean>(false);
    const [createStep, setCreateStep] = React.useState<number>(2);
    // const [macroTab, setMacroTab] = React.useState<string>('rendering');
    const [helpOpen, setHelpOpen] = React.useState<boolean>(true);
    const [dataType, setData] = React.useState<string | null>(localStorage.getItem('dataType'));
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
        localStorage.setItem('dataType', e.value);
    };
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
    // const onSaveNewPixelClick = (): void => {
    //     let today = new Date().toLocaleDateString()
    //     const myNewPixel = {
    //         pixelName: newPixel.pixelName,
    //         createdDate: today,
    //     }
    //     localStorage.setItem("newPixel", JSON.stringify(myNewPixel));
    //     localStorage.setItem('newNotification', 'new');
    //     history.push('../easy-mode');
    // }
    // function pixelNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, pixelName: (event.currentTarget.value)})
    //     }
    // }
    // function pixelDescriptionChange(event?: React.ChangeEvent<HTMLTextAreaElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, pixelDescription: (event.currentTarget.value)})
    //     }
    // }
    // const nextButtonClick = (): void => {
    //     if (createStep < 7 ) {
    //         setTimeout((): void => {
    //             setCreateStep(createStep + 1);
    //         }, 250);
            
    //         //setHelpOpen(false);
    //     }
    // }
    // const prevButtonClick = (): void => {
    //     if (createStep > 2 ) {
    //         setTimeout((): void => {
    //             setCreateStep(createStep - 1);
    //         }, 250);
    //         //setHelpOpen(false);
    //     }
    // }
    // function pixelConnectMethodClick(method:string) {
    //     if (newPixel.connectMethod === method) {
    //         setNewPixel({ ...newPixel, connectMethod: '' });
    //     } else {
    //         setNewPixel({ ...newPixel, connectMethod: method });
    //     }
    //  }
    // function pixelMethodClick(method:string) {
    //     if (newPixel.pixelMethod === method) {
    //         setNewPixel({ ...newPixel, pixelMethod: '' });
    //     } else {
    //         setNewPixel({ ...newPixel, pixelMethod: method });
    //     }
    //  }
    //  function pixelAdServerClick(adserver:string) {
    //      if (newPixel.adServer === adserver) {
    //         setNewPixel({ ...newPixel, adServer: '' });
    //      } else {
    //         setNewPixel({ ...newPixel, adServer: adserver });
    //      }
    //  }
    //  function setTrackingPlatform(option: any): void {
    //     setNewPixel({ ...newPixel, trackingPlatform: option.value });
    // }
    //  function pixelTrackingClick(platform:string) {
    //     if (newPixel.trackingPlatform === platform) {
    //        setNewPixel({ ...newPixel, trackingPlatform: '' });
    //     } else {
    //        setNewPixel({ ...newPixel, trackingPlatform: platform });
    //     }
    // }
    // function macroDeviceTypeChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, macroDeviceType: (event.currentTarget.value)})
    //     }
    // }
    // function macroPublisherNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, macroPublisherName: (event.currentTarget.value)})
    //     }
    // }
    // function macroCreativeNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, macroCreativeName: (event.currentTarget.value)})
    //     }
    // }
    // function macroCreativeIDChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, macroCreativeID: (event.currentTarget.value)})
    //     }
    // }
    // function macroAppNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, macroAppName: (event.currentTarget.value)})
    //     }
    // }
    // function macroChannelChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, macroChannel: (event.currentTarget.value)})
    //     }
    // }
    // function macroDomainChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setNewPixel({...newPixel, macroDomain: (event.currentTarget.value)})
    //     }
    // }
    // function setMacroDeviceType(option: any): void {
    //     setNewPixel({ ...newPixel, macroDeviceTypeEncoding: option });
    // }
    // function setMacroPublisherName(option: any): void {
    //     setNewPixel({ ...newPixel, macroPublisherNameEncoding: option });
    // }
    // function setMacroCreativeName(option: any): void {
    //     setNewPixel({ ...newPixel, macroCreativeNameEncoding: option });
    // }
    // function setMacroCreativeID(option: any): void {
    //     setNewPixel({ ...newPixel, macroCreativeIDEncoding: option });
    // }
    // function setMacroAppName(option: any): void {
    //     setNewPixel({ ...newPixel, macroAppNameEncoding: option });
    // }
    // function setMacroChannel(option: any): void {
    //     setNewPixel({ ...newPixel, macroChannelEncoding: option });
    // }
    // function setMacroDomain(option: any): void {
    //     setNewPixel({ ...newPixel, macroDomainEncoding: option });
    // }
    const saveModeToggle = (checked: boolean): void => setSaveCheck(!saveCheck);
    const circleCheck: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
    )
    function changeData(value: string): void {
        setData(value);
        localStorage.setItem('dataType', value);
        setCreateStep(2);
    }
    function changeCreateStep(value: number): void {
        setCreateStep(value);
    }
    
    
    React.useEffect(() => {
        if(dataType === 'alldata') {
            setCreateStep(1);
        }
    }, []);

    return (
        <div className="takeover">
            <div className={cx("takeover-header", {'expert-header': easyMode==='expert'})}>
                <div className="takeover-header-left">
                    <VideoAmp />
                    {/* {easyMode === 'expert' && (<div className="header-title">
                        <span className="breadcrumb">PROCTER &amp; GAMBLE  &gt;  DATA MANAGEMENT</span>
                        <h1>Add New Data Object</h1>
                    </div>)} */}
                </div>
                {/* {(easyMode === '' || easyMode === null) && (
                    <Link to="/create-workflow" className="link-button"><Signal size={1.5} icon={Clear} /></Link>
                )} */}
                <Link to="/create-workflow" className="link-button"><Signal size={1.5} icon={Clear} /></Link>
                {/* {easyMode != '' && <Button href="../create-workflow" theme={ButtonTheme.Link}><Signal size={1.5} icon={Clear} /></Button>} */}
                
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
                    <Link to="/create-workflow" className="link-button">Cancel</Link>
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
                                <LeftContent createStep={createStep} dataType={dataType} />
                                
                            </div>
                        )}
                        <div className={cx(
                            "create-section", 
                            {'create-section-type' : createStep === 1}
                        )}>
                            {dataType==='alldata' && (
                        <section className="form-item-container create-pixel-object">
                                <DataTypeSelection onChange={changeData} hideLabel={easyMode==='easy'} selectionButtons={easyMode==='easy'} />
                        </section>
                            )}
                        {dataType==="pixels" && <CreatePixelForm modeSelection={modeSelection} createStep={createStep} changeCreateStep={changeCreateStep} />}
                        {dataType==="creatives" && <CreateCreative modeSelection={modeSelection} createStep={createStep} changeCreateStep={changeCreateStep} />}

                        </div>
            </div>
            )}
        </div>
    )

}

export default Create;