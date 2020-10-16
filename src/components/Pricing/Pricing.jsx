import React from 'react';
import { Grid } from '@material-ui/core';
import './style/Pricing.css';

function Pricing() {
	return (
		<>
			<Grid item xs={12}>
				<h2 className='pricing__sectionTitle' id='Pricing'>
					Pricing
				</h2>
			</Grid>
			<Grid item xs={12}>
				<h3 className='pricing__sectionSubTitle'>
					Pay what you think is fair + hosting and domain
					name fees
				</h3>
			</Grid>
			<br />
			<Grid item>
				<div className='pricing__hostingDomainContainer'>
					<div className='pricing__hostingDomain'>
						<Grid item xs={12}>
							<Grid item xs={12}>
								<h4 className='pricing__hostingDomainTitle'>
									Hosting
								</h4>
							</Grid>
							<Grid item xs={12}>
								<a
									href='https://firebase.google.com/pricing'
									className='pricing__hostingDomainLink'>
									<h4 className='pricing__hostingDomainText'>
										Firebase
									</h4>
								</a>
							</Grid>
							<Grid item xs={12}>
								<a
									href='https://www.heroku.com/pricing'
									className='pricing__hostingDomainLink'>
									<h4 className='pricing__hostingDomainText'>
										Heroku
									</h4>
								</a>
							</Grid>
							<Grid item xs={12}>
								<a
									href='https://aws.amazon.com/free/webapps/?trk=ps_a134p000004ew3TAAQ&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_US&sc_publisher=Google&sc_category=Websites&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=aws%20website%20hosting%20pricing&sc_content=Website%20Hosting_e&sc_matchtype=e&sc_segment=463369380671&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Websites|Solution|US|EN|Text&s_kwcid=AL!4422!3!463369380671!e!!g!!aws%20website%20hosting%20pricing&ef_id=CjwKCAjwiOv7BRBREiwAXHbv3CEIqhnV_q483qpXtxKtoFQUsYUStyTDyrz83w0v45vETZyaBFaOuxoCdIoQAvD_BwE:G:s&s_kwcid=AL!4422!3!463369380671!e!!g!!aws%20website%20hosting%20pricing'
									className='pricing__hostingDomainLink'>
									<h4 className='pricing__hostingDomainText'>
										AWS S3
									</h4>
								</a>
							</Grid>
						</Grid>
					</div>

					<div className='pricing__hostingDomain'>
						<Grid item xs={12}>
							<Grid item xs={12}>
								<h4 className='pricing__hostingDomainTitle'>
									Domain Names
								</h4>
							</Grid>
							<Grid item xs={12}>
								<a
									href='https://www.namecheap.com/domains/'
									className='pricing__hostingDomainLink'>
									<h4 className='pricing__hostingDomainText'>
										Namecheap
									</h4>
								</a>
							</Grid>
							<Grid item xs={12}>
								<a
									href='https://www.godaddy.com/offers/domains/godaddy-domains?isc=gofdh073&gclid=CjwKCAjwiOv7BRBREiwAXHbv3JfrpXD6gS0CoXUbw31cuQe7w0hLiJPuIugJ0L6GEPhRCMXS7LYBFhoClzMQAvD_BwE&gclsrc=aw.ds'
									className='pricing__hostingDomainLink'>
									<h4 className='pricing__hostingDomainText'>
										Go Daddy
									</h4>
								</a>``
							</Grid>
							<Grid item xs={12}>
								<a
									href='https://domains.google/'
									className='pricing__hostingDomainLink'>
									<h4 className='pricing__hostingDomainText'>
										Google Domains
									</h4>
								</a>
							</Grid>
						</Grid>
					</div>
				</div>
			</Grid>
		</>
	);
}

export default Pricing;
