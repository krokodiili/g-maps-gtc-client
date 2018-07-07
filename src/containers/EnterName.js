import React, { Component } from 'react'
import { connect } from 'redux-zero/react'
import EnterNameDialog from '../components/EnterNameDialog'
import actions from '../actions'

class EnterName extends Component {
	constructor(props) {
		super()

		this.state = {
			showDialog: true,
			name: '',
			error: false,
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleClose = () => {
		const { name } = this.state
		const { sendPlayerDetails } = this.props
		if (name) {
			this.setState({ showDialog: false })
			sendPlayerDetails(name)
		} else {
			this.setState({ error: true })
		}
	}

	handleChange(e) {
		this.setState({ name: e.target.value })
		this.setState({ error: false })
	}

	render() {
		const { showDialog, name, error } = this.state

		return (
			<div>
				{showDialog && (
					<EnterNameDialog
						onClose={this.handleClose}
						onChange={this.handleChange}
						open={showDialog}
						value={name}
						error={error}
					/>
				)}
			</div>
		)
	}
}

export default connect(
	null,
	actions,
)(EnterName)
