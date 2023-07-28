
import { useState } from 'react';
import { noviceClasses, basicClasses, avancedClasses, masterClasses } from './mock/classesMock';
import { spell } from './mock/spellMock';
const Classes = (props) => {
  const [selected, setSelected] = useState(basicClasses[0])
  return (
  <div>
    <div>
      <div>
        <div className={"title-section"}>
            <h3>Liste des sorts</h3>
        </div>
        <article className='row'>
          <table>
            <thead>
              <tr>
                <th colspan="1">Nom</th>
                <th colspan="1">Type</th>
                <th colspan="1">Description</th>
                <th colspan="1">Effet</th>
                <th colspan="1">Coûts</th>
                <th colspan="1">Portée</th>
              </tr>
            </thead>
            <tbody>
              {spell.map((s) => <tr>
                <td>{s.name}</td>
                <td>{s.type}</td>
                <td>{s.desc}</td>
                <td>{s.dices}</td>
                <td>{s.price}</td>
                <td>{s.range}</td>
                </tr>
              )}
            </tbody>
          </table>
        </article>
      </div>
    </div>
  </div>)
}
export default Classes;