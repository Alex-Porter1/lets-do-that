import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import "./MainPage.css"
import {active_life, night_life, shopping, food, outdoor, indoor} from './categories'
import { Link } from "react-router-dom"
import { useAuthContext } from "./useToken"
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';



function MainPage(props) {

  const [category_list, setCategory] = useState('');
  const navigate = useNavigate();
  const { token } = useAuthContext();

  useEffect(() => {
      if (!token) {
          console.log('user not logged in, redirect to login page')
          navigate(`/login`)
      }
  }, [navigate, token])

  // const shuffled = active_life.sort(() => 0.5 - Math.random())
  let selected = active_life  // shuffled.slice(0, 10)
  console.log(active_life)
  
  return (
    //   <>
    //   <Modal
    //    {...props}
    //    size="lg"
    //    aria-labelledby="contained-modal-title-vcenter"
    //    centered
    //  >
    //    <Modal.Header closeButton>
    //      <Modal.Title id="contained-modal-title-vcenter">
    //        Click Me
    //      </Modal.Title>
    //    </Modal.Header>
    //    <Modal.Body>
    //      <h4>Centered Modal</h4>
    //      <p>
    //        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //        consectetur ac, vestibulum at eros.
    //      </p>
    //    </Modal.Body>
    //    <Modal.Footer>
    //      <Button onClick={props.onHide}>Close</Button>
    //    </Modal.Footer>
    //  </Modal>

      <div className="container mx-auto mt-3">
        <div className="mb-5 text-center">
          {/* <h2>What are you interested in doing?</h2>
          <h2>Choose a category and</h2> */}
          <h2 className="animated"><b>Let's Do That!</b></h2>
        </div>
        <Container fluid="true">
          <Row>
          <Col>
            <Stack gap={1} className="col-md-5 mx-auto">
              <Link state={{ category: `${selected[0]}` }} to="/activities/">
                <button className="btn btn-outline-primary"><b>{selected[0].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[1]}` }} to="/activities/">
                <button className="btn btn-outline-success"><b>{selected[1].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[2]}` }} to="/activities/">
                <button className="btn btn-outline-warning"><b>{selected[2].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[3]}` }} to="/activities/">
                <button className="btn btn-outline-danger"><b>{selected[3].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[4]}` }} to="/activities/">
                <button className="btn btn-outline-info"><b>{selected[4].toUpperCase()}</b></button>
              </Link>
            </Stack>
          </Col>
          <Col>
            <Stack gap={1} className="col-md-5 mx-auto">
              <Link state={{ category: `${selected[5]}` }} to="/activities/">
                <button className="btn btn-outline-info"><b>{selected[5].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[6]}` }} to="/activities/">
                <button className="btn btn-outline-danger"><b>{selected[6].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[7]}` }} to="/activities/">
                <button className="btn btn-outline-warning"><b>{selected[7].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[8]}` }} to="/activities/">
                <button className="btn btn-outline-success"><b>{selected[8].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[9]}` }} to="/activities/">
                <button className="btn btn-outline-primary"><b>{selected[9].toUpperCase()}</b></button>
              </Link>
            </Stack>
          </Col>
          <Col>
            <Stack gap={1} className="col-md-5 mx-auto">
              <Link state={{ category: `${selected[10]}` }} to="/activities/">
                <button className="btn btn-outline-primary"><b>{selected[10].toUpperCase()}</b></button>
              </Link>
              {/* <Link state={{ category: `${selected[11]}` }} to="/activities/">
                <button className="btn btn-outline-success"><b>{selected[11].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[12]}` }} to="/activities/">
                <button className="btn btn-outline-warning"><b>{selected[12].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[13]}` }} to="/activities/">
                <button className="btn btn-outline-danger"><b>{selected[13].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[14]}` }} to="/activities/">
                <button className="btn btn-outline-info"><b>{selected[14].toUpperCase()}</b></button>
              </Link> */}
            </Stack>
          </Col>
          </Row>
        </Container>
        {/* <div className="mt-3 text-center">
          <button className="btn btn-outline-dark">Refresh List</button>
        </div> */}
      </div>        
    
    );
  }


export default MainPage;

 