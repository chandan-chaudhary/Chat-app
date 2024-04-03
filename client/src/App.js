
// import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const user = false;
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={user ? <Home /> : <Login />}/>
          <Route path={'/login'} element={user ? <Home /> : <Login />}/>
          <Route path={'/register'} element={user ? <Home /> : <Register />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
