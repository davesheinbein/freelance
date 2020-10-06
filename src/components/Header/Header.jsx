import React from 'react';
import logo from '../../images/ShurTechLogo.gif';
import './style/Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='header__logoContainer'>
				<img
					src={logo}
					alt='logo'
					className='header__logo'
				/>
				<h1>Shur Tech</h1>
			</div>
			<ul>
				<a href='#'>
					<li>Hi</li>
				</a>
				<a href='#'>
					<li>Hi</li>
				</a>
				<a href='#'>
					<li>Hi</li>
				</a>
			</ul>
		</div>
	);
}

export default Header;
