import React from 'react';

function Nav() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarm'
            aria-controls='navbarm'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-md-center' id='navbarm'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item mx-2'>
                <button className='nav-link btn btn-link text-white'>
                  Home
                </button>
              </li>
              <li className='nav-item mx-2'>
                <button className='nav-link btn btn-link text-white'>
                  Contact
                </button>
              </li>
              <li className='nav-item mx-2'>
                <button className='nav-link btn btn-link text-white'>
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
