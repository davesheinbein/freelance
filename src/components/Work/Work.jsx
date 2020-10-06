import React from 'react';
import './style/Work.css';

function Work() {
	return (
		<>
			<h1 class='work__sectionTitle'>Past Work</h1>
			<h3 class='work__sectionSubTitle'>
				Check out our past work on our Githubs'
			</h3>
			<div class='work__githubContainer'>
				<div class='work__github'>
					<h3 class='work__githubTitle'>
						David Sheinbein Github
					</h3>
					<a href='https://github.com/davesheinbein'>
						<h4>Github</h4>
						<img
							src='https://avatars0.githubusercontent.com/u/63617001?s=460&u=e6bf6297ac6f1ee6d2ff47fe97334ea8d4bb067e&v=4'
							alt='David'
							class='work__githubImg'
						/>
					</a>
				</div>

				<div class='work__github'>
					<h3 class='work__githubTitle'>
						Jason Hur Github
					</h3>
					<a href='https://github.com/jhur91'>
						<h4>Github</h4>
						<img
							src='https://avatars0.githubusercontent.com/u/63617886?s=400&u=9ee7ce8ea15c0d69aa892cd06001db28d05dfd8c&v=4'
							alt='Jason'
							class='work__githubImg'
						/>
					</a>
				</div>
			</div>
		</>
	);
}

export default Work;
