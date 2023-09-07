import {Panel} from '@preamp/core';

function PreAmpButtons(props: any) {
    
    return (
        <div className='page-container'>
            <Panel>
                <h1 className='va-title'>Buttons</h1>
                <h2>Default Buttons</h2>
                <section>
                    <button className="btn">Primary</button>
                    <button className="btn secondary">Secondary</button>
                    <button className="btn link">Link</button>
                    <button className="btn" disabled>Primary Disabled</button>
                    <button className="btn secondary" disabled>Secondary Disabled</button>
                    <button className="btn link" disabled>Link Disabled</button>
                </section>
                <h2>Variants (used on dark backgrounds)</h2>
                <section className="variant">
                    <button className="btn variant">Primary Variant</button>
                    <button className="btn secondary variant">Secondary Variant</button>
                    <button className="btn link variant">Link Variant</button>
                    <button className="btn variant" disabled>Primary Disabled</button>
                    <button className="btn secondary varient" disabled>Secondary Disabled</button>
                    <button className="btn link varient" disabled>Link Disabled</button>
                </section>
            </Panel>
        </div>
       
    )
}

export default PreAmpButtons;