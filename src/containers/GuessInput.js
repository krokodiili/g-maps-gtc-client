import React, { Component } from 'react'
import GuessForm from '../components/GuessForm'

class GuessInput extends Component {
	constructor() {
		super()

		this.state = {
			guess: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({ guess: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state.guess)
		this.setState({ guess: '' })
	}

	render() {
		const { guess } = this.state

		return (
			<GuessForm
				value={guess}
				onChange={this.handleChange}
				onSubmit={this.handleSubmit}
			/>
		)
	}
}

export default GuessInput
