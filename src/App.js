import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Home from './Pages/Home';
import LinkShelf from './components/NavigationShelf';

function App() {
  return (
    <div className="App">
      <Router>
          <LinkShelf/>
          <Switch>
              <Route path="/">
                  <Home/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
