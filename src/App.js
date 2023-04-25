import "./App.css";
import Shop from "./Componets/shop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </>
  );
}
export default App;
