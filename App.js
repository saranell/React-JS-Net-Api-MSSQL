import logo from './logo.svg';
import './App.css';
import{ Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">React JS Frontend</h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <Link className="btn btn-light btn-outline-primary" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item m-1">
              <Link
                className="btn btn-light btn-outline-primary"
                to="/department"
              >
                Department
              </Link>
            </li>
            <li className="nav-item m-1">
              <Link
                className="btn btn-light btn-outline-primary"
                to="/employee"
              >
                Employee
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
