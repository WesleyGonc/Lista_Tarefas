import React, { useState, useEffect } from 'react';
import { getTarefas, editarTarefa } from './db';

const EditarTarefa = ({ taskId, closeModal, atualizarListaTarefas}) => {
  const [tarefaEditada, setTarefaEditada] = useState({ titulo: '', descricao: '', dataCriacao: '' });

  useEffect(() => {
    const listaTarefas = getTarefas();
    const tarefaEncontrada = listaTarefas.find((tarefa) => tarefa.id === taskId);
    
    if (tarefaEncontrada) {
      setTarefaEditada(tarefaEncontrada);
    }
  }, [taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTarefaEditada({ ...tarefaEditada, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarefa(tarefaEditada);
    atualizarListaTarefas(); 
  };

  return (
    <div >
        <h1>Editar Tarefa</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={tarefaEditada.titulo}
            onChange={handleInputChange}
          />
          <textarea
            name="descricao"
            placeholder="Descrição"
            value={tarefaEditada.descricao}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="date"
            name="dataCriacao"
            placeholder="Data de Criação"
            value={tarefaEditada.dataCriacao}
            onChange={handleInputChange}
          />
          <button type="submit">Salvar</button>
        </form>
        <button onClick={closeModal}>Fechar</button>
      </div>
  );
};

export default EditarTarefa;
