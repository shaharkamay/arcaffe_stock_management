import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import List from './components/List/List';

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
