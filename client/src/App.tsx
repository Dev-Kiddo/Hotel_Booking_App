import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import Layout2 from "./layouts/Layout2";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signin from "./pages/Signup";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/" element={<Layout2 />}>
            <Route path="/sign-in" element={<Signin />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
