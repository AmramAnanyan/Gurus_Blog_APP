import { Suspense } from 'react';
import './App.css';
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
