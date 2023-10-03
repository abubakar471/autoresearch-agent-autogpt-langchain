import { BrowserRouter, Routes, Route } from "react-router-dom";
import Research from "./pages/Research";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Research />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
