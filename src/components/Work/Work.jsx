import React from 'react';
import { Grid } from '@material-ui/core';
import './style/Work.css';

function Work() {
	return (
		<>
			<Grid item xs={12}>
				<h1 className='work__sectionTitle' id='Work'>
					Work...
				</h1>
			</Grid>
			<Grid item xs={12}>
				<h3 className='work__sectionSubTitle'>
					Check out our past work on our Githubs'
				</h3>
			</Grid>
			<div className='work__githubContainer'>
				<Grid container spacing={3} style={{ margin: '0' }}>
					<Grid item xs={12} sm={6} m={6}>
						<div className='work__github'>
							<h3 className='work__githubTitle'>
								David Sheinbein Github
							</h3>
							<a href='https://github.com/davesheinbein'>
								<h4>Github</h4>
								<img
									src='https://avatars0.githubusercontent.com/u/63617001?s=460&u=e6bf6297ac6f1ee6d2ff47fe97334ea8d4bb067e&v=4'
									alt='David'
									className='work__githubImg'
								/>
							</a>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} m={6}>
						<div className='work__github'>
							<h3 className='work__githubTitle'>
								Jason Hur Github
							</h3>
							<a href='https://github.com/jhur91'>
								<h4>Github</h4>
								<img
									src='https://avatars0.githubusercontent.com/u/63617886?s=400&u=9ee7ce8ea15c0d69aa892cd06001db28d05dfd8c&v=4'
									alt='Jason'
									className='work__githubImg'
								/>
							</a>
						</div>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default Work;
