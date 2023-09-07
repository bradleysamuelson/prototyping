import React from 'react';
import cx from 'classnames';
import { Select } from '@preamp/select';
import { Signal } from '@preamp/signal';
import { dataOptions } from '../data-options';

const circleCheck: React.ReactNode = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="nonzero"><path d="M3.638 4.854a11 11 0 0 1 12.84-2.901 1 1 0 1 1-.815 1.827 9 9 0 1 0 5.333 8.497l.004-.27v-.92a1 1 0 0 1 1.993-.117l.007.116v.92A11 11 0 1 1 3.638 4.855Z"/><path d="M21.293 3.3a1 1 0 0 1 1.498 1.319l-.083.094-10 10.01a1 1 0 0 1-1.32.084l-.095-.084-3-3a1 1 0 0 1 1.32-1.497l.094.083L12 12.601 21.293 3.3Z"/></g></svg>
)
const chooseData = dataOptions.slice(1);

interface DataTypeSelectionProps {
    selectionButtons?: boolean;
    hideLabel?: boolean;
    // onChange(event?: any): void;
    onChange: (arg: string) => void;
} 

export const  DataTypeSelection: React.FC<DataTypeSelectionProps> = ({
    selectionButtons, hideLabel, onChange
}:DataTypeSelectionProps): React.ReactElement<HTMLDivElement> => {
    const [dataType, setData] = React.useState<string | null>(localStorage.getItem('dataType'));
    const onDataChange = (e: any): void => {
        localStorage.setItem('dataType', e.value);
        setData(e.value);
        onChange(e.value);
    };
    function selectionButtonClick(type:string) {
        // localStorage.setItem('dataType', type);
        setData(type);
        onChange(type)
    }
    return (
        <>
            {!hideLabel && <label>Data Object Type</label>}
            {!selectionButtons ? (
                    <Select
                        inlineLabel={false}
                        options={chooseData}
                        // style={{ width: '12rem' }}
                        defaultValue={chooseData[chooseData.map((o:any) => o.value).indexOf(dataType)]}
                        onChange={onDataChange}
                        className='mb-8'
                    />
                ) : (
                    <>
                    {chooseData.map((option:any, index: number) => (
                        <button 
                            key={index}
                            className={cx(
                                'select-button select-button-noicon mb-4', 
                                {'selected': (dataType===option.value)}
                            )}
                            disabled={(option.label != 'Pixels' && option.label != 'Creatives')}
                            onClick={() => selectionButtonClick(option.value)}>
                            {option.label}
                            <span className="uncheck"></span>
                            <span className="check"><Signal icon={circleCheck} /></span>
                        </button>
                    ))}
                    </>
                )}

        </>
    );
};