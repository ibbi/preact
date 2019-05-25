import React from 'react';
import CardItemCont from './CardItemCont';
import CardHeader from './CardHeader';
import AddButton from './AddButton';

const Card = (props) => {
	return (
		<div className='cardCont'>
			<div className='cardContInner'>
				<CardHeader headerName={props.headerName} />
				{props.itemArray.map((item, index) => (
					<CardItemCont
						boardIndex={props.boardIndex}
						numOfBoards={props.numOfBoards}
						moveHandler={props.moveHandler}
						itemText={item}
						itemIndex={index}
						key={index}
					/>
				))}
			</div>
			<AddButton addHandler={props.addHandler} />
		</div>
	);
};

export default Card;
