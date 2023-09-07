import React from 'react';
import update from 'immutability-helper'
import cx from 'classnames';
import { DndProvider } from 'react-dnd';
import { HTML5Backend, NativeTypes } from 'react-dnd-html5-backend';
import {
	NavLink, useRouteMatch, useHistory
} from "react-router-dom";
import {Button, ButtonTheme, IconButton, Notification, NotificationTheme, Search, TextField} from '@preamp/core';
import {Signal, Add, Audiences, Book, Check, KeyboardArrowRight, Clear, Measure, Organization, Reports} from '@preamp/signal';
import { DropdownButton, OptionType, ValueType } from '@preamp/select';

import { DragItem } from '../components/drag-item';
import { DragArea } from '../components/drag-area';

import { VideoAmp } from '../../../components/icons/videoamp';

	const ContentMeasurementIcon = (
    	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M16.47 9.247a.75.75 0 0 1 1.133.977l-.073.084-4.444 4.445a.75.75 0 0 1-.994.059l-.084-.077-2.231-2.38-2.23 2.38a.75.75 0 0 1-.974.104l-.086-.07a.75.75 0 0 1-.104-.973l.07-.087 2.778-2.963a.75.75 0 0 1 1.008-.078l.086.078 2.247 2.398 3.898-3.897Z"/><path d="M12 1.225C6.05 1.225 1.225 6.049 1.225 12c0 5.95 4.824 10.775 10.775 10.775 5.95 0 10.775-4.824 10.775-10.775 0-5.95-4.824-10.775-10.775-10.775Zm0 1.55a9.225 9.225 0 1 1 0 18.45 9.225 9.225 0 0 1 0-18.45Z"/></g></svg>
    )
	const ContentMeasurementIconSmall = (
    	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M16.47 9.247a.75.75 0 0 1 1.133.977l-.073.084-4.444 4.445a.75.75 0 0 1-.994.059l-.084-.077-2.231-2.38-2.23 2.38a.75.75 0 0 1-.974.104l-.086-.07a.75.75 0 0 1-.104-.973l.07-.087 2.778-2.963a.75.75 0 0 1 1.008-.078l.086.078 2.247 2.398 3.898-3.897Z"/></g></svg>
    )
	const CMIconColor = (
		<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><rect fill="#F5F5F5" width="18" height="18" rx="9"/><path stroke="#00A3BD" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" d="M4.5 11 7 8.333 9.5 11l4-4"/></g></svg>
	)
	const CMIconColorGrey = (
		<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><rect fill="#f5f5f5" width="18" height="18" rx="9"/><path stroke="#444444" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" d="M4.5 11 7 8.333 9.5 11l4-4"/></g></svg>
	)
	const inlineEditIcon: React.ReactNode = (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.539 3.109-11.84 11.84c-.16.16-.276.36-.336.579L2.047 20.35a1.304 1.304 0 0 0 1.602 1.602l4.823-1.316c.22-.06.42-.175.58-.336l11.84-11.84a3.785 3.785 0 0 0-5.353-5.352Zm2.98 1.54c.406.108.724.426.832.831l.033.176c.04.351-.082.706-.337.96L7.453 18.21l-2.288.625.624-2.289L17.383 4.953c.255-.255.61-.376.961-.337l.176.033Z" fillRule="nonzero"/></svg>
    );
	const viewIcon: React.ReactNode = (
		<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M12 3C8.62 3 5.661 4.632 3.145 7.316a20.492 20.492 0 0 0-2.25 2.891l-.239.378-.202.336-.167.29-.13.241-.051.1a1 1 0 0 0 0 .895l.112.215.148.266.29.487.238.378c.637.985 1.387 1.969 2.251 2.89C5.661 19.369 8.62 21 12 21c3.38 0 6.339-1.632 8.855-4.316a20.492 20.492 0 0 0 2.25-2.891l.239-.378.202-.336.167-.29.13-.241.051-.1a1 1 0 0 0 0-.895l-.112-.215-.148-.266-.29-.487-.238-.378a20.492 20.492 0 0 0-2.251-2.89C18.339 4.631 15.38 3 12 3Zm0 2c2.745 0 5.224 1.368 7.395 3.684a18.513 18.513 0 0 1 2.03 2.609l.146.228.134.219.153.26-.153.26a18.513 18.513 0 0 1-2.31 3.056C17.224 17.632 14.745 19 12 19c-2.745 0-5.224-1.368-7.395-3.684a18.513 18.513 0 0 1-2.03-2.609l-.146-.228-.134-.219L2.14 12l.154-.26a18.513 18.513 0 0 1 2.31-3.056C6.776 6.368 9.255 5 12 5Z"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></g></svg>
	)
	const trashIcon: React.ReactNode = (
		<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M21 5a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993L3 5h18Z"/><path d="M19 5a1 1 0 0 1 .993.883L20 6v14a3 3 0 0 1-2.824 2.995L17 23H7a3 3 0 0 1-2.995-2.824L4 20V6a1 1 0 0 1 1.993-.117L6 6v14a1 1 0 0 0 .883.993L7 21h10a1 1 0 0 0 .993-.883L18 20V6a1 1 0 0 1 1-1Zm-5-4a3 3 0 0 1 2.995 2.824L17 4v2a1 1 0 0 1-1.993.117L15 6V4a1 1 0 0 0-.883-.993L14 3h-4a1 1 0 0 0-.993.883L9 4v2a1 1 0 0 1-1.993.117L7 6V4a3 3 0 0 1 2.824-2.995L10 1h4Z"/></g></svg>
	)
	const starIcon: React.ReactNode = (
		<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.246 7.346-6.39.935-.114.023a1 1 0 0 0-.44 1.682l4.623 4.503-1.09 6.362-.014.11a1 1 0 0 0 1.464.944L12 18.9l5.715 3.005.1.047a1 1 0 0 0 1.35-1.101l-1.091-6.362 4.624-4.503.078-.085a1 1 0 0 0-.631-1.62l-6.392-.935-2.856-5.789a1 1 0 0 0-1.794 0L8.246 7.346ZM12 4.258l2.193 4.445.061.106a1 1 0 0 0 .691.44l4.906.717-3.549 3.458-.082.09a1 1 0 0 0-.206.795l.837 4.882-4.386-2.306-.111-.05a1 1 0 0 0-.82.05L7.149 19.19l.838-4.882.013-.122a1 1 0 0 0-.301-.763l-3.55-3.458 4.907-.717a1 1 0 0 0 .752-.546L12 4.258Z" fillRule="nonzero"/></svg>
	)
