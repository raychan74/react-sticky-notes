import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Memo extends Component {
	render() {
		const {
			containerStyle,
			buttonContainerStyle,
			buttonStyle,
			footerDivStyle,
			textareaStyle
		} = styles;
		const {
			idx,
			content,
			onChangeText,
			onClickButtonAdd,
			onClickButtonDelete,
			onDragStart,
			clientX,
			clientY
		} = this.props;

		return (
			<div
				style={Object.assign({}, containerStyle, { left: `${clientX}px`, top: `${clientY}px` })}
				id={`memo-${idx}`}
				idx={idx}
				draggable={true}
				onDragStart={onDragStart}
			>
				<div style={buttonContainerStyle}>
					<button
						style={buttonStyle}
						type='button'
						onClick={onClickButtonAdd}
					>
						+
					</button>

					<button
						style={buttonStyle}
						type='button'
						onClick={onClickButtonDelete(idx)}
					>
						x
					</button>
				</div>

				<textarea
					onChange={onChangeText(idx)}
					style={textareaStyle}
					value={content}
				/>

				<div style={footerDivStyle} />
			</div>
		);
	}
}

const styles = {
	containerStyle: {
		position: 'relative',
		left: '100px',
		top: '10px',
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

Memo.propTypes = {
	idx: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired,
	onClickButtonAdd: PropTypes.func.isRequired,
	onClickButtonDelete: PropTypes.func.isRequired,
	onDragStart: PropTypes.func.isRequired,
	clientX: PropTypes.number.isRequired,
	clientY: PropTypes.number.isRequired
};
