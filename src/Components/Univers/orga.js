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
							{props.title && <h3>Les organisations jouables</h3>}
						</div>
						<div className='orga-container'>
							{orga.map((v, index) => {
								return (
										<div
											className='orga-card'
											onClick={() => setSelectedCults(v)}
										>
											<img src={v.img}></img>
											<div className='dark-filter'></div>
											<div
												className='corner'
												style={{ backgroundColor: v.color }}
											>
												<IoMdPin />
											</div>
											<p>{v.title}</p>
										</div>
									)
							})}
						</div>
					</div>
			</div>
			<div className={!selectedCults ? 'invisible' : 'visible'}>
				<div
					id='back'
					onClick={() => setSelectedCults(null)}
				>
					<Button type='primary'>
						<p>Retour à la liste</p>
					</Button>
				</div>
				<div className='title-section'>
					<h3>{selectedCults?.title}</h3>
				</div>
				<div className='descOrga'>
							<p>{selectedCults?.desc}</p>
							<img src={selectedCults?.img}></img>
				</div>
				<div className='title-section'>
					<h3>Rangs</h3>
				</div>
				<ul>
					{selectedCults?.rank.map((v) => <li><span className='title'>{v.name}</span> {v.desc}</li>)}
				</ul>
			</div>
		</div>
	);
};

export default Cults;
