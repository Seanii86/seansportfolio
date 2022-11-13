import Layout from './components/Layout'
import './App.scss';
import { Route, Routes} from 'react-router-dom'
import React from 'react'
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/timeline' element={<Timeline />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

