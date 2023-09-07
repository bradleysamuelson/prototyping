export interface initialDataTypes {
    items: DataItemTypes[];
    group?: string;
    id?: string;
}
export interface DataItemTypes {
    name: string;
    created?: string;
    createdby?: string;
    datatype: string;
}
export const easymodeInitialData: DataItemTypes[] = [
    
            {
                name: 'MyPixelName',
                created: '12/15/2021',
                createdby: 'Moira Rose',
                datatype: 'pixels'
            }, 
            {
                name: 'Another Pixel',
                created: '12/15/2021',
                createdby: 'Moira Rose',
                datatype: 'pixels'
            },
            {
                name: 'Creative Name',
                created: '12/15/2021',
                createdby: 'Moira Rose',
                datatype: 'creatives'
            }, 
            {
                name: 'Another Creative',
                created: '12/15/2021',
                createdby: 'Moira Rose',
                datatype: 'creatives'
            },
            {
                name: 'My Ad schedule',
                created: '09/01/2021',
                createdby: 'Moira Rose',
                datatype: 'adschedules'
            }, 
            {
                name: 'Creative for Q3 of 2021',
                created: '07/15/2021',
                createdby: 'Moira Rose',
                datatype: 'creatives'
            },
            {
                name: 'Campaign Creative',
                created: '09/15/2021',
                createdby: 'Moira Rose',
                datatype: 'creatives'
            },
            {
                name: 'Q3 2021 Pixel',
                created: '07/01/2021',
                createdby: 'Moira Rose',
                datatype: 'pixels'
            },
            {
                name: 'Constraint Name',
                created: '09/01/2021',
                createdby: 'Moira Rose',
                datatype: 'advertiserconstraints'
            },
            {
                name: 'My Offline Conversion Q2',
                created: '09/01/2021',
                createdby: 'Moira Rose',
                datatype: 'offlineconversions'
            },
            {
                name: 'Q1 2021 Pixel',
                created: '01/15/2021',
                createdby: 'Moira Rose',
                datatype: 'pixels'
            },
            {
                name: 'My Offline Conversion Q1 2021',
                created: '04/01/2021',
                createdby: 'Moira Rose',
                datatype: 'offlineconversions'
            },
       
];