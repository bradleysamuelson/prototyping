import React from 'react';

import './optimizerValue.scss';

export interface OptimizerValueProps {
    metricValue?: string;
}

export const  OptimizerValue: React.FC<OptimizerValueProps> = ({metricValue}: OptimizerValueProps): React.ReactElement<HTMLDivElement> => {
    return (
        <div className="improvement">
            <div className="improvement-gauge">
                <svg width="74" height="51" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g fill="#10BBD3"><path d="M46.459 11.756a.61.61 0 100 1.222.61.61 0 000-1.222M44.502 19.128a.61.61 0 10-.001 1.22.61.61 0 000-1.22M71.233 26.72a.61.61 0 100 1.221.61.61 0 000-1.22M64.492 31.491a.61.61 0 100 1.221.61.61 0 000-1.22"/><path d="M46.199 12.234c.179.036.169-.515.347-.478 10.355 2.13 19.257 7.655 25.163 15.191.135.173-.4.27-.267.446l.147.443-6.754 4.771-.383-.262c-.119-.166-.34.272-.463.109-4.519-6.01-11.486-10.428-19.625-12.111-.206-.043.346-.464.138-.503l-.589-.266 1.934-7.317.352-.023z"/></g><path stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 28.419l6.092 3.934M17.037 16.418l4.042 5.763M23.965 13.982l2.435 6.101M30.084 12.774L31.41 19M7.237 23.284l5.491 4.791M11.87 19.191l4.678 5.734"/><path stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M44.51 10.44l-2.259 9.55"/><path stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M37.036 12.316v6.314"/></g></svg>
                    <div className="improvement-gauge-needle">
                    <svg width="74" height="102" xmlns="http://www.w3.org/2000/svg" ><defs><filter x="-23.3%" y="-15%" width="146.5%" height="130%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" in="shadowBlurOuter1"/></filter><path d="M49.332 12.196l-21.923 37a1.978 1.978 0 11-3.402-2.015c.008-.014.021-.037.03-.05l23.002-36.34a1.345 1.345 0 012.293 1.405" id="b"/></defs><g transform="rotate(-31 36.625 30.166)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#a)" xlinkHref="#b"/><use fill="#777" xlinkHref="#b"/></g></svg>
                    </div>
                </div>
                <div className="improvement-metric">
                    <span className="improvement-metric-value">{metricValue}</span>
                    <div className="improvement-metric-label">Projected HH Reach Improvement</div>
                </div>
        </div>
    );
};

OptimizerValue.defaultProps = {
    metricValue: '20 - 25%'
};