import React from 'react';

const Button = () => {
	return (
		<div className='button' onClick={this.props.handler}>
			{this.props.children}
		</div>
	);
};

export default Button;
