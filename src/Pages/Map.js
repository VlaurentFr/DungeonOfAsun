import Map, {Layer} from 'react-map-gl';
import {FillLayer} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

function MyMap() {
	const parkLayer = {
		
			"id": "water",
			"source": "mapbox-streets",
			"source-layer": "water",
			"type": "fill",
			"paint": {
				"fill-color": "red"
			},
	};
  return (
    <div style={{height: '100%', marginTop: '80px'}} >
      <Map
        mapboxAccessToken="pk.eyJ1IjoidmxhdXJlbnQiLCJhIjoiY2xrc3F6Y2dyMDY0MjNnbzQxNmhveHh2aiJ9.u8y3-tN7sZ9UfojD9xHORw"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
					maxZoom: 4,
  				minZoom: 3
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
				<Layer {...parkLayer} />
      </Map>
    </div>
  );
}
export default MyMap;
