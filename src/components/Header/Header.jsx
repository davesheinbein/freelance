import React from 'react';
import logo from '../../images/ShurTechLogo.gif';
import './style/Header.css';

function Header() {
	return (
		<div className='header' id='#home'>
			<div className='header__logoContainer'>
				<a href='#home'>
					<img
						src={logo}
						alt='logo'
						className='header__logo'
					/>
					<h1>Shur Tech</h1>
				</a>
			</div>
			<ul>
				<a href='#About'>
					<li>About</li>
				</a>
				<a href='#Pricing'>
					<li>Pricing</li>
				</a>
				<a href='#Work'>
					<li>Work</li>
				</a>
				<a href='#Contact'>
					<li>Contact Us</li>
				</a>
			</ul>
		</div>
	);
}

export default Header;
