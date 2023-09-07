import React from 'react';
import { Button, ButtonTheme, Checkbox, FileUpload, IconButton, LoadingStatus, Search, TextArea, TextField, Toggle, Tooltip } from '@preamp/core';
import cx from 'classnames';
// import {FormControlLabel, Checkbox} from '@preamp/rev';
import { Add, Check, ChevronDown, Clear, Edit, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";
import { dataIcon } from '../data-icon';
import { DataTypeSelection } from '../components/dataTypeSelection';


interface CreateCreativeProps {
    changeCreateStep: (arg: number) => void;
    modeSelection: string;
    createStep: number;
}
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

function CreateCreative(props: CreateCreativeProps) {
    const history = useHistory();
    const [easyMode, setEasyMode] = React.useState<string | null>(localStorage.getItem('easyMode'));
    const [modeSelection, setModeSelection] = React.useState<string>(props.modeSelection);
    const [createStep, setCreateStep] = React.useState<number>(props.createStep);
    const [dataType, setData] = React.useState<string | null>(localStorage.getItem('dataType'));
    const [vizioFingerprint, setVizioFingerprint] = React.useState<boolean>(false);
    const [fileName, setFileName] = React.useState<string>('');
    const [uploadStatus, setUploadStatus] = React.useState<LoadingStatus | undefined>(undefined);
    const [permissionList, updatePermissionList] = React.useState<any>([]);
    const [showTips, setShowTips] = React.useState<boolean>(false);
    
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
    const [newCreative, setNewCreative] = React.useState({
        dataType: dataType,
        creativeName: '',
        creativeDescription: '',
        permissionList: []
     });
     const [inlineEdit, setInlineEdit] = React.useState({
        editName: '',
        editNameActive: false,
        editNameEdited: false,
        editDescription: '',
        editDescriptionActive: false,
        editDescriptionEdited: false,
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
    
    const toggleFingerprint = (): void => {
        setVizioFingerprint(!vizioFingerprint);
    }
    const onSaveNewCreativeClick = (): void => {
        let today = new Date().toLocaleDateString()
        const myNewCreative = {
            creativeName: newCreative.creativeName,
            createdDate: today,
        }
        localStorage.setItem("newCreative", JSON.stringify(myNewCreative));
        localStorage.setItem('newNotification', 'new');
        history.push('../create-workflow');
    }
    function creativeNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setNewCreative({...newCreative, creativeName: (event.currentTarget.value)})
        }
    }
    function creativeDescriptionChange(event?: React.ChangeEvent<HTMLTextAreaElement>): void {
        if (event) {
            setNewCreative({...newCreative, creativeDescription: (event.currentTarget.value)})
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
    
    const prevButtonClick = (): void => {
        if (createStep > 2 ) {
            setTimeout((): void => {
                setCreateStep(createStep - 1);
                props.changeCreateStep(createStep - 1);
            }, 250);
        }
    }

    function reviewSetStep(step: number): void {
        setCreateStep(step);
        props.changeCreateStep(step);
    }

    function handleAddPermission(item: any): void {
        const temp = [...permissionList];
        const index = temp.findIndex(object => object.name === item);
        if (index === -1) {
                updatePermissionList([...permissionList, { 'name': item }]);
            }
        setPermissionSelected({...permissionSelected, [item]: true});
    }
    // function handleRemovePermission(item: any): void {
    //     // updatePermissionList(permissionList: any => [...permissionList, {"name": item}]);
    //     // let newList = permissionList;
    //     // newList.splice(newList.indexOf(item)-1, 1)
    //     // updatePermissionList(newList);
    //     // console.log(item);
    //     const temp = [...permissionList];
    //     const newObj = temp.filter(val => val.name != item)
    //     // const pos = temp.findIndex(el => el.name != item);
    //     // console.log(pos);
    //     // temp.splice(item, 1);
    //     // temp.filter(item => item != item);
    //     // const value = item.target.getAttribute('value')
    //     // const temp = permissionList.filter(thing:any => item.value !== value);
    //     updatePermissionList(newObj);
    //     setPermissionSelected({...permissionSelected, [item]: false});
    // }



    const exampleTimeoutActions = (): void => {
        setUploadStatus(LoadingStatus.Loading);
        setTimeout((): void => {
            setUploadStatus(LoadingStatus.Success);
        }, 2000);
    };
    const onFileDropped = (file: File): void => {
        setFileName(file.name);
        exampleTimeoutActions();
    };
    const onFileRemoved = (): void => {
        setFileName('');
        setUploadStatus(undefined);
    };
    const onFileSelected = (e: any): void => {
        const file: File = e.currentTarget.files[0];
        if (file) {
            setFileName(file.name);
            exampleTimeoutActions();
        }
    };

    function toggleRulesOpen(entity: string): void {
        if (permissionSelected.entityRules === '' || permissionSelected.entityRules != entity) {
            setPermissionSelected({...permissionSelected, entityRules: entity})
        } else {
            setPermissionSelected({...permissionSelected, entityRules: ''})
        }
    }

    const expertCreateInitial = (): void => {
        setCreateStep(3);
        props.changeCreateStep(3);       
    }
    function inlineNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        // let newName = inlineEdit.editName;
        if (event) {
            setInlineEdit({...inlineEdit, editName: (event.currentTarget.value)})
        }
    }
    function inlineNameBlur(): void {
        if (inlineEdit.editName != '') {
            setNewCreative({...newCreative, creativeName: inlineEdit.editName});
            setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: true});
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            }, 2000);
        }
    }
    function inlineNameKeyPress(event: any): void {
        if (event.key === 'Enter' && inlineEdit.editName != '') {
            setNewCreative({...newCreative, creativeName: inlineEdit.editName});
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
        setNewCreative({...newCreative, creativeDescription: inlineEdit.editDescription});
        setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: true});
        setTimeout((): void => {
            setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: false});
        }, 2000);
        
    }
    function inlineDescriptionKeyPress(event: any): void {
        if (event.key === 'Enter' && inlineEdit.editDescription != '') {
            setNewCreative({...newCreative, creativeDescription: inlineEdit.editDescription});
            setInlineEdit({...inlineEdit, editDescriptionActive: false});
            setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: true});
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: false});
            }, 2000);
        }
    }
    
    const circleCheck: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
    )

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
                                        <h3>Create a New Creative</h3>
                                        <label>Creative Name</label>
                                        <TextField className="mb-4" placeholder="Enter Pixel Name" onChange={creativeNameChange} value={newCreative.creativeName}></TextField>
                                        <label>Description</label>
                                        <TextArea onChange={creativeDescriptionChange} value={newCreative.creativeDescription}></TextArea>
                                        <div className="button-row">
                                            <Button theme={ButtonTheme.Link} href="../create-workflow">Cancel</Button>
                                            <Button theme={ButtonTheme.Primary} disabled={newCreative.creativeName === ''} onClick={expertCreateInitial}>Create and Continue Setup</Button>
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
                            <div className="breadcrumb">
                                Procter &amp; Gamble &gt; Creatives
                            </div>
                            {inlineEdit.editNameActive === false ? (
                                <>
                                    <button className="new-data-name" onClick={(): void => setInlineEdit({...inlineEdit, editName: newCreative.creativeName, editNameActive: true})}>{newCreative.creativeName}</button>
                                    <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editNameEdited})} />                                    
                                </>
                            ) : (
                                <>
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
                                </>
                            )}
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
                        </>
                    )}

