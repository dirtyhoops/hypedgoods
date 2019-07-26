import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import HomePage from './components/pages/Homepage/Homepage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer/Footer';
import Alert from './components/layout/Alert/Alert';
import SideDrawer from './components/layout/NavBar/SideDrawer';
import Backdrop from './components/layout/Backdrop/Backdrop';
import { loadUser } from './actions/auth';
import setAuthToken from './utilities/setAuthToken';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => setIsDrawerOpen(!isDrawerOpen);

  const backdropClickHandler = () => setIsDrawerOpen(!isDrawerOpen);
  let backdrop;
  if (isDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    // //change this to useeffect
    // componentDidMount() {
    //   store.dispatch(loadUser());
    // }

    // backdropClickHandler = () => {
    //   this.setState({ sideDrawerOpen: false });
    // };

    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop click={this.backdropClickHandler} />;
    // }

    <Provider store={store}>
      <Router>
        <Fragment>
          <div className='App'>
            <NavBar drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer
              show={isDrawerOpen}
              drawerClickHandler={drawerToggleClickHandler}
            />
            {backdrop}
            <Route exact path='/' component={HomePage} />
            <section className='container'>
              <Alert />
              <Switch>
                <Route exact path='/account/login' component={Login} />
                <Route exact path='/account/register' component={Register} />
              </Switch>
            </section>
            <Footer />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
