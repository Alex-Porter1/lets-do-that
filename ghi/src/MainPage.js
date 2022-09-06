import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';

function MainPage() {

  

  


    return (
        <>
        
          <Stack gap={2} className="col-md-5 mx-auto">
          <div className='mt-5'> </div>
          <Button variant="outline-primary" >Aestheticians</Button>{' '}
          <Button variant="outline-secondary">Absinthe Bars</Button>{' '}
          <Button variant="outline-success">Amusement Parks</Button>{' '}
          <Button variant="outline-warning">Aquariums</Button>{' '}
          <Button variant="outline-danger">Outdoor Sports</Button>{' '}
          <Button variant="outline-info">Museums</Button>{' '}
        </Stack>
    
        
        </>
      );
    }


export default MainPage;

 