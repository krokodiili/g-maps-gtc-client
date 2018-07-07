import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, TextField, Button } from '@material-ui/core'

class EnterNameDialog extends Component {
	handleSubmit = event => {
		event.preventDefault()
		const { onClose } = this.props
		onClose()
	}

	render() {
		const {
			onClose, onChange, value, ...other
		} = this.props

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
							value={value}
							onChange={onChange}
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
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}

export default EnterNameDialog
