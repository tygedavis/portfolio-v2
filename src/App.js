import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Home from './Pages/Home';
import Credits from './Pages/Credits';
import PageNotFound from './Pages/PageNotFound';
import LinkShelf from './components/NavigationShelf';

function App() {
  return (
    <div className='App'>
      <Router>
          <LinkShelf/>
          <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/credits'>
                  <Credits/>
              </Route>
              <Route path='*'>
                  <PageNotFound />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
