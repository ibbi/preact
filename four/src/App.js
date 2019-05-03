import React from 'react';
import Form from './Form';
import Page from './Page';

class App extends React.Component {
	state = {
		colors: sessionStorage.getItem('colors')
			? JSON.parse(sessionStorage.getItem('colors'))
			: {
					primary: '#ffafff',
					secondary: '#ffffaf',
					tertiary: '#afffff',
			  },
		tempColors: {
			primary: '',
			secondary: '',
			tertiary: '',
		},
		persist: false,
	};
	keyHandler = (ev, el) => {
		this.setState({
			tempColors: { ...this.state.tempColors, [el]: ev.target.value },
		});
	};
	togglePersist = () => this.setState({ persist: !this.state.persist });
	isValidColor = (hex) => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
	handleSubmit = () => {
		if (Object.values(this.state.tempColors).every(this.isValidColor)) {
			this.setState({ colors: { ...this.state.tempColors } }, () =>
				this.state.persist
					? sessionStorage.setItem('colors', JSON.stringify(this.state.colors))
					: undefined
			);
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
					persist={this.togglePersist}
				/>
				<Page colors={this.state.colors} />
			</>
		);
	}
}

export default App;
