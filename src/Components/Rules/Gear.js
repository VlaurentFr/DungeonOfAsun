

import { weapons, lightgears, gears, heavygears, shields } from './mock/gearMock';
const Gear = (props) => {
  return (
  <div>
    <div>
      <div>
        <div className={"title-section"}>
            <h3>Liste des équipements</h3>
        </div>
        <article className='row' style={{gap: '64px'}}>
          <table>
            <thead>
              <tr>
                <th colspan="1">Nom</th>
                <th colspan="1">Dégâts</th>
                <th colspan="1">Coûts</th>
              </tr>
            </thead>
            <tbody>
              {weapons.map((w) => <tr>
                <td>{w.name}</td>
                <td>{w.dmg}</td>
                <td>{w.cost}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                {lightgears.map((g) => <tr>
                  <td>{g.name}</td>
                  <td>{g.def}</td>
                  <td>{g.res}</td>
                  <td>{g.cost}</td>
                  </tr>
                )}
              </tbody>
           </table>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                {gears.map((g) => <tr>
                  <td>{g.name}</td>
                  <td>{g.def}</td>
                  <td>{g.res}</td>
                  <td>{g.cost}</td>
                  </tr>
                )}
              </tbody>
           </table>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                {heavygears.map((g) => <tr>
                  <td>{g.name}</td>
                  <td>{g.def}</td>
                  <td>{g.res}</td>
                  <td>{g.cost}</td>
                  </tr>
                )}
              </tbody>
           </table>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                {shields.map((g) => <tr>
                  <td>{g.name}</td>
                  <td>{g.def}</td>
                  <td>{g.res}</td>
                  <td>{g.cost}</td>
                  </tr>
                )}
              </tbody>
           </table>
          </div>
        </article>
      </div>
    </div>
  </div>)
}
export default Gear;