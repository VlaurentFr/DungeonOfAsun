import Gods from './Gods'
import { panth } from './panthsMock'
const Cults = (props) => {
  return <div>
    <Gods></Gods>
    <div>
      <div className="title-section">
        <h3>Panhtéon & Cultes</h3>
      </div>
      <div className='panth-container'>
        {panth.map((v) => <div className='panth-card'>
          <img src={v.img}></img>
          <div className="dark-filter"></div>
          <div className='corner' style={{backgroundColor: v.color}}></div>
          <p>{v.name}</p>
        </div>)}
      </div>
    </div>
</div>
}

export default Cults;