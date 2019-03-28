import React, { Component } from 'react';
import CommentApp from './comment/CommentApp'
import './App.css';

class App extends Component {
	render() {
		const msg="hello"
		return (
			<div className="App">
				<CommentApp />
			</div>
		);
	}
}

export default App;
