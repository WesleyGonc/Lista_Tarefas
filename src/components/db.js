let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

export const getTarefas = () => {
  return tarefas;
};

export const adicionarTarefa = (novaTarefa) => {
  tarefas = [...tarefas, novaTarefa];
  localStorage.setItem('tarefas', JSON.stringify(tarefas)); 
  console.log('Tarefa adicionada:', novaTarefa);
};

export const editarTarefa = (tarefaEditada) => {
  tarefas = tarefas.map((tarefa) =>
    tarefa.id === tarefaEditada.id ? { ...tarefa, ...tarefaEditada } : tarefa
  );
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  console.log('Tarefa editada:', tarefaEditada);
};

export const excluirTarefa = (id) => {
  tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
  localStorage.setItem('tarefas', JSON.stringify(tarefas)); 
  console.log('Tarefa excluída - ID:', id);
};
