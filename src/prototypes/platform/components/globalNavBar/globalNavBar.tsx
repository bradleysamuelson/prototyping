import React, { ReactNode } from 'react';
import cx from 'classnames';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { VideoAmp } from '../../../../components/icons/videoamp';
import { Signal } from '@preamp/signal';
import { OptionsType, OptionType, Select, SelectType } from '@preamp/select';
import { SearchIcon } from '../../../../components/icons/search-icon';
import { BellIcon } from '../../../../components/icons/bell-icon';
import './globalNavBar.scss';

export interface GlobalNavBarProps {
    user?: string;
    className?: string;
    company?: string;
    companyOptions?: OptionsType<OptionType>;
    companyDefaultOption?: OptionType;
    onChange?: any;
    hasInputIcon?: boolean;
    inputIcon?: React.ReactNode;
    hasAgencyLogo?: boolean;
    agencyLogo?: React.ReactNode;
}
const defaultOptions: OptionsType<OptionType> = [
    { value: 'company1', label: 'Company 1' },
    { value: 'company2', label: 'Company 2' },
];

export const  GlobalNavBar: React.FC<GlobalNavBarProps> = ({
        user, 
        className,
        company, 
        companyOptions,
        companyDefaultOption,
        hasInputIcon,
        inputIcon,
        hasAgencyLogo,
        agencyLogo,
        onChange}: GlobalNavBarProps): React.ReactElement<HTMLDivElement> => {
    const { url } = useRouteMatch();

    return (
        <div className={cx("va-nav-bar", className)}>
            <div className="top-bar-left">
                <NavLink exact={true} to={url}><VideoAmp /></NavLink> 
                <div className={cx('nav-switcher-container', {'nav-switcher-withagency' : hasAgencyLogo})}>
                    {hasAgencyLogo && <div className='agency-logo-container'><Signal size="42px" icon={agencyLogo} /></div>}
                    <Select
                        className={cx('va-switcher', {'va-switcher-withicon': hasInputIcon})}
                        options={companyOptions}
                        selectType={SelectType.Link}
                        onChange={onChange}
                        defaultValue={companyDefaultOption}
                        
                    ></Select>
                    {hasInputIcon && <Signal size={1.25} className='switcher-input-icon' icon={inputIcon} />}
                </div>
                
            </div>
            <div className="top-bar-right">
                <Signal icon={SearchIcon} size={1.5} />
                <Signal icon={BellIcon} size={1.5} />
                <div className="user-icon"></div>
            </div>
        </div>
    );
};

GlobalNavBar.defaultProps = {
    user: 'John',
    company: 'VideoAmp Media Group',
    companyOptions: defaultOptions
};