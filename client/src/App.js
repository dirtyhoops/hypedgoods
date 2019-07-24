import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import HomePage from './components/pages/Homepage/Homepage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer/Footer';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <section className='container'>
            <Route exact path='/account/login' component={Login} />
            <Route exact path='/account/register' component={Register} />
          </section>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
