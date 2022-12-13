import { Route, Routes } from "react-router-dom";
import { Login, Main, Register } from "./component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      Start Project
    </div>
  );
}

export default App;
