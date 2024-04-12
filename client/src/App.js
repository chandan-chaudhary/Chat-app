
// import './App.css';
import Home from "./components/Home";
import {Toaster} from 'react-hot-toast';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useSelector } from "react-redux";

function App() {
  // const user = false;
    const user = useSelector((state)=> state.user.userData);
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={user ? <Home /> :<Login />}/>
          <Route path={'/login'} element={ user ? <Home /> : <Login />}/>
          <Route path={'/register'} element={user ? <Home /> : <Register />}/>
        </Routes>
       < Toaster />
      </BrowserRouter>
  );
}

export default App;
