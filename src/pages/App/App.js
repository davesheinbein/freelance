import React from 'react';
import About from '../../components/About/About';
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';
import Pricing from '../../components/Pricing/Pricing';
import Section from '../../components/Section/Section';
import Work from '../../components/Work/Work';
import './style/App.css';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='sectionA'>
				<Section>
					<About />
				</Section>
			</div>
			<div className='sectionB'>
				<Section>
					<Pricing />
				</Section>
			</div>
			<div className='sectionA'>
				<Section>
					<Work />
				</Section>
			</div>
			<div className='sectionB'>
				<Section>
					<ContactForm />
				</Section>
			</div>
		</div>
	);
}

export default App;
