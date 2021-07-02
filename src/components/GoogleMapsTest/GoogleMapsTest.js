import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./GoogleMapsTestStyle.css";

// import Container from "@material-ui/core/Container";

// https://www.npmjs.com/package/google-maps-react

const containerStyle = {
	position: "relative",
	width: "100%",
	height: "100%",
};

class GoogleMapsTest extends Component {
	render() {
		return (
			<div className="map">
				<Map
					google={this.props.google}
					zoom={15}
					initialCenter={{
						lat: -36.87,
						lng: 174.775,
					}}
					containerStyle={containerStyle}
				>
					<Marker onClick={this.onMarkerClick} name={"Current location"} />

					<InfoWindow
					// onClose={this.onInfoWindowClose}
					// marker={this.state.activeMarker}
					// visible={this.state.showingInfoWindow}
					>
						{/* <div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div> */}
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyANI-OdgeGoXYMwC7xVwPqXADRECFASGro",
})(GoogleMapsTest);
