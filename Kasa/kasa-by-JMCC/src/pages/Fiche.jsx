import { useParams } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Error_404 from './Error-404.jsx'

import jsonFile from '../assets/logements.json'


import '../index.css'


export default function Fiche() {
  const { logementId } = useParams()
  const logement = jsonFile.filter ((fiche) => fiche.id === logementId)

  // Gestion des erreurs : un id doit correspondre à un seul enregistrement dans le fichier json
  if (logement.length != 1)
    return <Error_404 />

  // si on est ici, c'est que le logement existe
  return (
    <>
        <section id="header">
            <Header />
        </section>
      <div>
Une fiche avec l'id {logementId}
</div>
        <section id="footer">
            <Footer />
        </section>
    </>
  )
}