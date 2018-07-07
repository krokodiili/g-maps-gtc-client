import React, { Component } from 'react'
import './App.css'
import { Provider } from 'redux-zero/react'
import store from './store'
import EnterName from './containers/EnterName'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<EnterName />
				</div>
			</Provider>
		)
	}
}

export default App
