
import { useParams } from 'react-router-dom'
import './index.css'

export default function Fiche() {
  const { placeId } = useParams()
  return (
    <>
        <section id="header">
            <Header />
        </section>
      <div>
Une fiche avec l'id {placeId}
</div>
        <section id="footer">
            <Footer />
        </section>
    </>
  )
}