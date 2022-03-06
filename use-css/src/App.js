import Header from './components/Header'
import Button from './components/Button';
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Heloo</h1>
      <Link to='/'>Home</Link>-
      <Link to='/news'>News</Link>-
      <Link to='/contact'>Contact</Link>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/news' element={ <News/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>

      <Header/>
      <Button primary/>
      <Button primary disabled/>
    </div>
  );
}

export default App;
