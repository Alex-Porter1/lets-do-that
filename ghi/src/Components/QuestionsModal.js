import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function QuestionsModal() {
  const [lgShow, setLgShow] = useState(false);
  const [category_list, setCategory] = useState('');

  

  return (
   <>
      <div>
        <Button className="page-center" size="lg" variant="outline-dark" onClick={() => setLgShow(true)}>What are you interested in doing?</Button>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Choose what type of Activity you would like to do!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='text-center'><button className='btn btn-outline-danger'>Active</button></div></Modal.Body>
        <Modal.Body><div className='text-center'><button className="btn btn-outline-success">Shopping</button></div></Modal.Body>
        <Modal.Body><div className='text-center'><button className="btn btn-outline-warning">Indoors</button></div></Modal.Body>
        <Modal.Body><div className='text-center'><button className="btn btn-outline-primary">Outdoors</button></div></Modal.Body>
        <Modal.Body><div className='text-center'><button className="btn btn-outline-dark">Night Life</button></div></Modal.Body>
        <Modal.Body><div className='text-center'><button className="btn btn-outline-info">Food</button></div></Modal.Body>
      </Modal>
      </>
  
  );
}
  export default QuestionsModal
  
