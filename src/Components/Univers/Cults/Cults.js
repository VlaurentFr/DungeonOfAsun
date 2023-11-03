import { useState } from 'react';
import Gods from './Gods';
import { panth } from '../mock/panthsMock';
import { IoMdPin } from 'react-icons/io';
import { majorGods } from '../mock/godsMock';
import { Button } from '../../button';
const Cults = (props) => {
	let [selected, setSelected] = useState({ type: 'Gods', ...majorGods[0] });
	let [selectedCults, setSelectedCults] = useState(null);
	return (
		<div>
			<div className={selectedCults ? 'invisible' : 'visible'}>
				<Gods
					selected={selected}
					setSelected={(v) => setSelected(v)}
				></Gods>
				{selected.cults.length ? (
					<div>
						<div className='title-section'>
							<h3>Panhtéon & Cultes</h3>
						</div>
						<div className='panth-container'>
							{panth.map((v, index) => {
								return (
									selected.cults?.includes(index) && (
										<div
											className='panth-card'
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
											<p>{v.name}</p>
										</div>
									)
								);
							})}
						</div>
					</div>
				) : (
					<div></div>
				)}
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
					<h3>{selectedCults?.name}</h3>
				</div>
				<article>
					<p>{selectedCults?.desc}</p>
				</article>
			</div>
		</div>
	);
};

export default Cults;
