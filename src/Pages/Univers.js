import '../styles/styles.css';
import '../styles/Univers.css';
import '../styles/sideMenu.css';
import { useLocation, Link } from 'react-router-dom';
import Timeline from '../Components/Univers/timeline';
import Story from '../Components/Univers/story';
import Cults from '../Components/Univers/Cults/Cults';
import Orga from '../Components/Univers/orga';
import Faction from '../Components/Univers/faction';

export const Univers = (props) => {
	return (
		<div style={{ height: '100%' }}>
			<side className='sideNav'>
				<div className=' sideMenuHeader'>
					<h3>Menu</h3>
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
						<Link to='/Univers/orga'>
							<p className={useLocation().pathname === '/Univers/orga' && 'selected'}>Organisations</p>
						</Link>
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
			{useLocation().pathname === '/Univers/orga' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Organisations</h1>
							<h2>Découvrez les organisations de l'univers</h2>
						</div>
						<Orga></Orga>
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
		</div>
	);
};
