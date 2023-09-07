import React from 'react';
import {
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Button, ButtonTheme, PillButton, PillButtonGroup, PillTheme } from '@preamp/core';
import { Search } from '@preamp/core';
import { Filter } from '@preamp/select';

import {CreateAudience} from './create-audience';
import audiencesScreenshot from '../../img/audiences.png';
import segmentsScreenshot from '../../img/segments.png'
export const Audiences: React.FC<any> = ({selectedNav, ...rest}) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        selectedNav('audiences');
    }, []);
    return (
        <>
            <div className='section-header'>
                <h1 className='page-title u-title-2'>Audience Management</h1>
                <Button onClick={() => history.push(`${url}/create`)}>Create</Button>
            </div>
            <ul className='testnav'>
                <li><a onClick={() => history.push(`${url}`)}>Audiences</a></li>
                <li><a onClick={() => history.push(`${url}/segments`)}>Segments</a></li>
            </ul>
            <div className="va-search-filter-bar">
                <Search
                    id="search"
                    name="search"
                    placeholder="Search"
                />
                {/* <Filter
                    groupOptions={}
                /> */}
            </div>
            <Switch>
                <Route exact path={url} >
                    <div className="placeholder-container">
                        <img src={audiencesScreenshot} alt="Audiences" />
                    </div>
                </Route>
                <Route path={`${url}/segments`}>
                    <div className="placeholder-container">
                        <img src={segmentsScreenshot} alt="Segments" />
                    </div>
                </Route>
                <Route path={`${url}/create`}>
                    <CreateAudience />
                </Route>
            </Switch>
            
        </>
    )
}