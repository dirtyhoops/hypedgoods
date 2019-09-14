import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/NavBar/NavBar';
import HomePage from './components/homepage/page/Homepage';
import ShoeDetailsPage from './components/shoedetailspage/page/ShoeDetailsPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AccountPage from './components/accountpage/page/AccountPage';
import Footer from './components/layout/Footer/Footer';
import Alert from './components/layout/Alert/Alert';
import SideDrawer from './components/layout/NavBar/SideDrawer';
import Backdrop from './components/layout/Backdrop/Backdrop';
import { loadUser } from './actions/auth';
import { updateCartItemCount } from './actions/cartAndFilter';
import setAuthToken from './utilities/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import ShoesForm from './components/forms/ShoesForm/ShoesForm';
import ShoesListPage from './components/shoeslistpage/page/ShoesListPage';
import ShoesVariantsPage from './components/shoesvariantspage/page/ShoesVariantsPage';
import CartPage from './components/cartpage/page/CartPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CheckoutPage from './components/checkoutpage/page/CheckoutPage';
import SuccessfulOrderPage from './components/successfulorderpage/page/SuccessfulOrderPage';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

var getCartItems = JSON.parse(localStorage.getItem('itemsArray'));

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
    getCartItems
      ? store.dispatch(updateCartItemCount(getCartItems.length))
      : store.dispatch(updateCartItemCount(0));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <ScrollToTop />
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
              <Route exact path='/products/shoes' component={ShoesListPage} />
              <Route
                exact
                path='/products/shoes/:id'
                component={ShoeDetailsPage}
              />
              <Route exact path='/account/login' component={Login} />
              <Route exact path='/account/register' component={Register} />
              <PrivateRoute exact path='/account' component={AccountPage} />
              <AdminRoute
                exact
                path='/products/add/shoes'
                component={ShoesForm}
              />
              <AdminRoute
                exact
                path='/products/shoes/:shoes_id/variants'
                component={ShoesVariantsPage}
              />
              <Route exact path='/cart' component={CartPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route
                exact
                path='/ordersummary'
                component={SuccessfulOrderPage}
              />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
