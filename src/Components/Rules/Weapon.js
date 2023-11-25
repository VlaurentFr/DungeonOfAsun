const Weapon = (props) => {
	return (
		<div>
			<div className={'visible'}>
					<div>
						<div className='title-section'>
							<h3>Qu'est-ce que c'est ?</h3>
						</div>
						<div className='weapon-container'>
							<p>Afin d'obtenir l'accès a certaines classe et de nouvelles compétences il vous faudra vous entrainer a manier vos armes. Pour cela vous pouvez lors q'un entrainement entrainer soit une ou deux armes a la fois,vous pouvez également vous faire aider par quelqu'un possèdant une plus grande maitrise que vous afin d'obtenir un bonus d'expériences lors de l'entrainement. Chaque entrainement permet de lancer  2d6 se qui revient a 1d6 par armes. Le tuteur quand a lui multiplie le résultat obtenue par x1,5. Votre maitrise d'armes s'accompagnera alors de nouveau bonus lorsque vous serez equipé de l'arme associer.</p>
						</div>
						<div className='title-section'>
							<h3>L'expériences</h3>
						</div>
						<div className='weapon-container'>
							<table>
								<thead>
									<tr>
										<th colspan="13">Niveau de maîtrise</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Maîtrise</td>
										<td>E</td>
										<td>E+</td>
										<td>D</td>
										<td>D+</td>
										<td>C</td>
										<td>C+</td>
										<td>B</td>
										<td>B+</td>
										<td>A</td>
										<td>A+</td>
										<td>S</td>
										<td>S+</td>
									</tr>
									<tr>
										<td>Exp. requises</td>
										<td></td>
										<td>3</td>
										<td>6</td>
										<td>12</td>
										<td>18</td>
										<td>27</td>
										<td>36</td>
										<td>48</td>
										<td>60</td>
										<td>74</td>
										<td>88</td>
										<td>116</td>
									</tr>
								</tbody>
							</table>
							<table>
								<thead>
									<tr>
										<th colspan="4">Entraînement d'armes</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Type</td>
										<td>Seul</td>
										<td>Double</td>
										<td>Tutoré</td>
									</tr>
									<tr>
										<td>Exp. Gagné</td>
										<td>2d6</td>
										<td>1d6</td>
										<td>x1,5</td>
									</tr>
								</tbody>
							</table>
							{/* <img src="/DungeonOfAsun/Assets/weapons/tab3.png"></img> */}
							{/* <img style={{height: '186px'}} src="/DungeonOfAsun/Assets/weapons/tab1.png"></img> */}
						</div>
						<div className='title-section'>
							<h3>Les bonus</h3>
						</div>
						<div className='weapon-container'>
						<table>
								<thead>
									<tr>
										<th colspan="13">Maitrises d'armes</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td>Epée</td>
										<td>Hache</td>
										<td>Lance</td>
										<td>Arc</td>
										<td>Dague</td>
										<td>Masse</td>
										<td>Poing</td>
										<td>Bouc.</td>
										<td>Magie</td>
									</tr>
									<tr>
										<td>E</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>E+</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>D</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>D+</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td></td>
										<td>+5 ATQ</td>
									</tr>
									<tr>
										<td>C</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>+5 PRD</td>
										<td></td>
									</tr>
									<tr>
										<td>C+</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>B</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>B+</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td></td>
										<td>+5 ATQ</td>
									</tr>
									<tr>
										<td>A</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>+5 PRD</td>
										<td></td>
									</tr>
									<tr>
										<td>A+</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td>+5 CHA</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>S</td>
										<td>+10 CRIT</td>
										<td>+10 CRIT</td>
										<td>+10 CRIT</td>
										<td>+10 CRIT</td>
										<td>+10 CRIT</td>
										<td>+10 CRIT</td>
										<td>+10 CRIT</td>
										<td></td>
										<td>+10 CRIT</td>
									</tr>
									<tr>
										<td>S+</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 ATQ</td>
										<td>+5 PRD</td>
										<td>+5 ATQ</td>
									</tr>
								</tbody>
							</table>
							{/* <img src="/DungeonOfAsun/Assets/weapons/tab2.png"></img> */}
						</div>
					</div>
			</div>
		</div>
	);
};

export default Weapon;
