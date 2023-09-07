import React from 'react';
import { 
    ActionBar, 
    Button, 
    ButtonTheme, 
    CardNav, 
    ExpandableCard,
    IconButton, 
    ITabItem, 
    MetricGrid, 
    MetricTypes,
    Modal,
    Notification,
    NotificationTheme,
    Panel,
    Search, 
    Tabs, 
    TextField,
    TextFieldType,
    TitleBar,
    Toggle 
} from '@preamp/core';
import { OptionsType, OptionType, Select } from '@preamp/select';
import { Clear } from '@preamp/signal';
import { Add, Check, Lock, Signal, MenuEllipsis, Unlock } from '@preamp/signal';
import { ComparisonCard } from './components/comparisonCard';
import { OptimizerValue } from './components/optimizerValue/optimizerValue';

import comparisonChart from './img/comparison-chart.png';
import nbcDealtable from './img/NBC-deal.png';
import openAPlogo from './img/openap.png';
import viacomLogo from './img/viacomlogo.png';
import bravoData from './img/bravo-data.png';
import inclusionsExclusions from './img/inclusionsexclusions.png';
import advancedConstraints from './img/advanced-constraints.png';
import submitModalContent from './img/submit-openap.png';

import cx from 'classnames';

interface IScenario {
    name: string;
}
interface Section {
    [key: string]: {
        identifier: string;
        content?: React.ReactNode;
    };
}
const scenarioTabs: ITabItem[] = [
    {
        href: '#overview',
        identifier: 'overview',
        label: 'Overview'
    },
    {
        href: '#delivery',
        identifier: 'delivery',
        label: 'Delivery'
    },
    {
        href: '#linear-inventory',
        identifier: 'linear-inventory',
        label: 'Linear Inventory'
    },
    {
        href: '#summary',
        identifier: 'summary',
        label: 'Summary'
    }
];
const modifyTabs: ITabItem[] = [
    {
        href: '#openap',
        identifier: 'openap',
        label: 'OpenAP Inventory'
    },
    {
        href: '#linear',
        identifier: 'linear',
        label: 'All Other Linear Inventory'
    },
    {
        href: '#exclusions',
        identifier: 'exclusions',
        label: 'Exclusions'
    }
];
const constraintTabs: ITabItem[] = [
    {
        href: '#inclusions',
        identifier: 'inclusions',
        label: 'Inclusions & Exclusions'
    },
    {
        href: '#advanced',
        identifier: 'advanced',
        label: 'Advanced Constraints'
    }
];

const linearMetrics: MetricTypes[] = [
    {
        items: [
            {
                id: '1',
                label: 'Average Plan HH Reach',
                metric: '1.895 - 2.131M'
            },
            {
                id: '2',
                label: "This Plan's HH Reach",
                metric: '1.895 - 2.131M'
            },
            {
                id: '3',
                label: 'OpenAP Reach',
                metric: '0000'
            },
            {
                id: '4',
                label: 'All Programming Reach',
                metric: '0000'
            }
        ]
    }
];

const modifyViewOptions: OptionsType<OptionType> = [
    { value: 'budgetAllocation', label: 'Budget Allocation' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' }
];
const modifyEnterbyOptions: OptionsType<OptionType> = [
    { value: 'dollaramount', label: 'Dollar Amount' },
    { value: 'dollarrange', label: 'Dollar Range' }
];


const AwardIcon: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="CurrentColor" fillRule="nonzero"><path d="M12 0a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
            <path d="M15.658 12.889a1 1 0 011.101.745l.022.114 1.21 9.12a1 1 0 01-1.41 1.04l-.095-.05L12 21.165l-4.486 2.691A1 1 0 016 22.975l.009-.107 1.21-9.11a1 1 0 011.991.147l-.009.117-.937 7.053 3.222-1.932a1 1 0 01.906-.063l.122.063 3.221 1.932-.936-7.063a1 1 0 01.745-1.101l.114-.022z"/>
        </g>
    </svg>
)
const NBClogo: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M22.08 10.462a2.598 2.598 0 00-2.681-2.58c-1.218.037-2.06.585-2.617 1.944L13.44 17.48l7.254-4.712c.22-.137.402-.274.402-.274a2.635 2.635 0 00.984-2.032zM1.92 10.462a2.598 2.598 0 012.681-2.58c1.218.037 2.06.585 2.617 1.944l3.342 7.654-7.254-4.712c-.22-.137-.402-.274-.402-.274a2.635 2.635 0 01-.984-2.032zM11.52 19.394l-7.166-5.138c-.63-.452-1.169-.616-1.708-.616C1.182 13.64 0 14.9 0 16.462s1.182 2.932 2.646 2.932c.025.014 8.874 0 8.874 0zM12.48 19.394l7.166-5.138c.63-.452 1.169-.616 1.708-.616 1.464 0 2.646 1.26 2.646 2.822s-1.182 2.932-2.646 2.932c-.025.014-8.874 0-8.874 0z"/><path d="M14.898 5c-1.338-.026-2.418 1.273-2.418 2.756v.184c.2 0 .786.013.857.026.14.026.258.092.258.131 0 .053-.188.08-.575.42-.317.289-.317.538-.34.656-.024.105 0 .394 0 .394.387 2.638 1.279 7.913 1.279 7.913s2.957-7.952 3.051-8.267c.2-.722.27-1.076.27-1.43.012-1.497-1.045-2.756-2.382-2.783zM11.52 7.759c0-1.484-1.08-2.785-2.418-2.759-1.326.027-2.382 1.275-2.382 2.772 0 .355.035.683.106.92.152.499 3.25 8.788 3.25 8.788s1.385-8.775 1.432-9.366c.012-.158.012-.25.012-.355z"/></g></svg>
)
const checkCircle: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="CurrentColor" fillRule="nonzero"><path d="M21.293 3.3a1 1 0 011.498 1.319l-.083.094-10 10.01a1 1 0 01-1.32.084l-.095-.084-3-3a1 1 0 011.32-1.497l.094.083L12 12.601l9.294-9.302z"/><path d="M3.638 4.854a11 11 0 0112.84-2.901 1 1 0 11-.815 1.827 9 9 0 105.333 8.497l.004-.27v-.92a1 1 0 011.993-.117l.007.116v.92A11 11 0 113.638 4.855z"/></g></svg>
)

interface NotificationState {
    notificationOpen: boolean;
    notificationThemeValue: NotificationTheme;
    notificationTitle: string;
    customNotificationIcon: React.ReactNode;
    durationTime: string;
}

// let currentScreen = "Comparison";

