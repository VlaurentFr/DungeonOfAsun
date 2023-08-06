import { MapContainer, ImageOverlay, Marker, Popup} from 'react-leaflet'
import L from "leaflet";
import { CRS } from "leaflet";

function MyMap() {
	const iconPerson = new L.Icon({
    iconUrl: require('../Assets/poulpeWhite.png'),
    iconRetinaUrl: require('../Assets/poulpeWhite.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});
  return (
    <div style={{height: '90vh', paddingTop: '80px'}} >
      <MapContainer style={{height: '100%', paddingTop: '80px'}} 
			center={[50,100]} 
			zoom={3} 
			scrollWheelZoom={true}
			minZoom={0}
			crs={CRS.Simple}
			maxBoundsViscosity={1.0}
			boundsOptions={{ padding: [50, 50] }}>
				<ImageOverlay
					bounds={[[0,0], [100,200]]}
					url="/DungeonOfAsun/Assets/World.png"
				/>
				<Marker position={[50, 50]} icon={ iconPerson}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
    </div>
  );
}
export default MyMap;
