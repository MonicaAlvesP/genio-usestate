import Genio from './assets/genio.png';
import Lampada from './assets/lampada.png';

import { useState } from 'react';

function App() {

  const [imagem, setImagem] = useState(Lampada);
  const [alt, setAlt] = useState('Lampada do Aladin');

  const mudarImagem = () => {
    setImagem(imagem === Lampada ? Genio : Lampada);
    setAlt(alt === 'Lampada do Aladin' ? 'Genio' : 'Lampada do Aladin');
  }

  return (
    <main className='container'>
      <p className='title'>Liberte a magia da programação com a lampada do Aladin!</p>
      <img src={imagem} alt={alt} className='imagem' />
      <button className='change-image' onClick={mudarImagem}>clique aqui</button>
    </main>
  )
}

export default App
