import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
// create a new component, that will produce some HTML

const API_KEY = 'AIzaSyCVKYavG0PAlS0B5S-d912Qe0XiKrM3aXg';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: []};
		YTSearch({key: API_KEY, term: 'premitive technology'}, (videos) => {
			this.setState({videos});
			// equal to this.setState({videos: videos}) in es6
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}


// take the component's generated HTML and put it 
// on the page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));