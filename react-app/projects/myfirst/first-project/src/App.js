import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';



const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Hero
          dispatch={props.dispatch}
          store={props.store}
          state={props.state}/>
      <Footer />
    </div>
  );
}

export default App;
