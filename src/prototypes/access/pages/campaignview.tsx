import React from 'react';
import { Button, ButtonTheme, Checkbox, IconButton, TextArea, TextField } from '@preamp/core';
import cx from 'classnames';
import { VideoAmp } from '../../../components/icons/videoamp';
import { Audiences, Clear, Edit, Signal } from '@preamp/signal';
import { DropdownButton, OptionsType, OptionType, Select, SelectType, ValueType } from '@preamp/select';
import { Link, useHistory } from "react-router-dom";

const BudgetIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 0a1 1 0 0 1 .993.883L13 1v22a1 1 0 0 1-1.993.117L11 23V1a1 1 0 0 1 1-1Z"/><path d="M17 4a1 1 0 0 1 .117 1.993L17 6H9.5a2.5 2.5 0 0 0-.164 4.995L9.5 11h5a4.5 4.5 0 0 1 .212 8.995L14.5 20H6a1 1 0 0 1-.117-1.993L6 18h8.5a2.5 2.5 0 0 0 .164-4.995L14.5 13h-5a4.5 4.5 0 0 1-.212-8.995L9.5 4H17Z"/></g></svg>
)
const LocationIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12.182 1.25a8.932 8.932 0 0 0-8.932 8.932c0 3.016 1.62 5.986 4.296 8.811.921.972 1.906 1.858 2.89 2.642l.254.2.479.363.485.35.112.076a.75.75 0 0 0 .832 0l.374-.263.223-.163.478-.363c.083-.065.168-.131.254-.2a28.145 28.145 0 0 0 2.89-2.642c2.676-2.825 4.297-5.795 4.297-8.811a8.932 8.932 0 0 0-8.932-8.932Zm0 1.5a7.432 7.432 0 0 1 7.432 7.432c0 2.552-1.448 5.207-3.886 7.78a26.662 26.662 0 0 1-2.735 2.5l-.24.188-.23.178-.342.253-.34-.253a26.662 26.662 0 0 1-3.206-2.866c-2.437-2.573-3.885-5.228-3.885-7.78a7.432 7.432 0 0 1 7.432-7.432Z"/><path d="M12.182 6.705a3.477 3.477 0 1 0 0 6.954 3.477 3.477 0 0 0 0-6.954Zm0 1.5a1.977 1.977 0 1 1 0 3.954 1.977 1.977 0 0 1 0-3.954Z"/></g></svg>
)
const circleCheck: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
)
const CameraIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="m9.136 2.356-.09.006a.644.644 0 0 0-.446.28L6.882 5.22H3.41A2.553 2.553 0 0 0 .856 7.773v10.5a2.553 2.553 0 0 0 2.553 2.553h17.182a2.553 2.553 0 0 0 2.553-2.553v-10.5l-.004-.15a2.554 2.554 0 0 0-2.55-2.404h-3.473L15.4 2.643a.644.644 0 0 0-.536-.287H9.136Zm.344 1.288h5.039l1.718 2.577c.12.18.32.287.536.287h3.818c.698 0 1.265.566 1.265 1.265v10.5c0 .698-.567 1.265-1.265 1.265H3.409a1.265 1.265 0 0 1-1.265-1.265v-10.5c0-.699.567-1.265 1.265-1.265h3.818l.092-.007a.644.644 0 0 0 .444-.28L9.48 3.644Z"/><path d="M12 8.083a4.462 4.462 0 1 0 0 8.925 4.462 4.462 0 0 0 0-8.925Zm0 1.289a3.174 3.174 0 1 1 0 6.347 3.174 3.174 0 0 1 0-6.347Z"/></g></svg>
)
const FileLinesIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M14 1.25H6A2.75 2.75 0 0 0 3.25 4v16A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20V8a.75.75 0 0 0-.22-.53l-6-6a.75.75 0 0 0-.53-.22Zm-.311 1.5 5.561 5.561V20c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25V4c0-.69.56-1.25 1.25-1.25h7.689Z"/><path d="M14 1.25a.75.75 0 0 1 .743.648L14.75 2v5.25H20a.75.75 0 0 1 .743.648L20.75 8a.75.75 0 0 1-.648.743L20 8.75h-6a.75.75 0 0 1-.743-.648L13.25 8V2a.75.75 0 0 1 .75-.75ZM16 12.25a.75.75 0 0 1 .102 1.493L16 13.75H8a.75.75 0 0 1-.102-1.493L8 12.25h8ZM16 16.25a.75.75 0 0 1 .102 1.493L16 17.75H8a.75.75 0 0 1-.102-1.493L8 16.25h8ZM10 8.25a.75.75 0 0 1 .102 1.493L10 9.75H8a.75.75 0 0 1-.102-1.493L8 8.25h2Z"/></g></svg>
)
const ClockIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25Zm0 1.5a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5Z"/><path d="M12 5.25a.75.75 0 0 1 .743.648L12.75 6v5.537l3.585 1.792a.75.75 0 0 1 .375.912l-.04.094a.75.75 0 0 1-.911.375l-.094-.04-4-2a.75.75 0 0 1-.408-.565L11.25 12V6a.75.75 0 0 1 .75-.75Z"/></g></svg>
)
const DaypartIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g ><path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25Zm0 1.5a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5Z" fillRule="nonzero"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2v20Z"/></g></svg>
)

