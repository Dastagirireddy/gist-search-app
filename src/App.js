import React, {Component} from 'react';
import Header from './header/Header';
import SearchForm from './search/SearchForm';
import GistList from './gist-list/GistList';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gists: [],
			isLoading: false
		};
		this.username = '';
		this.onSubmitSearch = this.onSubmitSearch.bind(this);
		this.fetchGists = this.fetchGists.bind(this);
	}

	onSubmitSearch(searchText) {
		if(searchText.length > 0) {
			this.username = searchText;
			this.fetchGists(searchText);
		}
	}

	fetchGists(username) {
		this.setState({
			gists: [],
			isLoading: true
		});

		axios.get(`https://api.github.com/users/${username}/gists`)
			.then((response) => {
			  	this.setState({
			  		gists: response.data,
			  		isLoading: false
			  	});
			  })
			  .catch(error => {
			    this.setState({
			    	gists: [],
			    	isLoading: false
			    });
			  });
	}

	render() {
		return (
			<div className="main">
				<Header title="Gist Search App" />
				<div className="container">
					<SearchForm onSubmitSearch={this.onSubmitSearch}/>
					<div className="list">
						{(!this.state.isLoading && this.state.gists.length > 0) && 
							<div>
								<h2>Displaying {this.username} gists</h2>
								<GistList gists={this.state.gists} />
							</div>
						}

						{ (!this.state.isLoading && this.state.gists.length === 0 && this.username.length > 0) &&
							<h2>No gists found for user: {this.username}</h2>
						}

						{this.state.isLoading && 
							<div><i className="fa fa-spin fa-spinner" aria-hidden="true"></i> Loading...</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default App;