import React from 'react';
import './ticker.scss';

export interface TickerProps {
    tickerContent: React.ReactNode;
}

export const Ticker: React.FC<TickerProps> = ({tickerContent}: TickerProps): React.ReactElement<HTMLElement> => {
    return (
        <div className="va-ticker">
            <div className="va-ticker-content">{tickerContent}</div>
            <div className="va-ticker-content">{tickerContent}</div> 
        </div>
    );
};

Ticker.defaultProps = {
    tickerContent: (
        <>
            Ticker content
        </>
    )
}
