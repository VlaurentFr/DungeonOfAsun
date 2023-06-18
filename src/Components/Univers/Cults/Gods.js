
import { useState } from 'react';
import { Button } from '../../button';
export default (props) => {
  const majorGods= [
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
    {name: "Théomis", img: "/DungeonOfAsun/Assets/placeholder-1.png", desc:"Pellentesque eget lorem facilisis pulvinar volutpat et. Lectus egestas tincidunt tristique in. Vivamus et ut nisl dictum eget viverra at. Volutpat venenatis turpis auctor lorem. Ut tempus in faucibus et nunc tellus ornare viverra magna. Nam amet integer diam fermentum. Feugiat amet magna vitae elit consectetur viverra. Euismod est nullam elit sed nibh scelerisque vitae leo augue. Ante in bibendum nam purus tempus cras in turpis pellentesque. Sit elit diam lectus lorem nulla. Eu venenatis tellus pulvinar pellentesque egestas volutpat sit. Elementum risus congue egestas neque proin donec vehicula mauris. Facilisis nisl molestie et morbi amet pellentesque semper pharetra. Netus nibh aliquam ut lorem. "},
  ]
  const minorGods= [
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
  ]
  const kingGods= [
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
  ]
  const princeGods= [
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
    {name: "", img: "/DungeonOfAsun/Assets/placeholder-1.png"},
  ]
  let [selected, setSelected] = useState({type:"Gods",...majorGods[0]})
  let [wantMore, setWantMore] = useState(false)
  if(!wantMore)
  return (<div>
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
            { kingGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Gods", ...v});console.log(selected)}}></img>)}
            </div>
            <h1>Princes du Néant</h1>
            <div className="grid-items">
            { princeGods.map((v) => <img src={ v.img } onClick={() => {setSelected({type: "Gods", ...v});console.log(selected)}}></img>)}
            </div>
          </div>
          <div className="selected-grid-item">
            <img src={ selected.img }></img>
            <h2>{ selected?.name }</h2>
            <p className='content'>{ selected?.desc }</p>
            <Button type="primary"><p id="selectButton" onClick={() => setWantMore(true)} >Voir son histoire</p></Button>
            <img id="type" src="/DungeonOfAsun/Assets/placeholder-1.png"></img>
          </div>
      </div>
    </article>
</div>)
return (
  <div></div>
)
}