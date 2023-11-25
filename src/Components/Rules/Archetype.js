import { archetype } from "./mock/archeMock";
import { spell } from "./mock/spellMock";

const Archetype = (props) => {
	return (
		<div>
			<div className={'visible'}>
					{archetype.map((a) => <div>
						<div className='title-section'>
							<h3>{a?.name}</h3>
						</div>
						<div className='descOrga selected-item'>
							<div className="flex">
							<h4>Sorts : </h4>
							<ul>
								{ a?.spell.map((s) => spell.map((sp) => sp?.name === s &&
									<li>{sp?.name}
									<ul>
										{sp?.desc}
										{sp?.type && <li>type: {sp?.type}</li>}
										{sp?.lvl && <li>niveau: {sp?.lvl}</li>}
										{sp?.dices && sp?.dices?.map((d) => <li>{d}</li>)}
										<br></br>
										{sp?.price && <li>coûts: {sp?.price} d'énergies</li>}
										{sp?.range && <li>portée: {sp?.range}</li>} 
									</ul>
									</li>))
							}</ul>
							</div>
							<img src={a.img}></img>
						</div>
					</div>)}
			</div>
		</div>
	);
};

export default Archetype;
