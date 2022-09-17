import './App.css';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Blog from './pages/Createpart/Blog';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/create' element={<Create/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/login' element={<Login />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
