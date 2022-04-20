import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './Css/Login.css';
import { Button,Form } from 'react-bootstrap';

export const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();


  async function login(){
    let item = {username,password};
    let result = await fetch("http://localhost:8080/api/auth/login",
    {
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });

    result = await result.json();

    if(result.roles[0] === "ROLE_PASIEN"){
      localStorage.setItem("user-info",JSON.stringify([result.accessToken,result.username]))
      navigate("/pasien")
    }else{
      localStorage.setItem("dokter-info",JSON.stringify([result.accessToken,result.username]))
      navigate("/dokter/daftarpasien")
    }
    
  }

  return (
      <div className="login-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Username</b></Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <div className="row">
          <Form.Group className="mb-3 form-right" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" /><br />
          </Form.Group>
          <Button variant="primary" onClick={login}>
            Login
          </Button>
          <p></p>
          <center><a href='/signup'>Don't have account ?</a></center>
          
        </div>
      </Form>
      </div>
  )
}
