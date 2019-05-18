import React from 'react';

const CardHeader = (props) => {
	return (
		<div className='headContainer' id={props.header}>
			<h3>{props.header}</h3>
		</div>
	);
};

export default CardHeader;
