import React from 'react';

const NavbarToggleButton = props => {
  return (
    <div className='nav-burger'>
      <button className='burger-button' onClick={props.click}>
        <div className='burger-line' />
        <div className='burger-line' />
        <div className='burger-line' />
      </button>
    </div>
  );
};

export default NavbarToggleButton;
