import React, { useState,useEffect } from "react";
import { Button, Container, Form,Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Css/Pasien.css";

export const Pasien = () => {

  const [nama,setName] = useState("");
  const [jeniskelamin,setGender] = useState("");
  const [umur,setAge] = useState("");
  const [golongandarah,setBloodType] = useState("");
  const [gejala,setSymptoms] = useState("");
  const [namadokter,setNamaDokter] = useState("");

  const [dokter,setDokter] = useState([]);
  const token = JSON.parse(localStorage.getItem('user-info'));

  const navigate = useNavigate();

  async function submit(){
    let item = {nama,jeniskelamin,umur,golongandarah,gejala,namadokter};
    let result = await fetch("http://localhost:8080/api/test/pasien/registrasi",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization': `Bearer ${token[0]}`
      },
      body:JSON.stringify(item)
    });

    result = await result.json();
  }

  const getDokter = async () =>{
    try {
        let response = await fetch('http://localhost:8080/api/test/pasien/daftardokter',{
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token[0]}`
          },
        })
        response = await response.json();
        setDokter(response)

      } catch(e){
          console.log(e.message);
    }
  }

  useEffect(()=>{
    getDokter();
  },[])

  return (
    <div className="pasien-container col-6">
      <center><h3>Form Registration</h3></center><br />
    <Container className="col-11">
      <Form className="col-12">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Please input your name" onChange={(e)=>setName(e.target.value)}/>
          </Form.Group >
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" placeholder="Please select your gender">
            <Form.Label>Gender</Form.Label>
            <Form.Select onChange={(e)=>setGender(e.target.value)}>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Age</Form.Label>
            <Form.Control type="age" placeholder="Please input your age" onChange={(e)=>setAge(e.target.value)} />
          </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Blood Type</Form.Label>
            <Form.Select onChange={(e)=>setBloodType(e.target.value)}>
              <option>A</option>
              <option>B</option>
              <option>AB</option>
              <option>O</option>
            </Form.Select>
            </Form.Group>
          </Col>
        </Row>

              
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Symptoms</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please tell us your symptoms"
            onChange={(e)=>setSymptoms(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Doctor</Form.Label>
          <Form.Select onChange={(e)=>setNamaDokter(e.target.value)}>
 
          {dokter
          .filter(filter => filter.roles[0].name === "ROLE_DOKTER")
          .map((data) => (
              <option value={data.username}>{data.username}</option>
            ))}

          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={submit} href="/">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  )
}
