import './App.css';
import { Route, useLocation, Link } from 'react-router-dom';
import './styles/styles.css'
import './styles/timeline.css'
import { Univers } from './Pages/Univers';
import { Rules } from './Pages/Rules';
import { useRef, useState } from 'react';
import { Button } from './Components/button'

// Set up pages using the React Router Link element for navigation - instead of <a></a>
const App = (props) => {
  const location = useLocation()
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)
  const section4 = useRef(null)
  const section4a = useRef(null)
  const section4b = useRef(null)
  const section5 = useRef(null)
  const [theme, setTheme] = useState('light')
  return(
  <main data-theme="light">
    <link href='https://css.gg/css' rel='stylesheet'></link>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
    {/* NAVBAR */} 
    <nav className='scrolled'>
        <Link id="scroll-1" className="scroll" to="/">Dungeon of Asun</Link>
        <div>
        <Link className="scroll" to="/Home">Accueil</Link>
        <Link className="scroll" to="/Univers/overview">Univers</Link>
        <Link className="scroll" to="/Rules">Règles du jeu</Link>
        <Link className="scroll" to="/Lib">Librairie d'Asun</Link>
        <Link className="scroll" to="/Map">Carte</Link>
        <Button type="primary"><a style={{marginRight: "25px"}} href='https://www.paypal.com/paypalme/DungeonOfAsun?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&ppid=RT000269&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=33MHU9E7LYTKW&unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&calc=f47253660671a&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.178.0&xt=104038%2C127632'>Buy me a coffee</a></Button>
        <img style={{width: "30px",height: "30px",position: "absolute",top: "16px",right: "37px"}} src="/DungeonOfAsun/Assets/cup2.webp"></img>
        </div>
        {/* <div className="theme-switcher">
            <div className="theme-wrapper" onClick={() => {let cdt = theme === "dark" ? "light" : "dark"; setTheme(cdt); document.documentElement.setAttribute("data-theme", cdt)}}>
              <div style={{backgroundColor: theme === "dark" ? '#000' : null}}>
                <i class="gg-moon"></i>
              </div>
              <div style={{backgroundColor: theme !== "dark" ? '#FF9900' : null}}>
                <i class="gg-sun"></i>
              </div>
            </div>
        </div> */}
    </nav>
    {/* ROUTER */}
    <div style={{height: '100%'}}>
      <Route path='/Home'>
      </Route>
      <Route path='/Univers' component={Univers} >
      </Route>
      <Route path='/Rules' component={Rules}>
      </Route>
      <Route path='/Lib'>
      </Route>
      <Route path='/Map'>
      </Route>
    </div>
  </main>
  )
}

export default App;
