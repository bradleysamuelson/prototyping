import React from 'react';
import cx from 'classnames';

import { Buy, Book, Audiences, ChevronDown, Measure, MenuEllipsis, Plan, PlayCircle, Signal } from '@preamp/signal';

import dashboardScreenshot from '../../img/dashboard-table-screenshot.png';
import dashboardDV from '../../img/dashboard-dv-example.svg';
import dashboardDVGM from '../../img/dashboard-dv-example-2.svg';
import { Button, ButtonTheme } from '@preamp/core';
import { DropdownButton, OptionType, ValueType } from '@preamp/select';

const rowActionOptions: OptionType[] = [
    { label: 'View', value: '1' },
    { label: 'Edit', value: '2' },
    { label: 'Duplicate', value: '3' },
    { label: 'Delete', value: '4' },
];
const todayList: any = [
    { 
        name: 'Competitive Insights Report', 
        id: '0000',
        created: '00/00/0000',
        updated: '--',
        actionButton: 'Keep Editing',
        type: 'report'
    },
    { 
        name: 'Outcome Measurement Report', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'report'
    },
    { 
        name: 'Outcome Measurement Report', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'report'
    },
    { 
        name: 'Outcome Measurement Report', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'report'
    },
];
const thisweekList: any = [
    { 
        name: 'Audience Measurement Report', 
        id: '0000',
        created: '00/00/0000',
        updated: '--',
        actionButton: 'Keep Editing',
        type: 'report'
    },
    { 
        name: 'Audience Measurement Report', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'report'
    },
    { 
        name: 'Budget Name', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'budget'
    },
    { 
        name: 'Audience 100', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'audience'
    },
    { 
        name: 'Audience 200', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'audience'
    },
    { 
        name: 'Audience 300', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        type: 'audience'
    },
];
const needsAttentionList: any = [
    { 
        name: 'Campaign_Name', 
        id: '0000',
        created: '00/00/0000',
        updated: '--',
        actionButton: 'Keep Editing',
        status: 'Processing Failed',
        type: 'campaign'
    },
    { 
        name: 'Audience Measurement Report', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        status: 'Processing Failed',
        type: 'report'
    },
    { 
        name: 'Budget Name', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        actionButton: 'View Report',
        status: 'Shared with you',
        type: 'budget'
    },
    { 
        name: 'Audience 100', 
        id: '0000',
        created: '00/00/0000',
        updated: '00/00/0000',
        status: 'Shared with you',
        actionButton: 'View Audience',
        type: 'audience'
    },
];
const productList: any = [
    { 
        name: 'Cold Sandwiches', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'cold',
        goal: 20,
        spent: 80
    },
    { 
        name: 'Hot Sandwiches', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'hot',
        goal: 35,
        spent: 52
    },
    { 
        name: 'Specialty Sandwiches', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: true,
        sharedIcon: false,
        iconclass: 'specialty',
        goal: 10,
        spent: 3
    },
    { 
        name: 'Seasonal Specials', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'seasonal',
        goal: 60,
        spent: 52
    },
    
];
const productListGM: any = [
    { 
        name: 'Electronic Vehicles', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'ev',
        goal: 20,
        spent: 80
    },
    { 
        name: 'Sport Utility Vehicles', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'suv',
        goal: 35,
        spent: 52
    },
    { 
        name: 'Compact Cars', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: true,
        sharedIcon: false,
        iconclass: 'compact',
        goal: 10,
        spent: 3
    },
    { 
        name: 'Luxury Vehicles', 
        description: 'ID: 00',
        kpi: 'Site Visits, Report Downloads',
        campaigns: 'Campaign_Name',
        status: 'Active',
        heartIcon: false,
        sharedIcon: false,
        iconclass: 'luxury',
        goal: 60,
        spent: 52
    },
    
];

export interface DashboardProps {
    company: any;
    selectedNav: any;
    latestType: string | null;
    latestObject: string | null;
    latestStatus: string | null;
    tier?: string | null;
    latestLink?(event?: React.MouseEvent): void;
    cardTabSelected?: any;
}

const AudiencesIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M8.896 2.25a4.698 4.698 0 1 0 0 9.396 4.698 4.698 0 0 0 0-9.396Zm0 1.5a3.198 3.198 0 1 1 0 6.396 3.198 3.198 0 0 1 0-6.396ZM12.844 14.094a4.698 4.698 0 0 1 4.691 4.45l.007.248v1.975a.75.75 0 0 1-1.493.102l-.007-.102v-1.975a3.198 3.198 0 0 0-2.987-3.191l-.211-.007H4.948a3.198 3.198 0 0 0-3.193 3.017l-.005.181v1.974a.75.75 0 0 1-1.493.102l-.007-.102v-1.974a4.698 4.698 0 0 1 4.483-4.693l.215-.005h7.896Zm7.098.152a4.698 4.698 0 0 1 3.517 4.326l.005.22v1.975a.75.75 0 0 1-1.493.102l-.007-.102v-1.975c0-1.457-.987-2.73-2.398-3.094a.75.75 0 1 1 .376-1.452ZM15.99 2.4a4.698 4.698 0 0 1 0 9.104.75.75 0 1 1-.372-1.454 3.198 3.198 0 0 0 0-6.196.75.75 0 1 1 .372-1.454Z"/></g></svg>
)
const DatabaseIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 1c-1.299 0-2.54.083-3.679.242l-.56.086C4.357 1.896 2 3.18 2 5c0 1.819 2.358 3.104 5.76 3.672l.561.086C9.46 8.918 10.701 9 12 9s2.54-.083 3.679-.242l.56-.086C19.643 8.104 22 6.82 22 5c0-1.819-2.358-3.104-5.76-3.672l-.561-.086A26.78 26.78 0 0 0 12 1Zm-.307 2.002L12 3c.617 0 1.217.023 1.794.065l.568.049.551.06c.452.054.883.12 1.29.195l.477.093.451.1.425.108C19.063 4.073 20 4.587 20 5c0 .413-.937.927-2.444 1.33l-.425.107-.451.101-.477.093c-.407.075-.838.14-1.29.195l-.55.06-.569.049a24.638 24.638 0 0 1-3.588 0l-.568-.049-.551-.06c-.452-.054-.883-.12-1.29-.195l-.477-.093-.451-.1-.425-.108C4.937 5.927 4 5.413 4 5c0-.413.937-.927 2.444-1.33l.425-.107.451-.101.477-.093c.407-.075.838-.14 1.29-.195l.55-.06.569-.049c.48-.035.978-.057 1.487-.063ZM21 11a1 1 0 0 1 1 1c0 2.069-3.023 3.443-7.186 3.864l-.602.053-.616.04a29.492 29.492 0 0 1-3.192 0l-.616-.04-.602-.053C5.023 15.443 2 14.069 2 12a1 1 0 0 1 1.993-.117L4 12c0 .227.277.483.773.734l.266.125.3.123.164.061.35.119.38.115c.265.075.548.146.849.213l.464.097.488.09.511.08c.26.037.53.071.806.101l.56.054.579.042a24.952 24.952 0 0 0 3.02 0l.578-.042.561-.054c.276-.03.545-.064.806-.101l.511-.08.488-.09.464-.097c.301-.067.584-.138.848-.213l.381-.115.35-.119.163-.06.301-.124.266-.125c.496-.251.773-.507.773-.734a1 1 0 0 1 1-1Z"/><path d="M21 4a1 1 0 0 1 .993.883L22 5v14c0 2.069-3.023 3.443-7.186 3.864l-.602.053-.616.04a29.492 29.492 0 0 1-3.192 0l-.616-.04-.602-.053c-4.064-.411-7.041-1.73-7.18-3.717L2 19V5a1 1 0 0 1 1.993-.117L4 5v14c0 .227.277.483.773.734l.266.125.3.123.164.061.35.119.38.115c.265.075.548.146.849.213l.464.097.488.09.511.08c.26.037.53.071.806.101l.56.054.579.042a24.952 24.952 0 0 0 3.02 0l.578-.042.561-.054c.276-.03.545-.064.806-.101l.511-.08.488-.09.464-.097c.301-.067.584-.138.848-.213l.381-.115.35-.119.163-.06.301-.124.266-.125c.455-.23.725-.465.767-.677L20 19V5a1 1 0 0 1 1-1Z"/></g></svg>
)
const FileIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M14 1H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-6-6A1 1 0 0 0 14 1Zm-.415 2L19 8.415V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.585Z"/><path d="M14 1a1 1 0 0 1 .993.883L15 2v5h5a1 1 0 0 1 .993.883L21 8a1 1 0 0 1-.883.993L20 9h-6a1 1 0 0 1-.993-.883L13 8V2a1 1 0 0 1 1-1ZM16 12a1 1 0 0 1 .117 1.993L16 14H8a1 1 0 0 1-.117-1.993L8 12h8ZM16 16a1 1 0 0 1 .117 1.993L16 18H8a1 1 0 0 1-.117-1.993L8 16h8ZM10 8a1 1 0 0 1 .117 1.993L10 10H8a1 1 0 0 1-.117-1.993L8 8h2Z"/></g></svg>
)
const GearIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/><path d="M12 0a3 3 0 0 0-3 3v.17l-.007.094a.649.649 0 0 1-.225.397l-.062.044-.06.013a1 1 0 0 0-.13.047.65.65 0 0 1-.717-.13l-.052-.052a3 3 0 0 0-5.124 2.122 3 3 0 0 0 .745 1.978l.195.204c.178.182.23.466.122.71-.116.308-.352.477-.618.483H3a3 3 0 0 0 0 6h.17a.649.649 0 0 1 .59.394.654.654 0 0 1-.125.727l-.052.052a3 3 0 0 0 2.122 5.124 3 3 0 0 0 1.978-.745l.204-.195a.647.647 0 0 1 .71-.122c.308.116.477.352.483.618V21a3 3 0 0 0 6 0v-.17a.649.649 0 0 1 .394-.59.654.654 0 0 1 .727.125l.052.052a3 3 0 0 0 5.124-2.122 3 3 0 0 0-.745-1.978l-.195-.204a.647.647 0 0 1-.122-.71.654.654 0 0 1 .599-.403H21a3 3 0 0 0 0-6h-.17l-.094-.007a.649.649 0 0 1-.397-.225l-.045-.062-.012-.06a1 1 0 0 0-.047-.13.65.65 0 0 1 .13-.717l.052-.052a3 3 0 0 0-2.122-5.124 3 3 0 0 0-1.978.745l-.204.195a.647.647 0 0 1-.71.122.654.654 0 0 1-.403-.599V3a3 3 0 0 0-3-3Zm0 2a1 1 0 0 1 1 1v.09a2.651 2.651 0 0 0 1.606 2.43 2.646 2.646 0 0 0 2.913-.535l.068-.068a1 1 0 1 1 1.416 1.415l-.06.06-.13.143a2.654 2.654 0 0 0-.536 2.433L18.32 9a1 1 0 0 0 .08.394A2.65 2.65 0 0 0 20.827 11H21a1 1 0 0 1 0 2h-.09a2.651 2.651 0 0 0-2.43 1.606 2.646 2.646 0 0 0 .535 2.913l.068.068a1 1 0 1 1-1.415 1.416l-.06-.06a2.654 2.654 0 0 0-2.932-.538 2.646 2.646 0 0 0-1.596 2.421V21a1 1 0 0 1-2 0v-.09a2.66 2.66 0 0 0-1.558-2.376l-.177-.073c-.932-.413-2.09-.203-2.864.554l-.068.068a1 1 0 1 1-1.416-1.415l.06-.06c.765-.783.975-1.94.538-2.932a2.646 2.646 0 0 0-2.421-1.596H3a1 1 0 0 1 0-2h.09a2.66 2.66 0 0 0 2.376-1.558l.073-.177c.413-.932.203-2.09-.554-2.864l-.068-.068a1 1 0 1 1 1.415-1.416l.06.06.143.13a2.654 2.654 0 0 0 2.433.536L9 5.68a1 1 0 0 0 .394-.08A2.65 2.65 0 0 0 11 3.173V3a1 1 0 0 1 1-1Z"/></g></svg>
)
const AddSquareIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M12 7a1 1 0 0 1 .993.883L13 8v8a1 1 0 0 1-1.993.117L11 16V8a1 1 0 0 1 1-1Z"/><path d="M16 11a1 1 0 0 1 .117 1.993L16 13H8a1 1 0 0 1-.117-1.993L8 11h8Z"/></g></svg>
)
const ArrowRightCircle = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.335 3.89a8.446 8.446 0 1 0 0 16.891 8.446 8.446 0 0 0 0-16.892ZM1.89 12.334C1.89 6.566 6.566 1.89 12.335 1.89c5.77 0 10.446 4.677 10.446 10.446 0 5.77-4.677 10.446-10.446 10.446S1.89 18.104 1.89 12.335Z" /><path fillRule="evenodd" clipRule="evenodd" d="M11.628 7.85a1 1 0 0 1 1.414 0l3.779 3.778a1 1 0 0 1 0 1.414l-3.779 3.779a1 1 0 0 1-1.414-1.415l3.071-3.07-3.07-3.072a1 1 0 0 1 0-1.414Z" /><path fillRule="evenodd" clip-rule="evenodd" d="M7.557 12.335a1 1 0 0 1 1-1h7.557a1 1 0 0 1 0 2H8.557a1 1 0 0 1-1-1Z" /></svg>
)

