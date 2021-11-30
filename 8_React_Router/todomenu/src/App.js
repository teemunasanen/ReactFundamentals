import './App.css';
import Home from './components/Home';
import Todolist from './components/Todolist';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'; // React Router v6


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>{' '}
          <Link to='/todolist'>Todolist</Link>{' '}
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/todolist' element={<Todolist/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
