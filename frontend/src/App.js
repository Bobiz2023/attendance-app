import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ParentDashboard from './components/ParentDashboard';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/parent" component={ParentDashboard} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

