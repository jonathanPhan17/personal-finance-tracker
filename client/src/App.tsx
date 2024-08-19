import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Pages
import { Dashboard } from './pages/Dashboard';
import { Auth } from './pages/Auth';
import { FinancialRecordsProvider } from './contexts/financial-record-context';
import { SignedIn, UserButton } from '@clerk/clerk-react';

function App() {

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to='/'>Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
