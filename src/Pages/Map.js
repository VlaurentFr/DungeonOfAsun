import '../styles/styles.css';
import '../styles/sideMenu.css';
import ZoomImage from '../Components/ZoomImage';

export const Map = (props) => {
	function zoom(e){
		console.log(e)
		var zoomer = e.currentTarget;
		let offsetX, offsetY,x, y
		e.screenX ? offsetX = e.screenX : offsetX = e.touches[0].pageX
		e.screenY ? offsetY = e.screenY : offsetX = e.touches[0].pageX
		x = offsetX/zoomer.offsetWidth*100
		y = offsetY/zoomer.offsetHeight*100
		zoomer.style.backgroundPosition = x + '% ' + y + '%';
	}
	return (
		<div style={{ height: '100vh' }}>
			<span className='background-3'></span>
			<section
				id='map'
			>
				<div>
					{/* <ZoomImage image="/DungeonOfAsun/Assets/placeholder-1.png"></ZoomImage> */}
					<figure className='zoom' style={{backgroundImage: 'url(/DungeonOfAsun/Assets/World.png)'}} onMouseMove={ (event) => zoom(event)}>
 						 <img src='/DungeonOfAsun/Assets/World.png'/>
					</figure>
				</div>
			</section>
			
		</div>
	);
};
