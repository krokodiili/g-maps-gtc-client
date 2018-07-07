import React, { Component } from 'react'
import './App.css'
import { Provider } from 'redux-zero/react'
import socket from 'socket.io-client'
import store from './store'
import EnterName from './containers/EnterName'
import GameLobby from './containers/GameLobby'
import HowToPlay from './components/HowToPlay'
import GuessInput from './containers/GuessInput'
import StreetView from './containers/StreetView'

const io = socket('http://192.168.1.48:18399')

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
	constructor() {
		super()

		this.state = {
			players: null,
			locations: null,
		}
	}

	componentDidMount() {
		io.on('updateUsers', players => {
			this.setState({ players })
		})

		io.on('start', locationArray => {
			console.log('GAME STARTINGS')
			this.setState({ locations: locationArray })
		})
	}

	sendPlayerDetails = name => {
		console.log(name)
		io.emit('initial', {
			name,
		})
	}

	startGame = () => {
		io.emit('start')
	}

	render() {
		const { players, locations } = this.state
		return (
			<Provider store={store}>
				<div className="App" style={styles.root}>
					<div>
						<StreetView />
						<div style={styles.bottomBar}>
							<GuessInput />
						</div>
					</div>

					<div style={styles.sideBar}>
						<EnterName sendPlayerDetails={this.sendPlayerDetails} />
						<GameLobby
							players={players}
							locations={locations}
							startGame={this.startGame}
						/>
						<HowToPlay />
					</div>
				</div>
			</Provider>
		)
	}
}

export default App
