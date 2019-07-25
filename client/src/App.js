import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import HomePage from './components/pages/Homepage/Homepage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer/Footer';
import Alert from './components/layout/Alert/Alert';
import SideDrawer from './components/layout/NavBar/SideDrawer';
import Backdrop from './components/layout/Backdrop/Backdrop';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  //change this to REACT HOOK because this.setstate is outdated
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <div className='App'>
              <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer
                show={this.state.sideDrawerOpen}
                drawerClickHandler={this.drawerToggleClickHandler}
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
  }
}

export default App;
