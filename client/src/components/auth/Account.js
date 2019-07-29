import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';

const Account = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  return (
    <div className='wrapper-account'>
      <div className='account-header'>
        <h1>my account</h1>
      </div>

      <div className='account-details'>
        <h4>ACCOUNT INFORMATION</h4>
        <p className='capitalize'>Daryll Osis</p>
        <p>dosis@csumb.edu</p>
        <p className='capitalize'>123 awesome St. San Jose, CA. 95125</p>
        <button className='btn btn-primary btn-sm'>edit address</button>
      </div>
      <div className='recent-orders'>
        <h4>RECENT ORDERS</h4>
        <p>You haven't placed an order</p>
      </div>
      <Link to='/'>
        <button onClick={logout} className='btn btn-outline-dark logout-button'>
          LOGOUT
        </button>
      </Link>
    </div>

    // <div>{isAuthenticated ? <p onClick={logout}>Logout</p> : null}</div>
  );
};

Account.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Account);
