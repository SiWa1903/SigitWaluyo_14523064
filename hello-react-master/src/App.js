// import libaries
import React,{Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import List from './List.jsx';
import './App.css';
import Top from './Top.js';
import About from './Pages/About.jsx';
// create component
function app() {
  return (
    <div className='App'>
      <Header />
      <Top />
      <Header list="4 Makanan" />
      <List />
      <footer judul='halaman footer' namaMhs='Sigit Waluyo' />
      <Footer />
    </div>
  );
}

// export component
export default app;
