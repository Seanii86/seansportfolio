import Layout from './components/Layout'
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio />} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

