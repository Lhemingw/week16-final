import React from 'react';
import './App.css';
import './index';
// import './index';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router,
  Route, 
  Switch, 
  Link,
} from 'react-router-dom';
import '../node_modules/'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './routes/Home'
import About from './routes/About'
import Finances from './routes/Finances'


function App() {
  return (
    <>
    <div className="App">
    <Header />
    </div>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="/finances">FInance</Link>
            </li>
          </ul>
        </nav>
      
      <Switch>
        <Route path="/finances">
          <Finances />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
    <Footer />
    </>
      
       
      
  );
}

export default App;
