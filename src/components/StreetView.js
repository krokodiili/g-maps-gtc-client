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
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '400px' }} />,
		mapElement: <div style={{ height: '100%' }} />,
		center: { lat: 49.2853171, lng: -123.1119202 },
	}),
	withScriptjs,
	withGoogleMap,
)(props => (
	<StreetViewPanorama
		defaultPosition={props.center}
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
