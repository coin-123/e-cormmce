import React from 'react'
import Anima from '../components/animated/anima.jsx'
import Nav from '../components/header/nav.jsx'
import Intro from '../components/intro/intro.jsx'
import Flash from '../components/flashsales/flash.jsx'
import Cattegories from '../components/categories/cattegories.jsx'
import BestSell from '../components/best-selling/best-sell.jsx'
import Adsec from '../components/ad-section/adsec.jsx'
import Products from '../components/products/products.jsx'
import Newprd from '../components/new-products/newprd.jsx'
import Features from '../components/features/features.jsx'
import Footer from '../components/footer/footer.jsx'
// import Signupnav from './components/signupcomponents/signupnav.jsx'

export const Home = () => {
    return (
        <div>
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
        </div>
    )
}
