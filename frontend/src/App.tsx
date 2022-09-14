import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import List from './components/header/nav/List';
import List from './components/List/List';
// import image from './assets/images/coffee-cup.webp'

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <List />    
      
        </div>
      </main>
      <Footer />
    </>
  );
};
export default App;
