import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Memo from './Memo';

// const mapStateToProps = ({ notes }) => ({ notes });

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			memo: [{ content: '' }]
		};
	}

	onClickButtonAdd = () => {
		this.setState(prevState => (
			{ memo: [...prevState.memo, { content: '' }] }
		));
	}

	onClickButtonDelete = idx => () => {
		const memo = [...this.state.memo];
		memo.splice(idx, 1);

		this.setState({ memo });
	}

	onChangeText = idx => e => {
		const memo = this.state.memo;
		memo[idx].content = e.target.value;

		this.setState({ memo });
	}

	renderMemo() {
		return this.state.memo.map((val, idx) => {
			return (
				<Memo
					key={idx}
					idx={idx}
					content={val.content}
					onClickButtonAdd={this.onClickButtonAdd}
					onClickButtonDelete={this.onClickButtonDelete}
					onChangeText={this.onChangeText}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<div
					style={{ height: '100%', width: '100%' }}
					className='dropzone'
					draggable={true}
					onDrop={this.onDrop}
					onDragEnd={this.onDragEnd}
					onDragOver={this.onDragOver}
				>
					{this.renderMemo()}
				</div>
				<h1 id='h1'>hi</h1>
			</div>
		);
	}
}

// export default connect(mapStateToProps)(App);
