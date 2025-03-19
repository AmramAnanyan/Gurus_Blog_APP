import { Suspense, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import BlogPost from './components/BlogPost/BlogPost';
import Button from './components/Button/Button';
import Routing from './app/Routing';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routing />
      </Suspense>
    </>
  );
}

export default App;
