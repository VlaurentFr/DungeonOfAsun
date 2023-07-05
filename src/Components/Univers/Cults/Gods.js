
import { useState } from 'react';
import { Button } from '../../button';
import { majorGods, minorGods, kingGods, princeGods, otherGods } from '../mock/godsMock';
const Gods = (props) => {
  let [wantMore, setWantMore] = useState(false)
  const setSelected = (god) => {
    props.setSelected(god)
  }
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
                { majorGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Gods", ...v});}}></img>)}
              </div>
              <h1>Dieux Mineurs</h1>
              <div className="grid-items">
              { minorGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Gods", ...v});}}></img>)}
              </div>
              <h1>Rois du Néant</h1>
              <div className="grid-items">
              { kingGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Void", ...v});}}></img>)}
              </div>
              <h1>Princes du Néant</h1>
              <div className="grid-items">
              { princeGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Void", ...v});}}></img>)}
              </div>
              <h1>Autres</h1>
              <div className="grid-items">
              { otherGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Other", ...v});}}></img>)}
              </div>
            </div>
            <div className="selected-grid-item">
              <img src={ props.selected.img }></img>
              <h2>{ props.selected?.name }</h2>
              <p className='content'>{ props.selected?.desc }</p>
              <div onClick={() => setWantMore(true)}>
                <Button type="primary" ><p id="selectButton">Voir son histoire</p></Button>
              </div>
              <img id="type" src={props.selected.type !== 'Void' ? "/DungeonOfAsun/Assets/Lawfull.png" : "/DungeonOfAsun/Assets/Void.png"}></img>
            </div>
        </div>
      </article>
    </div>
    <div className={!wantMore ? 'invisible' : 'visible' }>
      <div id="back" onClick={() => setWantMore(false)}><Button type="primary" ><p>Retour à la liste</p></Button></div>
      <div className={"title-section no-margin"}>
          <h3>{props.selected?.name},</h3>
          <span>{props.selected?.title}</span>
      </div>
      <article className='row selected-item'>
          <p className='flex description'>{props.selected?.desc}</p>
          <img src={ props.selected.img }></img>
      </article>
    </div>
  </div>)
}
export default Gods;