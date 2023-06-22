
import { useState } from 'react';
import { Button } from '../../button';
import { majorGods, minorGods, kingGods, princeGods } from './godsMock';
const Gods = (props) => {
  let [selected, setSelected] = useState({type:"Gods",...majorGods[0]})
  let [wantMore, setWantMore] = useState(false)
  return (
  <div>
    <div className={wantMore ? 'invisible' : 'visible'}>
      <div className="title-section">
          <h3>Dieux</h3>
      </div>
      <article>
        <div className={"row gods"}>
            <div className="grid-items-container">
              <h1>Dieux Majeurs</h1>
              <div className="grid-items">
                { majorGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Gods", ...v});console.log(selected)}}></img>)}
              </div>
              <h1>Dieux Mineurs</h1>
              <div className="grid-items">
              { minorGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Gods", ...v});console.log(selected)}}></img>)}
              </div>
              <h1>Rois du Néant</h1>
              <div className="grid-items">
              { kingGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Void", ...v});console.log(selected)}}></img>)}
              </div>
              <h1>Princes du Néant</h1>
              <div className="grid-items">
              { princeGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Void", ...v});console.log(selected)}}></img>)}
              </div>
            </div>
            <div className="selected-grid-item">
              <img src={ selected.img }></img>
              <h2>{ selected?.name }</h2>
              <p className='content'>{ selected?.desc }</p>
              <div onClick={() => setWantMore(true)}>
                <Button type="primary" ><p id="selectButton">Voir son histoire</p></Button>
              </div>
              <img id="type" src={selected.type === 'Gods' ? "/DungeonOfAsun/Assets/Lawfull.png" : "/DungeonOfAsun/Assets/Void.png"}></img>
            </div>
        </div>
      </article>
    </div>
    <div className={!wantMore ? 'invisible' : 'visible' }>
      <div id="back" onClick={() => setWantMore(false)}><Button type="primary" ><p>Retour à la liste</p></Button></div>
      <div className={"title-section no-margin"}>
          <h3>{selected?.name},</h3>
          <span>{selected?.title}</span>
      </div>
      <article className='row selected-item'>
          <p className='flex description'>{selected?.desc}</p>
          <img src={ selected.img }></img>
      </article>
    </div>
  </div>)
}
export default Gods;