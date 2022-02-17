import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Take out trash",
      isCompleted: false
    },
    {
        id: 2,
        text: "Dinner with family",
        isCompleted: false
    }
  ])

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => 
        todo.id !== id 
      )
    )
  } 

  const toggleCompleted = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, isCompleted: 
          !todo.isCompleted } : todo  
      )
    )
  }

  const AddTodos = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = { id, ...todo }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <Header name="Patrick"/>
      <AddTodo onAdd={AddTodos}/>
      <Todos todos={todos} onToggle={toggleCompleted} onDelete={deleteTodo}/>
    </div>
  );
}

export default App;
