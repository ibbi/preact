import React from 'react';

const Infinity = (props) => {
	return (
		<div className='infinity'>
			{props.colors.map(() =>
				props.colors.map((j) => (
					<div className='innerInfinity' style={{ backgroundColor: j }} />
				))
			)}
		</div>
	);
};

export default Infinity;
