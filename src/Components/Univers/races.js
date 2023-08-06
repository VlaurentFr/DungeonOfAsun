
import { useState } from 'react';
import { human, elf, dwarf, orc, other } from './mock/racesMock';
const Races = (props) => {
  const [selected, setSelected] = useState(human[0])
  return (
  <div>
    <div>
      <div>
      <div className="title-section">
          <h3>Les Races & Peuples</h3>
      </div>
    </div>
      <article>
        <div className={"row gods"}>
            <div className="grid-items-container flex">
              <h1>Humains ({human.length})</h1>
              <div className="grid-items">
                { human.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Elfes ({elf.length})</h1>
              <div className="grid-items">
              { elf.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Nains ({dwarf.length})</h1>
              <div className="grid-items">
              { dwarf.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Orcs ({orc.length})</h1>
              <div className="grid-items">
              { orc.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Autres ({other.length})</h1>
              <div className="grid-items">
              { other.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
            </div>
            <div className="selected-grid-item flex">
              <img src={ selected?.img }></img>
              <h2>{ selected?.name }</h2>
              {/* <p>Bonus : <ul>{ selected?.up?.map((r) => <li>{r}</li>) || <li>Aucun</li>}</ul></p> */}
            </div>
        </div>
      </article>
    </div>
    <div>
      <div className={"title-section no-margin"}>
          <h3>Les {selected?.name}</h3>
      </div>
      <article className='row selected-item'>
      <div className='flex'>
        <p>{ selected?.desc }</p>
      </div>
      </article>
    </div>
  </div>)
}
export default Races;