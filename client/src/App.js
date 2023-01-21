import Navbar from "./components/Navbar";
import './app.css';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
//import { response } from "express";



function App() {
  
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     fetch("http://localhost:5000/auth/login/success", {
  //       method:"GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         AccessControlAllowCredentials: true,
  //       },

  //     }).then((response) => {
  //       if(response.status === 200) return response.json();
  //       throw new Error("failed to authenticate user");
  //     }).then((resObject => {
  //       setUser(resObject.user);
  //     }).catch((error) => {
  //       console.log(error)
  //     }))};
  //     getUser();

  //   },[])

  const getUser = async () => {
		try {
			const url = "http://localhost:5000/auth/login/success";
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

  console.log(user);


  useEffect(() => {
		getUser();
	}, []);


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Navigate to='/login' />} />
        <Route path="/post/:id" element={user ? <Post /> : <Login />} /> 
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
