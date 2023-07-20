const Weapon = (props) => {
	return (
		<div>
			<div className={'visible'}>
					<div>
						<div className='title-section'>
							<h3>Qu'est-ce que c'est ?</h3>
						</div>
						<div className='weapon-container'>
							<p>Afin d'obtenir l'accès a certaines classe et de nouvelles compétences il vous faudra vous entrainer a manier vos armes. Pour cela vous pouvez lors q'un entrainement entrainer soit une ou deux armes a la fois,vous pouvez également vous faire aider par quelqu'un possèdant une plus grande maitrise que vous afin d'obtenir un bonus d'expériences lors de l'entrainement. Chaque entrainement permet de lancer  2d6 se qui revient a 1d6 par armes. Le tuteur quand a lui multiplie le résultat obtenue par x1,5.</p>
						</div>
						<div className='title-section'>
							<h3>L'expériences</h3>
						</div>
						<div className='weapon-container'>
							<img src="/DungeonOfAsun/Assets/weapons/tab3.png"></img>
							<img style={{height: '186px'}} src="/DungeonOfAsun/Assets/weapons/tab1.png"></img>
						</div>
						<div className='title-section'>
							<h3>Les bonus</h3>
						</div>
						<div className='weapon-container'>
							<img src="/DungeonOfAsun/Assets/weapons/tab2.png"></img>
						</div>
					</div>
			</div>
		</div>
	);
};

export default Weapon;
