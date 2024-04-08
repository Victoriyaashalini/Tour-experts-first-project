import React from 'react';
import Card from 'react-bootstrap/Card';
import international from "../../assests/images/international/max-bender-8FdEwlxP3oU-unsplash (2).jpg";
import "../../assests/css/packages/internationaltour.css";

function Internationaltour() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={international} alt="Card image" fluid className='international-image' />
      <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          
          <Card.Text className='international-heading'>
           International
          </Card.Text>
         
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Internationaltour;