export const ItemTypes = {
    DIMENSIONS: 'Dimensions',
    METRICS: 'Metrics',
  }

interface DustbinState {
    accepts: string[]
    lastDroppedItem: any
  }
  
  interface BoxState {
    name: string
    type: string
  }
  
  export interface DustbinSpec {
    accepts: string[]
    lastDroppedItem: any
  }
  export interface BoxSpec {
    name: string
    type: string
  }
  export interface ContainerState {
    droppedBoxNames: string[]
    dustbins: DustbinSpec[]
    boxes: BoxSpec[]
  }

// const nationalReports: any = [
// 	{ reportName: 'Daypart, Program and Telecast Views', type: 'national'},
// 	{ reportName: 'Program Views', type: 'national'},
// 	{ reportName: 'Network Views', type: 'national'},
// 	{ reportName: 'Trending Metrics by Dayparts', type: 'national'},
// 	{ reportName: 'Audience by Telecast Daypart', type: 'national'}
// ]
// const localReports: any = [
// 	{ reportName: 'Network Views', type: 'national'},
// 	{ reportName: 'Trending Metrics by Dayparts', type: 'national'},
// 	{ reportName: 'Audience by Telecast Daypart', type: 'national'},
// 	{ reportName: 'Program Views', type: 'national'}
// ]
const createOptions: OptionType[] = [
    { label: 'Build a National Report', value: '1', description: 'Brief description of National Reports', icon: CMIconColor },
    { label: 'Build a Local Report', value: '2', description: 'Brief description of Local Reports', icon: CMIconColorGrey }
];

