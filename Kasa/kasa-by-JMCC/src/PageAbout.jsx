import Header from './ComponentHeader.jsx'
import Footer from './ComponentFooter.jsx'

import './index.css'

export default function About() {
  return (
    <>
        <section id="header">
            <Header />
        </section>
      <div>
A propos
</div>
        <section id="footer">
            <Footer />
        </section>
    </>
  )
}