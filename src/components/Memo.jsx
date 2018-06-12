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
			increaseZIndex,
			onChangeText,
			onClickButtonAdd,
			onClickButtonDelete,
			onDragStart,
			clientX,
			clientY,
			zIndex
		} = this.props;

		return (
			<div
				style={Object.assign({}, containerStyle, { zIndex, left: `${clientX}px`, top: `${clientY}px` })}
				id={`memo-${idx}`}
				idx={idx}
				draggable={true}
				onDragStart={onDragStart}
				onClick={increaseZIndex}
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
		position: 'absolute',
		border: '1px solid #8dcbde',
		background: '#87c5d7',
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
		backgroundColor: '#7dbbce',
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
	increaseZIndex: PropTypes.func.isRequired,
	clientX: PropTypes.number.isRequired,
	clientY: PropTypes.number.isRequired,
	zIndex: PropTypes.number.isRequired
};
