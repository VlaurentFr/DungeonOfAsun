import './App.css';
import { Route, useLocation, Link } from 'react-router-dom';
import './styles/styles.css'
import './styles/timeline.css'
import { Univers } from './Pages/Univers';
import { Rules } from './Pages/Rules';
import { Map } from './Pages/Map';
import { useRef, useState } from 'react';
import { Button } from './Components/button'
import { HomePage } from './Pages/HomePage';

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
  let time
  const [theme, setTheme] = useState('light')
  const [open, setOpen] = useState(window.innerWidth > 1024 ? true: false);
  window.addEventListener("resize", () => window.innerWidth > 1024 ? setOpen(true): setOpen(false))
  window.addEventListener('click', () => {
    if(!time){
      time = setTimeout(() => {
        setOpen(window.innerWidth > 1024 ? true: false);
        time = null;
      }, 3000)
    }
  })
  return(
  <main data-theme="light">
    <link href='https://css.gg/css' rel='stylesheet'></link>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
    {/* NAVBAR */} 
    <nav className='scrolled'>
        <Link id="scroll-1" className="scroll" to="/">Dungeon of Asun</Link>
        {open && <div>
        <div>
        <Link className="scroll" to="/Home">Accueil</Link>
        <Link className="scroll" to="/Univers/story">Univers</Link>
        <Link className="scroll" to="/Rules/creation">Règles du jeu</Link>
        <Link className="scroll" to="/Lib">Librairie d'Asun</Link>
        <Link className="scroll" to="/Map">Carte</Link>
        {window.innerWidth > 1024 && <div className="theme-switcher" onClick={() => {let cdt = theme === "dark" ? "light" : "dark"; setTheme(cdt); document.documentElement.setAttribute("data-theme", cdt)}}>
          {theme === "dark"  && 
            <i className="gg-moon"></i>
          }
          {theme !== "dark"  &&
            <i className="gg-sun"></i>
          }
        </div>}
        <Button type="primary"><a style={{marginRight: "25px"}} href='https://www.paypal.com/paypalme/DungeonOfAsun?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&ppid=RT000269&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=33MHU9E7LYTKW&unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&calc=f47253660671a&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.178.0&xt=104038%2C127632'>Buy me a coffee <img src="/DungeonOfAsun/Assets/cup2.webp"></img></a></Button>
        </div></div>}
        {window.innerWidth < 1024 && <div className="theme-switcher" onClick={() => {let cdt = theme === "dark" ? "light" : "dark"; setTheme(cdt); document.documentElement.setAttribute("data-theme", cdt)}}>
          {theme === "dark"  && 
            <i className="gg-moon"></i>
          }
          {theme !== "dark"  &&
            <i className="gg-sun"></i>
          }
        </div>}
        {open && <i id="close" className="gg-close" onClick={() => {setOpen(false); }}></i>}
        {!open && <i id="burger" className="gg-menu" onClick={() => {setOpen(true); }}></i>}
    </nav>
    {/* ROUTER */}
    <div style={{height: '100%'}}>
      <Route path='/Home' component={HomePage}>
      </Route>
      <Route path='/Univers' component={Univers} >
      </Route>
      <Route path='/Rules' component={Rules}>
      </Route>
      <Route path='/Lib' component={Rules}>
      </Route>
      <Route path='/Map'component={Map}>
      </Route>
    </div>
  </main>
  )
}

export default App;
