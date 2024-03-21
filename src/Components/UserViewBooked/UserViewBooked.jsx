import React from 'react'
import { Link } from 'react-router-dom'

function UserViewBooked() {
    return (
        <>
            <div className='container'>
                <div style={{ paddingLeft: '420px' }}>
                    <img style={{ width: '400px' }} src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif" alt="" srcset="" />
                </div>
                <div style={{ paddingLeft: '480px' }} >
                    <h2>  Booking Successful !</h2>
                </div>
                <div style={{ textAlign: 'right', paddingRight: '90px', paddingTop: '30px' }}>
                    <Link to={'/UserView'}><button className='btn' style={{ backgroundColor: 'red', color: 'white' }}><i class="fa-solid fa-arrow-left"></i> Back To Home Page</button></Link>
                </div>

            </div>
        </>
    )
}

export default UserViewBooked