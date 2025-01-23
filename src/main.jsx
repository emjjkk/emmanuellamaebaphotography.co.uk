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

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>,
)
