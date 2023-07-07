import React, { useState, useEffect } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  useEffect(() => {
    console.log('Email:', email);
    console.log('Password:', password);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

  
    console.log ('Submitted');
    
  
    setEmail('');
    setPassword('');
  };
  
  return (
    <div style={{backgroundColor:'skyblue'}} className="login template d-flex justify-content-center align-items-center p-5">
      <div className="p-5 rounded" style={{ width: '400px' }}> 
        <form onSubmit={handleSubmit}>
          <h3>LOGIN IN</h3>
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
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
        
            
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit" >
              Sign In
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Login;


