import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'

const PinContianer = styled.div`
    width: 3rem;
    height: 3rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;

const AnyReactComponent = () => <PinContianer></PinContianer>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 36.7050299,
      lng: 3.1739156
    },
    zoom: 16
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '63vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAAHuANKl0K054Li921ZL24ssweXJiDNFY"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.7050299}
            lng={3.1739156}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;