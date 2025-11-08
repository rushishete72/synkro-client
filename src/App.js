import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Synkro.in</h1>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