function Dashboard(props: any) {
// export const Dashboard: React.FC<any> = ({url, ...rest}) => {
// export const Dashboard: React.FC = React.memo(function Dashboard(props:any) {
    // const { url } = props.url;

    const history = useHistory();
    const [createScreen, setCreateScreen] = React.useState<string>('');
	const [sideBarTab, setSideBarTab] = React.useState<string>('dimensions');
    const [newDimensionsObject, setNewDimensionsObject] = React.useState<Array<object>>([
        // {name: 'test'}
    ]);
	const [newMetricsObject, setNewMetricsObject] = React.useState<Array<object>>([
        // {name: 'test'}
    ]);

    const [dustbins, setDustbins] = React.useState<DustbinState[]>([
        { accepts: [ItemTypes.DIMENSIONS], lastDroppedItem: null },
        { accepts: [ItemTypes.METRICS], lastDroppedItem: null },
    ]);
	const [dimensionDropArea, setDimensionDropArea] = React.useState<DustbinState[]>([
        { accepts: [ItemTypes.DIMENSIONS], lastDroppedItem: null },
	])
	const [metricsDropArea, setMetricsDropArea] = React.useState<DustbinState[]>([
        { accepts: [ItemTypes.METRICS], lastDroppedItem: null },
	])
	const [createObject, setCreateObject] = React.useState<any>({
        reportName: 'New Report Name',
        reportDimensions: [],
        reportMetrics: [],
     });
	 const [createNameEdit, setCreateNameEdit] = React.useState<boolean>(false);
	 const [createNameNew, setCreateNameNew] = React.useState<string>('New Report Name');
	 const [createReportType, setCreateReportType] = React.useState<string>('');
	 const [notificationOpen, setNotificationOpen] = React.useState<boolean>(false);
	 const [filterNational, setFilterNational] = React.useState<boolean>(true);
	 const [filterLocal, setFilterLocal] = React.useState<boolean>(true);
	 const [dimensionsFiltersOpen, setDimensionsFiltersOpen] = React.useState<boolean>(false);
	 const [metricsFiltersOpen, setMetricsFiltersOpen] = React.useState<boolean>(false);

	 const [currentReport, setCurrentReport] = React.useState<any>({
        reportName: 'New Report Name',
        reportDimensions: [],
        reportMetrics: [],
     });

	 const [nationalReports, setNationalReports] = React.useState<Array<object>>([
		{ reportName: 'Daypart, Program and Telecast Views', type: 'national'},
		{ reportName: 'Program Views', type: 'national'},
		{ reportName: 'Network Views', type: 'national'},
		{ reportName: 'Trending Metrics by Dayparts', type: 'national'},
		{ reportName: 'Audience by Telecast Daypart', type: 'national'},
		{ reportName: 'Ranker', type: 'national'}
	 ])
	 const [localReports, setLocalReports] = React.useState<Array<object>>([
		{ reportName: 'Daypart, Program and Telecast Views', type: 'local'},
		{ reportName: 'Program Views', type: 'local'},
		{ reportName: 'Network Views', type: 'local'},
		{ reportName: 'Trending Metrics by Dayparts', type: 'local'},
		{ reportName: 'Audience by Telecast Daypart', type: 'local'},
		{ reportName: 'Ranker', type: 'local'}
	 ])

	 const [savedReports, setSavedReports] = React.useState<Array<object>>([
		{ reportName: 'Report Name', type: 'local'},
		{ reportName: 'Trending Metrics Report', type: 'national'},
		{ reportName: 'Audience by Telecast Daypart Report National', type: 'national'},
		{ reportName: 'Program Views Report', type: 'local'},
		{ reportName: 'Network Views Local', type: 'local'},
		{ reportName: 'Network Views National', type: 'national'},
		{ reportName: 'Audience by Telecast Daypart Report Local', type: 'local'}
	 ])



    
	const [dimensionsList] = React.useState<BoxState[]>([
		{ name: 'Broadcast Day', type: ItemTypes.DIMENSIONS },
		{ name: 'Date', type: ItemTypes.DIMENSIONS },
		{ name: 'Daypart', type: ItemTypes.DIMENSIONS },
		{ name: 'Program Name', type: ItemTypes.DIMENSIONS },
		{ name: 'Program Network', type: ItemTypes.DIMENSIONS },
		{ name: 'Audience', type: ItemTypes.DIMENSIONS },
		{ name: 'Audience Level', type: ItemTypes.DIMENSIONS },
		{ name: 'Network', type: ItemTypes.DIMENSIONS },
		{ name: 'Media Group', type: ItemTypes.DIMENSIONS },
		{ name: 'Custom Network Group', type: ItemTypes.DIMENSIONS },
		{ name: 'Ad Network Flag', type: ItemTypes.DIMENSIONS },
		{ name: 'Premier Telecast', type: ItemTypes.DIMENSIONS },
	])
	const [metricsList] = React.useState<BoxState[]>([
		{ name: 'Program Duration', type: ItemTypes.METRICS },
		{ name: 'Live AA', type: ItemTypes.METRICS },
		{ name: 'Live Target Rating', type: ItemTypes.METRICS },
		{ name: 'Live HH Rating', type: ItemTypes.METRICS },
		{ name: 'Live Gross Rating', type: ItemTypes.METRICS },
		{ name: 'Live SD AA', type: ItemTypes.METRICS },
		{ name: 'Audience Index Live', type: ItemTypes.METRICS },
		{ name: 'Live SD Target Rating', type: ItemTypes.METRICS },
		{ name: 'Live SD HH Rating', type: ItemTypes.METRICS },
	])
    
	const [droppedBoxNames, setDroppedBoxNames] = React.useState<string[]>([])
    
	function isDropped(boxName: string) {
		return droppedBoxNames.indexOf(boxName) > -1
	}
	function notificationHide(): void {
		setNotificationOpen(false)
	}
    
	const handleDrop = React.useCallback(
		(index: number, item: { name: string }) => {
			const { name } = item
			setDroppedBoxNames(
			update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
			)
			setDustbins(
			update(dustbins, {
				[index]: {
				lastDroppedItem: {
					$set: item,
				},
				},
			}),
			)
			if (Object.values(newDimensionsObject).indexOf(item) > -1) {
			console.log('has ' + item.name);
			} else {
			setNewDimensionsObject(newDimensionsObject => {
				return [...newDimensionsObject,item] 
			});
			}
			console.log(droppedBoxNames);
		},
		[droppedBoxNames, dustbins],
	)
	const handleMetricsDrop = React.useCallback(
		(index: number, item: { name: string }) => {
			const { name } = item
			setDroppedBoxNames(
			update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
			)
			setDustbins(
			update(dustbins, {
				[index]: {
				lastDroppedItem: {
					$set: item,
				},
				},
			}),
			)
			if (Object.values(newMetricsObject).indexOf(item) > -1) {
			console.log('has ' + item.name);
			} else {
			setNewMetricsObject(newMetricssObject => {
				return [...newMetricssObject,item] 
			});
			}
			console.log(droppedBoxNames);
		},
		[droppedBoxNames, dustbins],
	)
	function handleDropDimensions(item: any): void {
		if (Object.values(newDimensionsObject).indexOf(item) > -1) {
			console.log('has ' + item.name);
		 } else {
			setNewDimensionsObject(newDimensionsObject => {
				return [...newDimensionsObject,item] 
			});
		 }
		
	}
	
	
	const handleRemoveDropped = React.useCallback(
        (index: number, item: { name: string }) => {
			const temp = [...newDimensionsObject];
        	const newObj = temp.filter(val => val != item);
			setNewDimensionsObject(newObj);
			const tempDropped = [...droppedBoxNames];
        	const newDropped = tempDropped.filter(val => val != item.name);
			setDroppedBoxNames(newDropped);
		},
        [droppedBoxNames, newDimensionsObject],
    );
	const handleRemoveMetricsDropped = React.useCallback(
        (index: number, item: { name: string }) => {
			const temp = [...newMetricsObject];
        	const newObj = temp.filter(val => val != item);
			setNewMetricsObject(newObj);
			const tempDropped = [...droppedBoxNames];
        	const newDropped = tempDropped.filter(val => val != item.name);
			setDroppedBoxNames(newDropped);
		},
        [droppedBoxNames, newMetricsObject],
    );
	function removeDroppedItems(): void {
		setNewMetricsObject([]);
		setNewDimensionsObject([]);
		setDroppedBoxNames([]);
	}
	
	function saveReport(): void {
		setCurrentReport({
			...currentReport, reportName: (createObject.reportName), reportDimensions: (createObject.reportDimensions), reportMetrics: (createObject.reportMetrics)
		})
		

	}
	function closeCreateReport(): void {
		if (newDimensionsObject.length > 0 || newMetricsObject.length > 0) {
			
			setSavedReports(savedReports => {
				return [{reportName: (createObject.reportName), type: (createReportType)}, ...savedReports] 
			});
			setNotificationOpen(true);
		} 	
		
		removeDroppedItems();
		setCreateScreen('');
		
	}
	function resetReport(): void {
		// currentReport.reportName === createNameNew
		setCreateObject({
			...createObject, reportName: (currentReport.reportName), reportDimensions: (currentReport.reportDimensions), reportMetrics: (currentReport.reportMetrics)
		})
		setCreateNameNew(currentReport.reportName);
		removeDroppedItems();
	}
	function runReport(): void {
        setCreateObject({
			...createObject, reportDimensions: (newDimensionsObject), reportMetrics: (newMetricsObject)
		});
		// setInlineEdit({...inlineEdit, editName: (event.currentTarget.value)})
		
        // setPermissionSelected({...permissionSelected, [item]: false});
		// setCreateReportDimensions(newDimensionsObject)
    }
	function inlineNameChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            // setInlineEdit({...inlineEdit, editName: (event.currentTarget.value)})
			// setCreateObject({...createObject, reportName: (event.currentTarget.value)})
			setCreateNameNew(event.currentTarget.value);
        }
    }
    function inlineNameBlur(): void {
        if (createNameNew != '') {
            setCreateObject({...createObject, reportName: createNameNew});
            setCreateNameEdit(false);
            // isSaving();
            // setTimeout((): void => {
            //     setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            // }, 2000);
        }
    }
    function inlineNameKeyPress(event: any): void {
        if (event.key === 'Enter' && createNameNew != '') {
            setCreateObject({...createObject, reportName: createNameNew});
            setCreateNameEdit(false);
            // isSaving();
            // setTimeout((): void => {
            //     setInlineEdit({...inlineEdit, editNameActive: false, editNameEdited: false});
            // }, 2000);
        }
    }
	function createChanged(value: ValueType<OptionType>): void {
		if (value.value === '1') {
			setCreateReportType('national');
		} else {
			setCreateReportType('local');
		}
		setCurrentReport({
			...currentReport, reportName: 'New Report Name', reportDimensions: [], reportMetrics: []
		});
		setCreateObject({
			...createObject, reportName: 'New Report Name', reportDimensions: [], reportMetrics: []
		})
		setCreateNameNew('New Report Name');
		removeDroppedItems();
		setSideBarTab('dimensions');
		setCreateScreen('create');
    }
	
	
	
    return (
        <>
            <div className={cx("va-nav-bar")}>
                <div className="top-bar-left">
                <NavLink exact={true} activeClassName='nav-item-selected' to={props.url}><VideoAmp /></NavLink> 
                    <div className='nav-switcher-container'>
						<div className=''>
							<div className='company'>ParentNetwork</div>
							<div className='company-title'>Network</div>
						</div>
                    </div>
                    
                </div>
                <div className="top-bar-right">
                    
                    <div className="user-icon"></div>
                </div>
            </div>
            <div className='dashboard-container'>
                <div className='left-nav'>
					<div className="global-nav-left">
						<div className="nav-item nav-item-selected">
							<Signal icon={ContentMeasurementIcon} size={1.5} />
						</div>
						<div className="nav-item">
							<Signal icon={Measure} size={1.5} />
						</div>
						<div className="nav-item ">
							<Signal icon={Reports} size={1.5} />
						</div>
						<div className="nav-item">
							<Signal icon={Book} size={1.5} />
						</div>
						<div className="nav-item">
							<Signal icon={Audiences} size={1.5} />
						</div>
						<div className="nav-item">
							<Signal icon={Organization} size={1.5} />
						</div>
					</div>
                </div>
                <div className='dashboard-content-container'>
                    <div className='content-container-header'>
						<div className='content-header-left'>
							<h1>Content Measurement</h1>
							<div className='content-header-subtext'>
								Data available: Aug 10, 2020 - Aug 14, 2022
							</div>
						</div>
                        {/* <Button onClick={(): void => setCreateScreen('create')}>Create Report</Button> */}
						<DropdownButton
							dataUI="primary-dropdown"
							onChange={createChanged}
							options={createOptions}
							className='create-report-button'
						>
							Create Report
						</DropdownButton>
                    </div>
					<div className='dashboard-content'>
						<h3>National Reports</h3>
						<div className='report-card-container'>
							{nationalReports.map((item: any, index: number) => (
								<div className='report-card' key={index}>
									<div className='report-card-icon'><Signal icon={ContentMeasurementIconSmall} size={1.25} /></div>
									<div className='report-card-title'>{item.reportName}</div>
									<Button theme={ButtonTheme.Secondary}>View Report</Button>
								</div>
							))}
						
							
						</div>
						<h3>Local Reports</h3>
						<div className='report-card-container'>
							{localReports.map((item: any, index: number) => (
								<div className='report-card' key={index}>
									<div className='report-card-icon'><Signal icon={ContentMeasurementIconSmall} color="#444" size={1.25} /></div>
									<div className='report-card-title'>{item.reportName}</div>
									<Button theme={ButtonTheme.Secondary}>View Report</Button>
								</div>
							))}
						</div>
						<h3 className='divider-title'>Saved Reports</h3>
						
						<div className='saved-reports-container'>
							<div className='saved-reports-header'>
								<Search />
								<div className='saved-reports-filters'>
									<button className={cx('table-filter-button national', {'on': filterNational})} onClick={(): void => setFilterNational(!filterNational)}>
										National Reports
									</button>
									<button className={cx('table-filter-button local', {'on': filterLocal})} onClick={(): void => setFilterLocal(!filterLocal)}>
										Local Reports
									</button>
								</div>
							</div>
							<div className={cx('saved-reports-table', {'national-off' : !filterNational}, {'local-off' : !filterLocal})}>
								<div className='saved-reports-table-header'>
									<div className='type-col'></div>
									<div className='name-col'>Name</div>
									<div className='created-col'>Created</div>
									<div className='metric-col'>Metric Label</div>
									<div className='metric-col'>Metric Label</div>
									<div className='actions-col'></div>
								</div>
								{savedReports.map((item:any, index: number) => (
									<div className={cx('saved-reports-table-row ', item.type)} key={index}>
										<div className='type-col'></div>
										<div className='name-col'>{item.reportName} <div className='row-description'>Short Description of this report</div></div>
										<div className='created-col'>00/00/000 00:00PM <div className='row-description'>Creator's Name</div></div>
										<div className='metric-col'>00,000,000</div>
										<div className='metric-col'>00,000,000</div>
										<div className='actions-col'>
											<div className='row-actions-container'>
												<IconButton icon={starIcon} size='sm' />
												<IconButton icon={viewIcon} size='sm' />
												<IconButton icon={inlineEditIcon} size='sm' />
												<IconButton icon={trashIcon} size='sm' />
											</div>
										</div>
									</div>
								))}
								

							</div>
						</div>
					</div>
                </div> 
                <div className='sidebar'>
					<div className='help-content'>
						<div className='side-bar-header'>Help Center</div>
						<div className='side-bar-subhead'>New here?</div>
						<p>On this page, you can access different types of reports & previously saved reports that you have permission to see. For predefined report templates select from the options at the top of the page</p>
						<div className='side-bar-subhead'>What is a Content Measurement Report?</div>
						<p>
						A default point of access for actualized and ratings information that standardizes our viewership data in a way that’s easy to understand. An interface pulling ratings data across National TV and Local TV. 
						</p>
						<p>
						To start building a report, simply click on Create Report button at the upper right corner & choose between a national report or a local report.  
						</p>
						<div className='side-bar-subhead'>Curious about a definition?</div>
						<p>
						Check out our Glossary to see how we define terms used in the Content Measurement application.
						</p>
						<div className='side-bar-subhead'>Need a guide?</div>
						<p>
						Click on the persistent icon in the lower right corner of the app to access our Help Center.
						</p>
					
					</div>
				</div>
            </div>
            {createScreen && (
				<>
                <DndProvider backend={HTML5Backend}>
                	<div className='create-takeover'>
						<div className="va-nav-bar">
							<div className="top-bar-left">
								<div className='takeover-top-bar-title'>
									<div className='company'>ParentNetwork | Network</div>
									<div className='report-name'>
										{/* {createObject.reportName} */}
									{createNameEdit === false ? (
										<>
										<button className="new-report-name" 
											onClick={(): void => {
												setCreateNameEdit(true);
											}
										}>{createObject.reportName} <Signal icon={inlineEditIcon} size={1} className="inline-edit-icon" />
										</button>
										{/* <Signal icon={Check} className={cx("edited-check", {'edited-check-visible': inlineEdit.editNameEdited})} />  */}
										</>
									) : (
										<TextField 
											className="title-edit-textfield" 
											autofocus
											onChange={inlineNameChange} 
											value={createNameNew} 
											onBlur={inlineNameBlur}
											onKeyPress={inlineNameKeyPress}
											append={(
												<IconButton icon={Clear} onClick={(): void => {setCreateNameNew(createObject.reportName); setCreateNameEdit(false) }} />
											)}
										></TextField>
									)}
									</div>
									
								</div>
							</div>
							<div className="top-bar-right">
								<Button theme={ButtonTheme.Secondary} 
									// disabled={currentReport.reportName === createNameNew}
									disabled={(currentReport.reportName === createNameNew) && (newDimensionsObject.length === 0 ) && (newMetricsObject.length === 0)}
									onClick={resetReport}
								>Reset</Button>
								<Button theme={ButtonTheme.Secondary} disabled={(newDimensionsObject.length === 0 ) || (newMetricsObject.length === 0)} onClick={saveReport}>Save Pivot Table</Button>
								<Button theme={ButtonTheme.Secondary} disabled={(newDimensionsObject.length === 0 ) || (newMetricsObject.length === 0)} onClick={closeCreateReport}>Create Report</Button>
								<Button disabled={(newDimensionsObject.length === 0 ) || (newMetricsObject.length === 0)} onClick={runReport}>Run</Button>
								<a href="javascript:void(0)" onClick={closeCreateReport}><Signal icon={Clear} size={1.25} /></a>
							</div>
						</div>
						<div className='takeover-content'>
							<div className='draggable-container'>
								<div className="side-bar-tabs">
									<a href="javascript:void(0)" onClick={():void => setSideBarTab('dimensions')} className={cx('side-bar-tab', {'active': sideBarTab === 'dimensions'})}>Dimensions</a>
									<a href="javascript:void(0)" onClick={():void => setSideBarTab('metrics')} className={cx('side-bar-tab', {'active': sideBarTab === 'metrics'})}>Metrics</a>
								</div>
								<div className='drag-item-container'>
									{sideBarTab === 'metrics' ? (
										<>
											{metricsList.map((item, index) => (
											<>
												<DragItem
													name={item.name}
													type={item.type}
													isDropped={isDropped(item.name)}
													key={index}
													className={cx({'added' : Object.values(newMetricsObject).includes(item) })}
												/>
											</>
											))}
										</>
									) : (
										<>
										{dimensionsList.map((item, index) => (
											<>
												<DragItem
													name={item.name}
													type={item.type}
													isDropped={isDropped(item.name)}
													key={index}
													className={cx({'added' : Object.values(newDimensionsObject).includes(item) })}
												/>
											</>
										))}
										</>
									)}
										
										
									</div>
									
							</div>
							<div className='build-container'>
								<h2 className='build-title'>Build Your Report </h2>
								<div className='drop-area-container' >
									{dimensionDropArea.map(({ accepts, lastDroppedItem }, index) => (
										<DragArea
											accept={accepts}
											lastDroppedItem={lastDroppedItem}
											onDrop={(item) => handleDrop(index, item)}
											// onDrop={(item): void => handleDropDimensions(item)}
											key={index}
											id='drag-area-dimensions'
											onClick={():void => setSideBarTab('dimensions')}
										>
											<div className='drop-area-content'>
												<div className='drop-items'>
													{newDimensionsObject.map((option:any, index: number) => (
														<div key={index} className="va-chip">
															{option.name}
															<button onClick={(): void => handleRemoveDropped(index, option)}>
																<Signal icon={Clear} size="0.75rem"  />
															</button>
														</div>
													))}
												</div>
												<div className='filter-button-container' onMouseLeave={(): void => setDimensionsFiltersOpen(false)}>
													<div className='drop-filter-area'>
														<button className='filter-button' disabled={newDimensionsObject.length <1} onClick={(): void => setDimensionsFiltersOpen(true)}><Signal icon={Add} size={0.75} /> Filter</button>
													</div>
													{dimensionsFiltersOpen && (
														<div className='filter-menu-list'>
															{newDimensionsObject.map((option:any, index: number) => (
																<div key={index} className="menu-list-item">
																	{option.name} <Signal icon={KeyboardArrowRight} size={0.75}  />
																</div>
															))}
														</div>
													)}
												</div>
											</div>
									
										</DragArea>
									))}
									{metricsDropArea.map(({ accepts, lastDroppedItem }, index) => (
										<DragArea
											accept={accepts}
											lastDroppedItem={lastDroppedItem}
											onDrop={(item) => handleMetricsDrop(index, item)}
											// onDrop={(item): void => handleDropDimensions(item)}
											key={index}
											id='drag-area-metrics'
											onClick={():void => setSideBarTab('metrics')}
										>
											<div className='drop-area-content'>
												<div className='drop-items'>
													{newMetricsObject.map((option:any, index: number) => (
														<>
															<div key={index} className="va-chip">
																{option.name}
																<button onClick={(): void => handleRemoveMetricsDropped(index, option)}>
																	<Signal icon={Clear} size="0.75rem"  />
																</button>
															</div>
															
														</>
													))}
												</div>
												<div className='filter-button-container' onMouseLeave={(): void => setMetricsFiltersOpen(false)}>
													<div className='drop-filter-area'>
														<button className='filter-button' disabled={newMetricsObject.length <1} onClick={(): void => setMetricsFiltersOpen(true)}><Signal icon={Add} size={0.75} /> Filter</button>
													</div>
													{metricsFiltersOpen && (
														<div className='filter-menu-list'>
															{newMetricsObject.map((option:any, index: number) => (
																<div key={index} className="menu-list-item">
																	{option.name} <Signal icon={KeyboardArrowRight} size={0.75}  />
																</div>
															))}
														</div>
													)}
												</div>
											</div>
									
										</DragArea>
									))}
									
									
								</div>
								<div className='report-container'>
								{(createObject.reportDimensions.length > 0 || createObject.reportMetrics.length > 0) ? (
									<>
										<div className='report-container-dimensions'>
											{createObject.reportDimensions.map((item:any, index: number) => (
												<>
													<div className='report-col' key={index}>
														<div className='report-header'>{item.name}</div>
														{item.name === 'Date' ? (
															<>
															<div className='report-row'>00/00/000</div>
															<div className='report-row'>00/00/000</div>
															<div className='report-row'>00/00/000</div>
															<div className='report-row'>00/00/000</div>
															<div className='report-row'>00/00/000</div>
															</>
														) : item.name === 'Broadcast Day' ? (
															<>
															<div className='report-row'>Monday</div>
															<div className='report-row'>Monday</div>
															<div className='report-row'>Tuesday</div>
															<div className='report-row'>Wednesday</div>
															<div className='report-row'>Saturday</div>
															</>
														) : item.name === 'Daypart' ? (
															<>
															<div className='report-row'>Primetime</div>
															<div className='report-row'>Primetime</div>
															<div className='report-row'>Primetime</div>
															<div className='report-row'>Primetime</div>
															<div className='report-row'>Primetime</div>
															</>
														) : item.name === 'Program Name' ? (
															<>
															<div className='report-row'>Reality TV Show</div>
															<div className='report-row'>Reality TV Show</div>
															<div className='report-row'>Scripted TV Show</div>
															<div className='report-row'>Event</div>
															<div className='report-row'>Reality TV Show</div>
															</>
														) : (item.name === 'Program Network') || (item.name === 'Network') || (item.name === 'Custom Network Group') || (item.name === 'Ad Network Flag') ? (
															<>
															<div className='report-row'>Network A</div>
															<div className='report-row'>Network A</div>
															<div className='report-row'>Network B</div>
															<div className='report-row'>Network C</div>
															<div className='report-row'>Network C</div>
															</>
														) : (item.name === 'Audience') || (item.name === 'Audience Level') ? (
															<>
															<div className='report-row'>HH 18+</div>
															<div className='report-row'>HH 18+</div>
															<div className='report-row'>HH 18+</div>
															<div className='report-row'>HH 18+</div>
															<div className='report-row'>HH 18+</div>
															</>
														) : (item.name === 'Media Group') || (item.name === 'Network') ? (
															<>
															<div className='report-row'>Media Group A</div>
															<div className='report-row'>Media Group A</div>
															<div className='report-row'>Media Group B</div>
															<div className='report-row'>Media Group C</div>
															<div className='report-row'>Media Group C</div>
															</>
														) : item.name === 'Premier Telecast' ? (
															<>
															<div className='report-row'>Program 1</div>
															<div className='report-row'>Program 2</div>
															<div className='report-row'>Program 3</div>
															<div className='report-row'>Program 4</div>
															<div className='report-row'>Program 5</div>
															</>
														) : (<>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
														</>)}
														
													</div>
													
												</>
											))}
										</div>
										<div className='report-container-metrics'>
											{createObject.reportMetrics.map((item:any, index: number) => (
												
														<div className='report-col' key={index}>
															<div className='report-header'>{item.name}</div>
															{item.name === 'Program Duration' ? (
															<>
															<div className='report-row'>120</div>
															<div className='report-row'>180</div>
															<div className='report-row'>300</div>
															<div className='report-row'>2400</div>
															<div className='report-row'>120</div>
															</>
														) : item.name === 'Live AA' ? (
															<>
															<div className='report-row'>531</div>
															<div className='report-row'>477</div>
															<div className='report-row'>410</div>
															<div className='report-row'>476</div>
															<div className='report-row'>689</div>
															</>
														) : item.name === 'Live Target Rating' ? (
															<>
															<div className='report-row'>2.78</div>
															<div className='report-row'>1.98</div>
															<div className='report-row'>1.40</div>
															<div className='report-row'>0.90</div>
															<div className='report-row'>0.67</div>
															</>
														) : item.name === 'Live HH Rating' ? (
															<>
															<div className='report-row'>2.78</div>
															<div className='report-row'>1.98</div>
															<div className='report-row'>1.40</div>
															<div className='report-row'>0.90</div>
															<div className='report-row'>0.67</div>
															</>
														) : (item.name === 'Live Gross Rating') ? (
															<>
															<div className='report-row'>2.78</div>
															<div className='report-row'>1.98</div>
															<div className='report-row'>1.40</div>
															<div className='report-row'>0.90</div>
															<div className='report-row'>0.67</div>
															</>
														) : (item.name === 'Live SD AA') ? (
															<>
															<div className='report-row'>722</div>
															<div className='report-row'>800</div>
															<div className='report-row'>937</div>
															<div className='report-row'>505</div>
															<div className='report-row'>951</div>
															</>
														) : (item.name === 'Audience Index Live') ? (
															<>
															<div className='report-row'>84</div>
															<div className='report-row'>92</div>
															<div className='report-row'>76</div>
															<div className='report-row'>81</div>
															<div className='report-row'>99</div>
															</>
														) : item.name === 'Live SD Target Rating' ? (
															<>
															<div className='report-row'>2.78</div>
															<div className='report-row'>1.98</div>
															<div className='report-row'>1.40</div>
															<div className='report-row'>0.90</div>
															<div className='report-row'>0.67</div>
															</>
														) : item.name === 'Live SD HH Rating' ? (
															<>
															<div className='report-row'>2.78</div>
															<div className='report-row'>1.98</div>
															<div className='report-row'>1.40</div>
															<div className='report-row'>0.90</div>
															<div className='report-row'>0.67</div>
															</>
														) : (<>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
															<div className='report-row'><span className='table-content-placeholder'></span></div>
														</>)}
														</div>
												
											))}
										</div>
									</>
								) : (
									<>
										<div className='report-col empty-report'>
											<div className='report-header'></div>
											<div className='report-row'></div>
											<div className='report-row'></div>
											<div className='report-row'></div>
											<div className='report-row'></div>
											<div className='report-row'></div>
										</div>
									</>
								)}
								</div>
									
							</div>
						</div>
                	</div> 
                </DndProvider>
				
                </>
            	)}
				<Notification
					duration={4000}
					isOpen={notificationOpen}
					onHide={notificationHide}
					theme={NotificationTheme.Success}
					title="Success"
				>
					
					<div>Your {createReportType} report, {createObject.reportName}, has been successfully created!</div>
				</Notification>
        </>
    )
}

export default Dashboard;