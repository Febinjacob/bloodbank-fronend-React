import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import './Header.css'
import { Link } from 'react-router-dom';



function Header() {

  return (
    <>
      <MDBNavbar light bgColor='light' >
        <MDBContainer fluid>
          <MDBNavbarBrand>
          <img style={{ height: '45px', width: '45px' }} src="https://cdn-icons-png.flaticon.com/512/504/504174.png" alt="" />
           <Link to={'/'}>
           <h2 style={{paddingTop:'10px',color:'red',paddingLeft:'5px',fontFamily:'Poppins'}}>BLOOD BANK</h2>
           </Link>
          </MDBNavbarBrand>
          <MDBInputGroup tag="form" className='desktopMenu d-flex w-auto mb-3' style={{ paddingTop: '5px',paddingRight:'40px' }}>
            <MDBNavbarLink  className='desktopMenuListItem'><Link style={{color:'grey'}} to={'/User'}>BLOOD BANK LOGIN</Link></MDBNavbarLink>
            <MDBNavbarLink  className='desktopMenuListItem'><Link style={{color:'grey'}} to={'/Blood'} >LOOKING FOR BLOOD</Link> </MDBNavbarLink>
            <MDBNavbarLink  className='desktopMenuListItem'><Link style={{color:'grey'}}>WANT TO DONATE BLOOD</Link></MDBNavbarLink>

          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header