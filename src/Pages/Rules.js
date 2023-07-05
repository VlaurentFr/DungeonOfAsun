import '../styles/styles.css';
import '../styles/Rules.css';
import '../styles/sideMenu.css';
import { useLocation, Link } from 'react-router-dom';
import Timeline from '../Components/Univers/timeline';
import Story from '../Components/Univers/story';
import Cults from '../Components/Univers/Cults/Cults';

export const Rules = (props) => {
	return (
		<div style={{ height: '100%' }}>
			<side className='sideNav'>
				<div className=' sideMenuHeader'>
					<h3>Menu</h3>
				</div>
				<div className=' sideMenuContent'>
					<div className='slot'>
						<Link to='/Rules'>
							<p className={useLocation().pathname === '/Rules' && 'selected'}>Vue d'ensemble</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/story'>
							<p className={useLocation().pathname === '/Rules/story' && 'selected'}>Histoire générale</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/keyEvent'>
							<p className={useLocation().pathname === '/Rules/keyEvent' && 'selected'}>Evènements clés</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/cults'>
							<p className={useLocation().pathname === '/Rules/cults' && 'selected'}>Mythologie</p>
						</Link>
					</div>
					<div className={'slot no-hover'}>
						<p>Géographie</p>
						<div className='subslot-container'>
							<div className='subslot'>
								<p>Lieux important</p>
							</div>
							<div className='subslot'>
								<p>Régions</p>
							</div>
							<div className='subslot'>
								<p>Factions</p>
							</div>
						</div>
					</div>
					<div className='slot'>
						<p>Organisations</p>
					</div>
					<div className='slot'>
						<p>Races</p>
					</div>
					<div className='slot'>
						<p>Magie</p>
					</div>
				</div>
			</side>
			<span className='background'></span>
			{/* Timeline */}
			{useLocation().pathname === '/Rules/keyEvent' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Evenement clés</h1>
							<h2>Découvrez les dates importantes d’Asun</h2>
						</div>
						<div className='title-section'>
							<h3>Chronologie</h3>
						</div>
						<Timeline></Timeline>
					</div>
				</section>
			)}
			{/* Timeline */}
			{useLocation().pathname === '/Rules/story' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Histoire générale</h1>
							<h2>Découvrez l'histoire d’Asun</h2>
						</div>
						<Story></Story>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Rules/cults' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Mythologie</h1>
							<h2>Découvrez les dieux et néandre de l'univers</h2>
						</div>
						<Cults></Cults>
					</div>
				</section>
			)}
		</div>
	);
};
