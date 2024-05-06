import './index.css'

import logo from './assets/logo_about.png'

export default function Footer() {
  return (
    <>
        <div id="footerLogo">
          <img src={logo}></img>
        </div>
        <div className="footerText">&copy; 2024 Kasa. All rights reserved</div>
    </>)
}