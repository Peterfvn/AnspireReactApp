import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

function Start() {
  const navigate = useNavigate();

  return (
    <div className='start-container'>
       
      <div className='start-content'>
        <h2 className='start-title'>Login As</h2>
        <div className='button-container'>
          <button
            className='start-button user-button'
            onClick={() => navigate('/customerLogin')}
          >
            User
          </button>
          <button
            className='start-button AdvanceUser-button'
            onClick={() => navigate('/advanceLogin')}
          >
            Advance User
          </button>
          <button
            className='start-button admin-button'
            onClick={() => navigate('/login')}
          >
            Admin
          </button>
        </div>
        <div className='mt-3'>
                    Don't have an account? 
            <Link to="/createUser"> Register here</Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
