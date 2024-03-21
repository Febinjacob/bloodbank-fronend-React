import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Bar, Rectangle, XAxis, YAxis, CartesianGrid, BarChart, Legend } from "recharts";




function AdminView() {
  const data = [
    { name: "0+", value: 35 },
    { name: "0-", value: 13 },
    { name: "A+", value: 30 },
    { name: "A-", value: 8 },
    { name: "B+", value: 8 },
    { name: "B-", value: 2 },
    { name: "AB+", value: 2 },
    { name: "AB-", value: 1 },

  ]
  const data1 = [
    {
      name: '2017',
      Doners: 4000,
      Recivers: 2400,
      amt: 2400,
    },
    {
      name: '2018',
      Doners: 3000,
      Recivers: 1398,
      amt: 2210,
    },
    {
      name: '2019',
      Doners: 2000,
      Recivers: 5000,
      amt: 2290,
    },
    {
      name: '2020',
      Doners: 2780,
      Recivers: 3908,
      amt: 2000,
    },
    {
      name: '2021',
      Doners: 1890,
      Recivers: 4800,
      amt: 2181,
    },
    {
      name: '2022',
      Doners: 2390,
      Recivers: 3800,
      amt: 2500,
    },
    {
      name: '2023',
      Doners: 3490,
      Recivers: 4300,
      amt: 2100,
    },
  ];


  const [allDonerAdmin, setAllDonerAdmin] = useState([])
  const [allBloodAdmin, setAllBloodAdmin] = useState([])



  const Accept = () => {
    alert("Doner Details Accepted");

  }
  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/getDonersAdmin')
    console.log(response.data.doner);
    setAllDonerAdmin(response.data.doner)
  }
  console.log(allDonerAdmin);
  useEffect(() => {
    fetchData()
  }, [])


  const Accepted = () => {
    alert("User Details Accepted")
  }
  const fetchBlood = async () => {
    const response = await axios.get('http://localhost:8000/getBloodAdmin')
    console.log(response.data.doner);
    setAllBloodAdmin(response.data.doner)
  }
  console.log(allDonerAdmin);
  useEffect(() => {
    fetchBlood()
  }, [])


  return (
    <div>
      <div style={{ textAlign: 'right', paddingRight: '90px', paddingTop: '30px' }}>
        <Link to={'/'}><button className='btn' style={{ backgroundColor: 'red', color: 'white' }}>Log Out</button></Link>

      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <h5 style={{paddingLeft:'50px',color:'red'}}>Blood Availability</h5>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#808080"
                label
              />

              <Tooltip />
              
            </PieChart>
            

            

          </div>
          <div className='col-6'>
          <h5 style={{paddingLeft:'50px',color:'red'}}>Total Doners And Recivers</h5>
            <BarChart
              width={600}
              height={400}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Doners" fill="#808080" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="Recivers" fill="#FF0000" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </div>

        </div>


      </div>



      <div className='container'>
        <div className='row'>
          <div className='col-6' style={{ backgroundColor: 'red', borderBottomLeftRadius: '90px', borderTopRightRadius: '90px' }}>
            <h2 style={{ paddingLeft: '30px', paddingTop: '20px', color: 'white' }}>Total Blood Doners Booked</h2>
            <div className='underline' style={{ backgroundColor: 'white', width: '100%' }}></div>
            <MDBTable hover>
              <MDBTableHead style={{ color: 'white' }}>
                <tr>
                  <th scope='col'>Doner Id</th>
                  <th scope='col'>Doner Name</th>
                  <th scope='col'>Place</th>
                  <th scope='col'>Phone Number</th>
                  <th scope='col'>Blood Group</th>
                  <th scope='col'></th>
                </tr>
              </MDBTableHead>
              <MDBTableBody style={{ color: 'white' }}>
                {
                  allDonerAdmin.map(item => (
                    <tr>
                      <th scope='row'>{item.donerid}</th>
                      <td>{item.donername}</td>
                      <td>{item.place}</td>
                      <td>{item.phone}</td>
                      <td>{item.blood}</td>
                      <td>
                        <button onClick={Accept} className='btn' style={{ backgroundColor: 'white', color: 'red' }}>Accept</button>
                      </td>
                    </tr>
                  ))
                }
              </MDBTableBody>
            </MDBTable>

          </div>

          <div className='col-6'>
            <img style={{ width: '100%', borderTopLeftRadius: '90px', borderBottomRightRadius: '90px' }} src="https://www.ccmhhealth.com/wp-content/uploads/blog-post-template-5-770x510.png" alt="" />
          </div>

        </div>


      </div>
      <div className='container'>
        <div className='underline' style={{ width: '100%' }}></div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img style={{ width: '100%', borderTopLeftRadius: '90px', borderBottomRightRadius: '90px' }} src="https://i0.wp.com/emcrit.org/wp-content/uploads/2017/06/US_Navy_090218-N-6326B-074_The_Naval_Medical_Center_San_Diego_NMCSD_Blood_Bank_confirms_the_blood_type_of_each_blood_product_donated_to_ensure_patients_receive_the_correct_specimen.jpg" alt="" />
          </div>
          <div className='col-6' style={{ backgroundColor: 'red', borderBottomLeftRadius: '90px', borderTopRightRadius: '90px' }}>
            <h2 style={{ paddingLeft: '30px', paddingTop: '20px', color: 'white' }}>Total Persons Booked For Blood Group</h2>
            <div className='underline' style={{ backgroundColor: 'white', width: '100%' }}></div>
            <MDBTable hover>
              <MDBTableHead style={{ color: 'white' }}>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Place</th>
                  <th scope='col'>Phone Number</th>
                  <th scope='col'></th>
                </tr>
              </MDBTableHead>
              <MDBTableBody style={{ color: 'white' }}>
                {
                  allBloodAdmin.map(item => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.place}</td>
                      <td>{item.phone}</td>
                      <td>
                        <button onClick={Accepted} className='btn' style={{ backgroundColor: 'white', color: 'red' }}>Accept</button>
                      </td>
                    </tr>
                  ))
                }
              </MDBTableBody>
            </MDBTable>
          </div>

        </div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default AdminView