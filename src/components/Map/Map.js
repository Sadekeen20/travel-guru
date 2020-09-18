import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
    //   <Map
    //     google={this.props.google}
    //     zoom={14}
    //     style={mapStyles}
    //     initialCenter={
    //       {
    //         lat: -1.2884,
    //         lng: 36.8233
    //       }
    //     }
    //   />
    <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCB5cb2Bn2fEnvsXhksmQEA3PeKvW8bBL8'
})(MapContainer);