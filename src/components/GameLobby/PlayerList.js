import React from 'react'
import { Typography } from '@material-ui/core'

export default ({ list }) => {
	console.log(list)
	return (
		<div>
			{list.map(player => (
				<div style={{ display: 'flex', marginTop: 5 }} key={player.id}>
					<Typography variant="title"> {player.name} </Typography>
					<Typography variant="subheading" style={{ marginLeft: 20 }}>
						{player.score}
					</Typography>
				</div>
			))}
		</div>
	)
}
