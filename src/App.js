import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={"hello home"} />
        <Route path="/about" element={"hello about"} />
      </Routes>
    </div>
  );
}

export default App;
