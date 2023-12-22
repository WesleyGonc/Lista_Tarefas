import React, { useState } from 'react';
import  { useNavigate }  from 'react-router-dom';
import { adicionarTarefa } from './db';
import './styles/AdicionarTarefa.css'


const AdicionarTarefa = () => {
  const [novaTarefa, setNovaTarefa] = useState({ titulo: '', descricao: '', dataCriacao: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const novaTarefaComID = { id, ...novaTarefa };
    adicionarTarefa(novaTarefaComID);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={novaTarefa.titulo}
          onChange={(e) => setNovaTarefa({ ...novaTarefa, titulo: e.target.value })}
        />
        <textarea
          placeholder="Descrição"
          value={novaTarefa.descricao}
          onChange={(e) => setNovaTarefa({ ...novaTarefa, descricao: e.target.value })}
        ></textarea>
        <input
          type="date"
          placeholder="Data de Criação"
          value={novaTarefa.dataCriacao}
          onChange={(e) => setNovaTarefa({ ...novaTarefa, dataCriacao: e.target.value })}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarTarefa;
