
import { useState } from 'react';
import { noviceClasses, basicClasses, avancedClasses, masterClasses } from './mock/classesMock';
import { spell } from './mock/spellMock';
const Classes = (props) => {
  const [selected, setSelected] = useState(basicClasses[0])
  return (
  <div>
    <div>
      <div>
      <div className={"title-section no-margin"}>
          <h3>L'experience de classe</h3>
      </div>
      <article className='row selected-item'>
        <div className='flex'>
          <p className='descOrga'>Pour maitriser et obtenir le bonus lier a une classe, il vous faudra vous entrainer. Chaque entrainement rapporte un certains montant d'expériences et chaque classe nécessite un certains montant en fonction du tiers de cette dernière (Basique, Novice, Avancée ou Maître). Lorsque le montant est atteint vous obtenez alors le bonus de maîtrise lier a cette classe. Bonus permanant même si vous changer de classe dans le futur. </p>
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="5">Entraînement de Classe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Base</td>
              <td>Novice</td>
              <td>Avancée</td>
              <td>Maître</td>
            </tr>
            <tr>
              <td>Exp. Requis</td>
              <td>20</td>
              <td>40</td>
              <td>80</td>
              <td>140</td>
            </tr>
            <tr>
              <td>Exp. Gagné</td>
              <td>2d6</td>
              <td>2d6</td>
              <td>1d6</td>
              <td>2d6</td>
            </tr>
          </tbody>
        </table>
        {/* <img style={{width: 'auto'}} src="/DungeonOfAsun/Assets/classes/tab.png"></img> */}
      </article>
      <div className={"title-section no-margin"}>
          <h3>Les sorts de classe</h3>
      </div>
      <article className='row selected-item'>
        <div className='flex'>
          <p className='descOrga'>Chaque classes possèdent un set de sorts prédéfinie qui sont acquis directement en changeant de classes mais ces sort ne sont pas permanant. Changer de classes vous ferra les perdre. Cependant tout à chaqu'un hors indication contrairement peut apprendre n'importe qu'elle sort grâce soi à un mentor soi à un livre de sort. </p>
        </div>
      </article>
      <div className="title-section">
          <h3>Les Classes</h3>
      </div>
    </div>
      <article>
        <div className={"row gods"}>
            <div className="grid-items-container-classes flex">
              <h1>Classes de base ({basicClasses.length})</h1>
              <div className="grid-items">
                { basicClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Classes Novice ({noviceClasses.length})</h1>
              <div className="grid-items">
              { noviceClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Classes Avancées ({avancedClasses.length})</h1>
              <div className="grid-items">
              { avancedClasses.map((v) => <img src={ v.img } onClick={() => {setSelected({...v});}}></img>)}
              </div>
              <h1>Classes Maîtres ({masterClasses.length})</h1>
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
          <h4>Sorts</h4>
          <ul>
          {selected?.spell?.map((s) => spell.map((sp) => sp?.name === s && <li>{sp?.name}
            <ul>
              {sp?.desc}
              <li>type: {sp?.type}</li>
              {sp?.dices.map((d) => <li>{d}</li>)}
              <li>coûts: {sp?.price} d'énergies</li>
              <li>portée: {sp?.range}</li>
            </ul>
          </li>)) }
          </ul>
        </div>
        <div className='flex'>
          <h4>Maîtrises d'armes prérequis</h4>
          <ul>
          {selected?.weapons?.map((m) => <li className='flex description'>{m}</li>) }
          </ul>
          <h4>Bonus de Maîtrises</h4>
          <ul>
          {selected?.mastery?.map((m) => <li className='flex description'>{m}</li>) }
          </ul>
        </div>
      </article>
    </div>
  </div>)
}
export default Classes;