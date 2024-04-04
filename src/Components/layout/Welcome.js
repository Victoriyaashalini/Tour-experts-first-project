import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Welcome() {
  return (
	<Container  className='welcome-container'>
	<Row>
	  <Col>
<h3 className='welcome-note'>Welcome to Tour Experts</h3>
<p className='welcome-paragraph'>
Welcome to Tour Experts, your premier destination for unforgettable holidays and seamless corporate retreats. With a legacy of excellence spanning decades, we specialize in crafting personalized experiences tailored to your preferences.At Tour Experts, we understand that every journey is unique, which is why we go above and beyond to craft bespoke experiences tailored to your preferences and aspirations. From crafting meticulously curated itineraries to orchestrating seamless transportation, accommodation, and activity arrangements, we leave no detail overlooked. From curated itineraries to seamless arrangements, our dedicated team ensures that every detail is taken care of. Whether you're seeking adventure or relaxation, we have the expertise to make your journey extraordinary. Discover the difference with Tour Experts and embark on a voyage of discovery. 
</p>


	  </Col>
	</Row>
  </Container>
  )
}

export default Welcome;