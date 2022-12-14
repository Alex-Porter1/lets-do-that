import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import "./MainPage.css"
import "./index.css"
import category_list from './categories'
import { Link } from "react-router-dom"
import { useAuthContext } from "./useToken"
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import "./index.css"
import Nav from "./Nav"

function MainPage(props) {

  const [lgShow, setLgShow] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const [buttons, setButtons] = useState(false);
  const [selected, setSelected] = useState('');

  function Back() {
    setButtons(false)

  }

 function chooseActive() {

    setSelected(category_list["active_life"])
    setButtons(true)

  }

  function chooseNight() {

    setSelected(category_list["night_life"])
    setButtons(true)

  }

  function chooseShopping() {

    setSelected(category_list["shopping"])
    setButtons(true)

  }

function chooseFood() {

  setSelected(category_list["food"])
  setButtons(true)

}

function chooseIndoor() {

  setSelected(category_list["indoor"])
  setButtons(true)

}

function chooseOutdoor() {

  setSelected(category_list["outdoor"])
  setButtons(true)

}

  useEffect(() => {
      if (!token) {
          console.log('user not logged in, redirect to login page')
          navigate(`/login`)
      }
  }, [navigate, token])


  return (
    <>
      <div class="container-fluid homepage-bgimage">
      <div> <Nav /> </div>
      <div className="text-center">

        <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo" width="500" height="auto" />
      </div>
      <div className="container mx-auto mt-3">

        <div className="mb-5 text-center">
          <h2 className="animated"><b>Let's Do That!</b></h2>
        </div>

        {buttons ?
        <>
        <Container fluid="true">

          <Row>


          <Col>
            <Stack gap={1} className="col-md-5 mx-auto">
              <Link state={{ category: `${selected[0]}` }} to="/activities/">
                <button className="btn btn-primary"><b>{selected[0].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[1]}` }} to="/activities/">
                <button className="btn btn-success"><b>{selected[1].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[2]}` }} to="/activities/">
                <button className="btn btn-warning"><b>{selected[2].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[3]}` }} to="/activities/">
                <button className="btn btn-danger"><b>{selected[3].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[4]}` }} to="/activities/">
                <button className="btn btn-info"><b>{selected[4].toUpperCase()}</b></button>
              </Link>
            </Stack>
          </Col>
          <Col>
            <Stack gap={1} className="col-md-5 mx-auto">
              <Link state={{ category: `${selected[5]}` }} to="/activities/">
                <button className="btn btn-primary"><b>{selected[5].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[6]}` }} to="/activities/">
                <button className="btn btn-success"><b>{selected[6].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[7]}` }} to="/activities/">
                <button className="btn btn-warning"><b>{selected[7].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[8]}` }} to="/activities/">
                <button className="btn btn-danger"><b>{selected[8].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[9]}` }} to="/activities/">
                <button className="btn btn-info"><b>{selected[9].toUpperCase()}</b></button>
              </Link>
            </Stack>
          </Col>
          <Col>
            <Stack gap={1} className="col-md-5 mx-auto">
              <Link state={{ category: `${selected[10]}` }} to="/activities/">
                <button className="btn btn-primary"><b>{selected[10].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[11]}` }} to="/activities/">
                <button className="btn btn-success"><b>{selected[11].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[12]}` }} to="/activities/">
                <button className="btn btn-warning"><b>{selected[12].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[13]}` }} to="/activities/">
                <button className="btn btn-danger"><b>{selected[13].toUpperCase()}</b></button>
              </Link>
              <Link state={{ category: `${selected[14]}` }} to="/activities/">
                <button className="btn btn-info"><b>{selected[14].toUpperCase()}</b></button>
              </Link>
            </Stack>
          </Col>
          </Row>
        </Container>
        <div className="text-center mt-4">
        <button className="btn btn-dark text-center mt-4" onClick={Back}>START OVER</button>
        </div>
        </>
        : <>
        <div className="d-grid col-6 mx-auto">
        <Button size="lg" variant="dark" onClick={() => setLgShow(true)}>What are you interested in doing?</Button>
        </div>
        <Modal
          size="lg"
          dialogClassName="border-radius-2"
          show={lgShow}
          animation={true}
          onHide={() => setLgShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="d-grid mx-auto" id="example-modal-sizes-title-lg">
              Choose what type of Activity you would like to do!
            </Modal.Title>
          </Modal.Header>
          <div className="container-fluid modal-bg">
          <Modal.Body><div className="d-grid col-6 mx-auto"><button onClick={chooseActive} className='btn btn-danger'>Active</button></div></Modal.Body>
          <Modal.Body><div className="d-grid col-6 mx-auto"><button onClick={chooseShopping} className="btn btn-success">Shopping</button></div></Modal.Body>
          <Modal.Body><div className="d-grid col-6 mx-auto"><button onClick={chooseIndoor} className="btn btn-warning">Indoors</button></div></Modal.Body>
          <Modal.Body><div className="d-grid col-6 mx-auto"><button onClick={chooseOutdoor} className="btn btn-primary">Outdoors</button></div></Modal.Body>
          <Modal.Body><div className="d-grid col-6 mx-auto"><button onClick={chooseNight} className="btn btn-dark">Night Life</button></div></Modal.Body>
          <Modal.Body><div className="d-grid col-6 mx-auto"><button onClick={chooseFood} className="btn btn-info">Food</button></div></Modal.Body>
          </div>
        </Modal>
        </>}
      </div>
      </div>
      </>

    );
  }


export default MainPage;

