import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signin" element={<Signin />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
