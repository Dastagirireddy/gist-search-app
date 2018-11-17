import React from 'react';
import GistListItem from './GistListItem';

const GistList = ({gists}) => {
	const gistItems = gists.map((gist, index) => {return (<GistListItem key={gist.id} gist={gist} />)});

	return (
		<div className="GistList">
			{ gists.length > 0 && 
				<div>
					{gistItems}
				</div>
			}
		</div>
	);
};

export default GistList;