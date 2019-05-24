import React from 'react'
import Arrow from './Arrow';

const CardItemCont = (props) => {
    return (
        <div className='itemCont'>
            {props.boardIndex===0?null:<Arrow handler={(props.) => props.handler}></Arrow>}
        </div>
    )
}

export default CardItemCont
