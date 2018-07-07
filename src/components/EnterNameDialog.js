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
			onClose, onChange, value, error, ...other
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
							error={error}
						/>
						<Button
							type="submit"
							variant="contained"
							style={{ marginTop: 20 }}
						>
							Hyppää mukaan!
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
	error: PropTypes.bool,
}

export default EnterNameDialog
