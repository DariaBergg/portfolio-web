import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Mobile-style.css';
import MainPage from './MainPage';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';

 export default function App() {
  return (
    <Routes>
    <Route path='/' element={<Header/>}>
    <Route index element={<MainPage />} />
    <Route path='/Resume' element={<Resume />} /> 
    <Route path='/Projects' element={<Projects />} />
    <Route path='/Contact' element={<Contact />} />
    </Route>
    </Routes>
  );
}


