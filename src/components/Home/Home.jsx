import React from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "semantic-ui-react";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((getData) => {
      setApiData(getData.data);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row>">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {apiData.map((data) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />
    </div>
  );
}

export default Home;
