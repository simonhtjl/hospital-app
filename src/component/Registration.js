import React,{useState} from 'react';
import './Css/Registration.css';
import { Button,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {

  const navigate = useNavigate();

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  async function signUp(){
    let item = {username,email,password}

    let result = await fetch("http://localhost:8080/api/auth/signup",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })

    result = await result.json()
    localStorage.setItem("registration-info",JSON.stringify(result))
    navigate("/")
  }

  return (
    <div className="registration-container">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label><b>Username</b></Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email</b></Form.Label>
        <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group><br />
      <div className="row">
        <Button variant="primary" onClick={signUp}>
          Sign Up
        </Button>
      </div>
    </Form>
    </div> 
  )
}
