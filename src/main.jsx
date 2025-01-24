/* Mandatory imports */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

/* Import layout components */
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

/* Import routes */
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'

import WArtists from './routes/WArtists.jsx'
import WDance from './routes/WDance.jsx'
import WPortraits from './routes/WPortraits.jsx'
import WBts from './routes/WBts.jsx'
import WPs from './routes/WPs.jsx'
import WStilllife from './routes/WStilllife.jsx'
import WOther from './routes/WOther.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/work/artists" element={<WArtists />} />
        <Route path="/work/dance" element={<WDance />} />
        <Route path="/work/portraits" element={<WPortraits />} />
        <Route path="/work/bts" element={<WBts />} />
        <Route path="/work/ps" element={<WPs />} />
        <Route path="/work/stilllife" element={<WStilllife />} />
        <Route path="/work/other" element={<WOther />} />

      </Routes>
    </BrowserRouter>
    <Footer />
  </>,
)
