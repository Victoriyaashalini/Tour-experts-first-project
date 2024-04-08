import React from 'react';
import Card from 'react-bootstrap/Card';
import image1 from '../../assests/images/india packages/joshuva-daniel-U4OS-GimdXA-unsplash (1).jpg';
import image2 from '../../assests/images/india packages/honeeymoon.jpg';
import image3 from '../../assests/images/india packages/north.jpg';
import image4 from '../../assests/images/india packages/avin-cp-Z9dgBPFSa40-unsplash.jpg';
import image5 from '../../assests/images/india packages/eaast.jpg';
import '../../assests/css/indiapackages.css';

const indiacardData = [
    { image: image1, title: 'Most Popular Places', },
    { image: image2, title: 'Honeymoon',  },
    { image: image3, title: 'North India', },
    { image: image4, title: 'South India', },
    { image: image5, title: 'East India',  }
];

const Indiapackages = () => {
    return (
        <div className="indiacard-container">
            {indiacardData.map((card, index) => (
                <Card key={index} className={`india-card ${index === 0 ? 'first-card' : ''}`}>
                    <div className="zoom-effect">
                        <Card.Img src={card.image} alt="Card image" className="card-img-top" />
                    </div>
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                        <Card.Title className='india-card-title'>{card.title}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            ))}
        </div>
    );
}

export default Indiapackages;
