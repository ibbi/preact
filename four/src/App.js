import React from 'react';
import Form from './Form';
import Page from './Page';

class App extends React.Component {
	state = {
		colors: {
			primary: '#ffafff',
			secondary: '#ffffaf',
			tertiary: '#afffff',
		},
		tempColors: {
			primary: '',
			secondary: '',
			tertiary: '',
		},
		persist: true,
	};
	keyHandler = (ev, el) => {
		this.setState({
			tempColors: { ...this.state.tempColors, [el]: ev.target.value },
		});
	};
	isValidColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);
	handleSubmit = () => {
		if (Object.values(this.state.tempColors).every(this.isValidColor)) {
			this.setState({ colors: { ...this.state.tempColors } });
		} else {
			alert('incorrect format');
		}
	};
	render() {
		return (
			<>
				<Form
					handleSubmit={this.handleSubmit}
					handler={(ev, el) => this.keyHandler(ev, el)}
				/>
				<Page colors={this.state.colors} />
			</>
		);
	}
}

export default App;
