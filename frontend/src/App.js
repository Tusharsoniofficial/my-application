import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Alldata from "./Components/Alldata";
import Deleteuser from "./Components/Deleteuser";
import Forgotpassword from "./Components/Forgotpassword";
import Header from "./Components/Header";
import Home from "./Components/Home1";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Register from "./Components/Register";
import Updatedata from "./Components/Updatedata";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header  />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/alldata" element={<Alldata />} />
          <Route path="/deleteuser" element={<Deleteuser />} />
          <Route path="/updatedata" element={<Updatedata />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
