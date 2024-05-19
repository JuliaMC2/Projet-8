import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

import '../index.css'
import '../index_mobile.css'

export default function Error() {
  return (
    <>
        <section id="header">
            <Header />
        </section>
        <section id="content">
            <span className="errorNumber">404</span>
            <span className="detailTitle">Oups! La page que vous demandez n'existe pas</span>
            <Link to="/" className="underlinedLink">Retourner sur la page d'accueil</Link>
        </section>
        <section id="footer">
            <Footer />
        </section>
    </>
  )
}