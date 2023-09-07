import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, Search, TextArea, TextField, Tooltip } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Add, Check, ChevronDown, Clear, Edit, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";
import { dataIcon } from '../data-icon';
import { DataTypeSelection } from '../components/dataTypeSelection';

const permissionEntityList: any = [
    { label: 'Advertiser 1', value: 'entity1'},
    { label: 'Another Advertiser', value: 'entity2'},
    { label: 'Media Group', value: 'entity3'},
    { label: 'Different Advertiser', value: 'entity4'},
    { label: '12345 Advertiser', value: 'entity5'},
    { label: 'Advertiser 6', value: 'entity6'},
    { label: 'Another Media Group', value: 'entity7'},
    { label: 'Something Something', value: 'entity8'},
    { label: 'Advertiser 9', value: 'entity9'},
    { label: 'Advertiser 10', value: 'entity10'}
];
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

const macroOptions: OptionsType<OptionType> = [
    { value: 'none', label: 'None'},
    { value: 'Digital Rate Card', label: 'Digital Rate Card'}
]
const methodOptions: OptionsType<OptionType> = [
    { value: 'impression', label: 'Impression'},
    { value: 'conversion', label: 'Conversion'}
]
const creativeAdServerOptions: OptionsType<OptionType> = [
    { value: 'none', label: 'None'},
    { value: 'dcm', label: 'DCM/CM360'},
    { value: 'innovid', label: 'Innovid'},
    { value: 'sizmek', label: 'Sizmek'}
]
const macroEncodingOptions: OptionsType<OptionType> = [
    { value: 'none', label: 'None'},
    { value: 'Plain Text', label: 'Plain Text'},
    { value: 'SHA1', label: 'SHA1'},
    { value: 'MD5', label: 'MD5'},
    { value: 'BASE64', label: 'BASE64'}
]
interface CreatePixelProps {
    changeCreateStep: (arg: number) => void;
    modeSelection: string;
    createStep: number;
}
function CreatePixel(props: CreatePixelProps) {
    const history = useHistory();
    const [easyMode, setEasyMode] = React.useState<string | null>(localStorage.getItem('easyMode'));
    // const [easyMode, setEasyMode] = React.useState<string | null>(props.easyMode);
    const [modeSelection, setModeSelection] = React.useState<string>(props.modeSelection);
    // const [saveCheck, setSaveCheck] = React.useState<boolean>(false);
    const [createStep, setCreateStep] = React.useState<number>(props.createStep);
    const [macroTab, setMacroTab] = React.useState<string>('rendering');
    const [helpOpen, setHelpOpen] = React.useState<boolean>(true);
    const [dataType, setData] = React.useState<string | null>(localStorage.getItem('dataType'));
    const [showTips, setShowTips] = React.useState<boolean>(false);
    const [permissionList, updatePermissionList] = React.useState<any>([]);
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
     const [inlineEdit, setInlineEdit] = React.useState({
        editName: '',
        editNameActive: false,
        editNameEdited: false,
        editDescription: '',
        editDescriptionActive: false,
        editDescriptionEdited: false,
     });
     const [permissionSelected, setPermissionSelected] = React.useState({
        entity1: false,
        entity2: false,
        entity3: false,
        entity4: false,
        entity5: false,
        entity6: false,
        entity7: false,
        entity8: false,
        entity9: false,
        entity10: false,
        entityRules: ''
    });
    const [rulesOptions, setRulesOptions] = React.useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
        option7: false,
        option8: false,
        option9: false,
        option10: false,
        option11: false,
        option12: false,
        option13: false,
        option14: false,
        option15: false,
        option16: false,
        option17: false,
        option18: false,
        option19: false,
        option20: false,
        option21: false,
        option22: false,
        option23: false,
        option24: false,
        option25: false,
        option26: false,
        option27: false,
        option28: false,
        option29: false,
        option30: false,
        option31: false,
        option32: false,
    })

    function toggleRulesOpen(entity: string): void {
        if (permissionSelected.entityRules === '' || permissionSelected.entityRules != entity) {
            setPermissionSelected({...permissionSelected, entityRules: entity})
        } else {
            setPermissionSelected({...permissionSelected, entityRules: ''})
        }
    }
    function handleAddPermission(item: any): void {
        const temp = [...permissionList];
        const index = temp.findIndex(object => object.name === item);
        if (index === -1) {
                updatePermissionList([...permissionList, { 'name': item }]);
            }
        setPermissionSelected({...permissionSelected, [item]: true});
    }
    
    const onHelpToggle = (): void => {
        setHelpOpen(!helpOpen);
    }
    const onSaveNewPixelClick = (): void => {
        let today = new Date().toLocaleDateString()
        const myNewPixel = {
            pixelName: newPixel.pixelName,
            createdDate: today,
        }
        localStorage.setItem("newPixel", JSON.stringify(myNewPixel));
        localStorage.setItem('newNotification', 'new');
        history.push('../create-workflow');
    }
    function pixelNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewPixel({...newPixel, pixelName: (event.currentTarget.value)})
        }
    }
    function inlineNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setInlineEdit({...inlineEdit, editName: (event.currentTarget.value)})
        }
    }
    function inlineNameBlur(): void {
        if (inlineEdit.editName != '') {
            setNewPixel({...newPixel, pixelName: inlineEdit.editName});
            setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: true});
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            }, 2000);
        }
    }
    function inlineNameKeyPress(event: any): void {
        if (event.key === 'Enter' && inlineEdit.editName != '') {
            setNewPixel({...newPixel, pixelName: inlineEdit.editName});
            setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: true});
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            }, 2000);
        }
    }

    function inlineDescriptionChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setInlineEdit({...inlineEdit, editDescription: (event.currentTarget.value)})
        }
    }
    function inlineDescriptionBlur(): void {
        setNewPixel({...newPixel, pixelDescription: inlineEdit.editDescription});
        setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: true});
        setTimeout((): void => {
            setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: false});
        }, 2000);
    }
    function inlineDescriptionKeyPress(event: any): void {
        if (event.key === 'Enter' && inlineEdit.editDescription != '') {
            setNewPixel({...newPixel, pixelDescription: inlineEdit.editDescription});
            setInlineEdit({...inlineEdit, editDescriptionActive: false});
            setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: true});
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: false});
            }, 2000);
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
                props.changeCreateStep(createStep + 1)
            }, 250);
            
        }
    }
    const expertCreateInitial = (): void => {
        setCreateStep(3);
        props.changeCreateStep(3);
            
    }
    
    const prevButtonClick = (): void => {
        if (createStep > 2 ) {
            setTimeout((): void => {
                setCreateStep(createStep - 1);
                props.changeCreateStep(createStep - 1);
            }, 250);
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
    const circleCheck: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
    )
    function reviewSetStep(step: number): void {
        setCreateStep(step);
        props.changeCreateStep(step);
    }
    const lightbulb: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 1 1-.979-.206 7.97 7.97 0 0 1 1.756-3.557l.225-.253c.917-.982 1.346-2.339 1.157-3.724-.33-2.119-2.05-3.82-4.123-4.008C9.666 7.095 7.286 9.232 7.286 12c0 1.116.433 2.206 1.187 3.043l.166.175c.979.978 1.617 2.274 1.854 3.7a.5.5 0 0 1-.986.164c-.189-1.132-.667-2.16-1.39-2.961l-.185-.196A5.584 5.584 0 0 1 6.286 12ZM10.357 22.214A1.693 1.693 0 0 0 12 23.43c.786 0 1.429-.5 1.643-1.215h-3.286Z"/><path d="M14.286 18.571H9.643c-.562 0-1 .439-1 1V21.5c0 .562.438 1 1 1h4.714l.112-.006c.512-.054.891-.48.823-1.002l-.007-.037v-1.884c0-.561-.437-1-1-1ZM9.642 21.5v-1.929h4.644V21.5H9.642Z"/><path d="M12 12.857a.5.5 0 0 1 .492.41l.008.09V19a.5.5 0 0 1-.992.09L11.5 19v-5.643a.5.5 0 0 1 .5-.5Z"/><path d="M12.646 12.004a.5.5 0 0 1 .617-.072l.078.06 1.072 1a.5.5 0 0 1-.612.786l-.07-.055-.72-.671-.657.659a.5.5 0 0 1-.638.058l-.07-.058-.658-.659-.718.67a.5.5 0 0 1-.64.037l-.067-.06a.5.5 0 0 1-.036-.64l.06-.067 1.072-1a.5.5 0 0 1 .618-.051l.077.063.646.646.646-.646Z"/></g></svg>
    )
    const lightbulbOn: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="nonzero"><path d="M6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 0 1-.592.386c-.27-.057-3.471-.041-3.744.004a.5.5 0 0 1-.575-.41c-.189-1.133-.667-2.16-1.39-2.962l-.185-.196A5.584 5.584 0 0 1 6.286 12Z" fill="#9EFF00"/><g fill="#000"><path d="M12 1.5a.5.5 0 0 1 .492.41L12.5 2v2.857a.5.5 0 0 1-.992.09l-.008-.09V2a.5.5 0 0 1 .5-.5ZM4.504 4.504a.5.5 0 0 1 .637-.058l.07.058 2.143 2.142a.5.5 0 0 1-.638.765l-.07-.057L4.504 5.21a.5.5 0 0 1 0-.707ZM4.857 11.5a.5.5 0 0 1 .09.992l-.09.008H2a.5.5 0 0 1-.09-.992L2 11.5h2.857ZM22 11.5a.5.5 0 0 1 .09.992L22 12.5h-2.857a.5.5 0 0 1-.09-.992l.09-.008H22ZM18.79 4.504a.5.5 0 0 1 .764.637l-.058.07-2.142 2.143a.5.5 0 0 1-.765-.638l.057-.07 2.143-2.142ZM6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 0 1-.979-.206 7.97 7.97 0 0 1 1.756-3.557l.225-.253c.917-.982 1.346-2.339 1.157-3.724-.33-2.119-2.05-3.82-4.123-4.008C9.666 7.095 7.286 9.232 7.286 12c0 1.116.433 2.206 1.187 3.043l.166.175c.979.978 1.617 2.274 1.854 3.7a.5.5 0 0 1-.986.164c-.189-1.132-.667-2.16-1.39-2.961l-.185-.196A5.584 5.584 0 0 1 6.286 12ZM10.357 22.214A1.693 1.693 0 0 0 12 23.43c.786 0 1.429-.5 1.643-1.215h-3.286Z"/><path d="M14.286 18.571H9.643c-.562 0-1 .439-1 1V21.5c0 .562.438 1 1 1h4.714l.112-.006c.512-.054.891-.48.823-1.002l-.007-.037v-1.884c0-.561-.437-1-1-1ZM9.642 21.5v-1.929h4.644V21.5H9.642Z"/><path d="M12 12.857a.5.5 0 0 1 .492.41l.008.09V19a.5.5 0 0 1-.992.09L11.5 19v-5.643a.5.5 0 0 1 .5-.5Z"/><path d="M12.646 12.004a.5.5 0 0 1 .617-.072l.078.06 1.072 1a.5.5 0 0 1-.612.786l-.07-.055-.72-.671-.657.659a.5.5 0 0 1-.638.058l-.07-.058-.658-.659-.718.67a.5.5 0 0 1-.64.037l-.067-.06a.5.5 0 0 1-.036-.64l.06-.067 1.072-1a.5.5 0 0 1 .618-.051l.077.063.646.646.646-.646Z"/></g></g></svg>
    )
    

    React.useEffect(() => {
        if(easyMode === '' || easyMode === null) {
            setEasyMode(modeSelection)
        };
    }, []);
    return (
        <>
            
            {easyMode != '' && (
                <>
                    {(easyMode === 'expert' && createStep < 3) && (
                        <>
                            <div className="expert-create-initial">
                                {(easyMode==='expert' || (easyMode==='easy' && createStep === 2)) && (
                                    <section className="form-item-container create-pixel-details">
                                        <h3>Create a Pixel</h3>
                                        <label>Pixel Name</label>
                                        <TextField className="mb-4" placeholder="Enter Pixel Name" onChange={pixelNameChange} value={newPixel.pixelName}></TextField>
                                        <label>Description</label>
                                        <TextArea onChange={pixelDescriptionChange} value={newPixel.pixelDescription}></TextArea>
                                        <div className="button-row">
                                            <Button theme={ButtonTheme.Link} href="../create-workflow">Cancel</Button>
                                            <Button theme={ButtonTheme.Primary} disabled={newPixel.pixelName === ''} onClick={expertCreateInitial}>Create and Continue Setup</Button>
                                        </div>
                                    </section>
                                )}
                            </div>
                        </>
                    )}
                    {(easyMode === 'expert' && createStep > 2) && (
                        <>
                            <div className="content-header">
                                <div className="content-header-left">
                                    <div className="breadcrumb">Procter &amp; Gamble &gt; Pixels</div>
                                    {inlineEdit.editNameActive === false ? (
                                        <>
                                        <button className="new-data-name" onClick={(): void => setInlineEdit({...inlineEdit, editName: newPixel.pixelName, editNameActive: true})}>{newPixel.pixelName}</button>
                                        <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editNameEdited})} /> 
                                        </>
                                    ) : (
                                        <TextField 
                                            className="title-edit-textfield" 
                                            onChange={inlineNameChange} 
                                            value={inlineEdit.editName} 
                                            onBlur={inlineNameBlur}
                                            onKeyPress={inlineNameKeyPress}
                                            append={(
                                                <IconButton icon={Clear} onClick={(): void => {setInlineEdit({...inlineEdit, editName: '', editNameActive: false}); }} />
                                            )}
                                        ></TextField>
                                    )}
                                </div>
                                <div className="page-header-right">
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
                        </>
                    )}
                    {(easyMode === 'easy' || (easyMode === 'expert' && createStep > 2)) && (
                        <>
                            <div className="settings-container">      
                                <div className="create-section-primary">
                                    <div className={cx('settings-container pixel-settings-container', {'pixel-settings-container-expert' : easyMode === 'expert'})}>
                                        {(easyMode === 'easy' && createStep === 2) && (
                                            <div className="pixel-settings-group1">
                                                <section className="form-item-container create-pixel-details">
                                                    <label>Pixel Name</label>
                                                    <TextField className="mb-4" placeholder="Enter Pixel Name" onChange={pixelNameChange} value={newPixel.pixelName}></TextField>
                                                    <label>Description</label>
                                                    <TextArea onChange={pixelDescriptionChange} value={newPixel.pixelDescription}></TextArea>
                                                </section>
                                            </div>
                                        )}
                                        <div className="pixel-settings-group2">
                                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 3)) && (
                                                <section className="form-item-container create-pixel-method">
                                                    {easyMode === 'expert' && (
                                                        <>
                                                            <h2>General</h2>
                                                            <section className="form-item-container">
                                                                <label>Description</label>
                                                                {inlineEdit.editDescriptionActive === false ? (
                                                                    <>
                                                                    <button className="new-data-description"
                                                                        onClick={(): void => setInlineEdit({...inlineEdit, editDescription: newPixel.pixelDescription, editDescriptionActive: true})}
                                                                    >
                                                                        {newPixel.pixelDescription === '' ? <span className="empty-value"><Signal icon={Add} />Add a Description</span> : (
                                                                            <>{newPixel.pixelDescription}</>
                                                                        )}
                                                                    </button>
                                                                    <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editDescriptionEdited})} />
                                                                    </>
                                                                    ) : (
                                                                    <TextField 
                                                                        className="description-edit-textfield" 
                                                                        onChange={inlineDescriptionChange} 
                                                                        value={inlineEdit.editDescription} 
                                                                        onBlur={inlineDescriptionBlur}
                                                                        onKeyPress={inlineDescriptionKeyPress}
                                                                        append={(
                                                                            <IconButton icon={Clear} onClick={(): void => {setInlineEdit({...inlineEdit, editDescription: '', editDescriptionActive: false}); }} />
                                                                        )}
                                                                    ></TextField>
                                                                )}
                                                            </section>
                                                        </>
                                                    )}
                                                    <div className="suggestion-item">
                                                        {/* {easyMode==='expert' && <label>Method</label>} */}
                                                        {easyMode==='easy' ? (
                                                            <>
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
                                                            </>
                                                        ):(
                                                            <Select 
                                                                label="Method"
                                                                className="method-expert-select expert-select"
                                                                options={methodOptions}
                                                            />
                                                        )}
                                                        
                                                        {showTips && (
                                                            <div className="tips-container">
                                                                <div className="content">Method Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna.</div>
                                                                <div className="content">
                                                                    <button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </section>
                                            )}
                                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 4)) && (
                                                <section className="form-item-container create-pixel-adserver">
                                                    <div className="suggestion-item">
                                                    {/* {easyMode==='expert' && <label>Creative Ad Server</label>} */}
                                                    {easyMode==='expert' && (
                                                        // <button 
                                                        //     className={cx(
                                                        //         'select-button mb-4', 
                                                        //         {'selected': newPixel.adServer==='none'}
                                                        //     )}
                                                        //     onClick={() => pixelAdServerClick('none')}>
                                                        //         None
                                                        //         <span className="uncheck"></span>
                                                        //         <span className="check"><Signal icon={circleCheck} /></span>
                                                        // </button>
                                                        <Select isOptional label="Creative Ad Server" className="expert-select" options={creativeAdServerOptions} defaultValue={creativeAdServerOptions[0]} />
                                                    )}
                                                    {easyMode==='easy' && (
                                                        <>
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
                                                        </>
                                                    )}
                                                    
                                                    {showTips && (
                                                        <div className="tips-container">
                                                            <div className="content">Creative Ad Server Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna.</div>
                                                            <div className="content">
                                                                <button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                    </div>
                                                </section>
                                            )}
                                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 5)) && (
                                                <section className="form-item-container create-pixel-tracking">
                                                    <div className="suggestion-item">
                                                    {easyMode==='expert' && (
                                                        <Select
                                                            className="expert-select" 
                                                            inlineLabel={false}
                                                            label="Tracking Platform"
                                                            options={trackingPlatformOptions}
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
                                                    {showTips && (
                                                        <div className="tips-container">
                                                            <div className="content">Tracking Platform Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna.</div>
                                                            <div className="content">
                                                                <button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                    </div>
                                                </section>
                                            )}
                                        </div>
                                    </div>
                                    <div className="suggestion-item">
                                        {easyMode==='expert' && <h2>Macros</h2> }
                                        {(easyMode==='expert' || (easyMode==='easy' && createStep === 6)) && (
                                            <>
                                                {/* {easyMode==='easy' && ( */}
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
                                                {/* )} */}
                                                <section className="form-item-container create-pixel-macros">
                                                    {(macroTab==='rendering') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>Rendering Macros</h2> */}
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
                                                    {(macroTab==='tracking') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>Tracking Macros</h2> */}
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Device ID"
                                                                        placeholder="Device ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Cookie ID"
                                                                        placeholder="Cookie ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Metro"
                                                                        placeholder="Metro" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="IP"
                                                                        placeholder="IP" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Cache Buster"
                                                                        placeholder="Cache Buster" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="User Agent"
                                                                        placeholder="User Agent" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(macroTab==='dcm') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>Dcm Macros</h2>  */}
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Dcm Site ID"
                                                                        placeholder="Dcm Site ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Dcm Site"
                                                                        placeholder="Dcm Site" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Dcm Placement"
                                                                        placeholder="Dcm Placement" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Dcm Campaign"
                                                                        placeholder="Dcm Campaign" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Dcm Advertiser"
                                                                        placeholder="Dcm Advertiser" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(macroTab==='dsp') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>Dsp Macros</h2>  */}
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Unique ID"
                                                                        placeholder="Unique ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Deal ID"
                                                                        placeholder="Deal ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(macroTab==='external') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>External Macros</h2>  */}
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Line Item Name"
                                                                        placeholder="External Line Item Name" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Line Item ID"
                                                                        placeholder="External Line Item ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Campaign Name"
                                                                        placeholder="External Campaign Name" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Campaign ID"
                                                                        placeholder="External Campaign ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Advertiser ID"
                                                                        placeholder="External Advertiser ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Advertiser Name"
                                                                        placeholder="External Advertiser Name" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Client ID"
                                                                        placeholder="External Client ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Client Name"
                                                                        placeholder="External Client Name" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Placement ID"
                                                                        placeholder="External Placement ID" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="External Placement Name"
                                                                        placeholder="External Placement Name" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(macroTab==='privacy') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>Privacy Macros</h2>  */}
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="CCPA Privacy"
                                                                        placeholder="CCPA Privacy" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Do Not Track"
                                                                        placeholder="Do Not Track" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(macroTab==='cpm') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>Cpm Macros</h2> */}
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Media Cost CPM"
                                                                        placeholder="Media Cost CPM" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Media Spend CPM"
                                                                        placeholder="Media Spend CPM" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(macroTab==='other') && (
                                                        <div className="macro-group-container">
                                                            {/* <h2>Other Macros</h2>  */}
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Custom Parameter 1"
                                                                        placeholder="Custom Parameter 1" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Custom Parameter 2"
                                                                        placeholder="Custom Parameter 2" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Custom Parameter 3"
                                                                        placeholder="Custom Parameter 3" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Custom Parameter 4"
                                                                        placeholder="Custom Parameter 4" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Custom Parameter 5"
                                                                        placeholder="Custom Parameter 5" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-line">
                                                                    <div className="textfield-container">
                                                                        <TextField 
                                                                        label="Revenue"
                                                                        placeholder="Revenue" 
                                                                        style={{ width: '9rem' }} />
                                                                    </div>
                                                                    <Select
                                                                        label="Encoding"
                                                                        options={macroEncodingOptions}
                                                                        style={{ width: '6rem' }}
                                                                        placeholder="None"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </section>
                                            </>
                                        )}
                                        {showTips && (
                                            <div className="tips-container">
                                                <div className="content">Macros Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna.</div>
                                                <div className="content">
                                                    <button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
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
                                                            onClick={() => reviewSetStep(2)}
                                                        />
                                                    </div>
                                                    <label>Pixel Description</label>
                                                    <div className="easy-review-item">
                                                        {newPixel.pixelDescription}
                                                        <IconButton
                                                            dataUI="pixelNameEdit"
                                                            icon={Edit}
                                                            size="sm"
                                                            onClick={() => reviewSetStep(2)}
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
                                                            onClick={() => reviewSetStep(3)}
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
                                                            onClick={() => reviewSetStep(4)}
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
                                                            onClick={() => reviewSetStep(5)}
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
                                                        ) && (
                                                            <div className="easy-review-item">
                                                                    <span>No Macros applied.</span>
                                                                    <IconButton
                                                                        dataUI="pixelNameEdit"
                                                                        icon={Edit}
                                                                        size="sm"
                                                                        onClick={() => reviewSetStep(6)}
                                                                    />
                                                                </div>
                                                    )}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
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
                                                                        onClick={() => reviewSetStep(6)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                
                                
                                        </section>
                                    )}
                                    {(easyMode === 'easy' ) && (
                                        <div className={cx(
                                            'easy-form-footer',
                                            `easy-mode-step-${createStep}`
                                        )}>
                                            {easyMode === 'easy' && (
                                                <>
                                                    <div className="progress-bar" style={{width: `calc(100% * (${createStep} / 7))`}}></div>
                                                    <Button onClick={prevButtonClick} theme={ButtonTheme.Link} disabled={createStep < 3}>Previous</Button>
                                                </>
                                            )}
                                            {(createStep < 7 && easyMode === 'easy') && <Button onClick={nextButtonClick}>Next</Button>}
                                            {(createStep === 7 ) && (
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
                                <div className="create-section-secondary">
                                    {/* {(easyMode==='expert' || (easyMode==='easy' && createStep === 3)) && ( */}
                                    {(easyMode==='expert') && (
                                        <section className="form-item-container create-creative-permissions">
                                            <h2>Permissions</h2>
                                            <Search />
                                            <div className="create-permission-items-container">
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity1})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity1 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity1')}>Advertiser 1</button> }
                                                        {permissionSelected.entity1 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity1: false, entityRules: ''})
                                                        )}>Advertiser 1</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity1'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity1'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity1'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option1} onChange={():void => setRulesOptions({...rulesOptions, option1: !rulesOptions.option1})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option2} onChange={():void => setRulesOptions({...rulesOptions, option2: !rulesOptions.option2})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option3} onChange={():void => setRulesOptions({...rulesOptions, option3: !rulesOptions.option3})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option4} onChange={():void => setRulesOptions({...rulesOptions, option4: !rulesOptions.option4})} />
                                                    </div>
                                                </div>
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity2})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity2 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity2')}>Another Advertiser</button> }
                                                        {permissionSelected.entity2 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity2: false, entityRules: ''})
                                                        )}>Another Advertiser</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity2'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity2'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity2'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option5} onChange={():void => setRulesOptions({...rulesOptions, option5: !rulesOptions.option5})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option6} onChange={():void => setRulesOptions({...rulesOptions, option6: !rulesOptions.option6})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option7} onChange={():void => setRulesOptions({...rulesOptions, option7: !rulesOptions.option7})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option8} onChange={():void => setRulesOptions({...rulesOptions, option8: !rulesOptions.option8})} />
                                                    </div>
                                                </div>
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity3})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity3 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity3')}>Media Group</button> }
                                                        {permissionSelected.entity3 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity3: false, entityRules: ''})
                                                        )}>Media Group</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity3'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity3'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity3'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option9} onChange={():void => setRulesOptions({...rulesOptions, option9: !rulesOptions.option9})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option10} onChange={():void => setRulesOptions({...rulesOptions, option10: !rulesOptions.option10})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option11} onChange={():void => setRulesOptions({...rulesOptions, option11: !rulesOptions.option11})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option12} onChange={():void => setRulesOptions({...rulesOptions, option12: !rulesOptions.option12})} />
                                                    </div>
                                                </div>
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity4})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity4 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity4')}>Media Group</button> }
                                                        {permissionSelected.entity4 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity4: false, entityRules: ''})
                                                        )}>Media Group</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity4'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity4'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity4'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option13} onChange={():void => setRulesOptions({...rulesOptions, option13: !rulesOptions.option13})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option14} onChange={():void => setRulesOptions({...rulesOptions, option14: !rulesOptions.option14})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option15} onChange={():void => setRulesOptions({...rulesOptions, option15: !rulesOptions.option15})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option16} onChange={():void => setRulesOptions({...rulesOptions, option16: !rulesOptions.option16})} />
                                                    </div>
                                                </div>
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity5})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity5 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity5')}>12345 Advertiser</button> }
                                                        {permissionSelected.entity5 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity5: false, entityRules: ''})
                                                        )}>12345 Advertiser</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity5'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity5'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity5'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option17} onChange={():void => setRulesOptions({...rulesOptions, option17: !rulesOptions.option17})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option18} onChange={():void => setRulesOptions({...rulesOptions, option18: !rulesOptions.option18})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option19} onChange={():void => setRulesOptions({...rulesOptions, option19: !rulesOptions.option19})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option20} onChange={():void => setRulesOptions({...rulesOptions, option20: !rulesOptions.option20})} />
                                                    </div>
                                                </div>
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity6})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity6 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity6')}>Advertiser 6</button> }
                                                        {permissionSelected.entity6 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity6: false, entityRules: ''})
                                                        )}>Advertiser 6</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity6'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity6'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity6'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option21} onChange={():void => setRulesOptions({...rulesOptions, option21: !rulesOptions.option21})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option22} onChange={():void => setRulesOptions({...rulesOptions, option22: !rulesOptions.option22})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option23} onChange={():void => setRulesOptions({...rulesOptions, option23: !rulesOptions.option23})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option24} onChange={():void => setRulesOptions({...rulesOptions, option24: !rulesOptions.option24})} />
                                                    </div>
                                                </div>
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity7})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity7 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity7')}>Another Media Group</button> }
                                                        {permissionSelected.entity7 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity7: false, entityRules: ''})
                                                        )}>Another Media Group</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity7'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity7'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity7'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option25} onChange={():void => setRulesOptions({...rulesOptions, option25: !rulesOptions.option25})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option26} onChange={():void => setRulesOptions({...rulesOptions, option26: !rulesOptions.option26})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option27} onChange={():void => setRulesOptions({...rulesOptions, option27: !rulesOptions.option27})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option28} onChange={():void => setRulesOptions({...rulesOptions, option28: !rulesOptions.option28})} />
                                                    </div>
                                                </div>
                                                <div className={cx('create-permission-select-item', {'selected': permissionSelected.entity8})}>
                                                    <div className="permission-select-item-btns">
                                                        {!permissionSelected.entity8 && <button className="permission-btn" onClick={(): void => handleAddPermission('entity8')}>Something Something</button> }
                                                        {permissionSelected.entity8 && <button className="permission-btn" onClick={(): void => (
                                                            setPermissionSelected({...permissionSelected, entity8: false, entityRules: ''})
                                                        )}>Something Something</button> }
                                                        <button className="rules-btn" onClick={(): void => (toggleRulesOpen('entity8'))}>
                                                            <Signal className={cx({"rules-icon-open" : permissionSelected.entityRules === 'entity8'})} icon={ChevronDown} /> Rules
                                                        </button>
                                                    </div>
                                                    <div className={cx("permission-select-item-rules", {"permission-select-item-rules--open" : permissionSelected.entityRules === 'entity8'})}>
                                                        <Checkbox name="rule-option-1" label="Rule Option 1" checked={rulesOptions.option29} onChange={():void => setRulesOptions({...rulesOptions, option29: !rulesOptions.option29})} />
                                                        <Checkbox name="rule-option-2" label="Rule Option 2" checked={rulesOptions.option30} onChange={():void => setRulesOptions({...rulesOptions, option30: !rulesOptions.option30})} />
                                                        <Checkbox name="rule-option-3" label="Rule Option 3" checked={rulesOptions.option31} onChange={():void => setRulesOptions({...rulesOptions, option31: !rulesOptions.option31})} />
                                                        <Checkbox name="rule-option-4" label="Rule Option 4" checked={rulesOptions.option32} onChange={():void => setRulesOptions({...rulesOptions, option32: !rulesOptions.option32})} />
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    )

}

export default CreatePixel;