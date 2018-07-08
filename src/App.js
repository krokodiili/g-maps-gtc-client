import React, { Component } from 'react'
import './App.css'
import { Provider } from 'redux-zero/react'
import socket from 'socket.io-client'
import store from './store'
import EnterName from './containers/EnterName'
import GameLobby from './containers/GameLobby'
import HowToPlay from './components/HowToPlay'
import GuessInput from './containers/GuessInput'
import StreetView from './components/StreetView'

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
			currentLocation: 0,
		}

		this.makeAGuess = this.makeAGuess.bind(this)
	}

	componentDidMount() {
		io.on('updateUsers', players => {
			this.setState({ players })
		})

		io.on('start', locationArray => {
			console.log('GAME STARTINGS')
			this.setState({ locations: locationArray })
			console.log(locationArray)
		})
		io.on('userScored', data => console.log('asdasd', data))
	}

	sendPlayerDetails = name => {
		console.log(name)
		io.emit('initial', {
			name,
		})
	}

	makeAGuess = guess => {
		const { locations, currentLocation } = this.state
		if (
			locations
			&& guess.toLowerCase() === locations[currentLocation].city
		) {
			this.setState({ currentLocation: currentLocation + 1 })
			io.emit('correct', currentLocation)
		}
	}

	startGame = () => {
		io.emit('start')
	}

	render() {
		const { players, locations, currentLocation } = this.state

		return (
			<Provider store={store}>
				<div className="App" style={styles.root}>
					<div>
						<div style={styles.maps}>
							{locations ? (
								<StreetView
									lat={
										locations[currentLocation].location.lat
									}
									lng={
										locations[currentLocation].location.lng
									}
								/>
							) : (
								<div style={styles.loading} />
							)}
						</div>
						<div style={styles.bottomBar}>
							<GuessInput onSubmit={this.makeAGuess} />
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
