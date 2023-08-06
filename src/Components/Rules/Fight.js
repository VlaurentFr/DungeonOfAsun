const Fight = (props) => {
	return (
		<div>
			<div className={'visible'}>
					<div>
						<div className='title-section'>
							<h3>Les mecaniques de bases</h3>
						</div>
						<div className='fight-container'>
							<p>La mécanique de base est celle du lancé de dé pour réussir sont une actions. L'actions est réussi si la valeur obtenue est inférieur à la statistique exigée. On aura donc soit un jets de physique pour un déplacement complexe ou une attaque avec une arme, soit un jet de mental pour l'usage de la magie. Lorsqu'une attaque est réussi qu'elle soit magique ou physique, un certains nombres de dé sont lancées afin de déterminer les points de vie infligées à la cible dépendant du sort et de l'armes utilisées. Lorsque vous êtes attaqué vous avez 33% de chance de contre attaqué dans la mesure du possible cependant cette action est impossible si l'assaillant est au corps à corps et que vous êtes équipé d'un arc sauf si vous possèdez un certains niveau de maîtrise</p>
						</div>
            <div className='title-section'>
							<h3>Les points d'énergie</h3>
						</div>
						<div className='fight-container'>
							<p>Les points d'énergie sont dépensés quand un personnage utilise un pouvoir magique ou pour optimiser ses chances de réussite. Ils ne se régénèrent que dans des circonstances particulières, comme du repos ou l'usage de potions.  Si un personnage tente d'utiliser de la magie ou d'augmenter ses cahnces de réussite sur un lancer sans points d'énergie, il utilisera des points de vie à la place.</p>
						</div>
            <div className='title-section'>
							<h3>Les points d'armures</h3>
						</div>
						<div className='fight-container'>
							<p>Cette règle modifie celle des points de vie et d'attaque. Lorsqu'un personnage est équipé d'une armure et qu'il reçoit une attaque, il peut soustraire au nombre de points d'attaque de son ennemi ses points d'armure. Cependant dans le cas d'attaque magique cela se base sur la deuxième statistique de l'armure appelé "Résistance". Une Armure peut donc avoir un grand nombre de points mais une faible Résistance et dans ce cas ne pas prémunir d'une bonne protection contre les mages et inversement. Elle peut avoir peu de points mais beaucoup de Résistance protégeant mieux des mages que de n'importe qu'elle autres guerriers sanguinaires qui chercherai a vous faire la peaux. Si une attaque fait 6 de dégâts mais que la cible a trois points d'armure, l'attaque ne fera que 3 points de dégâts (6-3 = 3).</p>
						</div>
            <div className='title-section'>
							<h3>Les points "Strat"</h3>
						</div>
						<div className='fight-container'>
							<p>Une fois par combat, les joueurs peuvent demander un point « Strat ». Si le MJ l'accorde, les joueurs peuvent se concerter (hors RP) sur une stratégie commune durant un temps décidé par le MJ.</p>
						</div>
            <div className='title-section'>
							<h3>Les mécanique avancées</h3>
						</div>
						<div className='fight-container'>
							<p>Les mechaniques avancées sont là pour pimenter le jeu, elles sont donc plus complexe à apréhender et peuvent être mise de côté dans certaines campagne afin de profiter d'avantages de l'histoire que du gameplay.</p>
						</div>
            <div className='title-section'>
							<h3>Les postures</h3>
						</div>
						<div className='fight-container'>
							<p>Les postures sont des possibilités tactiques offertes aux personnages pour mettre l'accent sur une approche des situations au détriment d'autres caractéristiques. La posture peut être changée en début de tour uniquement.</p>
              <p><span>La posture offensive</span> permet à un personnage d'infliger automatiquement le maximum de dégâts possibles, sans avoir à jeter de dé de dégâts. En revanche, toute possibilité de défense est annulée.</p>
              <p><span>La posture social</span> permet à un personnage de plus facilement convaincre et obtenir des informations ainsi que pour déceler le vraie du faux. Bonus sur jets de social (+10). En revanche, toute possibilité de défense est annulée.</p>
              <p><span>La posture défensive</span> permet à l'utilisateur de répondre à une attaque réussie par une action de défense, comme une parade ou une esquive, annulant les dégâts. Si vous subisser deux attaque consecutif vous pouver faire la deuxieme  action de défense pas encore réalisé lors de ce tour. L'esquive n'est normalement pas active contre une attaque magique mais, pour ne pas la réduire à une attaque à "dêgats automatique", le joueur en posture défensive peut esquiver les attaques magiques sur une réussite critique.</p>
              <p><span>La posture focus</span> réduit le nombre de points d'énergie nécessaires pour utiliser l'énergie est réduites de 1 tout les 5 points de magie utilisés et octroie un bonus aux jets de mental (+5). En revanche, toute possibilité de défense est annulée.</p>
						</div>
            <div className='title-section'>
							<h3>Les avantages et déavantages</h3>
						</div>
						<div className='fight-container'>
							<p>À la suite de certaines actions, le MJ peut accorder un avantage ou infliger un désavantage à un joueur, comme lors d'une tactique bien montée, d'une déduction éclairée pour les avantages ou à l'inverse d'un empoisonnement ou d'un échec cuisant pour les désavantages. Un seul avantage et un seul désavantage peuvent être cumulés. Les avantages peuvent être utilisés par le joueur lorsqu'il le souhaite pour prendre l'initiative ou gagner un bonus de 10 sur un jet. Les désavantages sont quant à eux utilisés par le MJ lorsqu'il le souhaite pour infliger des malus similaires.</p>
						</div>
            <div className='title-section'>
							<h3>Les dés d'aventures et dés de mésaventures</h3>
						</div>
						<div className='fight-container'>
							<p>Les quatre dés d'aventure/mésaventure permettent d'influencer de manière aléatoire une situation. Il s'agit de dés à six faces pouvant donner trois situations différentes :</p>
              <p><span>1 et 2 :</span> Mouvement. Un objet ou personnage au choix bouge dans une direction choisie.</p>
              <p><span>3 et 4 :</span> Posture. Un personnage change immédiatement de posture au choix, même si ce n'est pas le début de son tour.</p>
              <p><span>5 et 6 :</span> In extremis. Accorde un bonus de 5 à la valeur du jet, permettant de rattraper de justesse une action manquée de peu ou une réussite proche du critique.</p>
              <p>Lorsqu'un joueur utilise un dé d'aventure blanc, celui-ci se convertit en dé de mésaventure noir et inversement. Les dés de mésaventure sont utilisés par le MJ pour désavantager les joueurs en ayant l'effet inverse.</p>
						</div>
					</div>
			</div>
		</div>
	);
};

export default Fight;
