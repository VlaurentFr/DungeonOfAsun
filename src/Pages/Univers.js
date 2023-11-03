import '../styles/styles.css';
import '../styles/Univers.css';
import '../styles/sideMenu.css';
import { useLocation, Link } from 'react-router-dom';
import Timeline from '../Components/Univers/timeline';
import Story from '../Components/Univers/story';
import Cults from '../Components/Univers/Cults/Cults';
import Magie from '../Components/Univers/magie';
import Faction from '../Components/Univers/faction';
import Races from '../Components/Univers/races';

export const Univers = (props) => {
	return (
		<div style={{ height: '92vh' }}>
			<side className='sideNav'>
				<div className=' sideMenuHeader'>
					<h3>Menu de l'univers</h3>
				</div>
				<div className=' sideMenuContent'>
					{/* <div className='slot'>
						<Link to='/Univers/overview'>
							<p className={useLocation().pathname === '/Univers/overview' && 'selected'}>Vue d'ensemble</p>
						</Link>
					</div> */}
					<div className='slot'>
						<Link to='/Univers/story'>
							<p className={useLocation().pathname === '/Univers/story' && 'selected'}>Histoire générale</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Univers/keyEvent'>
							<p className={useLocation().pathname === '/Univers/keyEvent' && 'selected'}>Evènements clés</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Univers/cults'>
							<p className={useLocation().pathname === '/Univers/cults' && 'selected'}>Mythologie</p>
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
								<Link to='/Univers/faction'>
									<p className={useLocation().pathname === '/Univers/faction' && 'selected'}>Factions</p>
								</Link>
							</div>
						</div>
					</div>
					<div className='slot'>
						<Link to='/Univers/races'>
							<p className={useLocation().pathname === '/Univers/races' && 'selected'}>Races & Peuples</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Univers/magie'>
							<p className={useLocation().pathname === '/Univers/magie' && 'selected'}>Magie</p>
						</Link>
					</div>
				</div>
			</side>
			<span className='background'></span>
			{/* Timeline */}
			{useLocation().pathname === '/Univers/keyEvent' && (
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
			{useLocation().pathname === '/Univers/story' && (
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
			{useLocation().pathname === '/Univers/cults' && (
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
			{useLocation().pathname === '/Univers/faction' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Factions</h1>
							<h2>Découvrez les factions de l'univers</h2>
						</div>
						<Faction></Faction>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Univers/races' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Races & Peuples</h1>
							<h2>Découvrez les races et peuples de l'univers</h2>
						</div>
						<Races></Races>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Univers/magie' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Magie</h1>
							<h2>Découvrez le fonctionnement de la magie d'Asun</h2>
						</div>
						<Magie></Magie>
					</div>
				</section>
			)}
		</div>
	);
};
