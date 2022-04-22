import axios from 'axios';

const todosIndex = "http://localhost:3000/api/v1/todos";

export const fetchTodos = () => {
  return axios.get(todosIndex)
  .then(todos => {return todos.data})
  .catch((e) => console.error(e))
}
