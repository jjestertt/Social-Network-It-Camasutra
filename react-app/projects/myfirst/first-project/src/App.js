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
          state={props.state}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
      />
      <Footer />
    </div>
  );
}

export default App;