function Plan() {
    const [currentScreen, setCurrentScreen] = React.useState('Comparison');
    const [currentScenario, setCurrentScenario] = React.useState('Scenario 1');
    const [tabState, setTabState] = React.useState(scenarioTabs[2].identifier);
    const [constraintTab, setConstraintTab] = React.useState(constraintTabs[0].identifier);
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [selectionStart, setSelectionStart] = React.useState('');
    const [nbcuLocked, setNbcuLocked] = React.useState(false);
    const [nbcLocked, setNbcLocked] = React.useState(false);
    const [nbcMorningLocked, setNbcMorningLocked] = React.useState(false);
    const [nbcPrimeLocked, setNbcPrimeLocked] = React.useState(false);
    const [nbcOvernightLocked, setNbcOvernightLocked] = React.useState(false);
    const [nbcLateLocked, setNbcLateLocked] = React.useState(false);
    const [nbcExcluded, setNbcExcluded] = React.useState(false);
    const [nbcMorningExcluded, setNbcMorningExcluded] = React.useState(false);
    const [nbcPrimeExcluded, setNbcPrimeExcluded] = React.useState(false);
    const [nbcOvernightExcluded, setNbcOvernightExcluded] = React.useState(false);
    const [nbcLateExcluded, setNbcLateExcluded] = React.useState(false);

    const [bravoLocked, setBravoLocked] = React.useState(false);
    const [bravoMorningLocked, setBravoMorningLocked] = React.useState(false);
    const [bravoPrimeLocked, setBravoPrimeLocked] = React.useState(false);
    const [bravoOvernightLocked, setBravoOvernightLocked] = React.useState(false);
    const [bravoLateLocked, setBravoLateLocked] = React.useState(false);
    const [bravoExcluded, setBravoExcluded] = React.useState(false);
    const [bravoMorningExcluded, setBravoMorningExcluded] = React.useState(false);
    const [bravoPrimeExcluded, setBravoPrimeExcluded] = React.useState(false);
    const [bravoOvernightExcluded, setBravoOvernightExcluded] = React.useState(false);
    const [bravoLateExcluded, setBravoLateExcluded] = React.useState(false);

    const [otherLocked, setOtherLocked] = React.useState(false);
    const [otherMorningLocked, setOtherMorningLocked] = React.useState(false);
    const [otherPrimeLocked, setOtherPrimeLocked] = React.useState(false);
    const [otherOvernightLocked, setOtherOvernightLocked] = React.useState(false);
    const [otherLateLocked, setOtherLateLocked] = React.useState(false);
    const [otherExcluded, setOtherExcluded] = React.useState(false);
    const [otherMorningExcluded, setOtherMorningExcluded] = React.useState(false);
    const [otherPrimeExcluded, setOtherPrimeExcluded] = React.useState(false);
    const [otherOvernightExcluded, setOtherOvernightExcluded] = React.useState(false);
    const [otherLateExcluded, setOtherLateExcluded] = React.useState(false);

    const [msnbcLocked, setMsnbcLocked] = React.useState(false);
    const [msnbcMorningLocked, setMsnbcMorningLocked] = React.useState(false);
    const [msnbcPrimeLocked, setMsnbcPrimeLocked] = React.useState(false);
    const [msnbcOvernightLocked, setMsnbcOvernightLocked] = React.useState(false);
    const [msnbcLateLocked, setMsnbcLateLocked] = React.useState(false);
    const [msnbcExcluded, setMsnbcExcluded] = React.useState(false);
    const [msnbcMorningExcluded, setMsnbcMorningExcluded] = React.useState(false);
    const [msnbcPrimeExcluded, setMsnbcPrimeExcluded] = React.useState(false);
    const [msnbcOvernightExcluded, setMsnbcOvernightExcluded] = React.useState(false);
    const [msnbcLateExcluded, setMsnbcLateExcluded] = React.useState(false);
    const [viacomLocked, setViacomLocked] = React.useState(false);
    const [modifyTabState, setModifyTabState] = React.useState(modifyTabs[0].identifier);
    const [modifyActiveTab, setModifyActiveTab] = React.useState(modifyTabs[0]);
    const [modifyNBCbudget, setModifyNBCbudget] = React.useState('100000');
    const [modifyNBCmorningbudget, setModifyNBCmorningbudget] = React.useState('100000');
    const [modifyNBCprimebudget, setModifyNBCprimebudget] = React.useState('100000');
    const [modifyNBCovernightbudget, setModifyNBCovernightbudget] = React.useState('100000');
    const [modifyNBClatebudget, setModifyNBClatebudget] = React.useState('100000');
    const [nbcOptimized, setNbcOptimized] = React.useState(false);
    const [nbcMorningOptimized, setNbcMorningOptimized] = React.useState(false);
    const [nbcPrimeOptimized, setNbcPrimeOptimized] = React.useState(false);
    const [nbcOvernightOptimized, setNbcOvernightOptimized] = React.useState(false);
    const [nbcLateOptimized, setNbcLateOptimized] = React.useState(false);
    const [msnbcOptimized, setMsnbcOptimized] = React.useState(false);
    const [msnbcMorningOptimized, setMsnbcMorningOptimized] = React.useState(false);
    const [msnbcPrimeOptimized, setMsnbcPrimeOptimized] = React.useState(false);
    const [msnbcOvernightOptimized, setMsnbcOvernightOptimized] = React.useState(false);
    const [msnbcLateOptimized, setMsnbcLateOptimized] = React.useState(false);

    const [modifyBravobudget, setModifyBravobudget] = React.useState('2000');
    const [modifyBravomorningbudget, setModifyBravomorningbudget] = React.useState('1000');
    const [modifyBravoprimebudget, setModifyBravoprimebudget] = React.useState('2000');
    const [modifyBravoovernightbudget, setModifyBravoovernightbudget] = React.useState('1000');
    const [modifyBravolatebudget, setModifyBravolatebudget] = React.useState('2000');

    const [modifyOtherbudget, setModifyOtherbudget] = React.useState('2000');
    const [modifyOthermorningbudget, setModifyOthermorningbudget] = React.useState('1000');
    const [modifyOtherprimebudget, setModifyOtherprimebudget] = React.useState('2000');
    const [modifyOtherovernightbudget, setModifyOtherovernightbudget] = React.useState('1000');
    const [modifyOtherlatebudget, setModifyOtherlatebudget] = React.useState('2000');
    
    const [modifyMSNBCbudget, setModifyMSNBCbudget] = React.useState('100000');
    const [modifyMSNBCmorningbudget, setModifyMSNBCmorningbudget] = React.useState('100000');
    const [modifyMSNBCprimebudget, setModifyMSNBCprimebudget] = React.useState('100000');
    const [modifyMSNBCovernightbudget, setModifyMSNBCovernightbudget] = React.useState('100000');
    const [modifyMSNBClatebudget, setModifyMSNBClatebudget] = React.useState('100000');
    const [newScenarioName, setNewScenarioName] = React.useState('');
    const [scenarios, setScenarios] = React.useState(
        [
            {
                name: 'Scenario 1'
            },
            {
                name: 'Scenario 2'
            },
            {
                name: 'Scenario 3'
            },
            {
                name: 'Scenario 4'
            },
            {
                name: 'Scenario 5'
            }
        ]
    );
    const [notification, setNotification] = React.useState<NotificationState>({
        notificationOpen: false,
        notificationThemeValue: NotificationTheme.Success,
        notificationTitle: 'Success',
        customNotificationIcon: null,
        durationTime: '4000'
    });
    const [submitModalOpen, setSubmitModalOpen] = React.useState<boolean>(false);

    const toggleSubmitModal = (): void => {
        setSubmitModalOpen(!submitModalOpen);
    };

    function newScenarioNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setNewScenarioName(event.currentTarget.value);}
    }

    function onNbcBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyNBCbudget(event.currentTarget.value);}
    }
    function onNbcMorningBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyNBCmorningbudget(event.currentTarget.value);}
    }
    function onNbcPrimeBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyNBCprimebudget(event.currentTarget.value);}
    }
    function onNbcOvernightBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyNBCovernightbudget(event.currentTarget.value);}
    }
    function onNbcLateBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyNBClatebudget(event.currentTarget.value);}
    }

    function onBravoBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyBravobudget(event.currentTarget.value);}
    }
    function onBravoMorningBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyBravomorningbudget(event.currentTarget.value);}
    }
    function onBravoPrimeBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyBravoprimebudget(event.currentTarget.value);}
    }
    function onBravoOvernightBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyBravoovernightbudget(event.currentTarget.value);}
    }
    function onBravoLateBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyBravolatebudget(event.currentTarget.value);}
    }

    function onOtherBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyOtherbudget(event.currentTarget.value);}
    }
    function onOtherMorningBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyOthermorningbudget(event.currentTarget.value);}
    }
    function onOtherPrimeBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyOtherprimebudget(event.currentTarget.value);}
    }
    function onOtherOvernightBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyOtherovernightbudget(event.currentTarget.value);}
    }
    function onOtherLateBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyOtherlatebudget(event.currentTarget.value);}
    }
    
    function onMsnbcBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyMSNBCbudget(event.currentTarget.value);}
    }
    function onMsnbcMorningBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyMSNBCmorningbudget(event.currentTarget.value);}
    }
    function onMsnbcPrimeBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyMSNBCprimebudget(event.currentTarget.value);}
    }
    function onMsnbcOvernightBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyMSNBCovernightbudget(event.currentTarget.value);}
    }
    function onMsnbcLateBudgetChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {setModifyMSNBClatebudget(event.currentTarget.value);}
    }

    const onTabClick = (tab: ITabItem): void => {
        setTabState(tab.identifier);
    };
    const onModifyTabClick = (modifyTab: ITabItem): void => {
        setModifyTabState(modifyTab.identifier);
    };
    const onConstraintTabClick = (constraintTab: ITabItem): void => {
        setConstraintTab(constraintTab.identifier);
    };

    const onClearSearch = React.useCallback((): void => {
        setSearchValue('');
    }, [setSearchValue]);

    const newScenarioProcessing = true;

    const scenarioSections: Section = {
        'overview': {
            content: <div className="content-section-empty">Content for the Overview section</div>,
            identifier: 'overview'
        },
        'delivery': {
            content: <div className="content-section-empty">Content for the Delivery section</div>,
            identifier: 'delivery'
        },
        'linear-inventory': {
            content: (
                <>
                <div className="linear-delivery-content-container">
                    <div className="content-control-bar">
                        <Search placeholder="Search" onClear={onClearSearch} />
                    </div>
                    {currentScenario === 'Scenario 1' && 
                        <Panel className="linear-inventory-metric-panel">
                            <OptimizerValue metricValue="35 - 38%" />
                            <MetricGrid metricList={linearMetrics} />
                        </Panel>
                    }
                    {currentScenario === 'Scenario 2' && 
                        <Panel className="linear-inventory-metric-panel">
                            <OptimizerValue metricValue="15 - 20%" />
                            <MetricGrid metricList={linearMetrics} />
                        </Panel>
                    }
                    {currentScenario === 'Scenario 3' && 
                        <Panel className="linear-inventory-metric-panel">
                            <OptimizerValue metricValue="18 - 22%" />
                            <MetricGrid metricList={linearMetrics} />
                        </Panel>
                    }
                    {currentScenario === 'Scenario 4' && 
                        <Panel className="linear-inventory-metric-panel">
                            <OptimizerValue metricValue="30 - 35%" />
                            <MetricGrid metricList={linearMetrics} />
                        </Panel>
                    }
                    {currentScenario === 'Scenario 5' && 
                        <Panel className="linear-inventory-metric-panel">
                            <OptimizerValue metricValue="15 - 20%" />
                            <MetricGrid metricList={linearMetrics} />
                        </Panel>
                    }
                    {currentScenario != 'Scenario 1' && 
                    currentScenario != 'Scenario 2' && 
                    currentScenario != 'Scenario 3' && 
                    currentScenario != 'Scenario 4' && 
                    currentScenario != 'Scenario 5' && 
                        <Panel className="linear-inventory-metric-panel">
                            <OptimizerValue metricValue="15 - 20%" />
                            <MetricGrid metricList={linearMetrics} />
                        </Panel>
                    }
                    <Panel>
                        <div className="panel-head--border">
                            <span className="panel-head-title"><img src={openAPlogo} alt="Open AP" /></span>
                            <div className="panel-head-actions">
                                <Button theme={ButtonTheme.Primary} onClick={toggleSubmitModal}>Request from OpenAP</Button>
                                <IconButton icon={MenuEllipsis} size='lg' />
                            </div>
                        </div>
                        <div className="card-metrics">
                            <div className="metric-container">
                                <div className="metric">20M</div>
                                <div className="metric-label">Total P2+ Impressions</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">40M</div>
                                <div className="metric-label">Total Impressions</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">4M</div>
                                <div className="metric-label">Total HH Reach</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">30K</div>
                                <div className="metric-label">Total Units</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">$3.50</div>
                                <div className="metric-label">Avg. CPM</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">$500,000</div>
                                <div className="metric-label">Total Cost</div>
                            </div>
                        </div>
                        <ExpandableCard
                            className="va-grey-200--background expandable-card--parent mb-4"
                            isExpanded={true}
                            action={
                                <div className="ml-8 flex items-center">
                                    {!nbcuLocked &&  
                                    <Button theme={ButtonTheme.Secondary} 
                                        onClick={(): void => (
                                            setNbcuLocked(true), 
                                            setNbcLocked(true), 
                                            setMsnbcLocked(true),
                                            setNbcMorningLocked(true),
                                            setNbcPrimeLocked(true),
                                            setNbcOvernightLocked(true),
                                            setNbcLateLocked(true),
                                            setMsnbcMorningLocked(true),
                                            setMsnbcPrimeLocked(true),
                                            setMsnbcOvernightLocked(true),
                                            setMsnbcLateLocked(true)
                                        )}>
                                        <Signal icon={Unlock} /> Lock Deals
                                    </Button>
                                    }
                                    {nbcuLocked &&  
                                    <Button theme={ButtonTheme.Secondary} 
                                        onClick={(): void => (
                                            setNbcuLocked(false), 
                                            setNbcLocked(false), 
                                            setMsnbcLocked(false),
                                            setNbcMorningLocked(false),
                                            setNbcPrimeLocked(false),
                                            setNbcOvernightLocked(false),
                                            setNbcLateLocked(false),
                                            setMsnbcMorningLocked(false),
                                            setMsnbcPrimeLocked(false),
                                            setMsnbcOvernightLocked(false),
                                            setMsnbcLateLocked(false)
                                    )}>
                                        <Signal icon={Lock} /> Unlock Deals
                                    </Button>
                                    }
                                </div>
                            }
                            expandableContent={
                                <>
                                <div className="card-metrics">
                                    <div className="metric-container">
                                        <div className="metric">10M</div>
                                        <div className="metric-label">Total P2+ Impressions</div>
                                    </div>
                                    <div className="metric-container">
                                        <div className="metric">18.5K</div>
                                        <div className="metric-label">Total Units</div>
                                    </div>
                                    <div className="metric-container">
                                        <div className="metric">$275K</div>
                                        <div className="metric-label">Total Cost</div>
                                    </div>
                                    <div className="metric-container">
                                        <div className="metric">20M</div>
                                        <div className="metric-label">Total Impressions</div>
                                    </div>
                                    <div className="metric-container">
                                        <div className="metric">2M</div>
                                        <div className="metric-label">Total HH Reach</div>
                                    </div>
                                    <div className="metric-container">
                                        <div className="metric">$3.50</div>
                                        <div className="metric-label">Avg. CPM</div>
                                    </div>
                                </div>
                                    <div className="expandable-card-child">
                                        <ExpandableCard 
                                            className="va-grey-0--background" 
                                            isExpanded={true} 
                                            action={<Button theme={ButtonTheme.Link}>Save Publisher Notes</Button>}
                                            expandableContent={<TextField placeholder="Add any notes you may have for the publisher here"></TextField>}
                                        >  
                                            <div className="expandable-card-header"><span className="expandable-title--small">NBCU Notes (0)</span></div>
                                        </ExpandableCard>
                                    </div>
                                    <div className="expandable-card-child">
                                        <ExpandableCard 
                                            className="va-grey-0--background" 
                                            isExpanded={true}
                                            action={
                                                <div className="ml-8 flex items-center">
                                                    {!nbcLocked &&  
                                                    <Button theme={ButtonTheme.Secondary} 
                                                        onClick={(): void => (
                                                            setNbcLocked(true),
                                                            setNbcMorningLocked(true),
                                                            setNbcPrimeLocked(true),
                                                            setNbcOvernightLocked(true),
                                                            setNbcLateLocked(true)
                                                        )}>
                                                        <Signal icon={Unlock} /> Lock Deal
                                                    </Button>
                                                    }
                                                    {nbcLocked &&  
                                                    <Button theme={ButtonTheme.Secondary} 
                                                        onClick={(): void => (
                                                            setNbcLocked(false), 
                                                            setNbcuLocked(false),
                                                            setNbcMorningLocked(false),
                                                            setNbcPrimeLocked(false),
                                                            setNbcOvernightLocked(false),
                                                            setNbcLateLocked(false)
                                                        )}>
                                                        <Signal icon={Lock} /> Unlock Deal
                                                    </Button>
                                                    }
                                                </div>
                                            }
                                            expandableContent={<img src={nbcDealtable} alt="NBC Deal" />}
                                        >  
                                            <div className="expandable-card-header">
                                                <span className="expandable-title"><Signal icon={NBClogo} size={1.5} /> <span className="expandable-title-copy">NBC</span></span>
                                                <div className="card-metrics">
                                                    <div className="metric-container">
                                                        <div className="metric">7.5M</div>
                                                        <div className="metric-label">Total P2+ Impressions</div>
                                                    </div>
                                                    <div className="metric-container">
                                                        <div className="metric">875</div>
                                                        <div className="metric-label">Total Units</div>
                                                    </div>
                                                    <div className="metric-container">
                                                        <div className="metric">$175K</div>
                                                        <div className="metric-label">Total Cost</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ExpandableCard>
                                    </div>
                                    <div className="expandable-card-child">
                                        <ExpandableCard 
                                            className="va-grey-0--background" 
                                            isExpanded={true}
                                            action={
                                                <div className="ml-8 flex items-center">
                                                    {!msnbcLocked &&  
                                                    <Button theme={ButtonTheme.Secondary} onClick={(): void => (
                                                        setMsnbcLocked(true),
                                                        setMsnbcMorningLocked(true),
                                                        setMsnbcPrimeLocked(true),
                                                        setMsnbcOvernightLocked(true),
                                                        setMsnbcLateLocked(true)
                                                    )}>
                                                        <Signal icon={Unlock} /> Lock Deal
                                                    </Button>
                                                    }
                                                    {msnbcLocked &&  
                                                    <Button theme={ButtonTheme.Secondary} onClick={(): void => (
                                                        setMsnbcLocked(false), 
                                                        setNbcuLocked(false),
                                                        setMsnbcMorningLocked(false),
                                                        setMsnbcPrimeLocked(false),
                                                        setMsnbcOvernightLocked(false),
                                                        setMsnbcLateLocked(false)
                                                    )}>
                                                        <Signal icon={Lock} /> Unlock Deal
                                                    </Button>
                                                    }
                                                </div>
                                            }
                                            expandableContent={<img src={nbcDealtable} alt="NBC Deal" />}
                                        >  
                                            <div className="expandable-card-header">
                                                <span className="expandable-title"><Signal icon={NBClogo} size={1.5} /><span className="expandable-title-copy">MSNBC</span></span>
                                                <div className="card-metrics">
                                                    <div className="metric-container">
                                                        <div className="metric">7.5M</div>
                                                        <div className="metric-label">Total P2+ Impressions</div>
                                                    </div>
                                                    <div className="metric-container">
                                                        <div className="metric">875</div>
                                                        <div className="metric-label">Total Units</div>
                                                    </div>
                                                    <div className="metric-container">
                                                        <div className="metric">$175K</div>
                                                        <div className="metric-label">Total Cost</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ExpandableCard>
                                    </div>
                                </> 
                            }

                        >
                            <div className="expandable-card-header"><span className="expandable-title"><Signal icon={NBClogo} size={1.5} /> <span className="expandable-title-copy">NBCU</span></span></div>
                            
                        </ExpandableCard>
                        <ExpandableCard
                            isExpanded={false}
                            className="va-grey-200--background expandable-card--parent viacom-parent"
                            action={
                                <div className="ml-8 flex items-center">
                                    {!viacomLocked &&  
                                    <Button theme={ButtonTheme.Secondary} onClick={(): void => (setViacomLocked(true))}>
                                        <Signal icon={Unlock} /> Lock Deals
                                    </Button>
                                    }
                                    {viacomLocked &&  
                                    <Button theme={ButtonTheme.Secondary} onClick={(): void => (setViacomLocked(false))}>
                                        <Signal icon={Lock} /> Unlock Deals
                                    </Button>
                                    }
                                </div>
                            }
                            expandableContent={
                                <>
                                    <div className="card-metrics">
                                        <div className="metric-container">
                                            <div className="metric">10M</div>
                                            <div className="metric-label">Total P2+ Impressions</div>
                                        </div>
                                        <div className="metric-container">
                                            <div className="metric">18.5K</div>
                                            <div className="metric-label">Total Units</div>
                                        </div>
                                        <div className="metric-container">
                                            <div className="metric">$275K</div>
                                            <div className="metric-label">Total Cost</div>
                                        </div>
                                        <div className="metric-container">
                                            <div className="metric">20M</div>
                                            <div className="metric-label">Total Impressions</div>
                                        </div>
                                        <div className="metric-container">
                                            <div className="metric">2M</div>
                                            <div className="metric-label">Total HH Reach</div>
                                        </div>
                                        <div className="metric-container">
                                            <div className="metric">$3.50</div>
                                            <div className="metric-label">Avg. CPM</div>
                                        </div>
                                    </div>
                                    <div className="expandable-card-child">
                                        <ExpandableCard 
                                            className="va-grey-0--background" 
                                            isExpanded={true} 
                                            action={<Button theme={ButtonTheme.Link}>Save Publisher Notes</Button>}
                                            expandableContent={<TextField placeholder="Add any notes you may have for the publisher here"></TextField>}
                                        >  
                                            <div className="expandable-card-header"><span className="expandable-title--small">Viacom Notes (0)</span></div>
                                        </ExpandableCard>
                                    </div>
                                </>
                            }
                        >
                            <div className="expandable-card-header">
                                <div className="expandable-title expandable-title--rasterlogo">
                                    <img src={viacomLogo} alt="Viacom" className="viacom-logo" /> <span className="expandable-title-copy">Viacom</span>
                                </div>
                                <div className="card-metrics">
                                    <div className="metric-container">
                                        <div className="metric">7.5M</div>
                                        <div className="metric-label">Total P2+ Impressions</div>
                                    </div>
                                    <div className="metric-container">
                                        <div className="metric">875</div>
                                        <div className="metric-label">Total Units</div>
                                    </div>
                                    <div className="metric-container">
                                        <div className="metric">$175K</div>
                                        <div className="metric-label">Total Cost</div>
                                    </div>
                                </div>
                            </div>
                            </ExpandableCard>
                    </Panel>
                    <Panel>
                        <div className="panel-head--border">
                            <span className="panel-head-title">All Programming</span>
                            <div className="panel-head-actions">
                                <Button 
                                    theme={ButtonTheme.Secondary} 
                                    onClick={(): void => (
                                        setCurrentScreen('ModifyAndRun'),
                                        setModifyTabState(modifyTabs[1].identifier),
                                        setModifyActiveTab(modifyTabs[1])
                                    )}
                                >Explore Costs</Button>
                                <Button theme={ButtonTheme.Primary}>Download</Button>
                            </div>
                        </div>
                        <div className="card-metrics">
                            <div className="metric-container">
                                <div className="metric">20M</div>
                                <div className="metric-label">Total P2+ Impressions</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">40M</div>
                                <div className="metric-label">Total Impressions</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">4M</div>
                                <div className="metric-label">Total HH Reach</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">30K</div>
                                <div className="metric-label">Total Units</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">$3.50</div>
                                <div className="metric-label">Avg. CPM</div>
                            </div>
                            <div className="metric-container">
                                <div className="metric">$500,000</div>
                                <div className="metric-label">Total Cost</div>
                            </div>
                        </div>
                        <ExpandableCard
                            className="va-grey-200--background expandable-card--parent mb-4"
                            isExpanded={true}
                            expandableContent={
                                <ExpandableCard
                                    className="va-grey-0--background"
                                    isExpanded={true}
                                    expandableContent={
                                        <img src={bravoData} alt="Bravo data" />
                                    }
                                >
                                    <div className="expandable-card-header">
                                        <span className="expandable-title">Bravo</span>
                                        <div className="card-metrics card-metrics--no-actions">
                                            <div className="metric-container">
                                                <div className="metric">20M</div>
                                                <div className="metric-label">Total P2+ Impressions</div>
                                            </div>
                                            <div className="metric-container">
                                                <div className="metric">40M</div>
                                                <div className="metric-label">Total Impressions</div>
                                            </div>
                                            <div className="metric-container">
                                                <div className="metric">4M</div>
                                                <div className="metric-label">Total HH Reach</div>
                                            </div>
                                            <div className="metric-container">
                                                <div className="metric">30K</div>
                                                <div className="metric-label">Total Units</div>
                                            </div>
                                            <div className="metric-container">
                                                <div className="metric">$3.50</div>
                                                <div className="metric-label">Avg. CPM</div>
                                            </div>
                                            <div className="metric-container">
                                                <div className="metric">$4,400</div>
                                                <div className="metric-label">Total Cost</div>
                                            </div>
                                        </div>
                                    </div>
                                    </ExpandableCard>
                            }
                        >
                            <div className="expandable-card-header">
                                <span className="expandable-title">
                                    <Signal icon={NBClogo} size={1.5} /> <span className="expandable-title-copy">NBCU</span>
                                </span>
                                <div className="card-metrics card-metrics--no-actions">
                                    <div className="metric-container">
                                        <div className="metric">$4,400</div>
                                        <div className="metric-label">Total Cost</div>
                                    </div>
                                </div>
                            </div>
                        </ExpandableCard>
                    </Panel>
                </div>
                </>
            ),
            identifier: 'linear-inventory'
        },
        'summary': {
            content: <div className="content-section-empty">Content for the Summary section</div>,
            identifier: 'summary'
        }
    };
    const constraintSections: Section = {
        'inclusions': {
            content: (
                <div className="inclusions">
                    <img src={inclusionsExclusions} alt="Inclusions & Exclusions" />
                </div>
            ),
            identifier: 'inclusions'
        },
        'advanced': {
            content: <div className="advanced-constraints"><img src={advancedConstraints} alt="Advanced Constraints" /></div>,
            identifier: 'advanced'
        }
    };

    const modifySections: Section = {
        'openap': {
            content: (
                <div className="takeover-workflow-container-content">
                    <div className="modify-select-container">
                        <Select
                            inlineLabel={false}
                            label="View"
                            options={modifyViewOptions}
                            defaultValue={modifyViewOptions[0]}
                        />
                        <Select
                            inlineLabel={false}
                            label="View"
                            options={modifyEnterbyOptions}
                            defaultValue={modifyEnterbyOptions[0]}
                        />
                    </div>
                    <Search placeholder="Typed Search" />
                    <div className="modify-table-header">
                        <div className="modify-table-th column-1">Dayparts by Network</div>
                        <div className="modify-table-th column-2">Budget</div>
                        <div className="modify-table-th column-3">Estimated Impressions</div>
                        <div className="modify-table-th column-toggles">Open Optimization</div>
                    </div>
                    
                    {!nbcExcluded && <Panel>
                        {!nbcExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">NBC</div>
                                <div className="modify-table-cell column-budget">
                                    {!nbcOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyNBCbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyNBCbudget) / 1000000 * 100)}%</span>
                                            {!nbcLocked ? (
                                                <IconButton 
                                                    icon={Lock} 
                                                    onClick={(): void => (
                                                        setNbcLocked(true),
                                                        setNbcMorningLocked(true),
                                                        setNbcPrimeLocked(true),
                                                        setNbcOvernightLocked(true),
                                                        setNbcLateLocked(true)
                                                    )} />
                                                ): (
                                                    <IconButton 
                                                    icon={Unlock} 
                                                    onClick={(): void => (
                                                        setNbcLocked(false),
                                                        setNbcMorningLocked(false),
                                                        setNbcPrimeLocked(false),
                                                        setNbcOvernightLocked(false),
                                                        setNbcLateLocked(false)
                                                        )} />
                                                )}
                                            </div>
                                        )}
                                        disabled={nbcLocked}
                                        onChange={onNbcBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!nbcOptimized ? (parseInt(modifyNBCbudget) * 9).toLocaleString() : ''}
                                </div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={nbcOptimized}
                                        id="nbc-optimized-toggle"
                                        name="nbc-optimized-toggle"
                                        onChange={(): void => (
                                            setNbcOptimized(!nbcOptimized),
                                            (nbcOptimized ? setNbcMorningOptimized(false) : setNbcMorningOptimized(true)),
                                            (nbcOptimized ? setNbcPrimeOptimized(false) : setNbcPrimeOptimized(true)),
                                            (nbcOptimized ? setNbcOvernightOptimized(false) : setNbcOvernightOptimized(true)),
                                            (nbcOptimized ? setNbcLateOptimized(false) : setNbcLateOptimized(true))
                                            
                                            )}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (
                                                    setNbcMorningExcluded(true),
                                                    setNbcPrimeExcluded(true),
                                                    setNbcOvernightExcluded(true),
                                                    setNbcLateExcluded(true),
                                                    setNbcExcluded(true) 
                                                    )
                                                } /></div>
                        </div>}
                        {!nbcMorningExcluded && <div className="modify-table-row nbc-early-morning">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Early Morning</div>
                                <div className="modify-table-cell column-budget">
                                    {!nbcMorningOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyNBCmorningbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyNBCmorningbudget) / 1000000 * 100)}%</span>
                                            <IconButton 
                                                icon={nbcMorningLocked ? Lock : Unlock} 
                                                onClick={(): void => (
                                                    setNbcMorningLocked(!nbcMorningLocked),
                                                    nbcLocked ? setNbcLocked(false) : setNbcLocked(nbcLocked)
                                                )} />
                                            </div>
                                        )}
                                        disabled={nbcMorningLocked}
                                        onChange={onNbcMorningBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!nbcMorningOptimized ? (parseInt(modifyNBCmorningbudget) * 7).toLocaleString() : ''}
                                </div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={nbcMorningOptimized}
                                        id="nbc-morning-toggle"
                                        name="nbc-morning-toggle"
                                        onChange={(): void => setNbcMorningOptimized(!nbcMorningOptimized)}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setNbcMorningExcluded(true))} /></div>
                        </div>}
                        {!nbcPrimeExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Prime Access / Prime</div>
                                <div className="modify-table-cell column-budget">
                                    {!nbcPrimeOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyNBCprimebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyNBCprimebudget) / 1000000 * 100)}%</span>
                                            <IconButton icon={nbcPrimeLocked ? Lock : Unlock} onClick={(): void => (setNbcPrimeLocked(!nbcPrimeLocked),
                                                    nbcLocked ? setNbcLocked(false) : setNbcLocked(nbcLocked))} />
                                            </div>
                                        )}
                                        disabled={nbcPrimeLocked}
                                        onChange={onNbcPrimeBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!nbcPrimeOptimized ? (parseInt(modifyNBCprimebudget) * 8).toLocaleString() : ''}
                                </div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={nbcPrimeOptimized}
                                        id="nbc-prime-toggle"
                                        name="nbc-prime-toggle"
                                        onChange={(): void => setNbcPrimeOptimized(!nbcPrimeOptimized)}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setNbcPrimeExcluded(true))} /></div>
                        </div>}
                        {!nbcOvernightExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Overnight</div>
                                <div className="modify-table-cell column-budget">
                                    {!nbcOvernightOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyNBCovernightbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyNBCovernightbudget) / 1000000 * 100)}%</span>
                                            <IconButton icon={nbcOvernightLocked ? Lock : Unlock} onClick={(): void => (setNbcOvernightLocked(!nbcOvernightLocked),
                                                    nbcLocked ? setNbcLocked(false) : setNbcLocked(nbcLocked))} />
                                            </div>
                                        )}
                                        disabled={nbcOvernightLocked}
                                        onChange={onNbcOvernightBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!nbcOvernightOptimized ? (parseInt(modifyNBCovernightbudget) * 5).toLocaleString(): ''}
                                </div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={nbcOvernightOptimized}
                                        id="nbc-overnight-toggle"
                                        name="nbc-overnight-toggle"
                                        onChange={(): void => setNbcOvernightOptimized(!nbcOvernightOptimized)}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setNbcOvernightExcluded(true))} /></div>
                        </div>}
                        {!nbcLateExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Late Night</div>
                                <div className="modify-table-cell column-budget">
                                    {!nbcLateOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyNBClatebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyNBClatebudget) / 1000000 * 100)}%</span>
                                            <IconButton icon={nbcLateLocked ? Lock : Unlock} onClick={(): void => (setNbcLateLocked(!nbcLateLocked),
                                                    nbcLocked ? setNbcLocked(false) : setNbcLocked(nbcLocked))} />
                                            </div>
                                        )}
                                        disabled={nbcLateLocked}
                                        onChange={onNbcLateBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!nbcLateOptimized ? (parseInt(modifyNBClatebudget) * 6).toLocaleString() : ''}
                                </div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={nbcLateOptimized}
                                        id="nbc-late-toggle"
                                        name="nbc-late-toggle"
                                        onChange={(): void => setNbcLateOptimized(!nbcLateOptimized)}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setNbcLateExcluded(true))} /></div>
                        </div>}
                    </Panel>}

                    {!msnbcExcluded && <Panel>
                        {!msnbcExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">MSNBC</div>
                                <div className="modify-table-cell column-budget">
                                    {!msnbcOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyMSNBCbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyMSNBCbudget) / 1000000 * 100)}%</span>
                                            {!msnbcLocked ? (
                                                <IconButton icon={Lock} onClick={(): void => (
                                                    setMsnbcLocked(true),
                                                    setMsnbcMorningLocked(true),
                                                    setMsnbcPrimeLocked(true),
                                                    setMsnbcOvernightLocked(true),
                                                    setMsnbcLateLocked(true)
                                                )} />
                                                ): (
                                                <IconButton icon={Unlock} onClick={(): void => (
                                                    setMsnbcLocked(false),
                                                    setMsnbcMorningLocked(false),
                                                    setMsnbcPrimeLocked(false),
                                                    setMsnbcOvernightLocked(false),
                                                    setMsnbcLateLocked(false)
                                                )} /> 
                                                )
                                            }
                                            </div>
                                        )}
                                        disabled={msnbcLocked}
                                        onChange={onMsnbcBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!msnbcOptimized ? (parseInt(modifyMSNBCbudget) * 9).toLocaleString() : ''}</div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={msnbcOptimized}
                                        id="msnbc-optimized-toggle"
                                        name="msnbc-optimized-toggle"
                                        onChange={(): void => (
                                            setMsnbcOptimized(!msnbcOptimized),
                                            (msnbcOptimized ? setMsnbcMorningOptimized(false) : setMsnbcMorningOptimized(true)),
                                            (msnbcOptimized ? setMsnbcPrimeOptimized(false) : setMsnbcPrimeOptimized(true)),
                                            (msnbcOptimized ? setMsnbcOvernightOptimized(false) : setMsnbcOvernightOptimized(true)),
                                            (msnbcOptimized ? setMsnbcLateOptimized(false) : setMsnbcLateOptimized(true))
                                            
                                            )}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (
                                                    setMsnbcMorningExcluded(true),
                                                    setMsnbcPrimeExcluded(true),
                                                    setMsnbcOvernightExcluded(true),
                                                    setMsnbcLateExcluded(true),
                                                    setMsnbcExcluded(true) 
                                                    )
                                                } /></div>
                        </div>}
                        {!msnbcMorningExcluded && <div className="modify-table-row msnbc-early-morning">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Early Morning</div>
                                <div className="modify-table-cell column-budget">
                                    {!msnbcMorningOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyMSNBCmorningbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyMSNBCmorningbudget) / 1000000 * 100)}%</span>
                                            <IconButton icon={msnbcMorningLocked ? Lock : Unlock} onClick={(): void => (setMsnbcMorningLocked(!msnbcMorningLocked),
                                                    nbcLocked ? setMsnbcLocked(false) : setMsnbcLocked(nbcLocked))} />
                                            </div>
                                        )}
                                        disabled={msnbcMorningLocked}
                                        onChange={onMsnbcMorningBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!msnbcMorningOptimized ? (parseInt(modifyMSNBCmorningbudget) * 7).toLocaleString(): ''}</div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={msnbcMorningOptimized}
                                        id="msnbc-morning-toggle"
                                        name="msnbc-morning-toggle"
                                        onChange={(): void => setMsnbcMorningOptimized(!msnbcMorningOptimized)}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setMsnbcMorningExcluded(true))} /></div>
                        </div>}
                        {!msnbcPrimeExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Prime Access / Prime</div>
                                <div className="modify-table-cell column-budget">
                                    {!msnbcPrimeOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyMSNBCprimebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyMSNBCprimebudget) / 1000000 * 100)}%</span>
                                            <IconButton icon={msnbcPrimeLocked ? Lock : Unlock} onClick={(): void => (setMsnbcPrimeLocked(!msnbcPrimeLocked),
                                                    nbcLocked ? setMsnbcLocked(false) : setMsnbcLocked(nbcLocked))} />
                                            </div>
                                        )}
                                        disabled={msnbcPrimeLocked}
                                        onChange={onMsnbcPrimeBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!msnbcPrimeOptimized ? (parseInt(modifyMSNBCprimebudget) * 8).toLocaleString() : ''}</div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={msnbcPrimeOptimized}
                                        id="msnbc-prime-toggle"
                                        name="msnbc-prime-toggle"
                                        onChange={(): void => setMsnbcPrimeOptimized(!msnbcPrimeOptimized)}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setMsnbcPrimeExcluded(true))} /></div>
                        </div>}
                        {!msnbcOvernightExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Overnight</div>
                                <div className="modify-table-cell column-budget">
                                    {!msnbcOvernightOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyMSNBCovernightbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyMSNBCovernightbudget) / 1000000 * 100)}%</span>
                                            <IconButton icon={msnbcOvernightLocked ? Lock : Unlock} onClick={(): void => (setMsnbcOvernightLocked(!msnbcOvernightLocked),
                                                    nbcLocked ? setMsnbcLocked(false) : setMsnbcLocked(nbcLocked))} />
                                            </div>
                                        )}
                                        disabled={msnbcOvernightLocked}
                                        onChange={onMsnbcOvernightBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!msnbcOvernightOptimized ? (parseInt(modifyMSNBCovernightbudget) * 5).toLocaleString() : ''}</div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={msnbcOvernightOptimized}
                                        id="msnbc-overnight-toggle"
                                        name="msnbc-overnight-toggle"
                                        onChange={(): void => setMsnbcOvernightOptimized(!msnbcOvernightOptimized)}
                                    />
                                </div>   
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setMsnbcOvernightExcluded(true))} /></div>
                        </div>}
                        {!msnbcLateExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Late Night</div>
                                <div className="modify-table-cell column-budget">
                                    {!msnbcLateOptimized ? (<TextField 
                                        prepend="$"
                                        value={modifyMSNBClatebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyMSNBClatebudget) / 1000000 * 100)}%</span>
                                            <IconButton icon={msnbcLateLocked ? Lock : Unlock} onClick={(): void => (setMsnbcLateLocked(!msnbcLateLocked),
                                                    nbcLocked ? setMsnbcLocked(false) : setMsnbcLocked(nbcLocked))} />
                                            </div>
                                        )}
                                        disabled={msnbcLateLocked}
                                        onChange={onMsnbcLateBudgetChange}
                                    />) : (
                                        <>
                                        <Signal icon={checkCircle} /> Optimized
                                        </>
                                    )}
                                </div>
                                <div className="modify-table-cell column-3">
                                    {!msnbcLateOptimized ? (parseInt(modifyMSNBClatebudget) * 6).toLocaleString() : ''}</div>
                                <div className="modify-table-cell column-toggles">
                                    <Toggle
                                        checked={msnbcLateOptimized}
                                        id="msnbc-late-toggle"
                                        name="msnbc-late-toggle"
                                        onChange={(): void => setMsnbcLateOptimized(!msnbcLateOptimized)}
                                    />
                                </div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setMsnbcLateExcluded(true))} /></div>
                        </div>}
                    </Panel>}

                    <Button theme={ButtonTheme.Secondary} isFullWidth >Add Network</Button>

                </div>
            ),
            identifier: 'openap'
        },
        'linear': {
            content: (
                <div className="takeover-workflow-container-content">
                    <div className="modify-select-container">
                        <Select
                            inlineLabel={false}
                            label="View"
                            options={modifyViewOptions}
                            defaultValue={modifyViewOptions[0]}
                        />
                        <Select
                            inlineLabel={false}
                            label="View"
                            options={modifyEnterbyOptions}
                            defaultValue={modifyEnterbyOptions[0]}
                        />
                    </div>
                    <Search placeholder="Typed Search" />
                    <div className="modify-table-header">
                        <div className="modify-table-th column-1">Dayparts by Network</div>
                        <div className="modify-table-th column-budget-range">Budget Range</div>
                        <div className="modify-table-th column-2">Budget</div>
                        <div className="modify-table-th column-3">Estimated Impressions</div>
                    </div>
                    
                    {!bravoExcluded && <Panel>
                        {!bravoExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Bravo</div>
                                <div className="modify-table-cell column-budget-range">$1,420 - $3,500</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyBravobudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyBravobudget) / 3500 * 100)}%</span>
                                            {!bravoLocked ? (
                                                <IconButton icon={Lock} onClick={(): void => (
                                                    setBravoLocked(true),
                                                    setBravoMorningLocked(true),
                                                    setBravoPrimeLocked(true),
                                                    setBravoOvernightLocked(true),
                                                    setBravoLateLocked(true)
                                                )} />
                                            ):(
                                                <IconButton icon={Unlock} onClick={(): void => (
                                                    setBravoLocked(false),
                                                    setBravoMorningLocked(false),
                                                    setBravoPrimeLocked(false),
                                                    setBravoOvernightLocked(false),
                                                    setBravoLateLocked(false)
                                                )} />
                                            )}
                                            </div>
                                        )}
                                        disabled={bravoLocked}
                                        onChange={onBravoBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyBravobudget) * 9).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (
                                                    setBravoMorningExcluded(true),
                                                    setBravoPrimeExcluded(true),
                                                    setBravoOvernightExcluded(true),
                                                    setBravoLateExcluded(true),
                                                    setBravoExcluded(true) 
                                                    )
                                                } /></div>
                        </div>}
                        {!bravoMorningExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Early Morning</div>
                                <div className="modify-table-cell column-budget-range">$827 - $1,250</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyBravomorningbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyBravomorningbudget) / 1250 * 100)}%</span>
                                            <IconButton icon={bravoMorningLocked ? Lock : Unlock} onClick={(): void => (setBravoMorningLocked(!bravoMorningLocked),
                                                    bravoLocked ? setBravoLocked(false) : setBravoLocked(bravoLocked))} />
                                            </div>
                                        )}
                                        disabled={bravoMorningLocked}
                                        onChange={onBravoMorningBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyBravomorningbudget) * 7).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setBravoMorningExcluded(true))} /></div>
                        </div>}
                        {!bravoPrimeExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Prime Access / Prime</div>
                                <div className="modify-table-cell column-budget-range">$1,420 - $3,500</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyBravoprimebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyBravoprimebudget) / 3500 * 100)}%</span>
                                            <IconButton icon={bravoPrimeLocked ? Lock : Unlock} onClick={(): void => (setBravoPrimeLocked(!bravoPrimeLocked),
                                                    bravoLocked ? setBravoLocked(false) : setBravoLocked(bravoLocked))} />
                                            </div>
                                        )}
                                        disabled={bravoPrimeLocked}
                                        onChange={onBravoPrimeBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyBravoprimebudget) * 8).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setBravoPrimeExcluded(true))} /></div>
                        </div>}
                        {!bravoOvernightExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Overnight</div>
                                <div className="modify-table-cell column-budget-range">$750 - $1,200</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyBravoovernightbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyBravoovernightbudget) / 1200 * 100)}%</span>
                                            <IconButton icon={bravoOvernightLocked ? Lock : Unlock} onClick={(): void => (setBravoOvernightLocked(!bravoOvernightLocked),
                                                    bravoLocked ? setBravoLocked(false) : setBravoLocked(bravoLocked))} />
                                            </div>
                                        )}
                                        disabled={bravoOvernightLocked}
                                        onChange={onBravoOvernightBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyBravoovernightbudget) * 5).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setBravoOvernightExcluded(true))} /></div>
                        </div>}
                        {!bravoLateExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Late Night</div>
                                <div className="modify-table-cell column-budget-range">$1,420 - $3,500</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyBravolatebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyBravolatebudget) / 3500 * 100)}%</span>
                                            <IconButton icon={bravoLateLocked ? Lock : Unlock} onClick={(): void => (setBravoLateLocked(!bravoLateLocked),
                                                    bravoLocked ? setBravoLocked(false) : setBravoLocked(bravoLocked))} />
                                            </div>
                                        )}
                                        disabled={bravoLateLocked}
                                        onChange={onBravoLateBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyBravolatebudget) * 6).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setBravoLateExcluded(true))} /></div>
                        </div>}
                    </Panel>}

                    {!otherExcluded && <Panel>
                        {!otherExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Other Network</div>
                                <div className="modify-table-cell column-budget-range">$1,420 - $3,500</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyOtherbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyOtherbudget) / 3500 * 100)}%</span>
                                            {!otherLocked ? (
                                                <IconButton icon={Lock} onClick={(): void => (
                                                    setOtherLocked(true),
                                                    setOtherMorningLocked(true),
                                                    setOtherPrimeLocked(true),
                                                    setOtherOvernightLocked(true),
                                                    setOtherLateLocked(true)
                                                )} />
                                            ):(
                                                <IconButton icon={Unlock} onClick={(): void => (
                                                    setOtherLocked(false),
                                                    setOtherMorningLocked(false),
                                                    setOtherPrimeLocked(false),
                                                    setOtherOvernightLocked(false),
                                                    setOtherLateLocked(false)
                                                )} />
                                            )}
                                            </div>
                                        )}
                                        disabled={otherLocked}
                                        onChange={onOtherBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyOtherbudget) * 9).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (
                                                    setOtherMorningExcluded(true),
                                                    setOtherPrimeExcluded(true),
                                                    setOtherOvernightExcluded(true),
                                                    setOtherLateExcluded(true),
                                                    setOtherExcluded(true) 
                                                    )
                                                } /></div>
                        </div>}
                        {!otherMorningExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Early Morning</div>
                                <div className="modify-table-cell column-budget-range">$850 - $1,400</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyOthermorningbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyOthermorningbudget) / 1400 * 100)}%</span>
                                            <IconButton icon={otherMorningLocked ? Lock : Unlock} onClick={(): void => (setOtherMorningLocked(!otherMorningLocked),
                                                    otherLocked ? setOtherLocked(false) : setOtherLocked(otherLocked))} />
                                            </div>
                                        )}
                                        disabled={otherMorningLocked}
                                        onChange={onOtherMorningBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyOthermorningbudget) * 7).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setOtherMorningExcluded(true))} /></div>
                        </div>}
                        {!otherPrimeExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Prime Access / Prime</div>
                                <div className="modify-table-cell column-budget-range">$1,420 - $3,500</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyOtherprimebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyOtherprimebudget) / 3500 * 100)}%</span>
                                            <IconButton icon={otherPrimeLocked ? Lock : Unlock} onClick={(): void => (setOtherPrimeLocked(!otherPrimeLocked),
                                                    otherLocked ? setOtherLocked(false) : setOtherLocked(otherLocked))} />
                                            </div>
                                        )}
                                        disabled={otherPrimeLocked}
                                        onChange={onOtherPrimeBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyOtherprimebudget) * 8).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setOtherPrimeExcluded(true))} /></div>
                        </div>}
                        {!otherOvernightExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Overnight</div>
                                <div className="modify-table-cell column-budget-range">$750 - $1,300</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyOtherovernightbudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyOtherovernightbudget) / 1300 * 100)}%</span>
                                            <IconButton icon={otherOvernightLocked ? Lock : Unlock} onClick={(): void => (setOtherOvernightLocked(!otherOvernightLocked),
                                                    otherLocked ? setOtherLocked(false) : setOtherLocked(otherLocked))} />
                                            </div>
                                        )}
                                        disabled={otherOvernightLocked}
                                        onChange={onOtherOvernightBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyOtherovernightbudget) * 5).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setOtherOvernightExcluded(true))} /></div>
                        </div>}
                        {!otherLateExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Late Night</div>
                                <div className="modify-table-cell column-budget-range">$1,120 - $3,200</div>
                                <div className="modify-table-cell column-budget">
                                    <TextField 
                                        prepend="$"
                                        value={modifyOtherlatebudget}
                                        textFieldType={TextFieldType.Number}
                                        append={(
                                            <div className="flex items-center">
                                            <span className="budget-percent">{Math.round(parseInt(modifyOtherlatebudget) / 3200 * 100)}%</span>
                                            <IconButton icon={otherLateLocked ? Lock : Unlock} onClick={(): void => (setOtherLateLocked(!otherLateLocked),
                                                    otherLocked ? setOtherLocked(false) : setOtherLocked(otherLocked))} />
                                            </div>
                                        )}
                                        disabled={otherLateLocked}
                                        onChange={onOtherLateBudgetChange}
                                    />
                                </div>
                                <div className="modify-table-cell column-3">{(parseInt(modifyOtherlatebudget) * 6).toLocaleString()}</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Clear} onClick={(): void => (setOtherLateExcluded(true))} /></div>
                        </div>}
                    </Panel>}

                    <Button theme={ButtonTheme.Secondary} isFullWidth >Add Network</Button>

                </div>
            ),
            identifier: 'linear'
        },
        'exclusions': {
            content:(
                <div className="takeover-workflow-container-content">
                <Search placeholder="Typed Search" className="mb-4" />
                    {(nbcExcluded || nbcMorningExcluded || nbcPrimeExcluded || nbcOvernightExcluded || nbcLateExcluded) && <Panel>
                        <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">NBC</div>
                            </div>
                            <div className="modify-table-cell column-remove">
                                <IconButton icon={Add} 
                                    onClick={(): void => (
                                        setNbcExcluded(false), 
                                        setNbcMorningExcluded(false),
                                        setNbcPrimeExcluded(false),
                                        setNbcOvernightExcluded(false),
                                        setNbcLateExcluded(false)
                                        )
                                    } />
                            </div>
                        </div>
                        {nbcMorningExcluded && <div className="modify-table-row nbc-early-morning">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Early Morning</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setNbcMorningExcluded(false))} /></div>
                        </div>}
                        {nbcPrimeExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Prime Access / Prime</div>
                                
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setNbcPrimeExcluded(false))} /></div>
                        </div>}
                        {nbcOvernightExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Overnight</div>
                                
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setNbcOvernightExcluded(false))} /></div>
                        </div>}
                        {nbcLateExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Late Night</div>
                                
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setNbcLateExcluded(false))} /></div>
                        </div>}
                    </Panel>}

                    {(msnbcExcluded || msnbcMorningExcluded || msnbcPrimeExcluded || msnbcOvernightExcluded || msnbcLateExcluded) && <Panel>
                        <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">MSNBC</div>
                            </div>
                            <div className="modify-table-cell column-remove">
                                <IconButton icon={Add} 
                                    onClick={(): void => (
                                        setMsnbcExcluded(false), 
                                        setMsnbcMorningExcluded(false),
                                        setMsnbcPrimeExcluded(false),
                                        setMsnbcOvernightExcluded(false),
                                        setMsnbcLateExcluded(false)
                                        )
                                    } />
                            </div>
                        </div>
                        {msnbcMorningExcluded && <div className="modify-table-row msnbc-early-morning">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Early Morning</div>
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setMsnbcMorningExcluded(false))} /></div>
                        </div>}
                        {msnbcPrimeExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Prime Access / Prime</div>
                                
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setMsnbcPrimeExcluded(false))} /></div>
                        </div>}
                        {msnbcOvernightExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Overnight</div>
                                
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setMsnbcOvernightExcluded(false))} /></div>
                        </div>}
                        {msnbcLateExcluded && <div className="modify-table-row">
                            <div className="content-columns">
                                <div className="modify-table-cell column-1">Late Night</div>
                                
                            </div>
                            <div className="modify-table-cell column-remove"><IconButton icon={Add} onClick={(): void => (setMsnbcLateExcluded(false))} /></div>
                        </div>}
                    </Panel>}
                    </div>
            ),
            identifier: 'exclusioins'
        }
    };

    const currentTab = tabState;
    
    const createNewScenarioClick = (): void => {
        setCurrentScreen('Scenario');
        setScenarios([...scenarios, { name: newScenarioName}]);
        setTimeout((): void => {
            setNotification({...notification, notificationOpen: true})
        }, 100);
        setTimeout((): void => {
            setNewScenarioName('');
        }, 9000);
    };

    return (
        <>
        <div className="plat-container">
            <TitleBar 
                title="Q4 Investment Plan"
                action={
                    <IconButton icon={Clear} href="/ux-vision/buy" size="lg" />
                }
                />
        </div>
        {currentScreen === "Comparison" && (
            <div className="comparison-container" >
                <h1 className="u-title-2">Q4 Investment Plan</h1>
                <div className="comparison-card-container">
                    <ComparisonCard 
                        header="Best Household Reach"
                        metric="19,701,230"
                        metricLabel="HH Reach"
                        action={
                            <Button
                                isFullWidth
                                theme={ButtonTheme.Primary}
                                onClick={(): void => (
                                    setCurrentScreen('Scenario'),
                                    setCurrentScenario('Scenario 1')
                                )} 
                            >
                            <Signal icon={AwardIcon}></Signal>
                            View Scenario 1</Button>
                        }
                    />
                    <ComparisonCard 
                        header="Best On-Target CPM"
                        metric="$1.30"
                        metricLabel="CPM"
                        action={
                            <Button
                                isFullWidth
                                theme={ButtonTheme.Primary}
                                onClick={(): void => (
                                    setCurrentScreen('Scenario'),
                                    setCurrentScenario('Scenario 5')
                                )} 
                            >
                            <Signal icon={AwardIcon}></Signal>
                            View Scenario 5</Button>
                        }
                    />
                    <ComparisonCard 
                        header="Best Advanced Audience TRP"
                        metric="$4,915.14"
                        metricLabel="HH Reach"
                        action={
                            <Button
                                isFullWidth
                                theme={ButtonTheme.Primary}
                                onClick={(): void => (
                                    setCurrentScreen('Scenario'),
                                    setCurrentScenario('Scenario 2')
                                )} 
                            >
                            <Signal icon={AwardIcon}></Signal>
                            View Scenario 2</Button>
                        }
                    />
                    <ComparisonCard 
                        header="Best Avg Optimal Frequency"
                        metric="4x"
                        metricLabel="Optimal Frequency"
                        action={
                            <Button
                                isFullWidth
                                theme={ButtonTheme.Primary}
                                onClick={(): void => (
                                    setCurrentScreen('Scenario'),
                                    setCurrentScenario('Scenario 4')
                                )} 
                            >
                            <Signal icon={AwardIcon}></Signal>
                            View Scenario 4</Button>
                        }
                    />
                </div>
                    <img src={comparisonChart} className="comparison-chart-table-image" />
            </div>
        )}
        {currentScreen === "Scenario" && (
            <>
            <div className="scenario-container" >
                <div className="leftpanel">
                    <Button className="comparison-link"
                        theme={ButtonTheme.Link}
                        isFullWidth
                        onClick={(): void => (
                            setCurrentScreen('Comparison')
                        )} 
                    >View Scenario Comparison</Button>
                    {scenarios.map((scenario, index) => (
                        <CardNav 
                            title={scenario.name}
                            isSelected={currentScenario === scenario.name}
                            onClick={(): void => setCurrentScenario(scenario.name)}
                            key={index}
                            isExpanded
                            className={cx({'disabled': scenario.name === newScenarioName})}
                        >
                            {scenario.name === newScenarioName ? (
                                <div className="cardnav-processing">Processing...</div>
                            ) : (
                            <div className="cardnav-table">
                                <div className="cardnav-table-metric">
                                    <span className="label">HH Reach</span>
                                    <span className="metric">19.7M</span>
                                </div>
                                <div className="cardnav-table-metric">
                                    <span className="label">TRP</span>
                                    <span className="metric">568</span>
                                </div>
                                <div className="cardnav-table-metric">
                                    <span className="label">CPR</span>
                                    <span className="metric">$0.14</span>
                                </div>
                                <div className="cardnav-table-metric">
                                    <span className="label">CPP</span>
                                    <span className="metric">$4,915.14</span>
                                </div>
                            </div>
                            )}
                        </CardNav>
                        
                    ))}
                    <Button 
                        theme={ButtonTheme.Secondary} 
                        isFullWidth={true}
                        onClick={(): void => (
                            setCurrentScreen('TakeOver'),
                            setSelectionStart('')
                        )}
                    >Create Scenario</Button>
                </div>
                <div className="scenario-view">
                    <h1 className="u-title-2">{currentScenario}</h1>
                    <Tabs onClick={onTabClick} tabs={scenarioTabs} activeTab={scenarioTabs[2]} />
                    <div className="tabs-content-container">
                        {scenarioTabs.map(
                            (tab: ITabItem): React.ReactNode => (
                                <section
                                    aria-labelledby={`${tab.identifier}-tab`}
                                    className="mt-3 mb-6"
                                    id={tab.identifier}
                                    key={tab.identifier}
                                    role="tabpanel"
                                    style={{
                                        display:
                                            currentTab === tab.identifier
                                                ? 'block'
                                                : 'none'
                                    }}
                                >
                                    {scenarioSections[`${tab.identifier}`].content}
                                </section>
                            )
                        )}
                    </div>
                </div>
            </div>
            <ActionBar 
                action={(
                    <>
                        <Button
                            dataUI="secondary"
                            href="/ux-vision"
                            theme={ButtonTheme.Secondary}
                        >
                            Close
                        </Button>
                        <Button
                            dataUI="primary"
                            theme={ButtonTheme.Primary}
                            onClick={(): void => (
                                setSelectionStart(currentScenario),
                                setCurrentScreen('ModifyAndRun'),
                                setModifyTabState(modifyTabs[0].identifier),
                                setModifyActiveTab(modifyTabs[0])
                            )}
                        >
                            Modify and Run New Scenario
                        </Button>
                    </>
                )}
                className="scenario-footer"
            />
            <Notification
                customIcon={null}
                duration={parseFloat(notification.durationTime)}
                isOpen={notification.notificationOpen}
                onHide={(): void => setNotification({...notification, notificationOpen: false})}
                theme={notification.notificationThemeValue}
                title={notification.notificationTitle}
            >
                {newScenarioName} was created and is now processing.
            </Notification>
            <Modal
                isLightContent
                isOpen={submitModalOpen}
                maxHeight='500px'
                maxWidth='420px'
                onHide={toggleSubmitModal}
            >
                <img src={submitModalContent} className="submit-modal-content" alt="Submit to OpenAP" />
            </Modal>
            </>
        )}
        {currentScreen === "TakeOver" && (
            
            <div className="takeover-container">
                <IconButton className="takeover-close" icon={Clear} size="lg" onClick={(): void => (setCurrentScreen('Scenario'))} />
                <div className="takeover-start-container">
                    <div className="takeover-title">Select a Scenario to Start from</div>
                    <div className="takeover-subtitle">We’ll use all of your original Investment Plan settings, here you’ll be able to modify the constraints.</div>
                    <div className="takeover-start-selections">
                        {/* <button className={
                                    cx('takeover-selection new-selection', {
                                        'selected': selectionStart === 'new'
                                    })
                                }
                                onClick={(): void => (
                                    setSelectionStart('new')
                                )}
                        >
                            Create New Constraints 
                            {selectionStart === 'new' && <Signal icon={Check} color="var(--va-teal-500)" />}
                        </button> */}
                        {scenarios.map((scenario, index) => (
                            <button 
                                className={
                                    cx('takeover-selection', {
                                        'selected': selectionStart === scenario.name
                                    })
                                }
                                key={index} 
                                onClick={(): void => (
                                    setSelectionStart(scenario.name)
                                )}
                            >
                                {scenario.name}
                                {selectionStart === scenario.name && <Signal icon={Check} color="var(--va-teal-500)" />}
                            </button>
                        ))}
                    </div>
                    <div className="takeover-start-buttons">
                        <Button theme={ButtonTheme.Secondary} onClick={(): void => (setCurrentScreen('Scenario'))} >Cancel</Button>
                        {selectionStart === 'new' ? (
                                <Button theme={ButtonTheme.Primary} onClick={(): void => (setCurrentScreen('NewScenarioConstraints'))}>Continue</Button>
                            ) : (
                                <Button theme={ButtonTheme.Primary} onClick={(): void => (setCurrentScreen('ModifyAndRun'))}>Continue</Button>
                            )}
                    </div>
                </div>

                
            </div>
        )}
        {currentScreen === "ModifyAndRun" && (
            
            <div className="takeover-container">
                <IconButton className="takeover-close" icon={Clear} size="lg" onClick={(): void => (setCurrentScreen('Scenario'))} />
                <div className="takeover-workflow-container">
                    <div className="takeover-workflow-header">
                        <div className="takeover-title">Modify and Run New Scenario</div>
                        <div className="takeover-subtitle">Update your constraint targets, see the estimated output, and commit the changes to create a new Scenario.</div>
                    </div>
                    <Tabs onClick={onModifyTabClick} tabs={modifyTabs} activeTab={modifyActiveTab}  />
                    <div className="tabs-content-container">
                        {modifyTabs.map(
                            (tab: ITabItem): React.ReactNode => (
                                <section
                                    aria-labelledby={`${tab.identifier}-tab`}
                                    className="mt-3 mb-6"
                                    id={tab.identifier}
                                    key={tab.identifier}
                                    role="tabpanel"
                                    style={{
                                        display:
                                            modifyTabState === tab.identifier
                                                ? 'block'
                                                : 'none'
                                    }}
                                >   
                                    {modifySections[`${tab.identifier}`].content}
                                </section>
                            )
                        )}
                    </div>
                </div>

                <ActionBar 
                    className="scenario-footer"
                    action={
                        <>
                            <Button
                                dataUI="secondary"
                                theme={ButtonTheme.Secondary}
                                onClick={(): void => (setCurrentScreen('Scenario'))}
                            >
                                Cancel
                            </Button>
                            <Button
                                dataUI="primary"
                                theme={ButtonTheme.Primary}
                                onClick={(): void => (setCurrentScreen('CreateNewScenario'))}
                            >
                                Create New Scenario
                            </Button>
                        </>
                    } />
            </div>
        )}
        {currentScreen === "NewScenarioConstraints" && (
            
            <div className="takeover-container">
                <IconButton className="takeover-close" icon={Clear} size="lg" onClick={(): void => (setCurrentScreen('Scenario'))} />
                <div className="takeover-workflow-container">
                    <div className="takeover-workflow-header">
                        <div className="takeover-title">Scenario Plan Constraints</div><div className="takeover-subtitle">Update your constraint targets, see the estimated output, and commit the changes to create a new Scenario.</div>
                    </div>
                    <Tabs onClick={onConstraintTabClick} tabs={constraintTabs} activeTab={constraintTabs[0]}  />
                    <div className="tabs-content-container">
                        {constraintTabs.map(
                            (tab: ITabItem): React.ReactNode => (
                                <section
                                    aria-labelledby={`${tab.identifier}-tab`}
                                    className="mt-3 mb-6"
                                    id={tab.identifier}
                                    key={tab.identifier}
                                    role="tabpanel"
                                    style={{
                                        display:
                                            constraintTab === tab.identifier
                                                ? 'block'
                                                : 'none'
                                    }}
                                >   
                                    {constraintSections[`${tab.identifier}`].content}
                                </section>
                            )
                        )}
                    </div>
                </div>

                <ActionBar 
                    className="scenario-footer"
                    action={
                        <>
                            <Button
                                dataUI="secondary"
                                theme={ButtonTheme.Secondary}
                                onClick={(): void => (setCurrentScreen('Scenario'))}
                            >
                                Cancel
                            </Button>
                            <Button
                                dataUI="primary"
                                theme={ButtonTheme.Primary}
                                onClick={(): void => (setCurrentScreen('CreateNewScenario'))}
                            >
                                Create New Scenario
                            </Button>
                        </>
                    } />
            </div>
        )}
        {currentScreen === "CreateNewScenario" && (
            
            <div className="takeover-container">
                <IconButton className="takeover-close" icon={Clear} size="lg" onClick={(): void => (setCurrentScreen('Scenario'))} />
                <div className="takeover-start-container">
                    <div className="takeover-title">Create New Scenario Plan</div>

                    <div className="create-scenario-field-container">
                    <TextField 
                        label="New Scenario Plan Name"
                        value={newScenarioName}
                        onChange={newScenarioNameChange}
                    />
                    </div>
                    
                    <div className="takeover-start-buttons">
                        <Button theme={ButtonTheme.Secondary} onClick={(): void => (setCurrentScreen('Scenario'))} >Cancel</Button>
                        <Button theme={ButtonTheme.Primary} onClick={createNewScenarioClick}>Run Scenario Plan</Button>
                    </div>
                </div>

                
            </div>
        )}
        </>
    );
  }
  
  export default Plan; 