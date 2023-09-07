import React from 'react';
import {Panel} from '@preamp/core';

function ElsyElements(props: any) {
    
    return (
        <div className='page-container-el'>
            <Panel className='w-full'>
                <h1 className='va-title'>Elsy Filter row</h1>

                {/* new markup recommendation */}
                <div className="form-row">
                    <div className='form-row-left'>
                        <div className="va-select va-select--default">
                            <label>
                                <div className='va-form-label'>
                                    <div className='va-container-label inline-block '>
                                        Group By:
                                    </div>
                                </div>
                            
                                <div className='va-select__control'>
                                    <select id="groupByType" className="select2-choice va-select__value-container">
                                        <option value="1">Product</option>
                                        <option value="4">Workflow Status</option>
                                        <option value="2">Campaign Type</option>
                                        <option value="3">Campaign Objective</option>
                                        <option value="5">Campaign Group</option>
                                        <option value="7">Monitor Status</option>
                                        <option value="8">Campaign Cycle</option>
                                        <option value="6">None</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className="va-select va-select--default">
                            <label>
                                <div className='va-form-label'>
                                    <div className='va-container-label inline-block '>
                                        Order By:
                                    </div>
                                </div>
                            
                                <div className='va-select__control'>
                                <select id="orderByType" className="select2-choice va-select__value-container">
                                    <option value="1">Start Date</option>
                                    <option value="2">Budget</option>
                                    <option value="3">Efficiency</option>
                                </select>
                                </div>
                            </label>
                        </div>
                        <div className="va-select va-select--default">
                            <label>
                                <div className='va-form-label'>
                                    <div className='va-container-label inline-block '>
                                        Metric:
                                    </div>
                                </div>
                            
                                <div className='va-select__control'>
                                <select id="orderByType" className="select2-choice va-select__value-container">
                                    <option value="1">Revenue Efficiency</option>
                                    <option value="2">Gross Margin Efficiency</option>
                                    <option value="3">Net Margin Efficiency</option>
                                    <option value="4">Volume Efficiency</option>
                                </select>
                                {/* @if (ViewBag.NativeAttributes != null)
                                {
                                    SelectList nativeAttrs = ViewBag.NativeAttributes;
                                    if (nativeAttrs.Count() > 0)
                                    {
                                        @Html.DropDownList("metricType", (IEnumerable<SelectListItem>)ViewBag.NativeAttributes, new { @class = "select2-choice form-control width-250" })
                                    }
                                } */}
                                </div>
                            </label>
                        </div>
                        <div className="va-select va-select--default">
                            <label>
                                <div className='va-form-label'>
                                    <div className='va-container-label inline-block '>
                                        Filter:
                                    </div>
                                </div>
                            
                                <div className='va-select__control'>
                                <select id="orderByType" className="select2-choice va-select__value-container">
                                    <option value="1">Option</option>
                                    <option value="2">Option</option>
                                    <option value="3">Option</option>
                                </select>
                                {/* @Html.DropDownList("filterDropdown", (IEnumerable<SelectListItem>)ViewBag.Filter, new { @class = "select2-choice form-control", @multiple = "multiple" }) */}
                                </div>
                            </label>
                        </div>
                        <input type="button" id="campignListRefresh" value="Refresh" className="va-btn va-btn-secondary" />
                    </div>
                    <div className='form-row-right'>
                        <label>
                            <div className='va-form-label'>
                                <div className='va-container-label inline-block '>
                                Search:
                                </div>
                            </div>
                            <div className='va-input-container'>
                                <input type="search" className="va-form-control" placeholder="" aria-controls="campaignListGrid" />
                            </div>

                        </label>
                    </div>
                    
                </div>
                <h3>Markup:</h3>
                <div className='code-container u-well mb-5'>
                    <pre>
{`<div class="form-row">
    <div class="form-row-left">
        <div class="va-select va-select--default">
            <label>
                <div class="va-form-label">
                    <div class="va-container-label">
                        Input Label
                    </div>
                </div>
                <div class="va-select__control">
                    [Select input goes here]
                </div>
            </label>
        </div>
        // Repeat for each filter control
        <input type="button" id="campignListRefresh" value="Refresh" class="va-btn va-btn-secondary" />
    </div>
    <div class="form-row-right">
        <label>
            <div class="va-form-label">
                <div class="va-container-label">
                Search:
                </div>
            </div>
            <div class="va-input-container">
                [Search input]
            </div>
        </label>
    </div>
</div>

// to use the inline label styles add the class 'va-select--box-inline-label' to the 'va-select' div:

<div class="va-select va-select--default va-select--box-inline-label">
    <label>
        <div class="va-form-label">
            <div class="va-container-label">
                Input Label
            </div>
        </div>
        <div class="va-select__control">
            [Select input goes here]
        </div>
    </label>
</div>


`}
                    </pre>
                </div>
                <div className='u-display-1'>
                    An example of this can be found here:  <a href="https://videoamp.elsy.media/Instance/CampaignList?iid=52#campaignList" target="_blank">
                    https://videoamp.elsy.media/Instance/CampaignList?iid=52#campaignList
                    </a>
                </div>
            </Panel>
        </div>
    )
}

export default ElsyElements;