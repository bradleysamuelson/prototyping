import React from 'react';
import cx from 'classnames';

import { Button, ButtonTheme, Checkbox, IconButton, ProcessingIndicator, ProcessingStatus, Search, TextArea, TextField, Toggle, Tooltip } from '@preamp/core';
import { Add, Check, Clear, Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';

function InlineEditForm(props: any) {
    const [userName, setUserName] = React.useState<string>('MyUserName1234');
    const [question, setQuestion] = React.useState<string>('');
    const [movieFan, setMovieFan] = React.useState<boolean>(true);
    const [saving, setSaving] = React.useState<boolean>(false);
    const [inlineEdit, setInlineEdit] = React.useState({
        editName: '',
        editNameActive: false,
        editNameEdited: false,
        editDescription: '',
        editDescriptionActive: false,
        editDescriptionEdited: false,
        editMovieFanActive: false,
        editMovieFanEdited: false,
        editGenresEdited: false,
        editStarWarsEdited: false,
     });
     const [movieGenres, setMovieGenres] = React.useState({
         action: true,
         comedy: false,
         documentary: false,
         romance: false,
         scifi: true,
         superhero: false
     });
     const starwarsOptions: OptionsType<OptionType> = [
        { value: 'phantommenace', label: 'The Phantom Menace', isDisabled: false },
        { value: 'clones', label: 'Attack of the Clones', isDisabled: false },
        { value: 'sith', label: 'Revenge of the Sith', isDisabled: false },
        { value: 'solo', label: 'Solo', isDisabled: false },
        { value: 'rogueone', label: 'Rogue One', isDisabled: false },
        { value: 'newhope', label: 'A New Hope', isDisabled: false },
        { value: 'empire', label: 'Empire Strikes Back', isDisabled: false },
        { value: 'jedi', label: 'Return of the Jedi', isDisabled: false },
        { value: 'forceawakens', label: 'The Force Awakens', isDisabled: false },
        { value: 'lastjedi', label: 'The Last Jedi', isDisabled: true },
        { value: 'skywalker', label: 'The Rise of Skywalker', isDisabled: false },
    ];

    function isSaving(): void {
        setSaving(true);
        setTimeout((): void => {
            setSaving(false);
        }, 2000)
    }
    function inlineNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setInlineEdit({...inlineEdit, editName: (event.currentTarget.value)})
        }
    }
    function inlineNameBlur(): void {
        if (inlineEdit.editName != '') {
            setUserName(inlineEdit.editName);
            setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: true});
            isSaving();
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            }, 2000);
        }
    }
    function inlineNameKeyPress(event: any): void {
        if (event.key === 'Enter' && inlineEdit.editName != '') {
            setUserName(inlineEdit.editName);
            setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: true});
            isSaving();
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
        setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: true});
        setQuestion(inlineEdit.editDescription);
        isSaving();
        setTimeout((): void => {
            setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: false});
        }, 2000);
    }
    function inlineMovieFanChanged(): void {
        setMovieFan(!movieFan);
        setInlineEdit({...inlineEdit, editMovieFanEdited: true, editNameActive: false, editDescriptionActive: false});
        isSaving();
        setTimeout((): void => {
            setInlineEdit({...inlineEdit, editMovieFanEdited: false});
        }, 2000);
    }
    function inlineDescriptionKeyPress(event: any): void {
        if (event.key === 'Enter' && inlineEdit.editDescription != '') {
            setQuestion(inlineEdit.editDescription);
            setInlineEdit({...inlineEdit, editDescriptionActive: false});
            setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: true});
            isSaving();
            setTimeout((): void => {
                setInlineEdit({...inlineEdit, editDescriptionActive: false, editDescriptionEdited: false});
            }, 2000);
        }
    }
    function genreChangeEdited(): void {
        setInlineEdit({...inlineEdit, editGenresEdited: true});
        isSaving();
        setTimeout((): void => {
            setInlineEdit({...inlineEdit, editGenresEdited: false});
        }, 2000);
    }
    function starWarsEdited(): void {
        setInlineEdit({...inlineEdit, editStarWarsEdited: true});
        isSaving();
        setTimeout((): void => {
            setInlineEdit({...inlineEdit, editStarWarsEdited: false});
        }, 2000);
    }
    
    const inlineEditIcon: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M21 19.121a1 1 0 0 1 .117 1.994L21 21.12h-9a1 1 0 0 1-.117-1.993l.117-.007h9ZM15.793 2.914l-12.5 12.5a1 1 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1a1 1 0 0 0 .464-.264l12.5-12.5a3.121 3.121 0 1 0-4.414-4.414Zm2.497 1.124c.387.104.69.406.793.793l.027.13c.05.347-.065.701-.317.953L6.488 18.218l-2.114.529.529-2.115L17.207 4.328c.252-.251.606-.367.953-.316l.13.026Z"/></g></svg>
    );

    return (
        <div className="inline-edit-container">
            <div className="content-header">
                <div className="content-header-left">
                    <div className="breadcrumb">Username</div>
                    {inlineEdit.editNameActive === false ? (
                        <>
                        <button className="new-data-name" 
                            onClick={(): void => {
                                setInlineEdit({...inlineEdit, editName: userName, editNameActive: true});
                            }
                        }>{userName} </button><Signal icon={inlineEditIcon} className="inline-edit-icon" />
                        <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editNameEdited})} /> 
                        </>
                    ) : (
                        <TextField 
                            className="title-edit-textfield" 
                            autofocus
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
                <div className="content-header-right">
                    <div className={cx("saving-indicator-container", {"saving-process": saving})}>
                        <ProcessingIndicator status={ProcessingStatus.Processing} color="#333" /> Saving...
                    </div>
                </div>                   
            </div>
            <div className="form-content-container">
                <section className="form-item-container section-wide">
                    <label>What did you think of the last season of Game of Thrones?</label>
                    {inlineEdit.editDescriptionActive === false ? (
                        <>
                        <button className="new-data-description"
                            onClick={(): void => {
                                setInlineEdit({...inlineEdit, editDescription: question, editDescriptionActive: true});
                            }
                            }
                        >
                            {question === '' ? <span className="empty-value"><Signal icon={Add} />Add your answer.</span> : (
                                <>{question}</> 
                            )} 
                        </button><Signal icon={inlineEditIcon} className="inline-edit-icon" size={0.875} />
                        <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editDescriptionEdited})} />
                        </>
                        ) : (
                        <TextField 
                            className="description-edit-textfield" 
                            autofocus
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
                    <section className="form-item-container">
                    {/* {inlineEdit.editMovieFanActive === false ? (
                        <>
                        <button className="new-data-description"
                            onClick={(): void => setInlineEdit({...inlineEdit, editMovieFanActive: true})}
                        >
                            {movieFan ? <span>I like movies</span> : <span>I don't like Movies</span>}
                        </button>
                        
                        </>
                        ) : ( */}
                            <div className="inline-toggle-container">
                                <Toggle 
                                    checked={movieFan} 
                                    label="I like movies"
                                    name="movieFan" 
                                    onChange={inlineMovieFanChanged} 
                                    >
                                </Toggle>
                                <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editMovieFanEdited})} />
                                {/* <IconButton icon={Clear} onClick={(): void => {setInlineEdit({...inlineEdit, editMovieFanActive: false}); }} /> */}
                            </div>
                    {/* )} */}
                </section>
                <section className="form-item-container section-wide">
                    <label>Favorite movie genres:</label>
                    <div className="form-item-content-container">
                        <div className="check-button-group">
                            <Button 
                                className={cx("check-button", {"check-button--selected": movieGenres.action})}
                                onClick={(): void => {
                                        setMovieGenres({...movieGenres, action: !movieGenres.action});
                                        genreChangeEdited()
                                    }
                                }>
                                    Action
                            </Button>
                            <Button 
                                className={cx("check-button", {"check-button--selected": movieGenres.comedy})}
                                onClick={(): void => {setMovieGenres({...movieGenres, comedy: !movieGenres.comedy}); genreChangeEdited()}}>
                                    Comedy
                            </Button>
                            <Button 
                                className={cx("check-button", {"check-button--selected": movieGenres.documentary})}
                                onClick={(): void => {setMovieGenres({...movieGenres, documentary: !movieGenres.documentary}); genreChangeEdited()}}>
                                    Documentary
                            </Button>
                            <Button 
                                className={cx("check-button", {"check-button--selected": movieGenres.romance})}
                                onClick={(): void => {setMovieGenres({...movieGenres, romance: !movieGenres.romance}); genreChangeEdited()}}>
                                    Romance
                            </Button>
                            <Button 
                                className={cx("check-button", {"check-button--selected": movieGenres.scifi})}
                                onClick={(): void => {setMovieGenres({...movieGenres, scifi: !movieGenres.scifi}); genreChangeEdited()}}>
                                    SciFi
                            </Button>
                            <Button 
                                className={cx("check-button", {"check-button--selected": movieGenres.superhero})}
                                onClick={(): void => {setMovieGenres({...movieGenres, superhero: !movieGenres.superhero}); genreChangeEdited()}}>
                                    Superhero
                            </Button>
                        </div>
                        <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editGenresEdited})} />
                    </div>
                </section>
                <section className="form-item-container">
                    <label>My favorite Star Wars movie:</label>
                        <div className="form-item-content-container">
                            <Select
                                options={starwarsOptions}
                                defaultValue={starwarsOptions[6]}
                                selectType={SelectType.BoxLink}
                                onChange={starWarsEdited}
                            />
                            <Signal icon={inlineEditIcon} className="inline-edit-icon" />
                            <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editStarWarsEdited})} />
                        </div>
                </section>
                
                
            </div>

            <div className="instrux u-shadow-2">
                <h2>Thanks for helping us out!</h2>
                <p>Imagine you have access to an online movie platform that serves up great cinematic content based on some basic user inputs. 
                    Although you've already set up an account, you haven't been seeing relevant movies so you need to go in and update your 
                    profile information. 
                </p>
                <p>Follow the tasks below and when you're done, take 
                    this <a href="https://docs.google.com/forms/d/1lQjDkguMBTMRb_N5PYqATT1I2juYCp0iLe20e7P9y8o/edit?ts=622a56e6" target="_blank">SHORT SURVEY</a> so we can understand what you thought about the experience. And remember to have fun!</p>
                <ol>
                    <li>Change the username.</li>
                    <li>Answer the question about Game of Thrones (any response is fine)</li>
                    <li>Select your favorite movie genres.</li>
                    <li>Choose your favorite Star Wars movie.</li>
                </ol>
            </div>
        </div>
    )
}

export default InlineEditForm;