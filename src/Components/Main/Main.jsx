import React from 'react'
import { MDBRipple } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import './Main.css'

function Main() {
  return (
    <>
      <div>
        <img style={{ width: '100%' }} src="https://www.traumacaremalappuram.com/img/banner.png" alt="" />
      </div><br />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
            <h3 style={{textAlign:'center'}}>BLOOD AVILABILITY</h3>
           <Link to={'/Blood'}>
           <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <div className='bg-image rounded-6'>
                <img
                  src='https://www.shutterstock.com/image-photo/closeup-doctor-protective-gloves-working-600nw-1797624490.jpg'
                  className='w-100'
                  alt='Alternative text'
                />
                <div
                  className='mask'
                  style={{
                    background: 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.5))',
                  }}>
                  <div className='bottom-0 d-flex align-items-center h-100 text-center justify-content-center'>
                    <div>
                      <h2 className='fw-bold mb-4' style={{color:'black'}}>Blood Bank <i class="fa-solid fa-building-columns"></i></h2>
                    </div>
                  </div>
                </div>
              </div>
            </MDBRipple>
           </Link>
          </div>

          <div className='col-lg-4 mb-4 mb-lg-0'>
          <h3 style={{textAlign:'center'}}>DONER LOGIN</h3>
            <Link to={'/User'}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <div className='bg-image rounded-6'>
                <img
                  src='https://st3.depositphotos.com/10614052/34144/i/450/depositphotos_341441058-stock-photo-man-donating-blood-in-hospital.jpg'
                  className='w-100'
                  alt='Alternative text'
                />
                <div
                  className='mask'
                  style={{
                    background: 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.5))',
                  }}>
                  <div className='bottom-0 d-flex align-items-center h-100 text-center justify-content-center'>
                    <div>
                      <h2 className='fw-bold mb-4' style={{color:'black'}}>Blood Doner <i class="fa-solid fa-hand-holding-heart"></i></h2>
                    </div>
                  </div>
                </div>
              </div>
            </MDBRipple>
            </Link>
          </div>

          <div className='col-lg-4 mb-4 mb-lg-0'>
          <h3 style={{textAlign:'center'}}>ADMIN LOGIN</h3>
          
          <Link to={'/Admin'}>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <div className='bg-image rounded-6'>
                <img
                  src='https://media.istockphoto.com/id/641379480/photo/blood-sample.jpg?s=612x612&w=0&k=20&c=0pLqp_a0gNwD460XxgX8td5XH-zG_5d2AAyCjXujYXA='
                  className='w-100'
                  alt='Alternative text'
                />
                <div
                  className='mask'
                  style={{
                    background: 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.5))',
                  }}>
                  <div className='bottom-0 d-flex align-items-center h-100 text-center justify-content-center'>
                    <div>
                      <h2 className='fw-bold mb-4'style={{color:'black'}}>Donated <i class="fa-solid fa-hospital-user"></i></h2>
                    </div>
                  </div>
                </div>
              </div>
            </MDBRipple>
          </Link>
          </div>

        </div>
        <br />

      </div ><br />
      <div>
        <h2 style={{textAlign:'center'}}>LEARN ABOUT DONATION</h2><br />
        <div className='container'>
          <div className='row'>
           
           <div className='col-6'>
            <img style={{width:'100%'}} src="https://i.postimg.cc/ZR92Gtgc/donation-Fact-1.webp" alt="" />
            <div>
              <h5 style={{paddingTop:'90px',color:'orange'}}>
                After donating blood, the body works to replenish the blood loss.
                This stimulates the production of new blood cells and in turn, helps 
                in maintaining good health.
              </h5>
            </div>
           </div>

           <div className='col-6'>
            <img style={{width:'100%',height:'500px'}} src="https://stanfordbloodcenter.org/wp-content/uploads/2018/03/0318-SouthBay-Center-Infographics_Compatibility-WEB.jpg" alt="" />
           </div>


          </div>

        </div>
      </div><br />
    </>
  )
}

export default Main