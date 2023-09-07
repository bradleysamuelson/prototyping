import { OptionsType, OptionType } from '@preamp/select';


export const dataOptions: OptionsType<OptionType> = [
    { value: 'alldata', label: 'All Data', buttonLabel: 'Add or Create Data'},
    { value: 'creatives', label: 'Creatives', buttonLabel: 'Add or Create a Creative'},
    { value: 'pixels', label: 'Pixels', buttonLabel: 'Add or Create a Pixel'},
    { value: 'offlineconversions', label: 'Offline Conversions', buttonLabel: 'Add or Create Offline Conversion Data'},
    { value: 'adschedules', label: 'Ad Schedules', buttonLabel: 'Add or Create an Ad Schedule'},
    { value: 'linearasrun', label: 'Linear As-Run Logs', buttonLabel: 'Add or Create a Linear As-Run Log'},
    { value: 'linearpostlogs', label: 'Linear Post Logs', buttonLabel: 'Add or Create a Linear Post Log'},
    { value: 'linearcostdata', label: 'Linear Cost Data', buttonLabel: 'Add or Create Linear Cost Data'},
    { value: 'digitalcostdata', label: 'Digital Cost Data', buttonLabel: 'Add or Create Digital Cost Data'},
    { value: 'lineardaypartdefs', label: 'Linear Daypart Definitions', buttonLabel: 'Add or Create Linear Daypart Definitions'},
    { value: 'advertiserconstraints', label: 'Advertiser Constraints', buttonLabel: 'Add or Create Advertiser Constraints'},
    { value: 'investmentstrategies', label: 'Investment Strategies', buttonLabel: 'Add or Create an Investment Strategy'},
    { value: 'externaldatasources', label: 'External Data Sources', buttonLabel: 'Add or Create External Data Sources'}
];