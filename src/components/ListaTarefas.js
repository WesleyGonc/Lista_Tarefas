import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTarefas, excluirTarefa } from './db';
import EditarTarefa from './EditarTarefa';
import './styles/ListaTarefas.css'

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const listaTarefas = getTarefas();
    setTarefas(listaTarefas);
  }, []);

  const handleExcluirTarefa = (id) => {
    excluirTarefa(id);
    const novaListaTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaListaTarefas);
  };

  const handleAdicionarTarefa = () => {
    navigate('/adicionar');
  };

  const handleEditarTarefa = (id) => {
    setSelectedTaskId(id);
    setShowModal(true);
  };

  const atualizarListaTarefas = () => {
    const listaTarefasAtualizada = getTarefas();
    setTarefas(listaTarefasAtualizada);
  };

  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.descricao}</p>
            <p>{tarefa.dataCriacao}</p>
            <button onClick={() => handleExcluirTarefa(tarefa.id)}>Excluir</button>
            <button onClick={() => handleEditarTarefa(tarefa.id)}>Editar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdicionarTarefa}>Adicionar Tarefa</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <EditarTarefa taskId={selectedTaskId} closeModal={closeModal} atualizarListaTarefas={atualizarListaTarefas}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaTarefas;
