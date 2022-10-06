import './App.css';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTPValidator from './pages/Otpvalidator';
import AllRoutes from './allRoutes/AllRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
