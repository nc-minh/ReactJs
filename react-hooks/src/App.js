
import { useState } from 'react'
import Gifts from './components/Gifts'
import FormCheck from './components/FormCheck'
import FormCheckBox from './components/FormCheckBox'
import TodoList from './components/TodoList'
import Mounted from './components/Mounted-Unmounted'
import UseEffect from './components/useEffect'
import UseEffectWithDOM from './components/useEffect-withDOM'
import UseLayoutEffect from './components/useLayoutEffect'
import UseRef from './components/useRef'
import Memo from './components/memo'
import UseCallback from './components/useCallback'
import UseMemo from './components/useMemo'
import UseReducer from './components/useReducer'
import TodoAppUseReducer from './components/TodoApp-useReducer'
import Main from './components/useContext/Main'

function App() {

  // c1
  // const [counter, setCounter] = useState(1)

  // const handleIncrease = () => {
  //   setCounter(counter + 1)
  // }

  // c2 - init chỉ chạy lần đầu nếu xử lí nghiệp vụ nặng mà bị re-render không tối ưu nên sẽ dùng callBack
  const order = [100, 200, 300]
  const [counter, setCounter] = useState(() => {
    const total = order.reduce((total, cur) => total + cur)

    return total
  })

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1)
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <Gifts/>
      <hr/>
      <FormCheck/>
      <hr/>
      <FormCheckBox/>
      <hr/>
      <TodoList/>
      <hr/>
      <Mounted/>
      <hr/>
      <UseEffect/>
      <hr/>
      <UseEffectWithDOM/>
      <hr/>
      <UseLayoutEffect/>
      <hr/>
      <UseRef/>
      <hr/>
      <Memo/>
      <hr/>
      <UseCallback/>
      <hr/>
      <UseMemo/>
      <hr/>
      <UseReducer/>
      <hr/>
      <TodoAppUseReducer/>
      <hr/>
      <Main/>
    </div>
  );
}

export default App;
