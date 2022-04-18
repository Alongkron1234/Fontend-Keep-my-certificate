import Navbar from './components/Navbar';
import './App.css';
import Form from './components/Form';
import Content from './components/Content';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Content/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
