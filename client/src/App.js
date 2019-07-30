import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import HomePage from './components/homepage/page/Homepage';
import ShoeDetailsPage from './components/shoedetailspage/page/ShoeDetailsPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Account from './components/auth/Account';
import Footer from './components/layout/Footer/Footer';
import Alert from './components/layout/Alert/Alert';
import SideDrawer from './components/layout/NavBar/SideDrawer';
import Backdrop from './components/layout/Backdrop/Backdrop';
import { loadUser } from './actions/auth';
import setAuthToken from './utilities/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import ShoesForm from './components/forms/ShoesForm/ShoesForm';
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
            <Route
              exact
              path='/products/shoes/:id'
              component={ShoeDetailsPage}
            />
            <section className='container'>
              <Alert />
              <Switch>
                <Route exact path='/account/login' component={Login} />
                <Route exact path='/account/register' component={Register} />
                <PrivateRoute exact path='/account' component={Account} />
                <AdminRoute
                  exact
                  path='/products/shoes/add'
                  component={ShoesForm}
                />
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
