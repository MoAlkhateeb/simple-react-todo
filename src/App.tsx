import { useState } from "react"
import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm"
import { Todo } from "./types/todo"


function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map(todo => (todo.id === id ? {...todo, completed} : todo))
    )
  }

  function addTodo(title: string) {
    setTodos((prevTodo) => [...prevTodo, {
      id: Date.now(),
      title,
      completed: false
    
    }])
  }

  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <main className='py-10 h-screen space-y-5 overflow-y-auto'>
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm 
          onSubmit={addTodo}
        />
        <TodoList 
          todos={todos}
          setTodoCompleted={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  )
}

export default App
