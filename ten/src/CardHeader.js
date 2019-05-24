import React from 'react';

const CardHeader = (props) => {
	return (
		<div className='headerCont' id={props.headerName}>
			<h2>{props.headerName}</h2>
		</div>
	);
};

export default CardHeader;
