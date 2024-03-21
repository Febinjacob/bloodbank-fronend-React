import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';

function Blood() {

    const [allDoner, setAllDoner] = useState([])

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/getDoners')
        console.log(response.data.doner);
        setAllDoner(response.data.doner)
    }
    console.log(allDoner);
    useEffect(() => {
        fetchData()
    }, [])


    const [staticModal, setStaticModal] = useState(false);

    const toggleOpen = () => setStaticModal(!staticModal);

    const [name,setName]=useState('');
    const[place,setPlace]=useState('');
    const[phone,setPhone]=useState('');
    const[blood,setBlood]=useState('');

    const BloodBooking=async(e)=>{
        const body={name,place,phone}
        await axios.post('http://localhost:8000/bloodBooking',body).then((response)=>{
          alert(response.data.message)
          console.log(name,place,phone,blood);
        })
        .catch((error)=>{
            alert("This Blood Group Is Already Booked")
        })
    }


    return (
        <div style={{paddingBottom:'310px'}}>
            <div className='container'>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Doner Id</th>
                            <th scope='col'>Doner Name</th>
                            <th scope='col'>Place</th>
                            <th scope='col'>Phone Number</th>
                            <th scope='col'>Blood Group</th>
                            <th scope='col'></th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            allDoner.map(item => (
                                <tr>
                                    <th scope='row'>{item.donerid}</th>
                                    <td>{item.donername}</td>
                                    <td>{item.place}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.blood}</td>
                                    <td>
                                        <button onClick={toggleOpen} className='btn' style={{backgroundColor:'red',color:'white'}}>Book Now</button>
                                        <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
                                            <MDBModalDialog>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle>Enter Your Details</MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        <div style={{paddingLeft:'30px',paddingRight:'30px'}}>
                                                           
                                                            <MDBInput onChange={(e)=>setName(e.target.value)} label='Enter Your Name' id='formControlDefault' type='text' />
                                                            <br />
                                                            <MDBInput onChange={(e)=>setPlace(e.target.value)} label='Place' id='formControlDefault' type='text' />
                                                            <br />
                                                            <MDBInput onChange={(e)=>setPhone(e.target.value)} label='Phone Number' id='formControlDefault' type='number' />
                                                            <br />
                                                            <MDBInput onChange={(e)=>setBlood(e.target.value)} label='Blood Group' id='formControlDefault' type='text' />
                                                            <br />
                                                        </div>


                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                        <MDBBtn color='secondary' onClick={toggleOpen}>
                                                            Close
                                                        </MDBBtn>
                                                        <MDBBtn onClick={(e)=>BloodBooking(e)}>Submit</MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                    </td>
                                </tr>
                            ))
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>

        </div>
    )
}

export default Blood