import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Navbar from '../src/Components/Navbar'
import Sidebar from '../src/Components/Sidebar'
// import Home from './Pages/Home'
// import Search from './Pages/Search'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      {/* <Main /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Home /> */}  
      {/* <Search /> */}
    </div>
  );
}

export default App;
