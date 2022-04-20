import React, { useEffect, useState } from "react";
import { Button, Card, Form,Col,Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {  useParams, } from "react-router-dom";
import "./Css/Treatment.css";

export const Treatment = () => {
  const params = useParams()
  const [data, setData] = useState([]);
  let token = JSON.parse(localStorage.getItem("dokter-info"));

  useEffect(() => {
    if (params?.id) {
      treat(params?.id);
    }
  }, [params]);

  const treat = async (id) =>{
    try {
      let response = await fetch(
        "http://localhost:8080/api/test/dokter/treatment/"+id,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token[0]}`,
          },
        }
      );
      response = await response.json();
      setData(response);
    } catch (e) {
      console.log(e.message);
    }
  }

  console.log(data)


  // function for submit treatment====================================================
  const [diagnosis, setDiagnose] = useState("");
  const [deskripsi, setDetailTreatment] = useState("");
  const [resepobat, setReceipt] = useState("");
  const [nama, setName] = useState("");

  const navigate = useNavigate();

  async function inputTreatment() {
    let item = { nama, diagnosis, deskripsi, resepobat };
    let result = await fetch(
      "http://localhost:8080/api/test/dokter/treatment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token[0]}`,
        },
        body: JSON.stringify(item),
      }
    );

    result = await result.json();

    if (result.roles === "ROLE_DOKTER") {
      localStorage.setItem(
        "dokter-info",
        JSON.stringify([result.accessToken, result.username])
      );
      navigate("/dokter/daftarpasien");
    }
  }

  return (
    <div className="treatment">
          <div className="treat-box1">
            <Card>
              <Card.Header><center>Patient Card</center></Card.Header>
              <Card.Body>
                <Card.Text>
                  Nama : {data.nama}<br />
                  Umur : {data.umur}<br />
                  Jenis Kelamin : {data.jeniskelamin}<br />
                  Gol Darah : {data.golongandarah}<br />
                  Gejala : {data.gejala}<br />
                </Card.Text>
              </Card.Body>
            </Card>
        </div>

        <div className="treat-box2">
        <p className="treat-title2">Input Treatment</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="patient name"
              value={data.nama}
              onChange={(e) => setName(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Diagnosis</Form.Label>
            <Form.Control
              type="diagnosis"
              placeholder="patient diagnose"
              onChange={(e) => setDiagnose(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Receipt</Form.Label>
            <Form.Control
              type="reciept"
              rows={4}
              placeholder="reciept"
              onChange={(e) => setReceipt(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detail Treatment</Form.Label>
            <Form.Control
              as="textarea"
              type="detailtreatment"
              rows={4}
              placeholder="details treatment"
              onChange={(e) => setDetailTreatment(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" href="/dokter/recordtreatment" onClick={inputTreatment}>
            Submit
          </Button>
        </Form>
      </div>

    </div>
  );
};
