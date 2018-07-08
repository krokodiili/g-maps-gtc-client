import React from 'react'
import { Card, Button } from '@material-ui/core'
import PlayerList from './PlayerList'

export default ({ players, locations, startGame }) => (
	<Card style={{ padding: 20 }}>
		<p style={{ fontWeight: 'bold' }}> Pelaajat </p>
		<PlayerList
			list={players}
			locationAmount={locations ? locations.length : 0}
		/>
		{!locations && (
			<Button
				style={{ marginTop: 20 }}
				variant="contained"
				onClick={startGame}
			>
				Aloita peli
			</Button>
		)}

		<hr />
	</Card>
)
