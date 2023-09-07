import React from 'react';
import {
  useHistory,
  useRouteMatch
} from "react-router-dom";
import {
    Panel,
    VerticalNav,
    VerticalNavChildItem,
    VerticalNavHeader,
    VerticalNavItem
} from '@preamp/core';

function Campaign(props: any) {
    const history = useHistory();
    const { url } = useRouteMatch();
    const [navId, setNavId] = React.useState<string>('');

    function onNavClick(id: string): () => void {
        return (): void => {
            setNavId(id);
        };
    }
    
    return (
        <div className='page-container'>
            <div className='left-nav-container'>
                <VerticalNav
                        // header={<VerticalNavHeader primaryText="Measurement" />}
                    >
                        <VerticalNavChildItem
                            id='campaign-list'
                            // isSelected={selectedItemId === 10}
                            onClick={() => history.push(`/elsy/campaign-list`)}
                            primaryText="Campaign List"
                        />
                        <VerticalNavItem
                            id={'general'}
                            // isSelected={selectedItemId === 1}
                            // onClick={this.setSelectedNavItem}
                            primaryText="General"
                            isCollapsible
                        >
                            <VerticalNavChildItem
                                // icon={CloudUpload}
                                id={'campaign-overview'}
                                isSelected={navId === 'campaign-overview'}
                                onClick={onNavClick('campaign-overview')}
                                primaryText="Campaign Overview"
                            />
                            <VerticalNavChildItem
                                id={'media-brief'}
                                isSelected={navId === 'media-brief'}
                                onClick={onNavClick('media-brief')}
                                primaryText="Media Brief"
                            />
                        </VerticalNavItem>
                        <VerticalNavItem
                            id={'1'}
                            // isSelected={selectedItemId === 1}
                            // onClick={this.setSelectedNavItem}
                            primaryText="Planning"
                            isCollapsible
                        >
                            <VerticalNavChildItem
                                id={'plan-versions'}
                                // isSelected={selectedItemId === 13}
                                primaryText="Plan Versions"
                            />
                            <VerticalNavChildItem
                                id={'scenario-list'}
                                // isSelected={selectedItemId === 14}
                                // onClick={this.setSelectedNavItem}
                                primaryText="Scenario List"
                            />
                            <VerticalNavChildItem
                                id={'tactic-list'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Tactic List"
                            />
                            <VerticalNavChildItem
                                id={'plan-settings'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Plan Settings"
                            />
                            <VerticalNavChildItem
                                id={'scenario-overview'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Scenario Overview"
                            />
                            <VerticalNavChildItem
                                id={'analysis'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Analysis"
                            />
                            <VerticalNavChildItem
                                id={'Flowchart'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Flowchart"
                            />
                            <VerticalNavChildItem
                                id={'scenario-Activities'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Scenario Activities"
                            />
                            <VerticalNavChildItem
                                id={'Scenario-Settings'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Scenario Settings"
                            />
                            <VerticalNavChildItem
                                id={'Activity-Overview'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Activity Overview"
                            />
                            <VerticalNavChildItem
                                id={'Activation-Brief'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Activation Brief"
                            />
                            <VerticalNavChildItem
                                id={'Budget-Allocation'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Budget Allocation"
                            />
                            <VerticalNavChildItem
                                id={'Valuation'}
                                // isSelected={selectedItemId === 15}
                                // onClick={unprintableMessage}
                                primaryText="Valuation"
                            />
                        </VerticalNavItem>
                        <VerticalNavItem
                            expanded
                            isCollapsible
                            // onClick={unprintableMessage}
                            primaryText="Monitoring"
                        >
                            <VerticalNavChildItem
                                id={'Campaign Overview'}
                                // isSelected={selectedItemId === 20}
                                // onClick={this.setSelectedNavItem}
                                primaryText='Campaign Overview'
                            />
                            <VerticalNavChildItem
                                id={'Performance'}
                                // isSelected={selectedItemId === 21}
                                // onClick={this.setSelectedNavItem}
                                primaryText='Performance'
                            />

                            <VerticalNavChildItem
                                id={'Monitoring'}
                                // isSelected={selectedItemId === 21}
                                // onClick={this.setSelectedNavItem}
                                primaryText='Monitoring'
                            />
                        </VerticalNavItem>
                        
                    </VerticalNav>
            </div>
            <Panel className='page-content-panel'>
                <h1 className='va-title'>Campaign</h1>
                
            </Panel>
        </div>
       
    )
}

export default Campaign;