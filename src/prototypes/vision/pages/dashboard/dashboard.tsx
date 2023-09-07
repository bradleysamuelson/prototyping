import React from 'react';

function Dashboard(props: any) {
    
    return (
        <>
            {props.persona === 'brand' && (
                <div className="placeholder-container">This is the Brand view.</div>
            )}
            {props.persona === 'agency' && (
                <div className="placeholder-container">This is the Agency / Advertiser view.</div>
            )}
            {props.persona === 'sellside' && (
                <div className="placeholder-container">This is the Sell Side / Network view.</div>
            )}
        </>
    )
}

export default Dashboard;