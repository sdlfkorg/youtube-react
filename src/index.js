import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';
// create a new component, that will produce some HTML

const API_KEY = 'AIzaSyCVKYavG0PAlS0B5S-d912Qe0XiKrM3aXg';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
}


// take the component's generated HTML and put it 
// on the page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));