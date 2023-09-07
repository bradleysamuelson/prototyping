import {
    Panel
} from '@preamp/core';
import {
    Link, useRouteMatch
} from "react-router-dom";

function CampaignList(props: any) {
    const { url } = useRouteMatch();
    
    return (
        <div className='page-container'>
            <Panel className='page-content-panel'>
                <h1 className='va-title'>Campaign List</h1>
                <Link to={`${url}/campaign`}>Campaign</Link>
            </Panel>
        </div>
       
    )
}

export default CampaignList;