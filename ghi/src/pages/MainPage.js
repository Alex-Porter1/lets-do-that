import { useEffect, useState } from "react";
import image from './img/Sand.jpg';

function MainPage() {
   

   

    return (
        <div style={{ backgroundImage: `url(${image})` }}>
        Let's go..
        
         
            <p className="lead mb-4">
              What do you want to do today?
            </p> 
            </div>
    
  );
    }
export default MainPage;

 