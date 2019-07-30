import React, { Component } from 'react';

class Greeting extends Component {
	render() {
		const { name } = this.props;
		return (
			<div className="greeting">
				<h1>Welcome, {name}</h1>
			</div>
		)
	}
}

export default Greeting;