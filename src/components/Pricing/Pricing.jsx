import React from 'react';
import './style/Pricing.css';

function Pricing() {
	return (
		<>
			<h2 class='pricing__sectionTitle'>Pricing</h2>
			<h3 class='pricing__sectionSubTitle'>
				Pay what you think is fair + hosting and domain name
				fees
			</h3>
			<br />
			<div class='pricing__hostingDomainContainer'>
				<div class='pricing__hostingDomain'>
					<h4 class='pricing__hostingDomainTitle'>Hosting</h4>
					<a
						href='https://firebase.google.com/pricing'
						class='pricing__hostingDomainLink'>
						<h4 class='pricing__hostingDomainText'>
							Firebase - Hosting
						</h4>
					</a>
					<a
						href='https://www.heroku.com/pricing'
						class='pricing__hostingDomainLink'>
						<h4 class='pricing__hostingDomainText'>
							Heroku - Hosting
						</h4>
					</a>
					<a
						href='https://aws.amazon.com/free/webapps/?trk=ps_a134p000004ew3TAAQ&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_US&sc_publisher=Google&sc_category=Websites&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=aws%20website%20hosting%20pricing&sc_content=Website%20Hosting_e&sc_matchtype=e&sc_segment=463369380671&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Websites|Solution|US|EN|Text&s_kwcid=AL!4422!3!463369380671!e!!g!!aws%20website%20hosting%20pricing&ef_id=CjwKCAjwiOv7BRBREiwAXHbv3CEIqhnV_q483qpXtxKtoFQUsYUStyTDyrz83w0v45vETZyaBFaOuxoCdIoQAvD_BwE:G:s&s_kwcid=AL!4422!3!463369380671!e!!g!!aws%20website%20hosting%20pricing'
						class='pricing__hostingDomainLink'>
						<h4 class='pricing__hostingDomainText'>
							AWS S3 - Hosting
						</h4>
					</a>
				</div>

				<div class='pricing__hostingDomain'>
					<h4 class='pricing__hostingDomainTitle'>
						Domain Names
					</h4>
					<a
						href='https://www.namecheap.com/domains/'
						class='pricing__hostingDomainLink'>
						<h4 class='pricing__hostingDomainText'>
							Namecheap - Domain Names
						</h4>
					</a>
					<a
						href='https://www.godaddy.com/offers/domains/godaddy-domains?isc=gofdh073&gclid=CjwKCAjwiOv7BRBREiwAXHbv3JfrpXD6gS0CoXUbw31cuQe7w0hLiJPuIugJ0L6GEPhRCMXS7LYBFhoClzMQAvD_BwE&gclsrc=aw.ds'
						class='pricing__hostingDomainLink'>
						<h4 class='pricing__hostingDomainText'>
							Go Daddy - Domain Names
						</h4>
					</a>
					<a
						href='https://domains.google/'
						class='pricing__hostingDomainLink'>
						<h4 class='pricing__hostingDomainText'>
							Google Domains - Domain Names
						</h4>
					</a>
				</div>
			</div>
		</>
	);
}

export default Pricing;
