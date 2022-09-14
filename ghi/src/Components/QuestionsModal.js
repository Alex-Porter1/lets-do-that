import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function QuestionsModal() {
  const [lgShow, setLgShow] = useState(false);


  return (
   <>
      <Button className="d-grid gap-2" size="lg" variant="outline-dark" onClick={() => setLgShow(true)}>What are you interested in doing?</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Adventure is out There!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Choose a category and...</Modal.Body>
      </Modal>
      </>
  
  );
}
  export default QuestionsModal
  
