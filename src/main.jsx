import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Anima from './components/animated/anima.jsx'
import Nav from './components/header/nav.jsx'
import Intro from './components/intro/intro.jsx'
import Flash from './components/flashsales/flash.jsx'
import Cattegories from './components/categories/cattegories.jsx'
import BestSell from './components/best-selling/best-sell.jsx'
import Adsec from './components/ad-section/adsec.jsx'
import Products from './components/products/products.jsx'
import Newprd from './components/new-products/newprd.jsx'
import Features from './components/features/features.jsx'
import Footer from './components/footer/footer.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Anima />
    <Nav />
    <Intro />
    <Flash />
    <Cattegories />
    <BestSell />  
    <Adsec />
    <Products />
    <Newprd />
    <Features />
    <Footer />
    {/* <App /> */}   

  </StrictMode>,
)
