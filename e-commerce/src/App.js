import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "antd/dist/antd.css";
import 'antd/dist/reset.css';

function App() {
  return (
    <div class=" h-screen ">
    <NavBar/>
    <div className="w-[60%] m-auto py-20">
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
</div>

  );
}

export default App;
