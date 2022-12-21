
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login, Main, Navbar, Register} from "./component"
import { setItem } from "./component/helpers/Helpers";
import AuthService from "./servis/auth";
import { signUserSuccess } from "./slice/auth";

function App() {

  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = setItem('token')
    if (token) {
      getUser()
    }
  })
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
