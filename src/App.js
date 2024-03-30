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
  //<Spline scene="https://prod.spline.design/DhEEN1S7ovkpuaa0/scene.splinecode" className='splinescene -z-10'/>

  
  return (
    <div className="App">
        <Spline scene="https://prod.spline.design/DhEEN1S7ovkpuaa0/scene.splinecode" className='splinescene -z-10'/>
        <section className='container p-5'>
          <Cabecalho></Cabecalho>
          <Corpo></Corpo>
          <Projetos></Projetos>
          <Contato></Contato>
        </section>
    </div>
  );
}

export default App;
