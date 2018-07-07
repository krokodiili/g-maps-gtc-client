import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, TextField, Button } from '@material-ui/core'

class EnterNameDialog extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit = event => {
		event.preventDefault()

		const { onClose } = this.props
		const { name } = this.state
		onClose(name)
	}

	handleChange(e) {
		this.setState({ name: e.target.value })
	}

	render() {
		const { onClose, ...other } = this.props
		const { name } = this.state

		return (
			<Dialog
				{...other}
				style={{
					textAlign: 'center',
				}}
			>
				<div style={{ width: 400, padding: 40 }}>
					<p> Tervetuloa! </p>
					<form
						onSubmit={this.handleSubmit}
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<TextField
							value={name}
							onChange={this.handleChange}
							placeholder="Kirjoita nimi"
						/>
						<Button
							type="submit"
							variant="contained"
							style={{ marginTop: 20 }}
						>
							Aloita pelaaminen!
						</Button>
					</form>
				</div>
			</Dialog>
		)
	}
}

EnterNameDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
}

export default EnterNameDialog
