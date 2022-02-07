
import { useState } from 'react'
import Gifts from './components/Gifts'
import FormCheck from './components/FormCheck'
import FormCheckBox from './components/FormCheckBox'
import TodoList from './components/TodoList'
import Mounted from './components/Mounted-Unmounted'
import UseEffect from './components/useEffect'

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
      <FormCheck/>
      <FormCheckBox/>
      <TodoList/>
      <Mounted/>
      <UseEffect/>
    </div>
  );
}

export default App;
