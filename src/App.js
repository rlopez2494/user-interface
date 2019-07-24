import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection'
import './App.css';

function App() {
  return (
    <div className="App">

      {/*Header Container */}
      <Header />

      {/*MainSection Container*/}
      <MainSection />

      {/*Footer Container*/ }
      <Footer />

    </div>
  );
}

export default App;
