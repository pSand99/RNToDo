import uuid from 'react-native-uuid';

const getTodos = () => [
    newTodo({text: "Tarea 1", done: false}), 
    newTodo({text: "Tarea 2", done: false}),
    newTodo({text: "Tarea 3", done: false}),
    newTodo({text: "Tarea 4", done: true}),
    newTodo({text: "Tarea 5", done: false})
];

const newTodo = todo => ({
  id: uuid.v4(),
  text: todo.text,
  createdAt: new Date(),
  done: todo.done,
});

const updateTodo = (list, todo) => {
  const updateIndex = list.findIndex(t => t.id === todo.id);
  const newTodoList = [...list];
  newTodoList[updateIndex] = todo;
  return newTodoList;
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

const deleteTodo = (list, todo) => {
    const newTodoList = list.filter(t => t.id !== todo.id);
    return newTodoList;
  };
  
  export { getTodos, addTodo, updateTodo, deleteTodo };
