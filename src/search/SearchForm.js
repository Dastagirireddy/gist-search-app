import React, {Component} from 'react';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			searchText: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmitSearch(this.state.searchText);
		this.setState({
			searchText: ''
		});
	}

	handleChange(e) {
		this.setState({
			searchText: e.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-group">
				  <input value={this.state.searchText} onChange={this.handleChange} type="text" className="form-control" placeholder="Search gist by username" aria-label="Search gist by username" aria-describedby="basic-addon2" />
				  <span className="input-group-btn">
				    <button className="btn btn-default" type="submit">Search</button>
				  </span>
				</div>
			</form>
		);
	}
}

export default SearchForm;