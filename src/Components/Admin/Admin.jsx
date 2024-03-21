import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
function Admin() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!id.trim()) {
      newErrors.id = 'Please enter a valid ID';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter a valid password';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const AdminLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const body = { id, password };

      try {
        const response = await axios.post('http://localhost:8000/adminLogin', body);
        alert(response.data.message);
        navigate('/AdminView');
        console.log(id, password);
      } catch (error) {
        alert('Please Enter The Valid ID');
        setTimeout(() => {
          alert('');
      }, 3000);
        
      }
    }
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img style={{ width: '100%' }} src="https://cdn.dribbble.com/users/8619169/screenshots/16116886/data_inform_illustration_animation.gif" alt="" />
          </div>
          <div className='col-6'>
            <div className='container'>
              <div className='header'>
                <div className='text'>Admin Login</div>
                <div className='underline'></div>

              </div><br />

              <div className="inputs">
                <div className="input">
                  <i className="fa-solid fa-key"></i><br />
                  <input
                    onChange={(e) => setId(e.target.value)}
                    style={{ paddingLeft: '10px' }}
                    type="text"
                    placeholder="USER ID"
                  />

                </div>
                <div style={{ textAlign: 'center', paddingBottom: '10px', padding: '10px', color: 'red' }}>
                  {errors.id && <div className="error">{errors.id}</div>}
                </div>

                <div className="input">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ paddingLeft: '10px' }}
                    type="password"
                    placeholder="PASSWORD"
                  />
                  
                </div>
                <div style={{ textAlign: 'center', padding: '10px', color: 'red' }}>
                {errors.password && <div className="error">{errors.password}</div>}
                </div>
              </div>
            </div>
            <div className="forgot-password">Create an Account? <span><Link style={{ color: 'red' }} to={'/AdminRegister'}>Click Here!</Link></span><br /><br />
              <button onClick={(e) => AdminLogin(e)} className='submit'>Login</button>
            </div>
          </div>

        </div>

      </div><br /><br />
    </>
  )
}

export default Admin