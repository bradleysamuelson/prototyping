import React from 'react';
import navbartop from './img/navbartop.png';
import navbarbottom from './img/navbarbottom.png';
import { Link } from 'react-router-dom';
import {
    DateCell,
    DateCellProps,
    IListTableColumn,
    ListTable,
    NameDescriptionCellProps,
    TableActionBar
} from '@preamp/tables';

import { Button, ButtonTheme, Panel, Search } from '@preamp/core';

enum columnEnum {
    PlanName = 'planName',
    Status = 'status',
    Advertiser = 'advertiser',
    Created = 'created',
    DateRange = 'dateRange',
    TotalBudget = 'totalBudget'
}
interface BuyTableRow {
    identifier: number;
    [columnEnum.PlanName]: NameDescriptionCellProps;
    [columnEnum.Status]: string;
    [columnEnum.Advertiser]: string;
    [columnEnum.Created]: DateCellProps;
    [columnEnum.DateRange]: string;
    [columnEnum.TotalBudget]: string;
}

function Buy() {
    const columns: IListTableColumn[] = [
        {
            identifier: columnEnum.PlanName,
            header: 'Plan Name',
            minWidth: 335,
            CustomCell: ({ value }: any): React.ReactNode => (
                <Link to='/buy/plan'>{value.name}</Link>
            )
        },
        
        {
            identifier: columnEnum.Status,
            header: 'Status',
            minWidth: 150,
            isCentered: false
        },
        {
            identifier: columnEnum.Advertiser,
            header: 'Advertiser',
            minWidth: 150,
            isCentered: false
        },
        {
            identifier: columnEnum.Created,
            header: 'Created On',
            maxWidth: 120,
            CustomCell: ({ value }: any): React.ReactNode => (
                <DateCell date={value.date} description={value.description} />
            )
        },
        {
            identifier: columnEnum.DateRange,
            header: 'Date Range',
            minWidth: 150,
            isCentered: false
        },
        {
            identifier: columnEnum.TotalBudget,
            header: 'Total Budget',
            minWidth: 150,
            isMetric: true
        }
    ];
    const rows: BuyTableRow[] = [
        {
            identifier: 1,
            [columnEnum.PlanName]: {
                name:
                    'Q4 Investment Plan',
                description:
                    "Build reach with HH's in Targets"
            },
            [columnEnum.Status]: 'Ready',
            [columnEnum.Advertiser]: 'Acme Advertiser',
            [columnEnum.Created]: {
                date: new Date(2021, 1, 20),
                description: 'John Doe'
            },
            [columnEnum.DateRange]: '03/29/2021 - 05/30/2021',
            [columnEnum.TotalBudget]: '$1,000,000'
        }, 
        {
            identifier: 1,
            [columnEnum.PlanName]: {
                name:
                    'Another Plan',
                description:
                    ""
            },
            [columnEnum.Status]: 'Ready',
            [columnEnum.Advertiser]: 'Acme Advertiser',
            [columnEnum.Created]: {
                date: new Date(2021, 1, 20),
                description: 'John Doe'
            },
            [columnEnum.DateRange]: '03/29/2021 - 05/30/2021',
            [columnEnum.TotalBudget]: '$800,000'
        },
        {
            identifier: 1,
            [columnEnum.PlanName]: {
                name: 'Q3 2021 Plan',
                description: ''
            },
            [columnEnum.Status]: 'Ready',
            [columnEnum.Advertiser]: 'Acme Advertiser',
            [columnEnum.Created]: {
                date: new Date(2021, 3, 20),
                description: 'John Doe'
            },
            [columnEnum.DateRange]: '07/01/2021 - 09/30/2021',
            [columnEnum.TotalBudget]: '$1,200,000'
        }
    ];
    return (
      <div className="buy-container">
        <div  className="appbar">
          <img src={navbartop} alt="" />
          <img src={navbarbottom} alt="" className="navbarbottom" />
        </div>
        <Panel header="Buy">
            <ul className="va-tabs" data-ui="tabs" role="tablist">
                <li className="va-tab-item va-tab-item--active"><a className="va-tab-item__link" role="tab" >Investment Plans</a></li>
                <li className="va-tab-item"><a className="va-tab-item__link" role="tab" >Buys</a></li>
            </ul>
            <TableActionBar
                Actions={[
                    <Button theme={ButtonTheme.Primary} key="create">Create Investment Plan</Button>
                ]}
                showBottomBorder
                showTopBorder={false}
            >
                <Search placeholder="Search name" />
            </TableActionBar>
            <ListTable
                    columns={columns}
                    dataUI="basic-list-table"
                    rows={rows}
                />
        </Panel>
      </div>
    );
  }
  
  export default Buy; 