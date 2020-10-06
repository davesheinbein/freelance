import React from 'react';
import './style/ContactForm.css';

function ContactForm() {
	return (
		<div className='contactForm__Container'>
			<h1
				className='contactForm__sectionTitle'
				id='Contact'>
				Contact Us!
			</h1>
			<h3 className='contactForm__sectionSubTitle'>
				Let's discuss our service today!
			</h3>
			<form action='' className='contact__form'>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label for=''>First Name</label>
						<input type='text' className='form-control' />
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label for=''>Last Name</label>
						<input type='text' className='form-control' />
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label for=''>Email</label>
						<input type='text' className='form-control' />
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label for=''>Message Subject</label>
						<input type='text' className='form-control' />
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<div className='input-block textarea'>
						<label for=''>Drop your message here</label>
						<textarea
							rows='3'
							type='text'
							className='form-control'></textarea>
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<button className='contactForm__btn'>Send</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
