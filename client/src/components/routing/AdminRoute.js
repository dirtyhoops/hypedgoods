import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// This is to protect the route for adding items, only user that has an ADMIN priviledge can connect to it.

const AdminRoute = ({
  component: Component,
  auth: { isAdmin, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAdmin && !loading ? <Redirect to='/' /> : <Component {...props} />
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
