import React from 'react';
import cx from 'classnames';
import { Button, TextField } from '@preamp/core';
import { Select, SelectType, OptionType, OptionsType } from '@preamp/select';
// import {
//   Route,
//   Switch,
//   useRouteMatch
// } from "react-router-dom";
// import { PrototypeBar } from '../../components/prototype-bar/prototype-bar';
import './brand-survey-styles.scss';



// update this name
function BrandSurvey() {
	const [email, setEmail] = React.useState<string>('');
	const [company, setCompany] = React.useState<string>(''); // 3
	const [team, setTeam] = React.useState<string>('');
	const [measurement, setMeasurement] = React.useState<string>(''); // 4
	const [value, setValue] = React.useState<string>(''); // 5
	const [commingling, setCommingling] = React.useState<string>(''); // 6
	const [identify, setIdentify] = React.useState<string>(''); // 7
	const [snapshot, setSnapshot] = React.useState<string>(''); // 8
	const [we, setWe] = React.useState<string>(''); // 9
	const [driven, setDriven] = React.useState<string>(''); // 10
	const [marketing, setMarketing] = React.useState<string>(''); // 11
	const [other3, setOther3] = React.useState<string>('');
	const [other4, setOther4] = React.useState<string>('');
	const [other5, setOther5] = React.useState<string>('');
	const [other6, setOther6] = React.useState<string>('');
	const [other7, setOther7] = React.useState<string>('');
	const [other8, setOther8] = React.useState<string>('');
	const [other9, setOther9] = React.useState<string>('');
	const [other10, setOther10] = React.useState<string>('');
	const [other11, setOther11] = React.useState<string>('');

	const onCompanyChange = (e: any): void => {
        setCompany(e.value);
		if (e.value != 'Other') {
			setOther3('');
		}
    };
	const onTeamChange = (e: any): void => {
        setTeam(e.value);
    };
	const onMeasurementChange = (e: any): void => {
        setMeasurement(e.value);
		if (e.value != 'Other') {
			setOther4('');
		}
    };
	const onValueChange = (e: any): void => {
        setValue(e.value);
		if (e.value != 'Other') {
			setOther5('');
		}
    };
	const onComminglingChange = (e: any): void => {
        setCommingling(e.value);
		if (e.value != 'Other') {
			setOther6('');
		}
    };
	const onIdentifyChange = (e: any): void => {
        setIdentify(e.value);
		if (e.value != 'Other') {
			setOther7('');
		}
    };
	const onSnapshotChange = (e: any): void => {
        setSnapshot(e.value);
		if (e.value != 'Other') {
			setOther8('');
		}
    };
	const onWeChange = (e: any): void => {
        setWe(e.value);
		if (e.value != 'Other') {
			setOther9('');
		}
    };
	const onDrivenChange = (e: any): void => {
        setDriven(e.value);
		if (e.value != 'Other') {
			setOther10('');
		}
    };
	const onMarketingChange = (e: any): void => {
        setMarketing(e.value);
		if (e.value != 'Other') {
			setOther11('');
		}
    };
	function other3Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther3(event.currentTarget.value)
        }
    };
	function other4Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther4(event.currentTarget.value)
        }
    };
	function other5Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther5(event.currentTarget.value)
        }
    };
	function other6Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther6(event.currentTarget.value)
        }
    };
	function other7Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther7(event.currentTarget.value)
        }
    };
	function other8Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther8(event.currentTarget.value)
        }
    };
	function other9Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther9(event.currentTarget.value)
        }
    };
	function other10Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther10(event.currentTarget.value)
        }
    };
	function other11Change(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setOther11(event.currentTarget.value)
        }
    };
	function emailChange(event?: React.ChangeEvent<HTMLInputElement>): void {
        if (event) {
            setEmail(event.currentTarget.value)
        }
    };
	// function other3whyChange(event?: React.ChangeEvent<HTMLInputElement>): void {
    //     if (event) {
    //         setOther3why(event.currentTarget.value)
    //     }
    // }

	// function myFunction() {
	// 	var x = document.getElementById("selectCompany").value;
	// 	document.getElementById("demo").innerHTML = "You selected: " + x;
	//   }
	const teamOptions: OptionsType<OptionType> = [
		{ value: 'Marketing', label: 'Marketing'},
		{ value: 'Sales', label: 'Sales'},
		{ value: 'Customer Success', label: 'Customer Success'},
		{ value: 'Account Management', label: 'Account Management'},
		{ value: 'Product', label: 'Product'},
		{ value: 'People', label: 'People'},
		{ value: 'Design', label: 'Design'}
	];
	const whatareweOptions: OptionsType<OptionType> = [
		{ value: 'Platform', label: 'Platform'},
		{ value: 'Software', label: 'Software'},
		{ value: 'System', label: 'System'},
		{ value: 'Other', label: 'Other'}
	];
	const measurementOptions: OptionsType<OptionType> = [
		{ value: 'revolutionizes and', label: 'revolutionizes and'},
		{ value: 'is building a better way to', label: 'is building a better way to'},
		{ value: 'enables customers', label: 'enables customers'},
		{ value: 'Other', label: 'Other'}
	];
	const valueOptions: OptionsType<OptionType> = [
		{ value: 'maximize(s)', label: 'maximize(s)'},
		{ value: 'amplify(ies)', label: 'amplify(ies)'},
		{ value: 'Other', label: 'Other'}
	];
	const comminglingOptions: OptionsType<OptionType> = [
		{ value: 'best-in-class', label: 'best-in-class'},
		{ value: 'industry standard', label: 'industry standard'},
		{ value: 'most trusted data from', label: 'most trusted data from'},
		{ value: 'Other', label: 'Other'}
	];
	const identifyOptions: OptionsType<OptionType> = [
		{ value: 'your marketing targets', label: 'your marketing targets'},
		{ value: 'advanced audiences', label: 'advanced audiences'},
		{ value: 'Other', label: 'Other'}
	];
	const snapshotOptions: OptionsType<OptionType> = [
		{ value: 'backward', label: 'backward'},
		{ value: 'historical', label: 'historical'},
		{ value: 'rear-view mirror style', label: 'rear-view mirror style'},
		{ value: 'Other', label: 'Other'}
	];
	const weOptions: OptionsType<OptionType> = [
		{ value: 'We', label: 'We'},
		{ value: 'Ampers', label: 'Ampers'},
		{ value: 'Vampers', label: 'Vampers'},
		{ value: 'Other', label: 'Other'}
	];
	const drivenOptions: OptionsType<OptionType> = [
		{ value: 'maximize', label: 'maximize'},
		{ value: 'amplify', label: 'amplify'},
		{ value: 'Other', label: 'Other'}
	];
	const marketingOptions: OptionsType<OptionType> = [
		{ value: 'targets', label: 'targets'},
		{ value: 'advanced audiences', label: 'advanced audiences'},
		{ value: 'Other', label: 'Other'}
	];

