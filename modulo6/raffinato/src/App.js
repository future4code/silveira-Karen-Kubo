import './App.css';
import React from 'react';
import Setup from './pages/Setup';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
        <Header/>
        <Setup />
        <Footer/>
    </>
  );
}

export default App;
