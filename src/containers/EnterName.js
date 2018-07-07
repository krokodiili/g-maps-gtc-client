import React, { Component } from 'react'
import { connect } from 'redux-zero/react'
import EnterNameDialog from '../components/EnterNameDialog'
import actions from '../actions'

class EnterName extends Component {
	state = {
		showDialog: true,
	}

	handleClose = value => {
		const { sendPlayerDetails } = this.props
		this.setState({ showDialog: false })
		sendPlayerDetails(value)
	}

	render() {
		const { showDialog } = this.state

		return (
			<div>
				{showDialog && (
					<EnterNameDialog
						onClose={this.handleClose}
						open={showDialog}
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