{(easyMode === 'easy' || (easyMode === 'expert' && createStep > 2)) && (
                <div className="settings-container">
                    <div className="create-section-primary">
                    
                    {easyMode === 'expert' && (
                        <>
                            <h2>Creative Settings</h2>
                            <section className="form-item-container">
                            <label>Description</label>
                                            
                                {inlineEdit.editDescriptionActive === false ? (
                                    <>
                                    <button className="new-data-description"
                                        onClick={(): void => setInlineEdit({...inlineEdit, editDescription: newCreative.creativeDescription, editDescriptionActive: true})}
                                    >
                                        {newCreative.creativeDescription === '' ? <span className="empty-value"><Signal icon={Add} />Add a Description</span> : (
                                            <>{newCreative.creativeDescription}</>
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

                    
                            {(easyMode==='easy' && createStep === 2) && (
                                <section className="form-item-container create-creative-details">
                                    <label>Creative Name</label>
                                    <TextField className="mb-4" placeholder="Enter Creative Name" onChange={creativeNameChange} value={newCreative.creativeName}></TextField>
                                    <label>Content Type</label>
                                    <TextField className="mb-4" disabled value="Commercial"></TextField>
                                    <label>Description</label>
                                    <TextArea onChange={creativeDescriptionChange} value={newCreative.creativeDescription}></TextArea>
                                </section>
                            )}
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 4)) && (
                                <section className="form-item-container create-creative-upload">
                                    {easyMode==='expert' && <h2>Creative</h2>}
                                    {/* <label className="va-form-label">Vizio Fingerprint</label> */}
                                    <div className="fingerprint-toggle suggestion-item">
                                        <Toggle 
                                            name="fingerprint"
                                            label="Fingerprint this creative with Vizio"
                                            checked={vizioFingerprint}
                                            onChange={toggleFingerprint}
                                            
                                        />
                                        {showTips && (
                                            <div className="tips-container">
                                                <div className="content">Fingerprint Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna.</div>
                                                <div className="content">
                                                    <button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="suggestion-item">
                                        <FileUpload
                                            dataUI="fileupload-default"
                                            fileName={fileName}
                                            id="fileupload-default"
                                            label="Creative Upload"
                                            onFileDropped={onFileDropped}
                                            onFileRemoved={onFileRemoved}
                                            onFileSelected={onFileSelected}
                                            status={uploadStatus}
                                        />
                                        {showTips && (
                                            <div className="tips-container">
                                                <div className="content">File Upload Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna.</div>
                                                <div className="content">
                                                    <button className="tips-suggestion-button" onClick={(): void => setShowTips(false)}>Turn off suggestions</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}
                        </div>
                        <div className="create-section-secondary">

                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 3)) && (
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
                    
                    {(easyMode==='easy' && createStep === 5) && (
                        <section className="form-item-container">
                            {easyMode==='easy' && (
                                <div className="create-easy-review">
                                    <h2>Details</h2>
                                    <label>Creative Name</label>
                                    <div className="easy-review-item">
                                        {newCreative.creativeName}
                                        <IconButton
                                            dataUI="creativeNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => reviewSetStep(2)}
                                        />
                                    </div>
                                    <label>Creative Description</label>
                                    <div className="easy-review-item">
                                        {newCreative.creativeDescription}
                                        <IconButton
                                            dataUI="creativeNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => reviewSetStep(2)}
                                        />
                                    </div>
                                    <hr />
                                    <label>Permissions</label>
                                    <div className="easy-review-item">
                                        <div>
                                        {permissionList.map((option:any, index: number) => (
                                            <div key={index}>{option.name}</div>
                                        ))}
                                        </div>
                                        <IconButton
                                            dataUI="creativeNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => reviewSetStep(3)}
                                        />
                                    </div>
                                    <hr />
                                    <label>Creative Upload</label>
                                    <div className="easy-review-item">
                                        {fileName != '' ? fileName : <span>None</span>}
                                        <IconButton
                                            dataUI="creativeNameEdit"
                                            icon={Edit}
                                            size="sm"
                                            onClick={() => reviewSetStep(4)}
                                        />
                                    </div>
                                    
                                </div>
                            )}
                            
                            
                        </section>
                    )}
                    {easyMode === 'easy'  && (
                        <div className={cx(
                            'easy-form-footer',
                            `easy-mode-step-${createStep}`
                        )}>
                            {easyMode === 'easy' && (
                                <>
                                    <div className="progress-bar" style={{width: `calc(100% * (${createStep} / 5))`}}></div>
                                    <Button onClick={prevButtonClick} theme={ButtonTheme.Link} disabled={createStep < 3}>Previous</Button>
                                </>
                            )}
                            
                         
                            {(createStep < 5 && easyMode === 'easy') && <Button onClick={nextButtonClick}>Next</Button>}
                            {(createStep === 5 ) && (
                                <Button 
                                    onClick={onSaveNewCreativeClick}
                                    disabled={newCreative.creativeName === ''}
                                >
                                    Save New Creative
                                </Button>
                            
                            )}
                        </div>
                    )}
                </div>
)}
                    
            </>
            )}
        </>
    )

}

export default CreateCreative;