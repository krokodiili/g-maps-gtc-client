import React from 'react'
import { TextField, Card } from '@material-ui/core'

export default ({ onChange, value, onSubmit }) => (
	<Card style={{ padding: 10 }}>
		<form onSubmit={onSubmit}>
			<TextField
				value={value}
				onChange={onChange}
				placeholder="Missä kaupungissa ollaan?"
				style={{
					marginTop: 30,
					minWidth: 600,
				}}
			/>
		</form>
	</Card>
)
