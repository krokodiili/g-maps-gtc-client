import React, { Component } from 'react'
import Lobby from '../components/GameLobby'

export class GameLobby extends Component {
	render() {
		return (
			<Lobby
				playerList={[
					{
						id: 0,
						name: 'Lauri',
						score: 0,
					},
					{
						id: 1,
						name: 'Harri',
						score: 0,
					},
				]}
				waitingRoomList={[
					{
						id: 2,
						name: 'Jorma',
					},
				]}
			/>
		)
	}
}

export default GameLobby
