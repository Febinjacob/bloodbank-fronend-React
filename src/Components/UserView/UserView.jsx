import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import './UserView.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function UserView() {

  const navigate = useNavigate()

  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [donerid, setDonerid] = useState('');
  const [donername, setDonername] = useState('');

  const options = [
    { label: "Kasaragod", place: 'Kasaragod' },
    { label: "Kannur", place: 'Kannur' },
    { label: "Wayanad", place: 'Wayanad' },
    { label: "Kozhikode", place: 'Kozhikode' },
    { label: "Malappuram", place: 'Malappuram' },
    { label: "Palakkad", place: 'Palakkad' },
    { label: "Thrissur", place: 'Thrissur' },
    { label: "Ernakulam", place: 'Ernakulam' },
    { label: "Idukki", place: 'Idukki' },
    { label: "Kottayam", place: 'Kottayam' },
    { label: "Alappuzha", place: 'Alappuzha' },
    { label: "Pathanamthitta", place: 'Pathanamthitta' },
    { label: "Kollam", place: 'Kollam' },
    { label: "Thiruvananthapuram", place: 'Thiruvananthapuram' },
  ]
  // function handleSelect(event) {
  //   setPlace(event.target.place)

  // }

  const [blood, setBlood] = useState('');
  const groups = [
    { label: "A+", blood: 'A+' },
    { label: "A-", blood: 'A-' },
    { label: "B+", blood: 'B+' },
    { label: "B-", blood: 'B-' },
    { label: "AB+", blood: 'AB+' },
    { label: "AB-", blood: 'AB-' },
    { label: "O+", blood: 'O+' },
    { label: "O-", blood: 'O-' },


  ]
  

  // const DonerSubmit = async (e) => {
  //   // Basic form validation
  //   if (!donerid || !donername || !date || !phone || !place || !blood) {
  //     alert("Please fill in all required fields");
  //     return;
      
      
  //   }
  
  //   const body = { donerid, donername, date, phone, place, blood };
  //   try {
  //     const response = await axios.post('http://localhost:8000/donerBooking', body);
  //     alert(response.data.message);
      
  //     console.log("Form submitted Successfully!");
  
  //     // Reset the state variables to their initial values
  //     setDonerid('');
  //     setDonername('');
  //     setDate('');
  //     setPhone('');
  //     setPlace('');
  //     setBlood('');
  //     navigate('/UserView');

    
  //   } catch (error) {
  //     alert("Booking Not completed");
  //     console.log("Error submitting form:", error);
  //   }
  // };
  const resetFormFields = () => {
    setDonerid('');
    setDonername('');
    setDate('');
    setPhone('');
    setPlace('');
    setBlood('');
  };

  const DonerSubmit = async (e) => {
    // Basic form validation
    if (!donerid || !donername || !date || !phone || !place || !blood) {
      alert("Please fill in all required fields");
      return;
    }

    const body = { donerid, donername, date, phone, place, blood };
    try {
      const response = await axios.post('http://localhost:8000/donerBooking', body);
      alert(response.data.message);
      navigate('/UserViewBooked');
      console.log("Form submitted Successfully!");

      // Reset the form fields
      resetFormFields();
    } catch (error) {
      alert("Booking Not completed");
      console.log("Error submitting form:", error);
    }
  };
  


  return (
    <>
    <div style={{ textAlign: 'right', paddingRight: '90px', paddingTop: '30px' }}>
        <Link to={'/'}><button className='btn' style={{ backgroundColor: 'red', color: 'white' }}>Log Out</button></Link>
      </div>
      <h3 style={{ padding: '30px 200px', color: 'GrayText' }}>Booking For Blood Donating <div className='line'></div></h3>
      

      <div className='container' style={{ backgroundColor: '#C30A0A', borderTopLeftRadius: '90px', borderBottomRightRadius: '90px' }}>
        <div className='row' >
          <div className='col-6'>
            <img style={{ height: '590px', width: '620px', paddingTop: '23px', paddingLeft: '11px', borderTopLeftRadius: '90px', borderBottomRightRadius: '90px' }} src="https://static.vecteezy.com/system/resources/previews/007/011/575/non_2x/world-blood-donor-day-poster-donor-blood-concept-illustration-background-for-world-blood-donor-day-free-vector.jpg" alt="" />
          </div>

          <div className='col-6'>
            <div style={{ paddingRight: '11px' }}>
              <div style={{ backgroundColor: 'white', borderTopLeftRadius: '90px', borderBottomRightRadius: '90px' }}>
                <div className='header'>
                  <div className='text'>Enter Doner Details Here</div>
                  <div className='underline'></div>

                </div>
                <div >
                  <div style={{ paddingTop: '30px', paddingLeft: '50px', paddingRight: '50px' }}>
                    <MDBInput onChange={(e) => setDonerid(e.target.value)} label='Donar ID' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBInput onChange={(e) => setDonername(e.target.value)} label='Doner Name' id='formControlLg' type='text' size='lg' />
                    <br />
                    <div className='d-flex'>
                      <div >
                        <DatePicker
                          placeholderText='Date'
                          selected={date}
                          onChange={date => setDate(date)}
                          dateFormat={"yyyy/MM/dd"}
                          minDate={new Date()}
                          filterDate={date => date.getDay() !== 0}
                        />
                      </div>

                      <div >
                        <PhoneInput
                          className='phone'
                          placeholder="Enter Phone Number"
                          phone={phone}
                          onChange={setPhone}

                        />
                      </div>
                    </div>


                    <div className='w-70' style={{ paddingTop: '25px' }}>
                      <select className='form-select' onChange={(e) => setPlace(e.target.value)}>
                        {options.map(option => (
                          <option place={option.place}>{option.label}</option>
                        ))}

                      </select>
                    </div>


                    <div className='w-50' style={{ paddingTop: '25px' }}>
                      <select className='form-select' onChange={(e) => setBlood(e.target.value)}>
                        {groups.map(group => (
                          <option blood={group.blood}>{group.label}</option>
                        ))}

                      </select>
                    </div><br />
                    <div style={{ paddingLeft: '200px' }}>
                      <button onClick={(e) => DonerSubmit(e)} className='submit'>Submit</button>
                    </div>


                  </div><br />

                </div>

              </div>
            </div>


          </div>

        </div>

      </div><br />
      <h3 style={{ padding: '30px 200px', color: 'GrayText' }}>Donate Blood Save Lives <div className='line'></div></h3>

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
           <img style={{width:'100%'}} src="https://i.pinimg.com/originals/5a/f3/24/5af32485d4f5806e0d2ad13ee31652d0.png" alt="" />
          </div>
          <div className='col-6'>
           <img style={{width:'100%',borderTopRightRadius: '90px', borderBottomLeftRadius: '90px',height:'490px'}} src="https://europeanbloodalliance.eu/wp-content/uploads/2018/04/EBA_overview.gif" alt="" />
          </div>

        </div>
      </div><br />
    </>
  )
}

export default UserView