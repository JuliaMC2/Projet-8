import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Collapse from '../components/Collapse.jsx'

import '../index.css'
import '../index_mobile.css'

import jsonContent from '../assets/about.json'
import backgroundAbout from'../assets/backgroundAbout.jpg'

export default function About() {
  const collapses = jsonContent.map (Object => <Collapse title={Object.nom} content={Object.contenu}/>)

  return (
    <>
      <section id="header">
          <Header />
      </section>
      <section id="content">
      <div id="title">
        <img src={backgroundAbout} className="backgroundPicture"></img>
      </div>
      <div className="aboutCollapses">
        {collapses}
      </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  )
}