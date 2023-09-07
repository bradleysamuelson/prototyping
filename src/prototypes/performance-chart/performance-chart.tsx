import React from 'react';
import cx from 'classnames';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { Drawer, IconButton, Panel, PillButton, PillTheme } from '@preamp/core';
import { Select, SelectType, OptionType, OptionsType, ValueType } from '@preamp/select';
import { ChevronDown, Clear, Download, KeyboardArrowLeft, Signal } from '@preamp/signal';
import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import './performance-chart-styles.scss';

const versionOptions: OptionType[] = [
	{ label: 'Compact', value: 'option2' },
	{ label: 'Alt', value: 'option1' }
  ];
const audienceOptions: OptionsType<OptionType> = [
    { value: 'Target Audience Name', label: 'Target Audience Name' }
];

const insightOptions: OptionsType<OptionType> = [
    { value: 'Top On-Target Performers', label: 'Top On-Target Performers' }
];
const gemIcon: React.ReactNode = (
	<svg  viewBox="50 50 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" stroke="currentColor" stroke-width="5"><polygon points="74.76 60 124.84 60 150 79.48 100 140 50 79.48 74.76 60"></polygon><polyline points="50 79.46 50.01 79.46 76.25 79.42 76.73 79.42 123.24 79.39 123.76 79.39 149.84 79.35 150 79.35"></polyline><polyline points="76.38 79.93 76.73 79.42 100 60"></polyline><polyline points="123.61 79.93 123.24 79.39 100 60"></polyline><line x1="100" x2="76.28" y1="140" y2="79.48"></line><line x1="100" x2="123.72" y1="140" y2="79.48"></line><line x1="76.28" x2="74.56" y1="79.48" y2="60.16"></line><line x1="123.72" x2="124.84" y1="79.48" y2="60"></line></g></svg>
)
const circleCheck: React.ReactNode = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
)
const chartData: any = [
	{units: 'ESPN | Prime Access / Prime (Linear)', reach: '13,706,023', reachBar: 79, spend: '$577,910.00', spendBar: 10},
	{units: 'National Broadcasting Co...NBC SUNDAY NIGHT FTBLL (linear)', reach: '12,138,305', reachBar: 64, spend: '$7,801,300.00', spendBar: 78},
	{units: 'AMC | Prime Access / Prime (Linear)', reach: '8,308,781', reachBar: 45, spend: '$486,810.00', spendBar: 4},
	{units: 'NFL Network | Prime Access / Prime (Linear)', reach: '8,036,013', reachBar: 42, spend: '$81,419.00', spendBar: 1},
	{units: 'American Broadcasting Co...SATURDAY NIGHT CLG FTBL (Linear)', reach: '7,893,181', reachBar: 40, spend: '$1,224,900.00', spendBar: 14},
	{units: 'TBS | Prime Access / Prime (Linear)', reach: '7,198,733', reachBar: 38, spend: '$963,189.00', spendBar: 10},
	{units: 'CBS | CLG FTBL GAME_CBS (Linear)', reach: '6,971,651', reachBar: 36, spend: '$1,016,200.00', spendBar: 11},
	{units: 'Food Network | Prime Access / Prime (Linear)', reach: '6,293,558', reachBar: 32, spend: '$657,411.00', spendBar: 6},
	{units: 'Discovery Channel | Prime Access / Prime (Linear)', reach: '6,143,342', reachBar: 30, spend: '$578,330.00', spendBar: 4},
	{units: 'Home & Garden Television | Prime Access / Prime (Linear)', reach: '5,726,264', reachBar: 28, spend: '$762,582.00', spendBar: 8},
	{units: 'History | Prime Access / Prime (Linear)', reach: '5,709,046', reachBar: 28, spend: '$367,530.00', spendBar: 3},
	{units: 'NBCU Digital (Digital)', reach: '5,379,419', reachBar: 26, spend: '$450,349.00', spendBar: 4},
	{units: 'TNT | Prime Access / Prime (Linear)', reach: '5,197,940', reachBar: 24, spend: '$507,350.00', spendBar: 5},
	{units: 'American Broadcasting Co...ESPN CLLG FTBL/ABC GM 1 (Linear)', reach: '4,461,467', reachBar: 20, spend: '$616,400.00', spendBar: 10},
	{units: 'USA Network | Prime Access / Prime (Linear)', reach: '4,353,427', reachBar: 19, spend: '$735,424.00', spendBar: 11},
	{units: 'CBS | COLLEGE FTBL SEC CHAMP (Linear)', reach: '4,215,638', reachBar: 18, spend: '$484,000.00', spendBar: 5},
	{units: 'American Broadcasting Co...NFL MONDAY NIGHT FTBL (Linear)', reach: '3,794,889', reachBar: 15, spend: '$1,240,000.00', spendBar: 16},
	{units: 'Cable News Network | Prime Access / Prime (Linear)', reach: '3,791,601', reachBar: 14, spend: '$431,897.00', spendBar: 4},
	{units: 'Freeform | Prime Access / Prime (Linear)', reach: '3,790,775', reachBar: 14, spend: '$11,094.00', spendBar: 0.5},
	{units: 'Discovery Channel | Weekend (Linear)', reach: '3,786,408', reachBar: 14, spend: '$383,456.00', spendBar: 2},
	{units: 'Network | Prime Access / Prime (Linear)', reach: '2,790,775', reachBar: 4, spend: '$11,094.00', spendBar: 0.5},
	{units: 'Network | Prime Access / Prime (Linear)', reach: '2,790,775', reachBar: 4, spend: '$11,094.00', spendBar: 0.5},
	{units: 'Network | Prime Access / Prime (Linear)', reach: '2,790,775', reachBar: 4, spend: '$11,094.00', spendBar: 0.5},
	{units: 'Network | Prime Access / Prime (Linear)', reach: '2,790,775', reachBar: 4, spend: '$11,094.00', spendBar: 0.5},
	{units: 'Network | Prime Access / Prime (Linear)', reach: '2,790,775', reachBar: 4, spend: '$11,094.00', spendBar: 0.5},
	{units: 'Network | Prime Access / Prime (Linear)', reach: '2,790,775', reachBar: 4, spend: '$11,094.00', spendBar: 0.5},
	{units: 'Network | Prime Access / Prime (Linear)', reach: '2,790,775', reachBar: 4, spend: '$11,094.00', spendBar: 0.5},
]

