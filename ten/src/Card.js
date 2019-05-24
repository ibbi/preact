import React from 'react';
import CardHeader from './CardHeader';
import CardItemCont from './CardItemCont';
import AddButton from './AddButton';

const Card = (props) => {
	return (
		<div className='cardCont'>
			<CardHeader headerName={props.headerName} />
			{props.itemText.map((i, j) => (
				<CardItemCont
					moveHandler={props.moveHandler}
					boardIndex={props.boardIndex}
					numOfBoards={props.numOfBoards}
					itemIndex={j}
					itemText={i}
				/>
			))}
			<AddButton addHandler={props.addHandler} />
		</div>
	);
};

export default Card;
