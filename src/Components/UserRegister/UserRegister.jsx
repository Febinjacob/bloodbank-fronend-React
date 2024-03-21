import React, { useState } from 'react';
import './UserRegister.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserRegister() {

    // const navigate=useNavigate()

    // const [userid, setUserid] = useState(''); 
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const Register =async (e) => {
    //     const body= {userid,username,password}
    //     await axios.post('http://localhost:8000/userRegister',body).then((response)=>{
    //         alert(response.data.message)
    //         navigate('/User')//redirect to login page
    //         console.log(userid, username, password);
    //     })
    //     .catch((error)=>{
    //         alert("ID already exists")
            
    //     })
    
    // }
    const navigate = useNavigate();

    const [userid, setUserid] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Register = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!username || !userid || !password) {
            setError('Please Fill In All Fields');
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
            
        }

        const body = { userid, username, password };

        try {
            const response = await axios.post('http://localhost:8000/userRegister', body);
            alert(response.data.message);
            navigate('/User'); // Redirect to login page
            console.log(userid, username, password);
        } catch (error) {
            alert('ID already exists');
        }
    };



    return (
        <>
            {/* <div style={{paddingBottom:'80px'}}>
                <div className='container'>
                    <div className='header'>
                        <div className='text'>Register Here</div>
                        <div className='underline'></div>

                    </div><br />
                    <div className='inputs'>
                        <div className='input'>
                            <i class="fa-solid fa-user"></i>
                            <input onChange={(e) => setUsername(e.target.value)} style={{ paddingLeft: '10px' }} type="text" placeholder='USER NAME' />

                        </div><br />

                        <div className='input'>
                            <i class="fa-solid fa-key"></i>
                            <input onChange={(e) => setUserid(e.target.value)} style={{ paddingLeft: '10px' }} type="text" placeholder='USER ID' />

                        </div><br />

                        <div className='input'>
                            <i class="fa-solid fa-lock"></i>
                            <input onChange={(e) => setPassword(e.target.value)} style={{ paddingLeft: '10px' }} type="password" placeholder='PASSWORD' />

                        </div>

                    </div>
                </div>
                <div className="forgot-password">Already Have an Account? <span><Link style={{ color: 'red' }} to={'/User'}>Click Here!</Link></span><br /><br />
                    <button onClick={(e) => Register(e)} className='submit'>Register</button>
                </div>
            </div> */}
            {/* <div style={{alignItems:'center'}}>
            <div className='submit'>Login</div>
            </div> */}
             <div style={{ paddingBottom: '80px' }}>
                <div className="container">
                    <div className="header">
                        <div className="text">Register Here</div>
                        <div className="underline"></div>
                    </div>
                    <br />
                    <div className="inputs">
                        <div className="input">
                            <i className="fa-solid fa-user"></i>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ paddingLeft: '10px' }}
                                type="text"
                                placeholder="USER NAME"
                            />
                        </div>
                        <br />
                        <div className="input">
                            <i className="fa-solid fa-key"></i>
                            <input
                                onChange={(e) => setUserid(e.target.value)}
                                style={{ paddingLeft: '10px' }}
                                type="text"
                                placeholder="USER ID"
                            />
                        </div>
                        <br />
                        <div className="input">
                            <i className="fa-solid fa-lock"></i>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ paddingLeft: '10px' }}
                                type="password"
                                placeholder="PASSWORD"
                            />
                        </div>
                    </div>
                </div>
                <div className="forgot-password">
                    Already Have an Account?{' '}
                    <span>
                        <Link style={{ color: 'red' }} to={'/User'}>
                            Click Here!
                        </Link>
                    </span>
                    <br />
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <br />
                    <button onClick={(e) => Register(e)} className="submit">
                        Register
                    </button>
                </div>
            </div>





        </>
    )
}

export default UserRegister