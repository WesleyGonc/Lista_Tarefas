import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaTarefas from './components/ListaTarefas';
import AdicionarTarefa from './components/AdicionarTarefa';
import EditarTarefa from './components/EditarTarefa';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListaTarefas />} />
        <Route exact path="/adicionar" element={<AdicionarTarefa />} />
        <Route exact path="/editar/:id" element={<EditarTarefa />} />
      </Routes>
    </Router>
  );
}

export default App;
