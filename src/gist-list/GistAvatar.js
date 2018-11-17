import React from 'react';
import './GistAvatar.css';

const GistAvatar = ({user, viewFork}) => {
	const avatarStyle = {
		backgroundImage: `url(${user.avatar_url})`
	};
	return (
		<a href={viewFork} rel="noopener noreferrer" target="_blank" title={user.login} className="GistAvatar" style={avatarStyle}>
		</a>
	);
};

export default GistAvatar;