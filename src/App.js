import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My App</h1>
        <p>This is the main content of the app.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;