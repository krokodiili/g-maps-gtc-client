import React from 'react'
import { CircularProgress } from '@material-ui/core'
import Lobby from '../components/GameLobby'

export const GameLobby = ({ players, locations, startGame }) => {
	if (!players) {
		return <CircularProgress />
	}

	return (
		<Lobby players={players} locations={locations} startGame={startGame} />
	)
}

export default GameLobby
