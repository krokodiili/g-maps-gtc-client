import React from 'react'
import { compose, withProps } from 'recompose'

import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	StreetViewPanorama,
} from 'react-google-maps'

const getPixelPositionOffset = (width, height) => ({
	x: -(width / 2),
	y: -(height / 2),
})

const StreetView = compose(
	withProps(props => ({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyAqcPrwNOpMl4IZL64QjfnBdPoE5dcZ28w&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '90vh' }} />,
		mapElement: <div style={{ height: '100%' }} />,
		center: { lat: props.lat, lng: props.lng },
	})),
	withScriptjs,
	withGoogleMap,
)(props => (
	<StreetViewPanorama
		defaultPosition={props.center}
		setPosition={props.center}
		visible
		disableDefaultUi
		options={{
			disableDefaultUI: true,
			showRoadLabels: false,
			linksControl: false,
		}}
	/>
))

export default StreetView
