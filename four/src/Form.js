import React from 'react';

const Form = (props) => {
	return (
		<>
			<label>
				primary
				<input
					type='text'
					value={props.value1}
					onChange={(ev) => props.handler(ev, 'primary')}
				/>
			</label>
			<label>
				secondary
				<input
					type='text'
					value={props.value1}
					onChange={(ev) => props.handler(ev, 'secondary')}
				/>{' '}
			</label>
			<label>
				tertiary
				<input
					type='text'
					value={props.value1}
					onChange={(ev) => props.handler(ev, 'tertiary')}
				/>{' '}
			</label>
			<label>
				persist
				<input type='checkbox' />
			</label>

			<button onClick={props.handleSubmit}>Submit</button>
		</>
	);
};

export default Form;
