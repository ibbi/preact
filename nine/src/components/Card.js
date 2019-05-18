import React from 'react';
import CardHeader from './CardHeader';
import CardItem from './CardItem';
import AddButton from './AddButton';
import Arrow from './Arrow';

const Card = (props) => {
	return (
		<div className='Card'>
			<CardHeader header={props.header} />
			{props.items.map((i, j) => (
				<div key={j} className='itemCont'>
					<CardItem item={i} />
					<Arrow />
				</div>
			))}
			<AddButton addHandler={props.addHandler} />
		</div>
	);
};

export default Card;
