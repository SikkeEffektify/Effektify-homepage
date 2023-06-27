import './App.css'
import Cat from './components/Cat'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {Routes, Route} from 'react-router-dom'
import Home  from './pages/Home'
import Contact from './pages/Contact'
import Webb from './pages/Webb'
import DigitalAnonsering from './pages/DigitalAnonsering'
import Erbjuder from './pages/Erbjuder'
import Onboarding from './pages/Onboarding'
import AppApple from './pages/AppApple'
import AppAndroid from './pages/AppAndroid'
import Career from './pages/Career'
import SEOSokopt from './pages/SEOSokopt'
import SEOHalmstad from './pages/SEOHalmstad'
import SEOBoras from './pages/SEOBoras'
import SEOVaxjo from './pages/SEOVaxjo'
import SEOUppsala from './pages/SEOUppsala'
import SEOGavle from './pages/SEOGavle'
import SEOVarberg from './pages/SEOVarberg'
import SEOFalkenberg from './pages/SEOFalkenberg'
import SEOEskilstuna from './pages/SEOEskilstuna'
import SEOVasteras from './pages/SEOVasteras'
import SEOUpplandsvasby from './pages/SEOUpplandsvasby'
import SEOUmea from './pages/SEOUmea'
import SEOSundsvall from './pages/SEOSundsvall'
import SEOSollentuna from './pages/SEOSollentuna'
import SEOSodertalje from './pages/SEOSodertalje'
import SEOSkelleftea from './pages/SEOSkelleftea'
import SEOOstersund from './pages/SEOOstersund'
import SEONorrtalje from './pages/SEONorrtalje'
import SEONorrkoping from './pages/SEONorrkoping'
import SEOLund from './pages/SEOLund'
import SEOLulea from './pages/SEOLulea'
import SEOLinkoping from './pages/SEOLinkoping'
import SEOKungsbacka from './pages/SEOKungsbacka'
import SEOKristianstad from './pages/SEOKristianstad'
import SEOKalmar from './pages/SEOKalmar'
import SEOJonkoping from './pages/SEOJonkoping'
import SEOHuddinge from './pages/SEOHuddinge'
import SEOHelsingborg from './pages/SEOHelsingborg'
import SEONacka from './pages/SEONacka'
import SEOStockholm from './pages/SEOStockholm'
import SEOGoteborg from './pages/SEOGoteborg'

function App() {

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/webb' element={<Webb />} />
        <Route path='/digital-annonsering' element={<DigitalAnonsering />} />
        <Route path='/vad-vi-erbjuder' element={ <Erbjuder />} />
        <Route path='/onboarding' element={ <Onboarding />} />
        <Route path='/en/onboarding' element={ <Onboarding />} />
        <Route path='/en/download-the-app-for-apple' element={ <AppApple />} />
        <Route path='/en/ladda-ner-appen-for-android' element={ <AppAndroid />} />
        <Route path='/karriar' element={ <Career />} />

        <Route path='/seo-sokmotoroptimering' element={ <SEOSokopt />} />
        <Route path='/seo-sokmotoroptimering-halmstad' element={ <SEOHalmstad/>} />
        <Route path='/seo-sokmotoroptimering-boras' element={ <SEOBoras/>} />
        <Route path='/seo-sokmotoroptimering-vaxjo' element={ <SEOVaxjo/>} />
        <Route path='/seo-sokmotoroptimering-uppsala' element={ <SEOUppsala/>} />
        <Route path='/seo-sokmotoroptimering-gavle' element={ <SEOGavle/>} />
        <Route path='/seo-sokmotoroptimering-varberg' element={ <SEOVarberg/>} />
        <Route path='/seo-sokmotoroptimering-falkenberg' element={ <SEOFalkenberg/>} />
        <Route path='/seo-sokmotoroptimering-eskilstuna' element={ <SEOEskilstuna/>} />
        <Route path='/seo-sokmotoroptimering-vasteras' element={ <SEOVasteras/>} />
        <Route path='/seo-sokmotoroptimering-upplands-vasby' element={ <SEOUpplandsvasby/>} />
        <Route path='/seo-sokmotoroptimering-umea' element={ <SEOUmea/>} />
        <Route path='/seo-sokmotoroptimering-sundsvall' element={ <SEOSundsvall/>} />
        <Route path='/seo-sokmotoroptimering-sollentuna' element={ <SEOSollentuna/>} />
        <Route path='/seo-sokmotoroptimering-sodertalje' element={ <SEOSodertalje/>} />
        <Route path='/seo-sokmotoroptimering-skelleftea' element={ <SEOSkelleftea/>} />
        <Route path='/seo-sokmotoroptimering-ostersund' element={ <SEOOstersund/>} />
        <Route path='/seo-sokmotoroptimering-norrtalje' element={ <SEONorrtalje/>} />
        <Route path='/seo-sokmotoroptimering-norrkoping' element={ <SEONorrkoping/>} />
        <Route path='/seo-sokmotoroptimering-lund' element={ <SEOLund/>} />
        <Route path='/seo-sokmotoroptimering-lulea' element={ <SEOLulea/>} />
        <Route path='/seo-sokmotoroptimering-linkoping' element={ <SEOLinkoping/>} />
        <Route path='/seo-sokmotoroptimering-kungsbacka' element={ <SEOKungsbacka/>} />
        <Route path='/seo-sokmotoroptimering-kristianstad' element={ <SEOKristianstad/>} />
        <Route path='/seo-sokmotoroptimering-kalmar' element={ <SEOKalmar/>} />
        <Route path='/seo-sokmotoroptimering-jonkoping' element={ <SEOJonkoping/>} />
        <Route path='/seo-sokmotoroptimering-huddinge' element={ <SEOHuddinge/>} />
        <Route path='/seo-sokmotoroptimering-helsingborg' element={ <SEOHelsingborg/>} />
        <Route path='/seo-sokmotoroptimering-nacka' element={ <SEONacka/>} />
        <Route path='/seo-sokmotoroptimering-stockholm' element={ <SEOStockholm/>} />
        <Route path='/seo-sokmotoroptimering-goteborg' element={ <SEOGoteborg/>} />
      </Routes>
    <Cat />
    <Footer />
    </>
  )
}

export default App
