import '../styles/styles.css';
import '../styles/sideMenu.css';
import { Button } from '../Components/button';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export const HomePage = (props) => {
	return (
		<div>
			<div style={{ height: '100%', padding: '48px'}}>
				<span className='background-2'></span>
				<section>
					<div>
						<div className='title-page'>
							<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
							<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
							<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
							<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
						</div>
					</div>
				</section>
			</div>
			<div style={{ height: '100%', position: 'relative', borderTop: 'solid 10px white',  borderBottom: 'solid 10px white', padding: '48px' }}>
				<span className='background'></span>
				<section>
					<div>
						<div className='title-page'>
						<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
							<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
							<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
							<h1>Carte</h1>
							<h2>Découvrez le monde d'Asun</h2>
							<p>TEST</p>
						</div>
					</div>
				</section>
			</div>
			<div style={{ height: '50%', position: 'relative', padding: '48px', display: 'flex', flexDirection: 'column', }}>
				<span className='background-3'></span>
					<div style={{margin: 'auto', width:'300px' }}>
						<Button type="primary">
							<Link  style={{margin: '48px', color: 'white'}} className="scroll" to="/Map">Explorez Asun !</Link>
						</Button>
					</div>
			</div>
		</div>
		
	);
};
