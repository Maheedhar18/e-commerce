import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
