import React from 'react';
import './GistTag.css';

const GistTag = ({tag}) => {
	return (
		<span className="GistTag label label-primary">{tag}</span>
	);
};

export default GistTag;