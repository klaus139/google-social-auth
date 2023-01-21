import Navbar from "./components/Navbar";
import './app.css';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  const user = true;

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={user ? <Post /> : <Login />} /> 
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
