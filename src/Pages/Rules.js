import '../styles/styles.css';
import '../styles/Rules.css';
import '../styles/sideMenu.css';
import { useLocation, Link } from 'react-router-dom';
import Orga from "../Components/Univers/orga"
import Fight from '../Components/Rules/Fight';
import Weapon from '../Components/Rules/Weapon';
import Classes from '../Components/Rules/Classes';
import Spell from '../Components/Rules/Spell';
import Gear from '../Components/Rules/Gear';
import Crea from '../Components/Rules/Crea';
import Archetype from '../Components/Rules/Archetype';

export const Rules = (props) => {
	return (
		<div style={{ height: '92vh' }}>
			<side className='sideNav'>
				<div className=' sideMenuHeader'>
					<h3>Menu des règles</h3>
				</div>
				<div className=' sideMenuContent'>
					<div className='slot'>
						<Link to='/Rules/creation'>
							<p className={useLocation().pathname === '/Rules/creation' && 'selected'}>Création de personnage</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/fight'>
							<p className={useLocation().pathname === '/Rules/fight' && 'selected'}>Combat</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/class'>
							<p className={useLocation().pathname === '/Rules/class' && 'selected'}>Classes</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/archetype'>
							<p className={useLocation().pathname === '/Rules/archetype' && 'selected'}>Archetypes</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/weapon'>
							<p className={useLocation().pathname === '/Rules/weapon' && 'selected'}>Maîtrise d'armes</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/orga'>
							<p className={useLocation().pathname === '/Rules/orga' && 'selected'}>Organisations</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/spell'>
							<p className={useLocation().pathname === '/Rules/spell' && 'selected'}>Sorts</p>
						</Link>
					</div>
					<div className='slot'>
						<Link to='/Rules/gear'>
							<p className={useLocation().pathname === '/Rules/gear' && 'selected'}>Equipements</p>
						</Link>
					</div>
				</div>
			</side>
			{useLocation().pathname === '/Rules/creation' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Creation de personnage</h1>
							<h2>Découvrez comment créer votre personnage pour jouer</h2>
						</div>
						<Crea></Crea>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Rules/fight' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Combats</h1>
							<h2>Découvrez comment ce déroule les combats</h2>
						</div>
						<Fight></Fight>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Rules/class' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Classes</h1>
							<h2>Découvrez les classes jouables</h2>
						</div>
						<Classes></Classes>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Rules/archetype' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Archetype</h1>
							<h2>Découvrez les archetypes de mage jouables</h2>
						</div>
						<Archetype></Archetype>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Rules/weapon' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Maîtrise d'armes</h1>
							<h2>Découvrez comment fonctionne les maîtrises d'armes</h2>
						</div>
						<Weapon></Weapon>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Rules/spell' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Sorts</h1>
							<h2>Découvrez la liste des sorts de l'univers</h2>
						</div>
						<Spell></Spell>
					</div>
				</section>
			)}
			{useLocation().pathname === '/Rules/gear' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Equipements</h1>
							<h2>Découvrez la liste des équipements de l'univers</h2>
						</div>
						<Gear></Gear>
					</div>
				</section>
			)}
			<span className='background'></span>
			{useLocation().pathname === '/Rules/orga' && (
				<section
					ref={props.refProp4a}
					className='container'
				>
					<div>
						<div className='title-page'>
							<h1>Organisations</h1>
							<h2>Découvrez les organisations de l'univers</h2>
						</div>
						<div className='title-section'>
							<h3>Comment jouer ?</h3>
						</div>
						<div className='descOrga'>
							<p>Lorsque vous créer voter personnages ou au cours de vos aventures il vous sera possible de rejoindre une des organisations d'Asun. On en dénombre 7 grandes organisation : Les cercles d'Emeraude, de Rubis et de Saphir, Le Xaral, L'ordre du gantelet, l'Unenmir et la Lance noire<br/><br/> Chacune de ces organisation possèdent plusieurs rangs et chaque rangs possèdent des avantages qui seront décider par votre MJ dans des contexte donner. C'est également le MJ qui décide si le joueur correspond au critères pour demander un nouveau rangs. Il vous sera par ailleurs possible de rejoindre une ou plusieurs de ces organisation a la fois !</p>
						</div>
						<Orga title="true"></Orga>
					</div>
				</section>
			)}
			
		</div>
	);
};
