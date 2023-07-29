const Crea = (props) => {
	return (
		<div>
			<div className={'visible'}>
					<div>
						<div className='title-section'>
							<h3>Les Caractéristiques</h3>
						</div>
						<div className='fight-container'>
							<p>Il existe Trois grande caractéristique, <span> la Force, le Social et le Mental</span></p>
							<p><span>La force</span> est la caractéristique lier au effort physique, un jet de force peux être demander dans le cas d'un saut, d'une attaque</p>
							<p><span>Le social</span></p>
							<p><span>Le mental</span> est la caractéristique lier à la concentration ce qui est nécessaire pour l'incantation de sort mais également pour esquiver ou contre-attaquer.</p>
						</div>
						<div className='title-section'>
							<h3>Les Répartition des points de CRT</h3>
						</div>
						<div className='fight-container'>
							<p>Vous avez un totale de 170 points à répartir dans ces trois caractéristiques sachant qu'une caractéristique ne peux dépasser 80 et être inférieur à 30.</p>
						</div>
					</div>
					<div className='title-section'>
							<h3>Votre identité</h3>
						</div>
						<div className='fight-container'>
							<p>Votre identité est défini par plusieurs attribut. Il vous faut donc choisir pour votre personnage :
								<ul>
									<li><span>Un nom</span> qui vous représente</li>
									<li><span>Une race</span> parmis un large choix</li>
									<li><span>Une classe</span> de base entre Noble qui possèdent un sort de niveau de base. Roturier qui ne maitrise malheureusement pas la magie ou Vagabond</li>
									<li><span>Votre maîtrise d'armes</span>, elle sont toute au Rang E à l'exception d'une au choix au Rang D</li>
								</ul>
							</p>
					</div>
			</div>
		</div>
	);
};

export default Crea;
