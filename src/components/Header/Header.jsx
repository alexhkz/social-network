import React from 'react';
import classes from './Header.module.css';
import earth from '../../assets/images/earth.png'


const Header = () => {
	return (
		<header className={classes.header}>
			<img src={earth} alt='logo' />
		</header>
	)
}

export default Header;