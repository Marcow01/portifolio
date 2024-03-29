import './App.css';
import React from 'react';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">
      
      <Spline scene="https://prod.spline.design/GMEF2IXWs8aMJSNE/scene.splinecode" className='splinescene'/>
      
      <section className='w-7/12 p-5'>
        <Cabecalho></Cabecalho>
        <Corpo></Corpo>
        <Projetos></Projetos>
        <Contato></Contato>
      </section>
    </div>
  );
}

export default App;
