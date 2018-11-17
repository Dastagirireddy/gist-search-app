import React from 'react';
import './GistFormat.css';

const GistFormat = (props) => {
	return (
		<div className="GistFormat">
			<div className="title">
				{props.title}
			</div>
			<div className="content">
				{props.content}
			</div>
		</div>
	);
};

export default GistFormat;