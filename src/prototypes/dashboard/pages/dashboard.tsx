import React, { ReactElement, ReactText, useState } from 'react';
import { Button, ButtonTheme, Checkbox, RadioButtonGroup, RadioButton, Toggle, Tooltip } from '@preamp/core';
import cx from 'classnames';
// import { VideoAmp } from '../../../components/icons/videoamp';
import { Clear, ChevronDown, Edit, ForwardArrow, Signal } from '@preamp/signal';
import { DropdownButton, OptionsType, OptionType, SelectType, ValueType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";
import { Ticker } from '../components/ticker/ticker'

// import {
//     Box,
//     Check,
//     FormControl,
//     InputLabel,
//     ListItemText,
//     IconButton,
//     InputAdornment,
//     InputBase,
//     ListSubheader,
//     ListItemIcon,
//     MenuItem,
//     Select,
//     ThemeProvider,
//     Typography,
//     Close,
//     VideoAmp,
//     Measure,
//     Organization,
//     Library,
//     Search,
//     StarOutline,
//     Buy,
//     TextField
// } from '@preamp/rev';

const permissionOptions: OptionsType<OptionType> = [
    { value: 'Full Access', label: 'Full Access'},
    { value: 'Partial View', label: 'Partial View'},
    { value: 'Can Edit', label: 'Can Edit'},
    { value: 'Read Only', label: 'Read Only'}
]

function DashboardLayout(props: any) {
    // const history = useHistory();
    
    const [createStep, setCreateStep] = useState<number>(2);
    const [dataType, setData] = useState<string | null>(localStorage.getItem('dataType'));
    const [iconValue, setIconValue] = useState('1');
    const [searchValue, setSearchValue] = useState('');
    
    // const [method, setMethod] = React.useState<string>('');

    const logoStyles = { mr: 4 };
    
    const lightbulb: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 1 1-.979-.206 7.97 7.97 0 0 1 1.756-3.557l.225-.253c.917-.982 1.346-2.339 1.157-3.724-.33-2.119-2.05-3.82-4.123-4.008C9.666 7.095 7.286 9.232 7.286 12c0 1.116.433 2.206 1.187 3.043l.166.175c.979.978 1.617 2.274 1.854 3.7a.5.5 0 0 1-.986.164c-.189-1.132-.667-2.16-1.39-2.961l-.185-.196A5.584 5.584 0 0 1 6.286 12ZM10.357 22.214A1.693 1.693 0 0 0 12 23.43c.786 0 1.429-.5 1.643-1.215h-3.286Z"/><path d="M14.286 18.571H9.643c-.562 0-1 .439-1 1V21.5c0 .562.438 1 1 1h4.714l.112-.006c.512-.054.891-.48.823-1.002l-.007-.037v-1.884c0-.561-.437-1-1-1ZM9.642 21.5v-1.929h4.644V21.5H9.642Z"/><path d="M12 12.857a.5.5 0 0 1 .492.41l.008.09V19a.5.5 0 0 1-.992.09L11.5 19v-5.643a.5.5 0 0 1 .5-.5Z"/><path d="M12.646 12.004a.5.5 0 0 1 .617-.072l.078.06 1.072 1a.5.5 0 0 1-.612.786l-.07-.055-.72-.671-.657.659a.5.5 0 0 1-.638.058l-.07-.058-.658-.659-.718.67a.5.5 0 0 1-.64.037l-.067-.06a.5.5 0 0 1-.036-.64l.06-.067 1.072-1a.5.5 0 0 1 .618-.051l.077.063.646.646.646-.646Z"/></g></svg>
    )
    const lightbulbOn: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="nonzero"><path d="M6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 0 1-.592.386c-.27-.057-3.471-.041-3.744.004a.5.5 0 0 1-.575-.41c-.189-1.133-.667-2.16-1.39-2.962l-.185-.196A5.584 5.584 0 0 1 6.286 12Z" fill="#9EFF00"/><g fill="#000"><path d="M12 1.5a.5.5 0 0 1 .492.41L12.5 2v2.857a.5.5 0 0 1-.992.09l-.008-.09V2a.5.5 0 0 1 .5-.5ZM4.504 4.504a.5.5 0 0 1 .637-.058l.07.058 2.143 2.142a.5.5 0 0 1-.638.765l-.07-.057L4.504 5.21a.5.5 0 0 1 0-.707ZM4.857 11.5a.5.5 0 0 1 .09.992l-.09.008H2a.5.5 0 0 1-.09-.992L2 11.5h2.857ZM22 11.5a.5.5 0 0 1 .09.992L22 12.5h-2.857a.5.5 0 0 1-.09-.992l.09-.008H22ZM18.79 4.504a.5.5 0 0 1 .764.637l-.058.07-2.142 2.143a.5.5 0 0 1-.765-.638l.057-.07 2.143-2.142ZM6.286 12c0-3.36 2.89-5.954 6.26-5.64 2.54.23 4.62 2.287 5.02 4.858.22 1.603-.24 3.175-1.242 4.357l-.172.194a6.985 6.985 0 0 0-1.734 3.334.5.5 0 0 1-.979-.206 7.97 7.97 0 0 1 1.756-3.557l.225-.253c.917-.982 1.346-2.339 1.157-3.724-.33-2.119-2.05-3.82-4.123-4.008C9.666 7.095 7.286 9.232 7.286 12c0 1.116.433 2.206 1.187 3.043l.166.175c.979.978 1.617 2.274 1.854 3.7a.5.5 0 0 1-.986.164c-.189-1.132-.667-2.16-1.39-2.961l-.185-.196A5.584 5.584 0 0 1 6.286 12ZM10.357 22.214A1.693 1.693 0 0 0 12 23.43c.786 0 1.429-.5 1.643-1.215h-3.286Z"/><path d="M14.286 18.571H9.643c-.562 0-1 .439-1 1V21.5c0 .562.438 1 1 1h4.714l.112-.006c.512-.054.891-.48.823-1.002l-.007-.037v-1.884c0-.561-.437-1-1-1ZM9.642 21.5v-1.929h4.644V21.5H9.642Z"/><path d="M12 12.857a.5.5 0 0 1 .492.41l.008.09V19a.5.5 0 0 1-.992.09L11.5 19v-5.643a.5.5 0 0 1 .5-.5Z"/><path d="M12.646 12.004a.5.5 0 0 1 .617-.072l.078.06 1.072 1a.5.5 0 0 1-.612.786l-.07-.055-.72-.671-.657.659a.5.5 0 0 1-.638.058l-.07-.058-.658-.659-.718.67a.5.5 0 0 1-.64.037l-.067-.06a.5.5 0 0 1-.036-.64l.06-.067 1.072-1a.5.5 0 0 1 .618-.051l.077.063.646.646.646-.646Z"/></g></g></svg>
    )

    const options = [
        {
            label: 'McDonalds',
            value: '1'
        },
        {
            label: 'Advertiser 2',
            value: '2'
        },
        {
            label: 'Advertiser 3',
            value: '3'
        },
        {
            label: 'Advertiser 4',
            value: '4'
        },
        {
            label: 'Advertiser 5',
            value: '5'
        },
        {
            label: 'Advertiser 6',
            value: '6'
        },
        {
            label: 'Option 7',
            value: '7'
        }
    ];
    const handleSwitcherSearchInput = (event: any): void => {
        setSearchValue(event.target.value);
    };
    

    return (
        <div className="dashboard-layout">
            <nav className="nav-global">
                <div className="nav-global-left">
                    {/* <VideoAmp className="va-logo" /> */}
                    {/* <ThemeProvider> */}
                        {/* <Select
                            data-ui="select-icon"
                            displayEmpty
                            inputProps={{ id: 'select-icon' }}
                            onChange={({ target }): void => {
                                setIconValue(
                                    typeof target.value === 'string'
                                        ? target.value
                                        : ''
                                );
                            }}
                            size="small"
                            value={iconValue}
                            variant="outlined"
                            className="nav-global-select"
                            MenuProps={{
                                MenuListProps: {
                                    sx: {
                                        maxHeight: {
                                            // 5 rows
                                            sm: 36 * 5,
                                            xs: 48 * 5,
                                        },
                                        overflow: 'auto',
                                        position: 'static',
                                        py: 0,
                                        backgroundColor: '#272927',
                                        borderRadius: '0 2px 2px 2px',
                                        color: 'white',
                                        border: '1px solid ##1F2220'
                                    },
                                },
                                // PaperProps: {
                                //     sx: {
                                //         maxWidth: 480,
                                //         position: 'relative',
                                //         pt: '88px',
                                //     },
                                // },
                                anchorOrigin: {
                                    horizontal: 'left',
                                    vertical: 'bottom',
                                },
                                disableAutoFocusItem: true,
                                transformOrigin: {
                                    horizontal: 'left',
                                    vertical: 'top',
                                },
                            }}
                            // defaultValue={}
                        >
                            <MenuItem sx={{alignItems: "flex-start"}}>
                            <TextField
                                fullWidth
                                id="standard-search"
                                InputProps={{
                                    endAdornment: searchValue ? (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={(): void => setSearchValue('')}
                                                size="small"
                                            >
                                                <Close />
                                            </IconButton>
                                        </InputAdornment>
                                    ) : null,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={handleSwitcherSearchInput}
                                size="small"
                                type="search"
                                value={searchValue}
                                variant="outlined"
                            />
                            </MenuItem>
                            {options.map(
                                ({ label, value }): React.ReactElement => (
                                    <MenuItem
                                        data-ui={`icon-option-${value}`}
                                        key={value}
                                        value={value}
                                        
                                    >
                                        {value === '1' && <Organization sx={{ mr: 1, width: 16 }} /> }
                                        {value === '2' && <Measure sx={{ mr: 1, width: 16 }} /> }
                                        {value === '3' && <Library sx={{ mr: 1, width: 16 }} /> }
                                        {value === '4' && <StarOutline sx={{ mr: 1, width: 16 }} /> }
                                        {value === '5' && <Buy sx={{ mr: 1, width: 16 }} /> }
                                        {label}
                                    </MenuItem>
                                )
                            )}
                        </Select> */}
                        {/* <Select
                            className="advertiser-select"
                            MenuProps={{
                                MenuListProps: {
                                    sx: {
                                        maxHeight: {
                                            // 5 rows
                                            sm: 36 * 5,
                                            xs: 48 * 5,
                                        },
                                        overflow: 'auto',
                                        position: 'static',
                                        py: 0,
                                        pb: '44px',
                                        backgroundColor: '#1F2220',
                                        color: 'white',
                                    },
                                },
                                PaperProps: {
                                    sx: {
                                        maxWidth: 480,
                                        position: 'relative',
                                        pt: '88px',
                                        backgroundColor: '#1F2220',
                                        color: 'white',
                                        borderRadius: '0 4px 4px 4px',
                                    },
                                },
                                anchorOrigin: {
                                    horizontal: 'left',
                                    vertical: 'bottom',
                                },
                                disableAutoFocusItem: true,
                                transformOrigin: {
                                    horizontal: 'left',
                                    vertical: 'top',
                                },
                            }}
                            onChange={({ target }): void => {
                                setIconValue(
                                    typeof target.value === 'string'
                                        ? target.value
                                        : ''
                                );
                            }}
                            // onChange={changeHoldingCompany}
                            // onClose={onClose}
                            // renderValue={(value: number): string =>
                            //     holdingCompanies?.find(({ id }) => id === value)
                            //         ?.name ?? ''
                            // }
                            // renderValue={(value: string): string =>
                            //         options?.find(({ label }) => value === iconValue)
                            //             ?.label ?? ''}
                            sx={{
                                color: 'inherit',
                                '.MuiSelect-icon': {
                                    color: 'primary.main',
                                },
                                '.MuiSelect-select': {
                                    '&:focus': {
                                        textDecoration: 'none !important',
                                    },
                                },
                                
                            }}
                            value={iconValue}
                        >
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: 'divider',
                                    display: 'flex',
                                    height: 44,
                                    left: 0,
                                    p: 1,
                                    position: 'absolute',
                                    right: 0,
                                    top: 0,
                                    backgroundColor: '#1F2220',
                                    color: 'white',
                                }}
                            >
                                <Search
                                    color="disabled"
                                    fontSize="small"
                                    sx={{
                                        flexBasis: 24,
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        mr: 1,
                                        color: 'white',
                                    }}
                                />
                                <InputBase
                                    // onInput={onHoldingCompanySearchInput}
                                    // onKeyDown={onKeyDown}
                                    placeholder="Search"
                                    sx={{
                                        flexGrow: 1,
                                        flexShrink: 1,
                                        color: 'white',
                                    }}
                                />
                            </Box>
                            <ListSubheader
                                sx={{
                                    left: 0,
                                    position: 'absolute',
                                    right: 0,
                                    top: 44,
                                    backgroundColor: '#1F2220',
                                    color: 'white',
                                }}
                            >
                                <Typography
                                    noWrap
                                    sx={{
                                        color: 'white',
                                        lineHeight: '44px',
                                    }}
                                    variant="subtitle1"
                                >
                                    Switch Advertiser (
                                    {options.length})
                                </Typography>
                            </ListSubheader>
                            {options.map(({ label, value }) => {
                                const isSelected = value === iconValue;

                                return (
                                    <MenuItem
                                        key={label}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            color: isSelected
                                                ? 'primary.main'
                                                : 'text.primary',
                                            '& .MuiListItemIcon-root': {
                                                minWidth: 24,
                                            },
                                        }}
                                        value={value}
                                    >
                                        <div className="advertiser-select-item-name">
                                        {value === '1' && <Organization className="company-logo" sx={{ mr: 1, width: 16 }} /> }
                                        {value === '2' && <Measure className="company-logo" sx={{ mr: 1, width: 16 }} /> }
                                        {value === '3' && <Library className="company-logo" sx={{ mr: 1, width: 16 }} /> }
                                        {value === '4' && <StarOutline className="company-logo" sx={{ mr: 1, width: 16 }} /> }
                                        {value === '5' && <Buy className="company-logo" sx={{ mr: 1, width: 16 }} /> }
                                        <Typography
                                            noWrap
                                            sx={{
                                                fontFamily: 'var(--font-regular)',
                                                color: 'white',
                                                lineHeight: {
                                                    sm: '24px',
                                                    xs: '36px',
                                                },
                                            }}
                                            variant="body2"
                                        >
                                            {label}
                                        </Typography>
                                        </div>
                                        <ListItemIcon>
                                            {isSelected && (
                                                <Check
                                                    // color="primary"
                                                    fontSize="inherit"
                                                    sx={{color: 'white'}}
                                                    className="icon-check"
                                                />
                                            )}
                                        </ListItemIcon>
                                    </MenuItem>
                                );
                            })}
                            <Box className="advertiser-select-footer">
                                Don't see your advertiser? <a> Request Access.</a>
                            </Box>
                        </Select> */}
                    {/* </ThemeProvider> */}
                </div>
                <div className="nav-global-right">
                    {/* <Search /> */}
                </div>
            </nav>
            <Ticker tickerContent={(
                <>
                    Serve, we put our customers first. &nbsp;&nbsp;|&nbsp;&nbsp;  
                    Inclusion, we open our doors to everyone. &nbsp;&nbsp;|&nbsp;&nbsp; 
                    Integrity, we do the right thing. &nbsp;&nbsp;|&nbsp;&nbsp; Community, we are good neighbors. &nbsp;&nbsp;|&nbsp;&nbsp;
                    Family, we get better together. &nbsp;&nbsp;|&nbsp;&nbsp; 
                    You have <strong>3 unread</strong> notifications since you last logged in. &nbsp;&nbsp;|&nbsp;&nbsp; 
                    <strong>I’m lovin’ it</strong> campaign has performed <strong>52% higher</strong> - <a href="#">more details</a>. &nbsp;&nbsp;|&nbsp;&nbsp;
                    Hannah has edited the “I’m loving it” creative - <a href="#">more info</a>. &nbsp;&nbsp;|&nbsp;&nbsp; 
                </>
            )} />
        </div>
    )

}

export default DashboardLayout;
