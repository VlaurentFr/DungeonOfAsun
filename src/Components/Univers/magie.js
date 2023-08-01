import { useState } from 'react';
import { IoMdPin } from 'react-icons/io';
import { Button } from '../button';
import { orga } from './mock/orgaMock';
const Cults = (props) => {
	let [selectedCults, setSelectedCults] = useState(null);
	return (
		<div>
			<div className={selectedCults ? 'invisible' : 'visible'}>
					<div>
						<div className='title-section'>
							 <h3>L'Etoile de magie</h3>
						</div>
						<div className='selected-item'>
							<div>
							<p>Définie l’ensemble des magies existantes dans le monde d’Asun, elle est composée de 4 catégories de magie pour un total de 12 types.</p>
							<p>Nous avons donc la magie élémentaires créer par les mages de Magters composée de la pyromancie, cryomancie et de la magie druidyque.</p>
							<p>Les magie dites primaires avec la magie Bestial incarnée par le chamanisme, la magie obscure ainsi que la magie draconique.</p><br></br>	
							<p>Mais aussi les magie célestes qui sont : la magie grise, l’ancestrale et celle du vent.</p>
							<p>Enfin les magies dites complexes sont celles de la lumière, l’alchimie et l’astromancie.</p>
							<p>Définie également les potentielles magiques d’une personne. Si une personne maîtrise une magie complexe, il lui sera impossible de maîtriser une magie opposée. De plus la magie cette magie sera plus efficace que n’importe qu’elle autre contre la magie Majeur opposée mais aussi moins efficace contre les deux autres, les magie mineurs opposée. (Vice Versa)</p><br></br>			
							<p>ex: Draconique et Bestial > Lumière > Obscure</p><br></br>	
							<p>Les trois magie Majeur sont donc :</p>
								<ul>
									<li>La magie obscure</li>
									<li>La pyromancie</li>
									<li>La magie Ancestrale</li>
								</ul>
								</div>
						</div>
						<div className='title-section'>
							 <h3>La magie élémentaire</h3>
						</div>
						<div className='selected-item'>
							<div>
								<h4>La cryomancie</h4>
								<p>est la magie de Kyhara, Déesse De L'Hiver qui la donna à ses enfants. Si un mage est capable d'utiliser cette dernière il descend probablement de ces derniers malgré quelques exceptions. C’est donc une magie rare et héréditaire, d’une puissance exceptionnelle. Si l’envie de voir cette magie à l'œuvre vous tient à cœur, vous pouvez toujours essayer de provoquer la Tsar de Barkovie, dont l’une des qualités requises à l'élection est la maîtrise de cette magie incarnant ainsi la déesse sur le plan terrestre pour ce peuple.</p>
							<h4>La pyromancie</h4>
								<p>Aussi appelé la magie des émotions. Elle tisse sa force dans le contrôle de flammes destructrices, cependant ces dernières peuvent rapidement se retourner contre son lanceur. Il n'est donc pas rare de voir un pyromancien s’embrasser, victime de ses propres flammes. 
								On dit que plus un mage est calme, plus son contrôle des flamme sera précis et plus il sera en rogne plus elle seront puissante mais incontrôlable. Les mages faisant preuves d’une grande puissance sont donc extrêmement rares car il faut posséder une grande puissance magique et un calme exceptionnel.</p>
							<h4>La magie druidydique</h4>
								<p>est la magie de la nature, sa force provient de l’écoute et la bénédiction de cette dernière. Les druides trouvent donc plus de confort à être en pleine nature que dans une ville. Capable de transformer n’importe quel fôret ou plante en de redoutable allié et d’une une force curative rare, il n’est pas rare de voir un druide soulever une masse imposante de terre pour aplatir ces ennemis. De tempérament calme et pacifique, il chercheront d’abord un moyen de vivre en communions tous ensemble avec la nature avant d'annihiler toute forces qui chercherait à mettre en péril l’équilibre fragile de la vie.</p>
							</div>
						</div>
						<div className='title-section'>
							 <h3>La magie primaire</h3>
						</div>
						<div className='selected-item'>
							<div>
								<h4>La magie bestial</h4>
								<p>est l’incarnation de la force sauvage de la nature, si les druide sont une vocation et majoritairement incarnée par des femmes, Les chaman sont majoritairement des hommes reclus et leur recrutement se fait par la force, un bébé ou enfant enlevé a ces parents afin d’être formées puis “abandonnée”. La magie bestial est une magie qui renforce les capacités physiques parfois boostées par l’ingestion de plantes, les chamans lutte activement et par l’usage de la force à la protection de la faune et la flore qui pour eux représente la véritable vie.</p>
							<h4>La magie obscure</h4>
								<p>Majoritairement incarnée par la nécromancie, elle est également la magie de sang utilisée par les vampires. Elle puise sa force directement dans Neien qui fut scellé par ces frères afin de former le plan d’outre-tombe aussi appelé les enfers. La nécromancie permet donc de faire réintégrer de l’énergie vital dans un corps, plus le corps recevra d’énergie vitale plus son ancienne âme se rattache à ce dernier, le rendant plus fort mais également moins docile.
								Si les nécromanciens utilisent cette magie pour générer de puissante horde de mort-vivant, les vampires eux sont les fils de Neien, leur magie se base donc sur le sang de leur père afin de le venger.
								</p>
							<h4>La magie draconique</h4>
								<p>Aussi appelé dracomancie, est la magie hérité du dieu Dragon Riannedos, Dieu du Temps, Maître de la magie de la foudre. Cela fait donc des Dracologues et des Drakéides de puissance mage de Foudre. Certains d’entre eux auraient même déjà réussi à créer temporairement des fissures du dragon, une faille dans le plan terrestre qui permettrait de voyager dans le temps, mais aucune preuve concrète n'a été apportée à ce jour.
								</p>
							</div>
						</div>
						<div className='title-section'>
							 <h3>La magie celeste</h3>
						</div>
						<div className='selected-item'>
							<div>
								<h4>La magie grise</h4>
								<p>Souvent associé à la mort est une magie qui se base sur l’usage de toute sorte de potion, poison et d’illusion réaliser grâce à l'essence même du dieu Fauscht, Dieux de la mort. Ces mages sont spécialisés dans la discrétion, lorsque vous apercevez un mage gris, une personne est déjà sur le point de mourir mais nulle ne sait qui à lui.</p>
								<h4>La magie ancestrale</h4>
								<p>est une magie de fortification d’objet aussi appelé magie runique. Il existe deux grande familles de Rune : 
								Naines et Elfiques.
								Chacune possède ses propres règles et est strictement gardée secrète par leur peuple.
								</p>
								<h4>La magie du vent</h4>
								<p>Si cette dernière est peu commune, elle n’est pour autant pas dépourvue d'efficacité. L’invocation de terrible tornade sur le champ de bataille afin de désorganiser les troupes ennemis est très efficace mais c’est les danselame et enchanteur qui semble les plus friand de celle-ci. Effectivement, elle permet non seulement d’enchanter des objets mais aussi de les faire virevolter dans les airs et autour de soi.</p>
							</div>
						</div>
						<div className='title-section'>
							 <h3>La magie complexe</h3>
						</div>
						<div className='selected-item'>
							<div>
								<h4>L'astromancie</h4>
								<p>Est la magie des étoiles, celle qui permet de lire l’avenir mais aussi de voyager dans l'espace. Les astromanciens se divisent donc en deux catégories, les scientifiques qui se concentrent sur le voyage stellaire mais aussi la magie de l’illusion plus particulièrement via le contrôle cérébrale.
								De l’autre côté, les astromanciens qui étudient le fonctionnement des étoiles afin de prédire l’avenir, pour le mentir est impossible, car selon eux cela pourrait remettre en cause tout leur savant calcule.
								</p>
								<h4>L'alchimie</h4>
								<p>se divise en deux catégories, l’alchimie de Métal qui se base sur le principe d’échange de la matière et l’alchimie primitive qui consiste à concocter des potions à l'aide des ressources fournies par la nature. L’alchimie de métal est une magie de cercle très complexe qui permet de transformer de la matière inerte en une autre par un principe d’échange équivalent, cependant certains alchimistes arriveraient à outrepasser cette règle en quelque sorte en y infusant leur propre énergie vitale.
								Il n’est pas rare de voir certains alchimistes de métal disposer de cercle magique sur leur tenue afin d’incanter rapidement un sort telle une boule de feu.
								</p>
								<h4>La magie de lumière</h4>
								<p>Est la magie divine, qui peut autant être salvatrice que destructrice. On y distingue deux grande vocation, celle des paladins qui utilise la puissance de cette dernière afin d'éradiquer “le mal” et les Guérisseurs qui utilise la puissance curative de cette dernière créant de véritable miracle.
								</p>
							</div>
						</div>
					</div>
			</div>
		</div>
	);
};

export default Cults;
