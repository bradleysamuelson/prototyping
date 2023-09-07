import React from 'react';
import { Button, ButtonTheme, FileUpload, IconButton, LoadingStatus, TextArea, TextField, Toggle } from '@preamp/core';
import cx from 'classnames';
import { Edit, Signal } from '@preamp/signal';
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
    { label: 'Entity 1', value: 'entity1'},
    { label: 'Entity 2', value: 'entity2'},
    { label: 'Entity 3', value: 'entity3'},
    { label: 'Entity 4', value: 'entity4'},
    { label: 'Entity 5', value: 'entity5'},
    { label: 'Entity 6', value: 'entity6'},
    { label: 'Entity 7', value: 'entity7'},
    { label: 'Entity 8', value: 'entity8'},
    { label: 'Entity 9', value: 'entity9'},
    { label: 'Entity 10', value: 'entity10'}
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
    // TODO - turn this into a state with each of the entities because who cares it's a prototype
    // const [permissionList, setPermissionList] = React.useState<any>([]);
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
        entity10: false
    });
    const [newCreative, setNewCreative] = React.useState({
        dataType: dataType,
        creativeName: '',
        creativeDescription: '',
        permissionList: []
     });
    
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
        history.push('../easy-mode');
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
        // updatePermissionList(permissionList: any => [...permissionList, {"name": item}]);
        const temp = [...permissionList];
        const index = temp.findIndex(object => object.name === item);
        console.log(item);
        if (index === -1) {
                updatePermissionList([...permissionList, { 'name': item }]);
            }
        setPermissionSelected({...permissionSelected, [item]: true});
    }
    function handleRemovePermission(item: any): void {
        // updatePermissionList(permissionList: any => [...permissionList, {"name": item}]);
        // let newList = permissionList;
        // newList.splice(newList.indexOf(item)-1, 1)
        // updatePermissionList(newList);
        // console.log(item);
        const temp = [...permissionList];
        const newObj = temp.filter(val => val.name != item)
        // const pos = temp.findIndex(el => el.name != item);
        // console.log(pos);
        // temp.splice(item, 1);
        // temp.filter(item => item != item);
        // const value = item.target.getAttribute('value')
        // const temp = permissionList.filter(thing:any => item.value !== value);
        updatePermissionList(newObj);
        setPermissionSelected({...permissionSelected, [item]: false});
    }



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
    
    const circleCheck: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
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
                    
                    {(easyMode==='expert' || (easyMode==='easy' && createStep === 1)) && (
                        <section className="form-item-container create-creative-object">
                            
                        </section>
                    )}
                    {easyMode === 'expert' && (
                        <>
                        <hr />
                        <h2>Creative Settings</h2>
                        </>
                    )}
                    
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 2)) && (
                                <section className="form-item-container create-creative-details">
                                    <label>Creative Name</label>
                                    <TextField className="mb-4" placeholder="Enter Creative Name" onChange={creativeNameChange} value={newCreative.creativeName}></TextField>
                                    <label>Content Type</label>
                                    <TextField className="mb-4" disabled value="Commercial"></TextField>
                                    <label>Description</label>
                                    <TextArea onChange={creativeDescriptionChange} value={newCreative.creativeDescription}></TextArea>
                                </section>
                            )}
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 3)) && (
                                <section className="form-item-container create-creative-permissions">
                                    {easyMode==='expert' && <label>Permissions</label>}
                                    {/* <button onClick={(): void => permissionSelect('entity1')}
                                                    className={cx('permission-select-item', 
                                                        {'selected': permissionList.entity1 != ''}
                                                        )}>Entity 1</button>
                                    <button onClick={(): void => permissionSelect('entity2')}
                                                    className={cx('permission-select-item', 
                                                        {'selected': permissionList.entity2 !=''}
                                                        )}>Entity 2</button> */}
                                                        {/* {JSON.stringify(permissionList)} */}
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity1})}>
                                        
                                        {!permissionSelected.entity1 && <button onClick={(): void => handleAddPermission('entity1')}>Entity 1</button> }
                                        {permissionSelected.entity1 && <button onClick={(): void => handleRemovePermission('entity1')}>Entity 1</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity2})}>
                                        
                                        {!permissionSelected.entity2 && <button onClick={(): void => handleAddPermission('entity2')}>Entity 2</button> }
                                        {permissionSelected.entity2 && <button onClick={(): void => handleRemovePermission('entity2')}>Entity 2</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity3})}>
                                        
                                        {!permissionSelected.entity3 && <button onClick={(): void => handleAddPermission('entity3')}>Entity 3</button> }
                                        {permissionSelected.entity3 && <button onClick={(): void => handleRemovePermission('entity3')}>Entity 3</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity4})}>
                                        
                                        {!permissionSelected.entity4 && <button onClick={(): void => handleAddPermission('entity4')}>Entity 4</button> }
                                        {permissionSelected.entity4 && <button onClick={(): void => handleRemovePermission('entity4')}>Entity 4</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity5})}>
                                        
                                        {!permissionSelected.entity5 && <button onClick={(): void => handleAddPermission('entity5')}>Entity 5</button> }
                                        {permissionSelected.entity5 && <button onClick={(): void => handleRemovePermission('entity5')}>Entity 5</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity6})}>
                                        
                                        {!permissionSelected.entity6 && <button onClick={(): void => handleAddPermission('entity6')}>Entity 6</button> }
                                        {permissionSelected.entity6 && <button onClick={(): void => handleRemovePermission('entity6')}>Entity 6</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity7})}>
                                        
                                        {!permissionSelected.entity7 && <button onClick={(): void => handleAddPermission('entity7')}>Entity 7</button> }
                                        {permissionSelected.entity7 && <button onClick={(): void => handleRemovePermission('entity7')}>Entity 7</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity8})}>
                                        
                                        {!permissionSelected.entity8 && <button onClick={(): void => handleAddPermission('entity8')}>Entity 8</button> }
                                        {permissionSelected.entity8 && <button onClick={(): void => handleRemovePermission('entity8')}>Entity 8</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity9})}>
                                        
                                        {!permissionSelected.entity9 && <button onClick={(): void => handleAddPermission('entity9')}>Entity 9</button> }
                                        {permissionSelected.entity9 && <button onClick={(): void => handleRemovePermission('entity9')}>Entity 9</button> }
                                    </div>
                                    <div className={cx('permission-select-item', {'selected': permissionSelected.entity10})}>
                                        
                                        {!permissionSelected.entity10 && <button onClick={(): void => handleAddPermission('entity10')}>Entity 10 </button> }
                                        {permissionSelected.entity10 && <button onClick={(): void => handleRemovePermission('entity10')}>Entity 10</button> }
                                    </div>
                                    {/* {permissionEntityList.map((option:any, index: number) => (
                                        <div key={index} className={cx('permission-select-item', 
                                                        // {'selected': permissionSelected.`${option.value}` === true}
                                                            )}>
                                            {option.label}
                                            <button onClick={(): void => handleAddPermission(option.value)}>add </button>
                                            <button onClick={(): void => handleRemovePermission(option.value)}> remove</button>
                                        </div>
                                    ))} */}
                                </section>
                            )}
                            {(easyMode==='expert' || (easyMode==='easy' && createStep === 4)) && (
                                <section className="form-item-container create-creative-upload">
                                    {easyMode==='expert' && <label>Creative</label>}
                                    <label className="va-form-label">Vizio Fingerprint</label>
                                    <Toggle 
                                        name="fingerprint"
                                        label="Fingerprint this creative with Vizio"
                                        checked={vizioFingerprint}
                                        onChange={toggleFingerprint}
                                    />
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

                                </section>
                            )}
                            
                        {/* </div> */}
                    {/* </div> */}
                    
                    {(easyMode==='expert' || (easyMode==='easy' && createStep === 5)) && (
                        <section className="form-item-container create-pixel-macros">
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
                    {(easyMode === 'easy' || easyMode === 'expert') && (
                        <div className={cx(
                            'easy-form-footer',
                            `easy-mode-step-${createStep}`,
                            {'expert-form-footer': easyMode==='expert'}
                        )}>
                            {easyMode === 'easy' && (
                                <>
                                    <div className="progress-bar" style={{width: `calc(100% * (${createStep} / 5))`}}></div>
                                    <Button onClick={prevButtonClick} theme={ButtonTheme.Link} disabled={createStep < 3}>Previous</Button>
                                </>
                            )}
                            
                         
                            {(createStep < 5 && easyMode === 'easy') && <Button onClick={nextButtonClick}>Next</Button>}
                            {easyMode==='expert' && <Button theme={ButtonTheme.Link} href="../easy-mode">Cancel</Button>}
                            {(createStep === 5 || easyMode === 'expert') && (
                                <Button 
                                    onClick={onSaveNewCreativeClick}
                                    disabled={newCreative.creativeName === ''}
                                >
                                    Save New Creative
                                </Button>
                            
                            )}
                        </div>
                    )}
                    
            </>
            )}
        </>
    )

}

export default CreateCreative;