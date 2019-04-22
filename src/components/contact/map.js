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

const StyledMarker = styled.div`
  width: 16rem;
  color: salmon;
`;

const AnyReactComponent = ({ text }) => <StyledMarker>
    {text}
    <PinContianer>
      <img src={require("../../images/contact/maps-and-flags.png")} />
    </PinContianer>
</StyledMarker>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 36.791153,
      lng: 3.247753
    },
    zoom: 16,
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '63vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAG_gujKn9NB11zD3MuiItmHu4lgUalwng"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.791153}
            lng={3.247753}
            text="Centre Culturel Ali Maachi"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;