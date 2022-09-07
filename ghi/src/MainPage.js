import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import "./MainPage.css"
import category_list from './categories'

function MainPage() {

  console.log("cat list:", category_list)
  const shuffled = category_list.sort(() => 0.5 - Math.random())
  let selected = shuffled.slice(0, 10)

  

    return (
        <>
        <div className="container mx-auto mt-3">
          <div className="mb-5 text-center">
            <h2>What are you interested in doing?</h2>
            <h2>Choose a category and</h2>
            <h2 className="animated"><b>Let's Do That!</b></h2>
          </div>
          <Container>
            <Row>
            <Col>
              <Stack gap={1} className="col-md-8 mx-auto">
                <button className="btn btn-outline-primary"><b>{selected[0].toUpperCase()}</b></button>
                <button className="btn btn-outline-success"><b>{selected[1].toUpperCase()}</b></button>
                <button className="btn btn-outline-warning"><b>{selected[2].toUpperCase()}</b></button>
                <button className="btn btn-outline-danger"><b>{selected[3].toUpperCase()}</b></button>
                <button className="btn btn-outline-info"><b>{selected[4].toUpperCase()}</b></button>
              </Stack>
            </Col>
            <Col>
              <Stack gap={1} className="col-md-8 mx-auto">
                <button className="btn btn-outline-info"><b>{selected[5].toUpperCase()}</b></button>
                <button className="btn btn-outline-danger"><b>{selected[6].toUpperCase()}</b></button>
                <button className="btn btn-outline-warning"><b>{selected[7].toUpperCase()}</b></button>
                <button className="btn btn-outline-success"><b>{selected[8].toUpperCase()}</b></button>
                <button className="btn btn-outline-primary"><b>{selected[9].toUpperCase()}</b></button>
              </Stack>
            </Col>
            </Row>
          </Container>
          <div className="mt-3 text-center">
            <button className="btn btn-outline-dark">Refresh List</button>
          </div>
        </div>        
        </>
      );
    }


export default MainPage;

 