return (
	<>
	<div className='brand-form-container'>
    	<form method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdj_F7OTvmDEQMHIMGleExqkQVpiG0Pq9wAwuE5g-G3k75ZvA/formResponse">
  			<div className='form-content-container'>
				<div className='form-column-one'>
					<h1>Brand Workshop Part 2</h1>
					<section className='top-questions'>
						<div className='top-question-container'>
							<TextField name="entry.1421261576" label='Email:' placeholder='Please provide your email address' onChange={emailChange} />
						</div>
						<div className='top-question-container'>
							<Select
								label="Which team do you belong to?"
								name="entry.892560561"
								options={teamOptions}
								placeholder="Choose"
								onChange={onTeamChange}
							/>
							<div className='field-description'>
							(Please choose the team that most closely matches. We're purposely keeping this high level.)
							</div>
						</div>
					</section>

				
		
					<section className='form-section'>
						<p>
							VideoAmp is a{company === "Other" && <span>n</span> } 
							<div className='combo-field-container'>
							<Select
								name="entry.1967331901"
								className={cx('inline-dropdown', {'field-other': company === 'Other'})}
								options={whatareweOptions}
								placeholder="Choose an option"
								onChange={onCompanyChange}
								selectType={SelectType.Compact}
							/>{company === 'Other' && (
								<TextField className='other-field' name="entry.1732309638" placeholder='What other term would you use?' onChange={other3Change} />
							)}
							</div>
							company providing currency-grade measurement that
							<div className='combo-field-container'>
							<Select
								name="entry.168124577"
								className={cx('inline-dropdown inline-dropdown-wide', {'field-other': measurement === 'Other'})}
								options={measurementOptions}
								placeholder="Choose an option"
								onChange={onMeasurementChange}
								selectType={SelectType.Compact}
							/>{measurement === 'Other' && (
								<TextField className='other-field' name="entry.1941874609" placeholder='What other term would you use?' onChange={other4Change} />
							)}
							</div>
							<div className='combo-field-container'>
							<Select
								name="entry.1409222139"
								className={cx('inline-dropdown', {'field-other': value === 'Other'})}
								options={valueOptions}
								placeholder="Choose an option"
								onChange={onValueChange}
								selectType={SelectType.Compact}
							/>{value === 'Other' && (
								<TextField className='other-field' name="entry.1077172204" placeholder='What other term would you use?' onChange={other5Change} />
							)}
							</div>
							the value of media for content creators, agencies and brands by deprecating and commingling 
							<div className='combo-field-container'>
							<Select
								name="entry.1196586968"
								className={cx('inline-dropdown', {'field-other': commingling === 'Other'})}
								options={comminglingOptions}
								placeholder="Choose an option"
								onChange={onComminglingChange}
								selectType={SelectType.Compact}
							/>{commingling === 'Other' && (
								<TextField className='other-field' name="entry.1731576830" placeholder='What other term would you use?' onChange={other6Change} />
							)}
							</div> 
							
							ST, CTV, Digital (Facebook, Google, etc.) with both census and panel data that VideoAmp processes through our proprietary sorting systems that identify what 
							<div className='combo-field-container'>
							<Select
								name="entry.1342529680"
								className={cx('inline-dropdown', {'field-other': identify === 'Other'})}
								options={identifyOptions}
								placeholder="Choose an option"
								onChange={onIdentifyChange}
								selectType={SelectType.Compact}
							/>{identify === 'Other' && (
								<TextField className='other-field' name="entry.850948823" placeholder='What other term would you use?' onChange={other7Change} />
							)}
							</div>  
							are watching, and where they are watching across all platforms. 
						</p>
						<p>
							But VideoAmp does not stop there. While our competitors are satisfied giving their customers a{snapshot === "Other" && <span>n</span> }  
							<div className='combo-field-container'>
							<Select
								name="entry.270877990"
								className={cx('inline-dropdown', {'field-other': snapshot === 'Other'})}
								options={snapshotOptions}
								placeholder="Choose an option"
								onChange={onSnapshotChange}
								selectType={SelectType.Compact}
							/>{snapshot === 'Other' && (
								<TextField className='other-field' name="entry.1836513776" placeholder='What other term would you use?' onChange={other8Change} />
							)}
							</div>
							snapshot of past ad performance, VideoAmp is the only platform that enables customers to forecast, plan and even buy and sell inventory (via third party BEESWAX) for the most updated, dynamic marketplace for the highest sell-side yield and buy-side ROI.
						</p>
						<p>
							Our greatest competitive advantage is our people. WE HATE WASTE. 
							<div className='combo-field-container'>
							<Select
								name="entry.746961249"
								className={cx('inline-dropdown', {'field-other': we === 'Other'})}
								options={weOptions}
								placeholder="Choose an option"
								onChange={onWeChange}
								selectType={SelectType.Compact}
							/>{we === 'Other' && (
								<TextField className='other-field' name="entry.1230046018" placeholder='What other term would you use?' onChange={other9Change} />
							)}
							</div>  
							simply refuse to accept the 90%+ waste legacy HH and Demo measurement produces. We are driven to 
							<div className='combo-field-container'>
							<Select
								name="entry.68808267"
								className={cx('inline-dropdown', {'field-other': driven === 'Other'})}
								options={drivenOptions}
								placeholder="Choose an option"
								onChange={onDrivenChange}
								selectType={SelectType.Compact}
							/>{driven === 'Other' && (
								<TextField className='other-field' name="entry.1804520393" placeholder='What other term would you use?' onChange={other10Change} />
							)}
							</div>. WE ARE RELENTLESS.
						</p>
						<p className='p-tight'>
							This unequaled, winning combination of product, people and performance is generating explosive business results featuring:
						</p>
						<ul className='form-list'>
							<li>120% customer retention</li>
							<li>60% revenue growth over the past 3 years</li>
							<li>Annual doubling of brand-direct clients</li>
							<li>8 of 9 network currency clients</li>
							<li>6 of 6 agency holding companies</li>
							<li>50%+ CAGR revenue growth projected over the next 3 year.</li>
						</ul>
						<p className='p-tight'>
							VideoAmp is confident in our future prospects as the company is squarely positioned for the future changes expected in the advertising marketplace as both buyers and sellers demand:
						</p>
						<ul className='form-list'>
							<li>A shift from using HH's and demos as currency measurement to marketing 
								<div className='combo-field-container'>
								<Select
									name="entry.1560525768"
									className={cx('inline-dropdown', {'field-other': marketing === 'Other'})}
									options={marketingOptions}
									placeholder="Choose an option"
									onChange={onMarketingChange}
									selectType={SelectType.Compact}
								/>{marketing === 'Other' && (
									<TextField className='other-field' name="entry.1020864460" placeholder='What other term would you use?' onChange={other11Change} />
								)}
								</div>
							</li>
							<li>Alternatives to the antiquated legacy Nielsen panel and linear-driven comScore</li>
							<li>Operational platform efficiencies for both buy and sell-side organizations</li>
						</ul>
						<p>
							Videoamp is poised to lead the advertising industry for its new more effective and efficient future.
						</p>
					</section>
				</div>
				{(other3 != '' || other4 != '' || other5 != '' || other6 != '' || other7 != '' || other8 != '' || other9 != '' || other10 != '' || other11 != '') && (
					<div className='form-column-two'>
						<h2>Rationale</h2>
						{other3 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You called VideoAmp a <strong>{other3}</strong> company. Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.430562803" placeholder='Please provide your rationale' />
							</div>
						)}
						{other4 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "currency-grade measurement that <strong>{other4}</strong>". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.759827714" placeholder='Please provide your rationale' />
							</div>
						)}
						{other5 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "<strong>{other5}</strong> the value of media". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.1951136723" placeholder='Please provide your rationale' />
							</div>
						)}
						{other6 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "deprecating and commingling <strong>{other6}</strong>". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.564121159" placeholder='Please provide your rationale' /> 
							</div>
						)}
						{other7 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "identify what <strong>{other7}</strong> are watching". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.1673862577" placeholder='Please provide your rationale' />
							</div>
						)}
						{other8 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "While our competitors stop at giving their customers a <strong>{other8}</strong> snapshot". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.1452211616" placeholder='Please provide your rationale' />
							</div>
						)}
						{other9 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "<strong>{other9}</strong> simply refuse to accept the 90%+ waste". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.38415822" placeholder='Please provide your rationale' />
							</div>
						)}
						{other10 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "We are driven to <strong>{other10}</strong>". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.192719666" placeholder='Please provide your rationale' />
							</div>
						)}
						{other11 != '' && (
							<div className='why-question-container'>
							<p className='why-question'>You said "A shift from using HH's and demos as currency measurement to marketing <strong>{other11}</strong>". Why this word/phrase instead of the other choices?</p>
							<TextField name="entry.1370839969" placeholder='Please provide your rationale' />
							</div>
						)}
					</div>
				)}
		</div>
    	
		
		{/* <select className='inline-dropdown' name="entry.1967331901" id="selectCompany" onChange={onCompanyChange}>
			<option selected disabled>Choose an option</option>
			<option value="Software">Software</option>
			<option value="AdTech">AdTech</option>
			<option value="Data">Data</option>
			<option value="Other">Other</option>
      	</select> */}

      <Button 
	  	disabled={email === '' || team === '' || measurement === '' || value === '' || commingling === '' || identify === '' || snapshot === '' || we === '' || driven === '' || marketing === '' } 
		type="submit" value="Submit">Submit</Button>
    </form>
  </div>
    
  </>
)
};

export default BrandSurvey;