import { useState } from 'react';
import { Feature } from './components/Feature';
import { Comment } from './components/Comment';
import { NavBar } from './components/NavBar';

function App() {

  const [cambioComponente, setCambioComponente] = useState(true);

  return (
    <div className='flex flex-col h-screen w-screen items-center' >
      <header>
        <NavBar cambio={cambioComponente} setCambio={setCambioComponente} />
      </header>
      <main>
        {cambioComponente ? (
          <div>
            <Feature/>
          </div>
        ) : (
          <div>
            <Comment/>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
