import React from 'react';

export interface comparisonCardProps {
    header: string;
    metric: string;
    metricLabel: string;
    action: React.ReactNode;
}

export const ComparisonCard: React.FC<comparisonCardProps> = ({
    header,
    metric,
    metricLabel,
    action

}: comparisonCardProps): React.ReactElement<HTMLElement> => {
    return (
        
            <div className="comparison-card">
                <div className="card-header">
                    <span className="win-pill">Win</span>
                    <span>{header}</span>
                </div>
                <div className="card-content">
                    <div className="metric-value">
                        {metric}
                    </div>
                    <div className="metric-label">
                        {metricLabel}
                    </div>
                    {action}
                </div>
                
            </div>
    );
};