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
      <main className='mt-20'>
        {cambioComponente ? (
          <div>
            <Feature/>
          </div>
        ) : (
          <div className='max-xl-md'>
            <Comment/>
            <div className='m-10 max-w-96'>
                <p className='text-center'>
                  <span className='font-extrabold'>MENSAJE:</span> se debe presionar el botón &quot;Validar ID&quot; 
                  dos veses para que funcione correctamente, no pude solucionar eso. 
                  </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
