import { MapContainer, ImageOverlay, Marker, Popup, useMapEvents} from 'react-leaflet'
import { iconCapital, iconCity, iconState } from '../Components/Map/colorMarker';
import { CRS } from "leaflet";
import { useState } from 'react';

function MyMap() {

	// HOOKS
	const [markerCapital, setMCapital] = useState(true);
	const [markerCity, setMCity] = useState(true);
	const [markerState, setMState] = useState(true);


	// Marker
// 	const iconPerson = new L.Icon({
//     iconUrl: require('../Assets/poulpeWhite.png'),
//     iconRetinaUrl: require('../Assets/poulpeWhite.png'),
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(60, 75),
//     className: 'leaflet-div-icon'
// });

// For get lat and long
const LocationFinderDummy = () => {
	const map = useMapEvents({
			click(e) {
					console.log(e.latlng);
			},
	});
	return null;
};
  return (
    <div style={{height: '90vh', paddingTop: '80px'}} >
			<span className='background-3'></span>
      <MapContainer 
			style={{height: '80%', margin: 'auto', marginBottom: '24px'}} 
			center={[50,100]} 
			zoom={3} 
			scrollWheelZoom={false}
			minZoom={0}
			crs={CRS.Simple}
			maxBoundsViscosity={1.0}
			boundsOptions={{ padding: [50, 50] }}>
				<LocationFinderDummy />
				<ImageOverlay
					bounds={[[0,0], [100,200]]}
					url="/DungeonOfAsun/Assets/World.png"
				/>
				{markerCapital && <div>
						<Marker position={[81.09606968162704, 161.10518204383382]} icon={ iconCapital}>
						<Popup>
							Verghburr, Capital des Nains des Rocheuses
						</Popup>
					</Marker>
					<Marker position={[70.19212595468977, 172.37960821583957]} icon={ iconCapital}>
						<Popup>
						Lorus, Capital du Saint Royaume de Lorus
						</Popup>
					</Marker>
					<Marker position={[42.44356300509926, 89.41867637634277]} icon={ iconCapital}>
						<Popup>
						</Popup>
					</Marker>
					<Marker position={[90.34192749747932, 154.7932586669922]} icon={ iconCapital}>
						<Popup>
							Koven
						</Popup>
					</Marker>
					<Marker position={[68.90678861620168,147.0615406036377]} icon={ iconCapital}>
						<Popup>
							Port Bun
						</Popup>
					</Marker>
					<Marker position={[73.15949015850633, 154.4677906036377]} icon={ iconCapital}>
						<Popup>
							Trésabia
						</Popup>
					</Marker>
					{/* <Marker position={[70, 172]} icon={ icon}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker> */}
				</div>}
				{markerCity && <div>
					<Marker position={[73.55522967291543, 172.71875]} icon={ iconCity}>
						<Popup>
							Saint Royaume de Lorus:<br/><br/>IronWheel
						</Popup>
					</Marker>
					<Marker position={[71.52199319381542, 163.66741752624512]} icon={ iconCity}>
						<Popup>
							Saint Royaume de Lorus:<br/><br/>Slagglade
						</Popup>
					</Marker>
					<Marker position={[84.65533619210919, 167.54241752624512]} icon={ iconCity}>
						<Popup>
							Saint Royaume de Lorus:<br/><br/>Ker Kuldihr
							<img src='/DungeonOfAsun/Assets/World.png'></img>
						</Popup>
					</Marker>
					<Marker position={[77.35929632698978, 165.95838737487793]} icon={ iconCity}>
						<Popup>
							Saint Royaume de Lorus:<br/><br/>Mudpines
						</Popup>
					</Marker>
					<Marker position={[73.12923222732701, 168.33598232269287]} icon={ iconCity}>
						<Popup>
							Saint Royaume de Lorus:<br/><br/>Pegawall
						</Popup>
					</Marker>
					<Marker position={[67.31527335021259, 170.0436782836914]} icon={ iconCity}>
						<Popup>
							Saint Royaume de Lorus:<br/><br/>Pinestille
						</Popup>
					</Marker>
					<Marker position={[84.75833792604092, 160.54082107543945]} icon={ iconCity}>
						<Popup>
							Saint Royaume de Lorus:<br/><br/>Nultaruhr
						</Popup>
					</Marker>
					<Marker position={[91.2624696966245, 165.19707107543945]} icon={ iconCity}>
						<Popup>
							Empire de Koven:<br/><br/>Og Kudal
						</Popup>
					</Marker>
					<Marker position={[87.94786408276941,170.32207107543945]} icon={ iconCity}>
						<Popup>
							Empire de Koven:<br/><br/>Bilgerun
						</Popup>
					</Marker>
					<Marker position={[90.85596146096303, 157.60332107543945]} icon={ iconCity}>
						<Popup>
							Empire de Koven:<br/><br/>Elmpoint
						</Popup>
					</Marker>
					<Marker position={[89.35500797544374, 152.66582107543945]} icon={ iconCity}>
						<Popup>
							Empire de Koven:<br/><br/>Mortarhill
						</Popup>
					</Marker>
				</div>}
				{markerCity && <div>
					<Marker position={[90.4153485924414, 140.20399475097656]} icon={ iconState}>
						<Popup>
							Guilde des mages: <br/><br/>Tour de mage de Magters
						</Popup>
					</Marker>
				</div>}
			</MapContainer>
			<div className='switch-container wrap'>
				<div className='switch-container wrap'>
					<label className='switch'>
						<input type="checkbox" checked={markerCapital} onClick={() => {setMCapital(!markerCapital);}} ></input>
						<span class="slider round"></span>
					</label>
					<p>Capital</p>
				</div>
				<div className='switch-container wrap'>
					<label className='switch'>
						<input type="checkbox" checked={markerCity} onClick={() => {setMCity(!markerCity);}} ></input>
						<span class="slider round"></span>
					</label>
					<p>Villes</p>
				</div>
				<div className='switch-container wrap'>
					<label className='switch'>
						<input type="checkbox" checked={markerState} onClick={() => {setMState(!markerState);}} ></input>
						<span class="slider round"></span>
					</label>
					<p>Cité État</p>
				</div>
			</div>
    </div>
  );
}
export default MyMap;
