
import { useState } from 'react';
import { noviceClasses, basicClasses, avancedClasses, masterClasses } from './mock/classesMock';
const Classes = (props) => {
  const [selected, setSelected] = useState(basicClasses[0])
  return (
  <div>
    <div>
      <div className="title-section">
          <h3>Dieux</h3>
      </div>
      <article>
        <div className={"row gods"}>
            <div className="grid-items-container-classes flex">
              <h1>Classes de base (3)</h1>
              <div className="grid-items">
                { basicClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Classes Novice (21)</h1>
              <div className="grid-items">
              { noviceClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Classes Avancées (38)</h1>
              <div className="grid-items">
              { avancedClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Classes Maîtres (40)</h1>
              <div className="grid-items">
              { masterClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
            </div>
            <div className="selected-grid-item-classes flex">
              <img src={ selected?.img }></img>
              <h2>{ selected?.name }</h2>
              <p className='content'>{ selected?.desc }</p>
              <p className='content'>DPS Physique</p>
              <div class="gauge-border">
                <div className={`gauge gauge-${selected.spe?.[0]}`}></div>
              </div>
              <p className='content'>DPS magique </p>
              <div class="gauge-border">
                <div className={`gauge gauge-${selected.spe?.[1]}`}></div>
              </div>
              <p className='content'>Tank</p>
              <div class="gauge-border">
                <div className={`gauge gauge-${selected.spe?.[2]}`}></div>
              </div>
              <p className='content'>Soutiens</p>
              <div class="gauge-border">
                <div className={`gauge gauge-${selected.spe?.[3]}`}></div>
              </div>
            </div>
        </div>
      </article>
    </div>
    <div>
      <div className={"title-section no-margin"}>
          <h3>Informations sur la classe</h3>
      </div>
      <article className='row selected-item'>
        <div className='flex'>
          <h4>Maîtrises d'armes prérequis</h4>
          <ul>
          {selected?.weapons?.map((m) => <li className='flex description'>{m}</li>) }
          </ul>
          <h4>Races prérequises</h4>
          <ul>
          {selected?.races?.map((m) => <li className='flex description'>{m}</li>) }
          </ul>
          <h4>Maîtrises d'armes prérequis</h4>
          <ul>
          {selected?.mastery?.map((m) => <li className='flex description'>{m}</li>) }
          </ul>
        </div>
        <div className='flex'>
          <h4>Sorts</h4>
          <ul>
          {selected?.spell?.map((s) => <li>{s?.name}
            <ul>
              <li>{s?.desc}</li>
            </ul>
          </li>) }
          </ul>
        </div>
      </article>
    </div>
  </div>)
}
export default Classes;