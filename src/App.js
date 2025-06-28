import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="Products" element={<Products />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
