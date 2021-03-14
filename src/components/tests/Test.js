import React, { Component } from 'react';

class Test extends Component {
	state = {
		title: '',
		body: ''
	};

	// LIFE CYCLE METHODS

	// Runs after component loads
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => response.json())
			.then(json =>
				this.setState({
					title: json.title,
					body: json.body
				})
			)
			.catch(err => console.error(err));
	}

	// Runs before mount (Not recommended to use, renamed, USE UNSAFE_(method))
	// componentWillMount() {
	// 	console.log("component will mount");
	// }

	// Runs when component updates, aka changes state
	// componentDidUpdate() {
	// 	console.log("component has updated");
	// }

	// Runs before component updates, aka changes state (Not recommended to use, renamed, USE UNSAFE_(method))
	// componentWillUpdate() {
	// 	console.log("component will update");
	// }

	// Runs when component recieves new propreties (Mostly used with redux) (Not recommended to use, renamed, USE UNSAFE_(method))
	// componentWillReceiveProps(nextProps, nextstate) {
	// 	console.log("component will recieve props");
	// }

	// READ DOCUMENTATION FOR 2 MORE METHODS, VERY RARELY USED

	render() {
		const { title, body } = this.state;

		return (
			<div>
				<h1>{title}</h1>
				<p>{body}</p>
			</div>
		);
	}
}

export default Test;