const timeIncOptions: OptionsType<OptionType> = [
    { value: 'broadcastweekly', label: 'Broadcast Weekly'},
    { value: 'broadcastmonthly', label: 'Broadcast Monthly'}
];


function CampaignView(props: any) {
    const history = useHistory();
   
    // const [method, setMethod] = React.useState<string>('');
    
    function onTimeIncChange(): void {
        console.log('Time Increment change');
    }

    return (
    <div className="campaign-view-container ">
        <div className='nav-column'>Campaign List</div>
        <div className='campaign-view-content panel'>
            <div className='campaign-view-header'>
                <div className='header-left'>
                    <div className='breadcrumb-nav'>Home    Campaign    Campaign Overview</div>
                    <h1>Enterprise Solutions (Apr to Sep 2022)</h1>
                    <div className='subtitle'>ID: 1630 | Status: Processed Successfully</div>
                </div>
                <div className='header-right'>
                    Actions
                </div>
            </div>
            <div className='button-group'>
                <Button theme={ButtonTheme.Secondary}>Process Plans</Button>
                <Button theme={ButtonTheme.Secondary}>Export Campaign</Button>
                <Button theme={ButtonTheme.Secondary}>Export Scenarios</Button>
            </div>
            <section>
                <div className='section-header'>Media Brief Summary <a>View Details</a></div>
                <div className='metric-group-container'>
                    <div className='metric-container'>
                        <Signal icon={BudgetIcon} color="#007592" size="20px" />
                        <div className='metric'>$6,350.00 Max Budget</div>
                    </div>
                    <div className='metric-container'>
                        <Signal icon={Audiences} color="#007592" size="20px" />
                        <div className='metric'>13 Audiences</div>
                    </div>
                    <div className='metric-container'>
                        <Signal icon={LocationIcon} color="#007592" size="20px" />
                        <div className='metric'>2 Locations</div>
                    </div>
                    <div className='metric-container'>
                        <Signal icon={circleCheck} color="#007592" size="20px" />
                        <div className='metric'>3 Goals</div>
                    </div>
                    <div className='metric-container'>
                        <Signal icon={CameraIcon} color="#007592" size="20px" />
                        <div className='metric'>No Content Restrictions</div>
                    </div>
                    <div className='metric-container'>
                        <Signal icon={FileLinesIcon} color="#007592" size="20px" />
                        <div className='metric'>1 Language</div>
                    </div>
                    <div className='metric-container'>
                        <Signal icon={ClockIcon} color="#007592" size="20px" />
                        <div className='metric'>13 Phases</div>
                    </div>
                    <div className='metric-container'>
                        <Signal icon={DaypartIcon} color="#007592" size="20px" />
                        <div className='metric'>No Dayparting</div>
                    </div>
                </div>
            </section>
            <section>
                <div className='section-header'>Timing</div>
                <div className='timing-container'>
                    <Select
                        inlineLabel={true}
                        options={timeIncOptions}
                        defaultValue={timeIncOptions[1]}
                        onChange={onTimeIncChange}
                        style={{ width: '160px' }}
                        label="Time Increment"
                        className='time-increment-select'
                    />
                    <div className='campaign-timeline-container'>
                        <div className='header-row'>
                            <div className='row-left'></div>
                            <div className='row-right'>
                                <div className='year-row'>
                                    Broadcast Year 2022
                                </div>
                                <div className='month-row'>
                                    <div className='timeline-col'>February</div>
                                    <div className='timeline-col'>March</div>
                                    <div className='timeline-col'>April</div>
                                    <div className='timeline-col'>May</div>
                                    <div className='timeline-col'>June</div>
                                    <div className='timeline-col'>July</div>
                                    <div className='timeline-col'>August</div>
                                    <div className='timeline-col'>September</div>
                                    <div className='timeline-col'>October</div>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-row primary-row'>
                            <div className='row-left'>Enterprise Solutions</div>
                            <div className='row-right'>
                                <div className='month-row'>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-row secondary-row'>
                            <div className='row-left'>Enterprise Solutions</div>
                            <div className='row-right'>
                                <div className='month-row'>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-row campaign-row'>
                            <div className='row-left'>
                                <div className='campaign-name'>Enterprise Solutions (Apr to Sep 2022)</div>
                                <div className='campaign-info'>ID: 4281 | Status: Completed</div>
                            </div>
                            <div className='row-right'>
                                <div className='month-row'>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                    <div className='timeline-col'></div>
                                </div>
                                <div className='campaign-bar'>
                                    <div className='campaign-budget-bar'>$114.27K</div>
                                    <div className='campaign-complete-bar'>92.86% Complete</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='section-header'>Plans</div>
                <div className='plans-container'>
                    plans content
                </div>
            </section>
            <section>
                <div className='section-header'>Scenarios in Current Plan <a>View All</a></div>
                <div className='scenarios-container'>
                    Scenarios content
                </div>
            </section>
            <section>
                <div className='section-header'>Reports <a>View All</a></div>
                <div className='reports-container'>
                    reports content
                </div>
            </section>
            <section>
                <div className='section-header'>Revision History <a>View All</a></div>
                <div className='history-container'>
                    history content
                </div>
            </section>
        </div>
    </div>
    )

}

export default CampaignView;