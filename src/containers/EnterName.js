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
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleClose = () => {
		const { name } = this.state
		const { sendPlayerDetails } = this.props
		this.setState({ showDialog: false })
		sendPlayerDetails(name)
	}

	handleChange(e) {
		this.setState({ name: e.target.value })
	}

	render() {
		const { showDialog, name } = this.state

		return (
			<div>
				{showDialog && (
					<EnterNameDialog
						onClose={this.handleClose}
						onChange={this.handleChange}
						open={showDialog}
						value={name}
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
