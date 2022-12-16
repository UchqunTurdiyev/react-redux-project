
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login, Main, Navbar, Register} from "./component"

function App() {
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
