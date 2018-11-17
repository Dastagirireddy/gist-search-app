import React from 'react';
import './Header.css';

const Header = ({title}) => {
	return (
		<nav className="Header navbar navbar-default">
		  <div className="container">
		    <div className="navbar-header">
		      <h1><a className="navbar-brand" href="/">{title}</a></h1>
		    </div>
		  </div>
		</nav>
	);
};

export default Header;