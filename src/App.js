import React, { Component } from 'react'
import './App.css'
import { Provider } from 'redux-zero/react'
import store from './store'
import EnterName from './containers/EnterName'
import GameLobby from './containers/GameLobby'
import HowToPlay from './components/HowToPlay'
import GuessInput from './containers/GuessInput'

const styles = {
	root: {
		display: 'flex',
	},
	maps: {
		width: '80vw',
		height: '90vh',
		backgroundColor: 'black',
	},
	sideBar: {
		width: '20vw',
		height: '100vh',
	},
	bottomBar: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#777',
		height: '100%',
	},
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App" style={styles.root}>
					<div>
						<div style={styles.maps} />
						<div style={styles.bottomBar}>
							<GuessInput />
						</div>
					</div>

					<div style={styles.sideBar}>
						<EnterName />
						<GameLobby />
						<HowToPlay />
					</div>
				</div>
			</Provider>
		)
	}
}

export default App
