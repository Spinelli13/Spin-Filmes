import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Mobies Lib</h2>
      <Outlet />
    </div>
  );
}

export default App;
