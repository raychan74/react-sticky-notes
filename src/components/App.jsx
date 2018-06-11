import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Memo from './Memo';

// const mapStateToProps = ({ notes }) => ({ notes });

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			
		};
	}

	render() {
		return (
			<Memo />
		);
	}
}

// export default connect(mapStateToProps)(App);
