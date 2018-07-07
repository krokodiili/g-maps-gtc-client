import React from 'react'
import { Card, Button } from '@material-ui/core'
import PlayerList from './PlayerList'

export default ({ playerList, waitingRoomList, gameRunning }) => (
	<Card style={{ padding: 20 }}>
		<p style={{ fontWeight: 'bold' }}> Pelaajat </p>
		<PlayerList list={playerList} />
		{!gameRunning && (
			<Button style={{ marginTop: 20 }} variant="contained">
				Aloita peli
			</Button>
		)}

		<hr />
		<p style={{ fontWeight: 'bold' }}> Odottaa peliä </p>
		<PlayerList list={waitingRoomList} />
	</Card>
)
