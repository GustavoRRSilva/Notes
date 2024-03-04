import { useState } from 'react'
import Login from './Pages/Login/Login.jsx'
import './App.css';
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Notes from './Pages/Notes/Notes.jsx';

function App() {
  const [count, setCount] = useState(0)
  let user;
  if(localStorage.getItem("Email")){
    user = <Notes/>;
  }
  else{
    user = <Login/>;
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
