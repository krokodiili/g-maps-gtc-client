import React from 'react'
import { Typography } from '@material-ui/core'

export default ({ winner, locations }) => (
	<div>
		<Typography variant="display2">
			{' '}
			{winner} muisti tarinan, peli on päättynyt!{' '}
		</Typography>
		<Typography variant="headline"> Oikeat paikat: </Typography>
		{locations.map(location => <p> {} </p>)}
	</div>
)
