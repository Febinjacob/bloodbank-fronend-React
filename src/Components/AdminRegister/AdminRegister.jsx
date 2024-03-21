import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
function AdminRegister() {

  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [adminname, setAdminname] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!id.trim()) {
      newErrors.id = 'Please enter a valid ADMIN ID';
      isValid = false;
    }

    if (!adminname.trim()) {
      newErrors.adminname = 'Please enter a valid ADMIN NAME';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter a valid password';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const AdminRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const body = { id, adminname, password };

      try {
        const response = await axios.post('http://localhost:8000/adminRegister', body);
        alert(response.data.message);
        setTimeout(() => {
          navigate('/Admin'); // Redirect to login page after a delay
        }, 1000); // 2000 milliseconds = 2 seconds
        console.log(id, adminname, password);
      } catch (error) {
        alert('ID already exists');
        setTimeout(() => {
          alert('');
      }, 3000);
      }
    }
  };


  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img style={{ width: '100%' }} src="https://cdn.dribbble.com/users/8619169/screenshots/16116886/data_inform_illustration_animation.gif" alt="" />
          </div>
          <div className='col-6'>
            <div className='container'>
              <div className='header'>
                <div className='text'>Admin Register</div>
                <div className='underline'></div>

              </div><br />
              {/* <div className='inputs'>
                <div className='input'>
                  <i class="fa-solid fa-key"></i>
                  <input onChange={(e) => setId(e.target.value)}style={{ paddingLeft: '10px' }} type="text" placeholder='ADMIN ID' />

                </div><br />
                <div className='input'>
                  <i class="fa-solid fa-user"></i>
                  <input  onChange={(e) => setAdminname(e.target.value)} style={{ paddingLeft: '10px' }} type="text" placeholder='ADMIN NAME' />

                </div><br />

                <div className='input'>
                  <i class="fa-solid fa-lock"></i>
                  <input onChange={(e)=> setPassword(e.target.value)} style={{ paddingLeft: '10px' }} type="password" placeholder='PASSWORD' />

                </div>

              </div> */}
              <div>
                {/* Your existing JSX code */}

                <div className="inputs">
                  {/* Your existing input fields */}
                  <div className="input">
                    <i className="fa-solid fa-key"></i>
                    <input
                      onChange={(e) => setId(e.target.value)}
                      style={{ paddingLeft: '10px' }}
                      type="text"
                      placeholder="ADMIN ID"
                    />
               
                  </div>
                  <div style={{ textAlign: 'center', padding: '10px', color: 'red' }}>
                  {errors.id && <div className="error">{errors.id}</div>}
                  </div>
                  <div className="input">
                    <i className="fa-solid fa-user"></i>
                    <input
                      onChange={(e) => setAdminname(e.target.value)}
                      style={{ paddingLeft: '10px' }}
                      type="text"
                      placeholder="ADMIN NAME"
                    />
                    
                  </div>
                  <div style={{ textAlign: 'center', padding: '10px', color: 'red' }}>
                  {errors.adminname && <div className="error">{errors.adminname}</div>}
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

                {/* Your existing JSX code */}
              </div>
            </div>
            <div className="forgot-password">Create an Account? <span><Link style={{ color: 'red' }} to={'/Admin'}>Click Here!</Link></span><br /><br />
              <button onClick={(e) => AdminRegister(e)} className='submit'>Register</button>
            </div>
          </div>

        </div>

      </div><br />
    </div>
  )
}

export default AdminRegister