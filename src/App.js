import './App.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Spline from '@splinetool/react-spline';

function App() {
  //https://prod.spline.design/TlJ66luQ3oTEzRkH/scene.splinecode maos
  //https://prod.spline.design/OuVGtFc36eoHSoKa/scene.splinecode cubos
  
  return (
    <div className="App">
      
      <section className='w-7/12 p-5'>
        <Cabecalho></Cabecalho>
        <Corpo></Corpo>
        <Projetos></Projetos>
        <Contato></Contato>
      </section>

      <Spline scene="https://prod.spline.design/DhEEN1S7ovkpuaa0/scene.splinecode" className='splinescene -z-10'/>
    </div>
  );
}

export default App;
