import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Col,Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Css/DaftarPasien.css";
import { Treatment } from "./Treatment";

export const DaftarPasien = () => {
  const [data, setData] = useState([]);
  const [pasienid,setPasien] = useState([]);

  let token = JSON.parse(localStorage.getItem("dokter-info"));

  const navigate = useNavigate();


  const getData = async () => {
    try {
      let response = await fetch(
        "http://localhost:8080/api/test/dokter/daftarpasien",
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
  };

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
      setPasien(response);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  let no = 1;

  console.log(pasienid)

  return (
    <div className="container-fluid">
      {data
      .filter(filter => filter.namadokter === token[1])
      .map((item) => (
        <div className="card">
          <Card>
            <Card.Header><center><b>Pasien {no++}</b></center></Card.Header>
            <Card.Body>
              <Card.Text>
                <b>Name</b>: {item.nama}<br/>
                <b>Age</b>: {item.umur}<br/>
                <b>Gender</b> : {item.jeniskelamin}<br/>
                <b>Type Blood</b> : {item.golongandarah}<br/>
                <b>Symptoms</b> : {item.gejala}
              </Card.Text>
              <div className="button">
                <Button variant="primary text-right" size="sm"  onClick={() => navigate(`/dokter/treatment/${item.id}?name=${item.nama}`)} style={{float:"right"}}>
                  Treat
                </Button>
              </div>
            </Card.Body>
          </Card>
          </div>
      ))}
    </div>
  );
};
