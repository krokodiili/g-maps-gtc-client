import React from 'react'
import { Card, Button } from '@material-ui/core'
import PlayerList from './PlayerList'

export default ({ players, gameRunning }) => (
	<Card style={{ padding: 20 }}>
		<p style={{ fontWeight: 'bold' }}> Pelaajat </p>
		<PlayerList list={players} />
		{!gameRunning && (
			<Button style={{ marginTop: 20 }} variant="contained">
				Aloita peli
			</Button>
		)}

		<hr />
		<p style={{ fontWeight: 'bold' }}> Odottaa peliä </p>
	</Card>
)
