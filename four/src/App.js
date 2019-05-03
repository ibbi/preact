import React from 'react';
import Form from './Form';
import Page from './Page';

class App extends React.Component {
	state = {
		colors: {
			primary: '#ffffff',
			secondary: '#ffffff',
			tertiary: '#ffffff',
		},
		persist: true,
	};
	keyHandler = (ev, el) => {
		this.setState({ colors: { ...this.state.colors, [el]: ev.target.value } });
	};
	isValidColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);
	handleSubmit = () => {
		console.log(Object.values(this.state.colors).every(this.isValidColor));
	};
	render() {
		return (
			<>
				<Form
					handleSubmit={this.handleSubmit}
					handler={(ev, el) => this.keyHandler(ev, el)}
				/>
				<Page />
			</>
		);
	}
}

export default App;
