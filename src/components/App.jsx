import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Memo from './Memo';

// const mapStateToProps = ({ notes }) => ({ notes });

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			memo: [{ content: '', clientX: 50, clientY: 20 }],
			offsetX: 0,
			offsetY: 0,
			dragging: null
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

	onDrop = e => {
		const idx = this.state.dragging.getAttribute('idx');
		const memo = this.state.memo;
		memo[idx].clientX = e.clientX - this.state.offsetX;
		memo[idx].clientY = e.clientY - this.state.offsetY;

		this.setState({ memo });
	}

	onDragOver = e => {
		e.preventDefault();
	}

	onDragEnd = e => {
		this.setState({ dragging: null });
	}

	onDragStart = e => {
		const idx = e.target.getAttribute('idx');
		const offsetX = e.clientX - this.state.memo[idx].clientX;
		const offsetY = e.clientY - this.state.memo[idx].clientY;

		this.setState({ offsetX, offsetY, dragging: e.target });
	}

	renderMemo() {
		return this.state.memo.map((val, idx) => {
			return (
				<Memo
					key={idx}
					idx={idx}
					content={val.content}
					clientX={val.clientX}
					clientY={val.clientY}
					onClickButtonAdd={this.onClickButtonAdd}
					onClickButtonDelete={this.onClickButtonDelete}
					onChangeText={this.onChangeText}
					onDragStart={this.onDragStart}
				/>
			);
		});
	}

	render() {
		console.log('render:', this.state);
		return (
			<div
				style={{ height: '100%', width: '100%' }}
				className='dropzone'
				onDrop={this.onDrop}
				onDragEnd={this.onDragEnd}
				onDragOver={this.onDragOver}
			>
				{this.renderMemo()}
			</div>
		);
	}
}

// export default connect(mapStateToProps)(App);
