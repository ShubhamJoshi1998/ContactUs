import React, { useState } from 'react'
import './talkToUs.css'

const Talktous = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contactnumber: '',
        comment: ''
    })
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();

        const { firstname, lastname, email, contactnumber, comment } = user;

        const res = fetch('https://reactcontactus-ab8b1-default-rtdb.firebaseio.com/contactus.json',
            {
                method: 'POST',
                headers: {
                    'Contect-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    contactnumber,
                    comment
                })
            }
        );
        if (res) {
            setUser({
                firstname: '',
                lastname: '',
                email: '',
                contactnumber: '',
                comment: ''
            });
            alert('Data Stored Successfully')
        }
    }

    return (
        <>

            <div className="container">
                <div className="left-panel">
                    <div className="overlay">
                        <div className="info-box">
                            <div className="info-item">
                                <span className="icon">📍</span>
                                <div>
                                    <h4 style={{ textAlign: "left" }}>Address</h4>
                                    <p style={{ textAlign: "left" }}>Tower K, World Trade Centre, 200, Block F, Nauroji <br />Nagar, Safdarjung Enclave, New Delhi, Delhi 110029</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="icon">📞</span>
                                <div>
                                    <h4 style={{ textAlign: "left" }}>Lets Talk</h4>
                                    <p className="highlight" style={{ textAlign: "left" }}>+91 9557760934</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="icon">✉️</span>
                                <div>
                                    <h4 style={{ textAlign: "left" }}>General Support</h4>
                                    <p className="highlight" style={{ textAlign: "left" }}>shivam306joshi@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="right-panel">

                    <h2>Send Us A Message</h2>

                    <form method='POST'>

                        <label style={{ textAlign: "left" }}>TELL US YOUR NAME *</label>
                        <div className="row">
                            <input type="text" placeholder="First name" autoComplete='off' name='firstname' value={user.firstname} onChange={getUserData} required />
                            <input type="text" placeholder="Last name" autoComplete='off' name='lastname' value={user.lastname} onChange={getUserData} required />
                        </div>

                        <label style={{ textAlign: "left" }}>ENTER YOUR EMAIL *</label>
                        <input type="email" placeholder="Eg. example@email.com" autoComplete='off' name='email' value={user.email} onChange={getUserData} required />

                        <label style={{ textAlign: "left" }}>ENTER PHONE NUMBER</label>
                        <input type="text" placeholder="Eg. +1 800 000000" autoComplete='off' name='contactnumber' value={user.contactnumber} onChange={getUserData} required />

                        <label style={{ textAlign: "left" }}>MESSAGE *</label>
                        <textarea placeholder="Write us a message" autoComplete='off' name='comment' value={user.comment} onChange={getUserData} ></textarea>

                        <button type="submit" onClick={postData}>SEND MESSAGE</button>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Talktous;
