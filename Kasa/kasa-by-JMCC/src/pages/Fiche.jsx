import { useParams } from 'react-router-dom'

import Collapse from '../components/Collapse.jsx'
import Carousel from '../components/Carousel.jsx'
import Evaluation from '../components/Evaluation.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Error_404 from './Error-404.jsx'

import jsonFile from '../assets/logements.json'

import '../index.css'
import '../index_mobile.css'

export default function Fiche() {
  const { logementId } = useParams()
  const logement = jsonFile.filter ((fiche) => fiche.id === logementId)

  // Gestion des erreurs : un id doit correspondre à un seul enregistrement dans le fichier json
  if (logement.length != 1)
    return <Error_404 />
  // si on est ici, c'est que le logement existe
  const hostFirstName=logement[0].host.name.substring(0,logement[0].host.name.indexOf(' '))
  const hostLastName =logement[0].host.name.substring(logement[0].host.name.indexOf(' ')+1)
  const description = new Array();
  description.push((logement[0].description))

  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="content">
        <div className='carousel'>{ logement[0].pictures.length > 1 ?
          <Carousel pictures={logement[0].pictures} /> :
          <div id="banner">
            <img src={logement[0].pictures[0]} className="singlePictureCarousel"></img>
          </div>}
        </div>
        <div className="locationContent">
          <div className="locationOverview">
            <div className="locationDetails">
              <div className="titleAndlocation">
                <div className="detailTitle">{logement[0].title}</div>
                <div className="detailLocation">{logement[0].location}</div>
              </div>
              <div className="tags">{logement[0].tags.map(tag => (<div className="locationTag" key={tag}>{tag}</div>))}</div>
            </div>
            <div className="hostAndEvaluation">
              <div className="hostDetail">
                <div className="hostIdentity">
                  <div className="hostName">{hostFirstName}<br />{hostLastName}</div>
                  <img className="hostPhoto" src={logement[0].host.picture}></img>
                </div>
              </div>
              <div className="evaluation">
                <Evaluation rating={logement[0].rating} />
              </div>
            </div>
          </div>
          <div className="collapses">
            <div className="description">
              <Collapse title="Description" content={description} />
            </div>
            <div className="equipements">
              <Collapse title="Équipements" content={logement[0].equipments} />
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  )
}