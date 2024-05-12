import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import SummariesList from '../components/SummariesList.jsx'

import '../index.css'
import backgroundHome from'../assets/backgroundHome.jpg'



export default function Home() {
    return (
    <>
        <section id="header">
            <Header />
        </section>
        <section id="content">
            <div id="title">
                <img src={backgroundHome} className="backgroundPicture"></img>
                <span className="mainTitle"><div>Chez vous,&nbsp;</div><div>partout et ailleurs</div></span>
            </div>
            <div id="summariesList">
                <SummariesList />
            </div>
        </section>
        <section id="footer">
            <Footer />
        </section>
    </>)
}