import React from 'react'
import Button from '@material-ui/core/Button'
import socket from 'socket.io-client'

const io = socket('')
io.emit('initial', { name: 'harri' })

class SocketTester extends React.PureComponent {
	constructor() {
		super()
		this.state = {}
	}

	handleClick = () => {
		io.emit('start')
	}

	render() {
		return <Button
			variant="contained"
			color="primary"
			onClick={this.handleClick}>start game</Button>
	}
}

export default SocketTester
