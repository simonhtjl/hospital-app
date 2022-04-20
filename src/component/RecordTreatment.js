import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import "./Css/RecordTreatment.css";

export const RecordTreatment = () => {
  const [data, setData] = useState([]);
  let token = JSON.parse(localStorage.getItem("dokter-info"));

  const getData = async () => {
    try {
      let response = await fetch(
        "http://localhost:8080/api/test/dokter/daftartreatment",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token[0]}`,
          },
        }
      );
      response = await response.json();
      setData(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let no = 1;

  return (
    <div className="record">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Diagnose</th>
            <th>Receipt</th>
            <th>Detail Treatment</th>
          </tr>
        </thead>
        
          <tbody>
          {data.map((item) => (
            <tr>
              <td>{no++}</td>
              <td>{item.nama}</td>
              <td>{item.diagnosis}</td>
              <td>{item.resepobat}</td>
              <td>{item.deskripsi}</td>
            </tr>
          ))}
          </tbody>
      </Table>
    </div>
  );
};