// update this name
function PerformanceChart() {
    const [audience, setAudience] = React.useState<string>('');
	const [insight, setInsight] = React.useState<string>('');
	const [scrolling, setScrolling] = React.useState(false);
	const [scrollingPerfChart, setScrollingPerfChart] = React.useState(false);
	const [isHelpOpen, setIsHelpOpen] = React.useState<boolean>(false);
	const [sortReverse, setSortReverse] = React.useState<boolean>(false);
	const [hasFilters, setHasFilters] = React.useState<boolean>(false);
	const [pageOption, setPageOption] = React.useState<string>("option2");

	const prevScrollY = React.useRef(0);

	const onAudienceChange = (e: any): void => {
        setAudience(e.value);
    };
	const onInsightChange = (e: any): void => {
        setInsight(e.value);
    };
	const toggleHelpOpen = (): void => {
        setIsHelpOpen(!isHelpOpen)
    };
	const toggleSort = (): void => {
        setSortReverse(!sortReverse)
    };
	const showFilterPills = (): void => {
		setHasFilters(true);
	}
	const clearFilterPills = (): void => {
		setHasFilters(false);
	}
	function handleVersionChange(e: ValueType<OptionType>): void {
		setPageOption(e.value);
	}
	
	React.useEffect(() => {
		const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrolling(true);
		}
		if (window.scrollY === 0) {
			setScrolling(false);
		}
		if (window.scrollY > 650) {
			setScrollingPerfChart(true);
		}
		if (window.scrollY < 650) {
			setScrollingPerfChart(false);
		}
		
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrolling]);
	return (
		<>
			<PrototypeBar name="Performance Chart Interaction Demo" home="/home"> Scrolling Interaction Prototype</PrototypeBar>
			<div className={cx("page-container performance-chart-page-container ", {"scrolling" : scrolling}, {"page-option-2" : pageOption === "option2"})}>
				<div className="top-bar demo-control">
					<Select 
						options={versionOptions} 
						selectType={SelectType.Compact} 
						onChange={handleVersionChange} 
						style={{width:'120px'}} 
						defaultValue={versionOptions[0]}>

					</Select>
			
				</div>
				<div className='page-content-container'>
					<nav>
						<div className='nav-item-placeholder'></div>
						<div className='nav-item-placeholder'></div>
						<div className='nav-item-placeholder'></div>
						<div className='nav-item-placeholder'></div>
						<div className='nav-item-placeholder'></div>
						<div className='nav-item-placeholder'></div>
					</nav>
					<div className='content-area'>
						<Panel 
							header="Overview"
							action={
								<div className='placeholder-text-small'>Optimization Potential</div>
							}
						>
							<div className='page-controls-container'>
								<div className='page-controls-container-left'>
									<Select
										inlineLabel={true}
										options={audienceOptions}
										// style={{ width: '12rem' }}
										defaultValue={audienceOptions[0]}
										onChange={onAudienceChange}
										className='audience-select'
										label="Audience"
										// selectType={SelectType.BoxLink}
									/>
									{(pageOption === 'option2' && scrollingPerfChart) && (
										<>
											<div className='insight-selector-container'>
										<Select
											inlineLabel={true}
											options={insightOptions}
											defaultValue={insightOptions[0]}
											onChange={onInsightChange}
											label="Performance Insight"
											selectType={SelectType.Compact}
										/>
									</div>
									<div className='filters-container'>
										<div className='filter-button-group'>
										<PillButton
											id="filter-button"
											label="Filters"
											name="filterButton"
											theme={PillTheme.Active}
											onChange={showFilterPills}
										/>
										{ hasFilters  &&(
											<>
												<div className="va-pill inline-flex append va-pill-default" data-ui="pill" role="presentation">
													<div className="va-pill-content">
														<div className="va-filter-selected-options__label" title="Parent Network: Disney">Parent Network: Disney</div>
													</div>
													<div className="va-pill-append">
														<button 
															className="va-btn va-btn-primary va-btn-icon" 
															data-ui="filter_controller_selected-options_icon-button-close" 
															type="button"
															onClick={clearFilterPills}>
															<Signal icon={Clear} />
														</button>
													</div>
												</div>
											</>
										)}
										</div>
										
									</div>
										</>
									)}
								</div>	
								{(pageOption === 'option2' && scrollingPerfChart) && (
									<div className='page-controls-container-right'>
										<div className='performance-header-actions'>
													<div className='download-btn-container'>
														<IconButton
															dataUI="clear-large"
															icon={Download}
															size="lg"
														/>
													</div>
													<div className='view-buttons-container'>
														<PillButton
															id="chart-button"
															label="Chart"
															name="chartbutton"
															theme={PillTheme.Active}
														/>
														<PillButton
															id="table-button"
															label="Table"
															name="tablebutton"
														/>
													</div>
												
										</div>
									</div>
								)}
							</div>
							<div className='content-placeholder-metrics'>Metrics</div>
							<h3 className="u-font-light u-title-4">Trends</h3>
							<div className='content-placeholder-1'>Trends Charts</div>

							<section className='performance-section'>
								<div className='performance-header-bar'>
									<h3 className="u-font-light u-title-4">Performance</h3>
									
								</div>
								{(pageOption === 'option1' || !scrollingPerfChart) && (
								<div className={cx('performance-controls', {'performance-scrolling' : scrollingPerfChart})}>
									<div className='performance-header-actions'>
											<div className='download-btn-container'>
												<IconButton
													dataUI="clear-large"
													icon={Download}
													size="lg"
												/>
											</div>
											<div className='view-buttons-container'>
												<PillButton
													id="chart-button"
													label="Chart"
													name="chartbutton"
													theme={PillTheme.Active}
												/>
												<PillButton
													id="table-button"
													label="Table"
													name="tablebutton"
												/>
											</div>
										
									</div>
									<div className='insight-selector-container'>
										<Select
											inlineLabel={true}
											options={insightOptions}
											style={{ width: '288px' }}
											defaultValue={insightOptions[0]}
											onChange={onInsightChange}
											label="Performance Insight"
											selectType={SelectType.Compact}
										/>
									</div>
									<div className='filters-container'>
										<div className='filter-button-group'>
										<PillButton
											id="filter-button"
											label="Filters"
											name="filterButton"
											theme={PillTheme.Active}
											onChange={showFilterPills}
										/>
										{ hasFilters  &&(
											<>
												<div className="va-pill inline-flex append va-pill-default" data-ui="pill" role="presentation">
													<div className="va-pill-content">
														<div className="va-filter-selected-options__label" title="Parent Network: Disney">Parent Network: Disney</div>
													</div>
													<div className="va-pill-append">
														<button 
															className="va-btn va-btn-primary va-btn-icon" 
															data-ui="filter_controller_selected-options_icon-button-close" 
															type="button"
															onClick={clearFilterPills}>
															<Signal icon={Clear} />
														</button>
													</div>
												</div>
											</>
										)}
										</div>
										<div className='insights-gem gem-message'>
											<span className='insights-gem__icon'>
												<Signal icon={gemIcon} />
											</span>
											<p className="insights-gem__text"><span>Balance audience reach with cost efficiency. Top performers have high HH Reach with low Estimated Spend.</span></p>
										</div>
									</div>
								</div>
								)}
								<div className='performance-chart-container'>
									<div className='performance-chart-breadcrumb u-body-2'>All Trading Units</div>
									<div className='performance-chart-header'>
										<div className='chart-col'>
											<div className='chart-header-select-container'>
												<label>View</label>
												<div className='chart-header-select'>
													<span className='selected-item'>Trading Units</span>
													<Signal size={0.625} icon={ChevronDown} />
												</div>
											</div>
										</div>
										<div className='chart-col'>
											<div className='chart-header-select-container'>
												<label>by</label>
												<div className='chart-header-select by-select'>
													<span className='selected-item'>On-Target HH Reach</span>
													<Signal size={0.625} icon={ChevronDown} />
												</div>
											</div>
											<div className={cx('sort-button', {'reverse' : sortReverse})} role="button" onClick={toggleSort}>
												<span>Sort</span>
												<Signal size={0.5} icon={ChevronDown} />
											</div>
										</div>
										<div className='chart-col'>
											<div className='chart-header-select-container'>
												<label>compared to</label>
												<div className='chart-header-select compared-select'>
													<span className='selected-item'>Estimated Spend</span>
													<Signal size={0.625} icon={ChevronDown} />
												</div>
											</div>
										</div>
									</div>
									<div className={cx('performance-chart', {'reverse' : sortReverse})}>
									
									{chartData.map((item:any, index: number) => (
										<div className='chart-row' key={index}>
											<div className='chart-col'>{item.units}</div>
											<div className='chart-col'>
												<div className='chart-bars-container'>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
												</div>
												<div className='bar-label-container'>{item.reach}</div>
												<div className='bar-container'>
													<div className='reach-bar' style={{width: `${item.reachBar}%`}}></div>
												</div>
											</div>
											<div className='chart-col'>
												<div className='chart-bars-container'>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
													<div className='chart-line'></div>
												</div>
												<div className='bar-label-container'>{item.spend}</div>
												<div className='bar-container'><div className='spend-bar' style={{width: `${item.spendBar}%`}}></div></div>
											</div>
										</div>
									))}
									</div>
									<div className='performance-chart-footer chart-row'>
										<div className='chart-col'></div>
										<div className='chart-col'>
											<div className='chart-bars-container'>
												<div className='chart-label'>0</div>
												<div className='chart-label'>4M</div>
												<div className='chart-label'>8M</div>
												<div className='chart-label'>12M</div>
												<div className='chart-label'>14M</div>
											</div>
										</div>
										<div className='chart-col'>
											<div className='chart-bars-container'>
												<div className='chart-label'>$0</div>
												<div className='chart-label'>$2M</div>
												<div className='chart-label'>$4M</div>
												<div className='chart-label'>$6M</div>
												<div className='chart-label'>$8M</div>
											</div>
										</div>
									</div>

								</div>
							</section>
						</Panel>
						<div className={cx('help-drawer', {'help-drawer-open' : isHelpOpen})}>
							<div className='help-button'>
								<IconButton icon={KeyboardArrowLeft} onClick={toggleHelpOpen} className="help-icon" />
							</div>
							{/* <div className='drawer-title'>Help Center</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default PerformanceChart;