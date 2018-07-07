import React from 'react'
import { CircularProgress } from '@material-ui/core'
import Lobby from '../components/GameLobby'

export const GameLobby = ({ players }) => {
	if (players.length < 1) {
		return <CircularProgress />
	}

	return <Lobby players={players} />
}

export default GameLobby
