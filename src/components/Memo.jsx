import React, { Component } from 'react';

export default class Memo extends Component {
	// onClickButton = e => {
	// 	console.log(e.target);
	// }

	render() {
		const {
			containerStyle,
			buttonContainerStyle,
			buttonStyle,
			footerDivStyle,
			textareaStyle
		} = styles;

		return (
			<div style={containerStyle}>
				<div style={buttonContainerStyle}>
					<button
						style={buttonStyle}
						type='button'
						onClick={this.onClickButton}
					>
						{/*<strong style={{ fontSize: '14px' }}>+</strong>*/}
						+
					</button>

					<button
						style={buttonStyle}
						type='button'
						onClick={this.onClickButton}
					>
						{/*<strong>x</strong>*/}
						x
					</button>
				</div>

				<textarea	style={textareaStyle} />

				<div style={footerDivStyle} />
			</div>
		);
	}
}

const styles = {
	containerStyle: {
		border: '1px solid palevioletred',
		background: 'lightblue',
		minWidth: '200px',
		minHeight: '160px',
		width: '200px',
		height: '160px',
		resize: 'both',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column'
	},
	buttonContainerStyle: {
		boxSizing: 'border-box',
		display: 'flex',
		justifyContent: 'space-between',
	},
	buttonStyle: {
		backgroundColor: 'inherit',
		boxSizing: 'border-box',
		border: 'none',
		fontSize: '14px',
		height: '30px',
		width: '30px'
	},
	footerDivStyle: {
		height: '10px',
		width: '100%',
	},
	textareaStyle: {
		backgroundColor: 'inherit',
		boxSizing: 'border-box',
		border: 'none',
		bottom: '10px',
		flexGrow: '1',
		fontSize: '18px',
		width: '100%',
		outline: 'none',
		resize: 'none'
	},
};
