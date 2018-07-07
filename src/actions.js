import socket from 'socket.io-client'

const io = socket('http://192.168.1.48:18399')

export default store => ({
	sendPlayerDetails: async (state, name) => {
		console.log('NAME', name)
		io.emit('initial', {
			name,
		})

		io.on('newUser', user => {
			console.log(user)
		})
	},
})
