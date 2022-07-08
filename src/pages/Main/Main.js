import React from 'react'
import { Helmet } from 'react-helmet'

import { 
    Navbar, Footer, 
    Landing, About, About2, Skills, 
    Testimonials, Blog, HeaderLogo, 
    Education, Experience, Contacts, 
    Projects, Services, Achievement } 
from '../../components'

import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <About />
            <About2 />
            <Testimonials />
            <Skills />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
