import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function User() {

    // const navigate = useNavigate()


    // const [userid, setUserid] = useState('');
    // const [password, setPassword] = useState('');

    // const Login = async (e) => {
    //     const body = { userid, password }
    //     await axios.post('http://localhost:8000/userLogin', body).then((response) => {
    //         alert(response.data.message)
    //         navigate('/UserView')
    //         console.log(userid, password);
    //     })
    //         .catch((error) => {
    //             alert("Please Enter The Valid ID")

    //         })




    // }
    const navigate = useNavigate();
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Login = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        if (!userid || !password) {
            setError('Please enter both User ID and Password');

            setTimeout(() => {
                setError('');
            }, 3000);
            return;
        }

        const body = { userid, password };

        try {
            const response = await axios.post('http://localhost:8000/userLogin', body);
            alert(response.data.message);
            navigate('/UserView');
            console.log(userid, password);
        } catch (error) {
            alert('Please Enter a Valid ID');
        }
    };




    return (
        <>
            {/* <div style={{ paddingBottom: '99px' }}>
                <div className='container'>
                    <div className='header'>
                        <div className='text'>Login</div>
                        <div className='underline'></div>

                    </div><br />
                    <div className='inputs'>
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
                <div className="forgot-password">Create an Account? <span><Link style={{ color: 'red' }} to={'/UserRegister'}>Click Here!</Link></span><br /><br />
                    <button onClick={(e) => Login(e)} className='submit'>Login</button>
                </div>
            </div><br /><br /> */}
             <div style={{ paddingBottom: '99px' }}>
                <div className="container">
                    <div className="header">
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>
                    <br />
                    <div className="inputs">
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
                    Create an Account?{' '}
                    <span>
                        <Link style={{ color: 'red' }} to={'/UserRegister'}>
                            Click Here!
                        </Link>
                    </span>
                    <br />
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <br />
                    <button onClick={(e) => Login(e)} className="submit">
                        Login
                    </button>
                </div>
            </div><br /><br />
        </>
    )
}

export default User