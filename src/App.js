// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

import LoginPage from './LoginPage';
import AssetsPage from './AssetsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/assets" element={isLoggedIn ? <AssetsPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
