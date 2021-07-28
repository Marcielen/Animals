import React from 'react';
import './App.css';

import { GlobalStyle } from './components/GlobalStyle';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Conteudo from './components/Conteudo/Conteudo';
import Informacoes from './components/Centro/Informacoes';
import Rodape from './components/Rodape/Rodape';
import ImageSlider from './components/Formulario/ImageSlider';

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Conteudo />
      <Informacoes />
      <ImageSlider />
      <Rodape />
    </>
  );
}

export default App;