// export const  GlobalNavBar: React.FC<GlobalNavBarProps> = ({
//     user, 
//     className,
//     company, 
//     companyOptions,
//     companyDefaultOption,
//     hasInputIcon,
//     inputIcon,
//     hasAgencyLogo,
//     agencyLogo,
//     onChange}: GlobalNavBarProps): React.ReactElement<HTMLDivElement> => {
// const { url } = useRouteMatch();
function dropdownChanged(value: ValueType<OptionType>): void {
    console.log('changed', value);
}

export const Dashboard: React.FC<DashboardProps> = ({cardTabSelected, selectedNav, company, latestObject, latestType, latestStatus, latestLink, tier, ...rest}: DashboardProps): React.ReactElement<HTMLDivElement> => {
    const [currentCardTab, setCurrentCardTab] = React.useState<string | undefined>(cardTabSelected);
    React.useEffect(() => {
        selectedNav('dashboard');
        if (cardTabSelected === '' || cardTabSelected === undefined) {
            setCurrentCardTab('recents');
        }
    }, []);
    function cardTabSelect(value: any): void {
        setCurrentCardTab(value);
    }
    return (
        <div className='page-content'>
            <div className="content-header">
                    <div className='content-header-left'>
                        <div className='content-header-label'>Carat</div>
                        <h1>{company}</h1>
                        {/* {tier} | {currentCardTab} | {cardTabSelected} */}
                    </div>
                    <div className='content-header-right'>
                        {/* <DropdownButton
                            className="all-data-create-btn"
                            buttonProps={{
                                theme: ButtonTheme.Secondary
                            }}
                            dataUI="all-data-create"
                            onChange={allDataCreateChange}
                            options={allDataCreateOptions}
                        >Create</DropdownButton> */}
                        {tier === 'Base' ? (
                                <>
                                    <button className='header-action-button'>
                                        <Signal icon={Measure} size="14px" />
                                        Measure Audiences
                                        <div className='button-line'></div>
                                    </button>
                                    <button className='header-action-button'>
                                        <Signal icon={Measure} size="14px" />
                                        Measure Outcomes
                                        <div className='button-line'></div>
                                    </button>
                                    <button className='header-action-button'>
                                        <Signal icon={Measure} size="14px" />
                                        Measure Competitors
                                        <div className='button-line'></div>
                                    </button>
                                </>
                            ) : tier === 'Plus' ? (
                                <>
                                    <>
                                    <button className='header-action-button'>
                                        <Signal icon={Measure} size="14px" />
                                        Measure Audiences
                                        <div className='button-line'></div>
                                    </button>
                                    <button className='header-action-button'>
                                        <Signal icon={Measure} size="14px" />
                                        Measure Outcomes
                                        <div className='button-line'></div>
                                    </button>
                                    <button className='header-action-button'>
                                        <Signal icon={Measure} size="14px" />
                                        Measure Competitors
                                        <div className='button-line'></div>
                                    </button>
                                </>
                                </>
                            ) : (
                                <>
                                    <>
                                    <button className='header-action-button'>
                                        <Signal icon={PlayCircle} size="14px" />
                                        Create a Premium Video Plan
                                        <div className='button-line'></div>
                                    </button>
                                    <button className='header-action-button'>
                                        <Signal icon={Measure} size="14px" />
                                        Create a Campaign
                                        <div className='button-line'></div>
                                    </button>
                                    <button className='header-action-button'>
                                        <Signal icon={FileIcon} size="14px" />
                                        Create a Report
                                        <div className='button-line'></div>
                                    </button>
                                </>
                                </>
                            )}
                        
                        {/* <button className='header-action-button'>
                            <Signal icon={Plan} size="14px" />
                            Plan 2022 Upfronts
                            <div className='button-line'></div>
                        </button> */}
                        <button className='header-action-button'>
                            <Signal icon={AddSquareIcon} size="14px" />
                            Create
                            <div className='button-line'></div>
                        </button>
                    </div>
                    
                </div>
            
                <div className="content-main-full">
                    {/* <div className='latest-panel'>Pick up where you left off: {latestObject} / {latestType} / status: {latestStatus}</div> */}
                    <div className='dashboard-card-container'>
                        <div className='dashboard-card-50'>
                            <div className='dashboard-card-title'>Pick up where you left off</div>
                            <div className='dashboard-card-content'>
                                <div className='dashboard-card-content-left'>
                                    <div>
                                        {company === 'Subway' ? (
                                            <>{latestObject}</> 
                                        ) : (
                                            <span>EV Report Q4 2023</span>
                                        )}
                                    </div>
                                    <div className='dashboard-card-description'>
                                        {latestType === 'campaign' ? (
                                            <span>Campaign ID: 0000 | Campaign Status: </span>
                                        ): (
                                            <span>Report ID: 1234 | Report Status: </span>
                                        )} {latestStatus}
                                    </div>
                                </div>
                                <div className='dashboard-card-content-right'>
                                    {company === 'Subway' ? (
                                        <Button className='btn-wide' onClick={latestLink}>{latestType === 'report' ? <span>View Report</span> : <span>View Campaign</span>}</Button>
                                        ) : (
                                        <Button className='btn-wide' ><span>View Report</span></Button>
                                    )}
                                </div>
                            </div>
                        </div>
                        {tier != 'Pro' ? (
                            <div className='dashboard-card-50'>
                                <div className='dashboard-card-title'>Jump back in</div>
                                <div className='dashboard-card-content'>
                                    <div className='dashboard-card-content-left'>
                                        <div>Report_Name</div>
                                        <div className='dashboard-card-description'>
                                                <span>Report ID: 1234 | Report Status: Complete | Type: Audience Measurement</span>
                                        </div>
                                    </div>
                                    <div className='dashboard-card-content-right'>
                                        <Button className='btn-wide' theme={ButtonTheme.Secondary} onClick={latestLink}><span>Continue Editing</span></Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                            {company === 'Subway' ? (
                                <>
                                <div className='dashboard-card-metric'>
                                    <div className='dashboard-card-metric-value'>$349.10k</div>
                                    <div className='dashboard-card-metric-label'>Total Value of Responses</div>
                                </div>
                                <div className='dashboard-card-metric'>
                                    <div className='dashboard-card-metric-value'>$698.00k</div>
                                    <div className='dashboard-card-metric-label'>Revenue</div>
                                </div>
                                </>
                            ) : (
                                <>
                                <div className='dashboard-card-metric'>
                                    <div className='dashboard-card-metric-value'>$220.3k</div>
                                    <div className='dashboard-card-metric-label'>Total Value of Responses</div>
                                </div>
                                <div className='dashboard-card-metric'>
                                    <div className='dashboard-card-metric-value'>$148k</div>
                                    <div className='dashboard-card-metric-label'>Revenue</div>
                                </div>
                                </>
                            )}
                            </>
                        )}
                        
                    </div>
                    {tier === 'Pro' && (
                        <div className='dashboard-card-container'>
                            <div className='dashboard-card-75 dashbaord-card-dv'>
                                {company === 'Subway' ? (
                                    <>
                                    <img src={dashboardDV} className='dashboard-dv-example' />
                                    <div className='dv-card-title'>Business Objectives</div>
                                    <div className='dv-card-metric'>115<span className='dv-card-metric-unit'>%</span></div>
                                    <div className='dv-current-label'>15% Over Plan</div>
                                    </>
                                ) : (
                                    <>
                                    <img src={dashboardDVGM} className='dashboard-dv-example' />
                                    <div className='dv-card-title'>Business Objectives</div>
                                    <div className='dv-card-metric'>85<span className='dv-card-metric-unit'>%</span></div>
                                    <div className='dv-current-label red'>15% Under Plan</div>
                                    </>
                                )}
                                
                                
                                <div className='dv-card-action'>
                                    <Signal icon={ArrowRightCircle} size={2} />
                                </div>
                            </div>
                            <div className='dashboard-card-metric'>
                                {company === 'Subway' ? (
                                    <>
                                    <div className='dashboard-card-metric-label'>Current Budget Plan</div>
                                    <div className='dashboard-card-metric-value'>$40.56M</div>
                                    <Button classID='btn-wide' theme={ButtonTheme.Secondary}>View Budgets</Button>
                                    </>
                                ) : (
                                    <>
                                    <div className='dashboard-card-metric-label'>Current Budget Plan</div>
                                    <div className='dashboard-card-metric-value'>$27.32M</div>
                                    <Button classID='btn-wide' theme={ButtonTheme.Secondary}>View Budgets</Button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                    
                    {/* <img src={dashboardScreenshot} className='dashboard-screenshot' alt="Dashboard" /> */}
                    <div className='va-card dashboard-grid'>
                        <div className='card-tabs'>
                            {tier === 'Pro' && <a className={cx('card-tab-item', {'selected' : currentCardTab === 'products'})} role='button' onClick={(): void => cardTabSelect('products')}>Products</a> }
                            <a className={cx('card-tab-item', {'selected' : currentCardTab === 'recents'})} role='button' onClick={():void => cardTabSelect('recents')}>Recents</a>
                            <a className={cx('card-tab-item notification', {'selected' : currentCardTab === 'needsAttention'})} role='button' onClick={():void => cardTabSelect('needsAttention')}>Needs Attention</a>
                            <a className={cx('card-tab-item', {'selected' : currentCardTab === 'favorites'})} role='button' onClick={():void => cardTabSelect('favorites')}>Favorites</a>
                        </div>
                        {currentCardTab === 'products' && (
                            <div className='products-grid'>
                                <div className='list-header'>
                                    <div className='list-col-icon'></div>
                                    <div className='list-col-name'>Product</div>
                                    <div className='list-col-kpi'>KPIs</div>
                                    <div className='list-col-status'>Goal Performance</div>
                                    <div className='list-col-status'>Spent Budget</div>
                                </div>
                                <div className='list-rows'>
                                {company === 'Subway' ? (
                                    <>
                                        {productList.map((option:any, index: number) => (
                                            <div className='list-row' key={index}>
                                                <div className='list-row-left'>
                                                    <div className='list-col-icon'>
                                                        <div className={cx('list-item-icon', option.iconclass)}></div>
                                                    </div>
                                                    <div className='list-col-name'>
                                                        <div className='list-item-name'>
                                                            <a className='item-name-link'>{option.name}</a> 
                                                        </div>
                                                        <div className='list-item-description'>{option.description}</div>
                                                    </div>
                                                    <div className='list-col-kpi'>
                                                        <div className='list-item'>{option.kpi}</div>
                                                    </div>
                                                    <div className='list-col-dv'>
                                                        <div className='list-item list-item-dv'>
                                                            <span className='list-item-dv-label'>{option.goal}%</span>
                                                            <div className='list-item-dv-bar-container'>
                                                                <div className='list-item-dv-bar-value' style={{'width': `${option.goal}%`}}></div>
                                                            </div>                                             
                                                        </div>
                                                    </div>
                                                    <div className='list-col-dv'>
                                                        <div className='list-item list-item-dv'>
                                                            <span className='list-item-dv-label'>{option.spent}%</span>
                                                            <div className='list-item-dv-bar-container'>
                                                                <div className='list-item-dv-bar-value' style={{'width': `${option.spent}%`}}></div>
                                                            </div>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='list-col-actions'>
                                                    {/* <Signal icon={MenuEllipsis} size={1} /> */}
                                                    <DropdownButton
                                                        dataUI="icon-dropdown"
                                                        icon={MenuEllipsis}
                                                        onChange={dropdownChanged}
                                                        options={rowActionOptions}
                                                        shouldCloseOnSelect={true}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ):(
                                    <>
                                        {productListGM.map((option:any, index: number) => (
                                            <div className='list-row' key={index}>
                                                <div className='list-row-left'>
                                                    <div className='list-col-icon'>
                                                        <div className={cx('list-item-icon', option.iconclass)}></div>
                                                    </div>
                                                    <div className='list-col-name'>
                                                        <div className='list-item-name'>
                                                            <a className='item-name-link'>{option.name}</a> 
                                                        </div>
                                                        <div className='list-item-description'>{option.description}</div>
                                                    </div>
                                                    <div className='list-col-kpi'>
                                                        <div className='list-item'>{option.kpi}</div>
                                                    </div>
                                                    <div className='list-col-dv'>
                                                        <div className='list-item list-item-dv'>
                                                            <span className='list-item-dv-label'>{option.goal}%</span>
                                                            <div className='list-item-dv-bar-container'>
                                                                <div className='list-item-dv-bar-value' style={{'width': `${option.goal}%`}}></div>
                                                            </div>                                             
                                                        </div>
                                                    </div>
                                                    <div className='list-col-dv'>
                                                        <div className='list-item list-item-dv'>
                                                            <span className='list-item-dv-label'>{option.spent}%</span>
                                                            <div className='list-item-dv-bar-container'>
                                                                <div className='list-item-dv-bar-value' style={{'width': `${option.spent}%`}}></div>
                                                            </div>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='list-col-actions'>
                                                    {/* <Signal icon={MenuEllipsis} size={1} /> */}
                                                    <DropdownButton
                                                        dataUI="icon-dropdown"
                                                        icon={MenuEllipsis}
                                                        onChange={dropdownChanged}
                                                        options={rowActionOptions}
                                                        shouldCloseOnSelect={true}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                                
                                </div>  
                            </div>
                        )}
                        {currentCardTab === 'recents' && (
                            <div className='recents-grid'>
                                <div className='list-header'>
                                    <div className='list-col-name'>Today</div>
                                    <div className='list-col-kpi'>ID</div>
                                    <div className='list-col-daterange'>Created</div>
                                    <div className='list-col-daterange'>Last Updated</div>
                                </div>
                                <div className='list-rows'>
                                    {todayList.map((option:any, index: number) => (
                                        <div className='list-row' key={index}>
                                            <div className='list-row-left'>
                                                <div className='list-col-name'>
                                                    <div className='list-item-name'>
                                                        {option.type === 'report' && <Signal icon={FileIcon} size={0.875} />}
                                                        {option.type === 'budget' && <Signal icon={Buy} size={0.875} />}
                                                        {option.type === 'audience' && <Signal icon={AudiencesIcon} size={0.875} />}
                                                        {option.name}
                                                    </div>
                                                </div>
                                                <div className='list-col-kpi'><div className='list-item'>{option.id}</div></div>
                                                <div className='list-col-daterange'><div className='list-item'>{option.created}</div></div>
                                                <div className='list-col-daterange'><div className='list-item'>{option.updated}</div></div>
                                            </div>
                                            <div className='list-col-actions'>
                                                {/* <Signal icon={MenuEllipsis} size={1} /> */}
                                                <Button className='btn-tertiary'>{option.actionButton}</Button>
                                                <DropdownButton
                                                    dataUI="icon-dropdown"
                                                    icon={MenuEllipsis}
                                                    onChange={dropdownChanged}
                                                    options={rowActionOptions}
                                                    shouldCloseOnSelect={true}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='list-header'>
                                    <div className='list-col-name'>This Week</div>
                                    {/* <div className='list-col-kpi'>ID</div>
                                    <div className='list-col-daterange'>Created</div>
                                    <div className='list-col-daterange'>Last Updated</div> */}
                                </div>
                                <div className='list-rows'>
                                    {thisweekList.map((option:any, index: number) => (
                                        <div className='list-row' key={index}>
                                            <div className='list-row-left'>
                                                <div className='list-col-name'>
                                                    <div className='list-item-name'>
                                                        {option.type === 'report' && <Signal icon={FileIcon} size={0.875} />}
                                                        {option.type === 'budget' && <Signal icon={Buy} size={0.875} />}
                                                        {option.type === 'audience' && <Signal icon={AudiencesIcon} size={0.875} />}
                                                        {option.name}
                                                    </div>
                                                </div>
                                                <div className='list-col-kpi'><div className='list-item'>{option.id}</div></div>
                                                <div className='list-col-daterange'><div className='list-item'>{option.created}</div></div>
                                                <div className='list-col-daterange'><div className='list-item'>{option.updated}</div></div>
                                            </div>
                                            <div className='list-col-actions'>
                                                <Button className='btn-tertiary'>{option.actionButton}</Button>
                                                <DropdownButton
                                                    dataUI="icon-dropdown"
                                                    icon={MenuEllipsis}
                                                    onChange={dropdownChanged}
                                                    options={rowActionOptions}
                                                    shouldCloseOnSelect={true}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentCardTab === 'needsAttention' && (
                            <div className='recents-grid'>
                                <div className='list-header'>
                                    <div className='list-col-name'>Today</div>
                                    <div className='list-col-kpi'>ID</div>
                                    <div className='list-col-daterange'>Created</div>
                                    <div className='list-col-status'>Status</div>
                                </div>
                                <div className='list-rows'>
                                    {needsAttentionList.map((option:any, index: number) => (
                                        <div className='list-row' key={index}>
                                            <div className='list-row-left'>
                                                <div className='list-col-name'>
                                                    <div className='list-item-name'>
                                                        {option.type === 'report' && <Signal icon={FileIcon} size={0.875} />}
                                                        {option.type === 'budget' && <Signal icon={Buy} size={0.875} />}
                                                        {option.type === 'audience' && <Signal icon={AudiencesIcon} size={0.875} />}
                                                        {option.type === 'campaign' && <Signal icon={Measure} size={0.875} />}
                                                        {option.name}
                                                    </div>
                                                </div>
                                                <div className='list-col-kpi'><div className='list-item'>{option.id}</div></div>
                                                <div className='list-col-daterange'><div className='list-item'>{option.created}</div></div>
                                                <div className='list-col-status'><div className='list-item'>{option.status}</div></div>
                                            </div>
                                            <div className='list-col-actions'>
                                                {/* <Signal icon={MenuEllipsis} size={1} /> */}
                                                <Button className='btn-tertiary'>{option.actionButton}</Button>
                                                <DropdownButton
                                                    dataUI="icon-dropdown"
                                                    icon={MenuEllipsis}
                                                    onChange={dropdownChanged}
                                                    options={rowActionOptions}
                                                    shouldCloseOnSelect={true}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        )}
                        {currentCardTab === 'favorites' && (
                            <div className='recents-grid'>
                                <div className='list-header'>
                                    <div className='list-col-name'>Favorites</div>
                                    <div className='list-col-kpi'>ID</div>
                                    <div className='list-col-daterange'>Created</div>
                                    <div className='list-col-daterange'>Last Updated</div>
                                </div>
                                <div className='list-rows'>
                                    {thisweekList.map((option:any, index: number) => (
                                        <div className='list-row' key={index}>
                                            <div className='list-row-left'>
                                                <div className='list-col-name'>
                                                    <div className='list-item-name'>
                                                        {option.type === 'report' && <Signal icon={FileIcon} size={0.875} />}
                                                        {option.type === 'budget' && <Signal icon={Buy} size={0.875} />}
                                                        {option.type === 'audience' && <Signal icon={AudiencesIcon} size={0.875} />}
                                                        {option.type === 'campaign' && <Signal icon={Measure} size={0.875} />}
                                                        {option.name}
                                                    </div>
                                                </div>
                                                <div className='list-col-kpi'><div className='list-item'>{option.id}</div></div>
                                                <div className='list-col-daterange'><div className='list-item'>{option.created}</div></div>
                                                <div className='list-col-daterange'><div className='list-item'>{option.updated}</div></div>
                                            </div>
                                            <div className='list-col-actions'>
                                                {/* <Signal icon={MenuEllipsis} size={1} /> */}
                                                <Button className='btn-tertiary'>{option.actionButton}</Button>
                                                <DropdownButton
                                                    dataUI="icon-dropdown"
                                                    icon={MenuEllipsis}
                                                    onChange={dropdownChanged}
                                                    options={rowActionOptions}
                                                    shouldCloseOnSelect={true}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        )}
                        
                    </div>
                    

                </div>
            
                {/* <div className='content-main-full'>
                    <div className='placeholder-container placeholder-container-full placeholder-container-short'></div>
                    <div className='dashboard-mock-table'>
                        <div className='mock-section-header'>
                            <div className='mock-header-left'>
                                <div className='mock-action-item'></div>
                            </div>
                            <div className='mock-header-right'>
                                <div className='mock-action-item'></div>
                                <div className='mock-action-item'></div>
                                <div className='mock-action-item'></div>
                            </div>
                        </div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                        <div className="row-content"></div>
                    </div>
                </div> */}
        </div>
    )
}