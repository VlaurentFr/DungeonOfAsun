import '../styles/styles.css';
import '../styles/sideMenu.css';
import { Button } from '../Components/button';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import { noviceClasses, basicClasses, avancedClasses, masterClasses } from '../Components/Rules/mock/classesMock';

export const HomePage = (props) => {
	const [selected, setSelected] = useState(basicClasses[0])
	return (
		<div>
			<div style={{ height: '100%', position: 'relative', padding: '48px'}}>
				<span className='background-2'></span>
				<section>
					<div className='title-page'>
						<div id="play">
							<h1>Dungeons of Asun</h1>
							{/* <Button type="primary">
								<Link className="scroll" to="/Rules">Préparez-vous à jouer !</Link>
							</Button> */}
						</div>
						<div id="redirect">
							<div className='redirect-card'>
								<div className='circle'>
									<h1>Univers</h1>
								</div>
								<div className='card-content'>
									<h2>Découvrez l'univers de Dungeons of Asun</h2>
									<Button type="primary">
										<Link  style={{padding: '24px', color: 'white'}} className="scroll" to="/Univers/story">Découvrir</Link>
									</Button>
								</div>
							</div>
							<div className='redirect-card'>
								<div className='circle'>
									<h1>Règles du jeu</h1>
								</div>
								<div className='card-content'>
									<h2>Découvrez les règles de Dungeons of Asun</h2>
									<Button type="primary">
										<Link  style={{padding: '24px', color: 'white'}} className="scroll" to="/Rules/creation">Découvrir</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div style={{ height: '100%', position: 'relative', borderTop: 'solid 2px white',  borderBottom: 'solid 2px white', padding: '48px' }}>
				<span className='background'></span>
				<section>
					<div>
						<div className='title-page'>
							<h2 style={{margin: '0 auto 112px auto', textAlign: 'center', fontSize: '28px'}} >Bienvenue dans DungeonOfAsun</h2>
							<article>
								<p style={{margin:'30px auto', fontSize: '18px', maxWidth:'1000px' }}>Plongez dans un monde de magie, de mystères et d'aventures épiques. Dungeon of Asun est un jeu de rôle qui vous transporte dans un univers fantastique où votre destin est entre vos mains. Incarnez un héros, explorez d'anciens donjons, affrontez des créatures légendaires, et tissez votre propre histoire dans ce royaume en constante évolution.</p>
							</article>
							<h2 style={{margin: '64px auto', textAlign: 'center', fontSize: '28px'}} >Créez votre personnage :</h2>
							<article>
								<p style={{margin:'30px auto', fontSize: '18px', maxWidth:'1000px'}}>Concevez un héros unique en choisissant parmi une variété de races, de classes, et de compétences. Personnalisez l'apparence de votre personnage pour qu'il corresponde à votre vision du protagoniste ultime. Au cœur de Dungeon of Asun se trouve la possibilité de créer un héros qui incarne vos rêves les plus fous. Vous avez le choix entre une variété de races, chacune avec ses propres avantages et attributs, des elfes gracieux aux nains robustes en passant par les humains polyvalents. Personnalisez l'apparence de votre personnage, de son visage aux détails les plus subtils, et choisissez une classe qui déterminera votre style de jeu, que ce soit en tant que guerrier intrépide, mage puissant, assassin furtif, ou l'une des classes uniques qui vous sont proposées. Les possibilités sont infinies.</p>
							</article>
							<article style={{margin: 'auto', width: 'fit-content'}}>
								<div className={"row gods"}>
										<div className="grid-items-container-classes flex">
											<h1>Classes de base ({basicClasses.length})</h1>
											<div className="grid-items">
												{ basicClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
											</div>
											<h1>Classes Novice ({noviceClasses.length})</h1>
											<div className="grid-items">
											{ noviceClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
											</div>
											<h1>Classes Avancées ({avancedClasses.length})</h1>
											<div className="grid-items">
											{ avancedClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
											</div>
											<h1>Classes Maîtres ({masterClasses.length})</h1>
											<div className="grid-items">
											{ masterClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
											</div>
										</div>
										<div className="selected-grid-item-classes">
											<img src={ selected?.img }></img>
											<h2>{ selected?.name }</h2>
										</div>
								</div>
							</article>
							<h2 style={{margin: '64px auto', textAlign: 'center', fontSize: '28px'}}>Explorez un monde vaste : </h2>
							<article>
								<p style={{margin:'30px auto', fontSize: '18px', maxWidth:'1000px'}}>Asun est un monde composé de contrées variées, allant des vastes plaines aux sommets enneigés des montagnes, en passant par des jungles luxuriantes et des déserts brûlants. Chaque région a sa propre histoire, ses peuples et sa culture. Les cités florissantes regorgent de marchands, de quêtes et de rencontres avec des personnages non-joueurs captivants. Les étendues sauvages sont habitées par des créatures sauvages et des donjons oubliés. Explorez cet univers vivant et respirez la liberté de l'aventure.</p>
							</article>
							<h2 style={{margin: '64px auto', textAlign: 'center', fontSize: '28px'}}>Aventures épiques : </h2>
							<article>
								<p style={{margin:'30px auto', fontSize: '18px', maxWidth:'1000px'}}>Laissez-vous entraîner dans des quêtes épiques qui vous conduiront dans des contrées lointaines, à la recherche de trésors fabuleux, de connaissances oubliées et de vérités insondables. Affrontez des monstres légendaires, résolvez des énigmes complexes et triomphez des donjons les plus dangereux. Chaque quête est une opportunité de vous révéler en tant qu'aventurier intrépide, et chaque donjon est un défi qui teste votre intelligence et vos compétences.</p>
							</article>
							<h2 style={{margin: '64px auto', textAlign: 'center', fontSize: '28px'}} >Alliés et Ennemis Inoubliables :</h2>
							<article>
								<p style={{margin:'30px auto', fontSize: '18px', maxWidth:'1000px'}}>Dungeon of Asun est peuplé de personnages non-joueurs mémorables. Tissez des liens avec des alliés fidèles, accomplissez des quêtes avec eux et découvrez leur histoire. Méfiez-vous des ennemis redoutables, des créatures mythiques et des boss surpuissants. Vos choix dans le jeu ont un impact significatif sur le monde qui vous entoure, et les conséquences de vos actes se feront ressentir à chaque tournant.</p>
							</article>
							<h2 style={{margin: '64px auto', textAlign: 'center', fontSize: '28px'}} >Système d'Évolution et de Personnalisation :</h2>
							<article>
								<p style={{margin:'30px auto', fontSize: '18px', maxWidth:'1000px'}}>Votre personnage évoluera au fil de son aventure, gagnant de l'expérience, maîtrisant de nouvelles compétences et s'améliorant au fur et à mesure. Choisissez comment vous souhaitez personnaliser votre héros en fonction de votre style de jeu, débloquez des compétences uniques et devenez un maître dans votre classe. Participez à la guerre ou au commerce, devenez un artisan accompli ou explorez les secrets de la magie. L'avenir de votre personnage dépend entièrement de vous.</p>
							</article>
						</div>
					</div>
				</section>
			</div>
			<div style={{ height: '500px', position: 'relative', padding: '48px', display: 'flex', flexDirection: 'column', }}>
				<span className='background-3'></span>
					<div style={{margin: 'auto', width:'300px' }}>
						<Button type="primary">
							<Link  style={{ fontSize: '24px', padding: '48px' }} className="scroll" to="/Map">Explorez Asun !</Link>
						</Button>
					</div>
			</div>
		</div>
		
	);
};
