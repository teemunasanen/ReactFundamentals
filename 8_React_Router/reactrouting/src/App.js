import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'; // React Router v6


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>{' '}
          <Link to='/contact'>Contact</Link>{' '}
          <Link to='/about'>About</Link>{' '}
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
