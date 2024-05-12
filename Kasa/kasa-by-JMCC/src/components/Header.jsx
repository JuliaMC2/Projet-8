import { Link } from 'react-router-dom'

import '../index.css'

import logo from '../assets/logo.png'

export default function Header() {
  return (
    <>
        <div id="headerLogo">
          <img src={logo}></img>
        </div>
        <div className="nav">
          <Link to="/">Accueil</Link>
          <Link to="/about/">A Propos</Link>
        </div>
    </>)
}