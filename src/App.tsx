import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import CreateAuction from './components/CreateAuction';
// import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* Add a redirect for the root path if needed */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;