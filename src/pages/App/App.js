import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Section from '../../components/Section/Section';
import './style/App.css';

function App() {
	return (
		<div className='App'>
			<Section>
				<ContactForm />
			</Section>
		</div>
	);
}

export default App;
