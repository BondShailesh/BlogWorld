import './App.css';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Blog from './pages/Blog';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom"
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
