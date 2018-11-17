import React from 'react';
import GistTag from './GistTag';
import GistAvatar from './GistAvatar';
import axios from 'axios';
import GistFormat from './GistFormat';

class GistListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			avatars: []
		};

		const tags = [];

		for(let file in this.props.gist.files) {
			let type = this.props.gist.files[file].language || 'Text';

			if(type && (tags.indexOf(type) === -1)) {
				tags.push(type);
			}
		}

		this.tagItems = tags.map((tag, index) => {
			return (<GistTag key={index} tag={tag} />)
		});
	}

	componentDidMount() {
		axios.get(this.props.gist.forks_url)
			.then(response => {
				this.setState({
					avatars: response.data
				});
			});
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<a href={this.props.gist.html_url} rel="noopener noreferrer" target="_blank">{this.props.gist.description || 'No description'}</a>
				</div>
				<div className="panel-body">
					<GistFormat title="Tags" content={this.tagItems} />
					{
						this.state.avatars.length > 0 &&
						<GistFormat 
							title="Avatars" 
							content={this.state.avatars.reverse().splice(0, 3).map((avatar, index) => {
												return (<GistAvatar viewFork={avatar.html_url} key={index} user={avatar.owner} />);
											})} />
					}
				</div>
			</div>
		);
	}
}

export default GistListItem;