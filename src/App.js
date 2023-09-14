import { Routes, Route } from "react-router-dom";
import DocumentRemder from "./component/Document";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DocumentRemder />} />
      </Routes>
    </div>
  );
}

export default App;
