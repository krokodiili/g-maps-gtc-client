import axios from 'axios'

const baseUrl = 'asd'

export default store => ({
	sendPlayerDetails: async (state, name) => {
		console.log('NAME', name)
		/*
		try {
			const response = axios.post(`${baseUrl}/player`)
			return { playerData: response.data }
		} catch (e) {
			console.log(e)
    }
    */
	},
})
