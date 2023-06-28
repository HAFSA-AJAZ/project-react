import React, { useState, useEffect } from 'react';

export default function Login(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
  }, [name, email, password, phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <div style={{backgroundColor:'skyblue'}} className="signup template d-flex justify-content-center align-items-center p-5">
      <div className="signup-form-wrapper">
        <form onSubmit={handleSubmit} className="p-5" >
          <h3>SIGN UP</h3>
          <div className="mb-3">
            <label htmlFor="name" style={{ color: '#001A33' }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" style={{ color: '#001A33' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}


