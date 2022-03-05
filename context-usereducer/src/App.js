import { useStore, actions } from './store';
import './App.css';

function App() {

  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  console.log(state)
  console.log('todoInput: ', todoInput)

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  return (
    <div className="App">
      <h1>hí anh em</h1>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button
        onClick={handleAdd}
      >ADD</button>
      {todos.map((todo, index) => (
        <li
          key={index}
        >{todo}</li>
      ))}
    </div>
  );
}

export default App;

// # Redux vs React-context 
// Redux -> dễ debug
// Redux -> có sẵn kiến trúc để apply middleware
// 1. Debugging capabilities 
// 2. Middleware
// 3. Addons and extensibility
// 4. Cross-platform and cross-framework usage
// 5. Depending on your app's setup, much better performance than working with just Context