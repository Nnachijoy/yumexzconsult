import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import First from '../assets/First.pdf';
import Second from '../assets/Second.pdf';
import Third from '../assets/Third.pdf';
import Fourth from '../assets/Fourth.pdf';
import Five from '../assets/Five.pdf';
import Six from '../assets/Six.pdf';
import Eight from '../assets/Eight.pdf';
import Ten from '../assets/Ten.pdf';
import vectorarrow from '../assets/vectorarrow.png';
import learnarrow from '../assets/learnarrow.png';
import smartmeter from '../assets/smartmeter.png';
import energy from '../assets/energy.png';
import backup from '../assets/backup.png';
import tiles from '../assets/tiles.png';
import evconversion from '../assets/evconversion.png';
import irrigation from '../assets/irrigation.png';
import carports from '../assets/carports.png';
import tracker from '../assets/tracker.png';
import cocacola from '../assets/cocacola.jpg';
import crossriver from '../assets/crossriver.jpg';
import daewoo from '../assets/daewoo.jpg';
import dora from '../assets/dora.jpg';
import ebsu from '../assets/ebsu.jpg';
import heineken from '../assets/heineken.jpg';
import hybrid from '../assets/hybrid.jpg';
import lng from '../assets/lng.jpg';
import mrbiggs from '../assets/mrbiggs.jpg';
import nenogfarms from '../assets/nenogfarms.jpg';


function HeroSection() {

  return (

    <div style={{marginTop:'40px'}} className='rows'>




       
    <Row className='pdf-images'>
    <Col md={6} xs={6}>
      <div>
        <a href={Third} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={tiles} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={carports} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>
   


</Row>

<Row className='pdf-images mt-4'>
    <Col md={6} xs={6}>
      <div>
        <a href={Fourth} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={irrigation} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={tracker} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>
   


</Row>

<Row className='pdf-images mt-4'>
    <Col md={6} xs={6}>
      <div>
        <a href={Five} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={evconversion} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={Six} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={smartmeter} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>
   


</Row>


<Row className='pdf-images mt-4'>
    <Col md={6} xs={6}>
      <div>
        <a href={Eight} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={backup} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={Ten} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={energy} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>
   


</Row>





<Container className='p-4'>
      <div>
        <div className='fw-bolder text-center supported-by ' style={{  fontFamily: 'Lucida Handwriting', marginTop:'40px'}}>
          Our Clientele:
        </div>

        <Row className='mt-5'>
          <Col>
            <img src={crossriver} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col className='d-flex align-items-center'>
            <img src={cocacola} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={ebsu} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col className='d-flex align-items-center'>
            <img src={dora} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <img src={hybrid} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={daewoo} alt="cocacola" className='mt-1 img-fluid w-90' />
          </Col>

          <Col>
            <img src={lng} alt="cocacola" className='mt-1 img-fluid w-90' />
          </Col>

          <Col>
            <img src={heineken} alt="cocacola" className='mt-1 img-fluid w-90' />
          </Col>
        </Row>


<div className='mt-3 d-flex justify-content-center'>
  <div className='mr-5'>
    <img src={mrbiggs} alt="cocacola" className='mt-1 me-5 p-0 image-mobile'/>
  </div>
  <div>
    <img src={nenogfarms} alt="cocacola" className='mt-1 me-5 p-0 image-mobile'/>
  </div>
</div>
      </div>

      </Container>
    </div>
    
    
  );
}

export default HeroSection;




















{/* <Row>
<Col md={4} xs={6}>
      <div>
        <h2 className='d-flex fw-bolder'>YUMEXZ SOLAR ROOF TILES</h2>
        <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Data Sheet Claims</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Durability, Efficiency, and Aesthetics</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Solar Roof and Tiles Product Overview</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Aesthetics and Property Value</h6>
          </div>

          
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Conclusion and Key Points</h6>
          </div>
        </a>
      </div>
    </Col>

    <Col md={4} xs={6}>
      <div>
        <h2 className='d-flex fw-bolder'>YUMEXZ SOLAR ENERGY</h2>
        <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>Yumexz Power Street Light</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>Yumexz Power Borehole</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>Yumexz Food Preservation System</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px'}}>Benefits of Yumexz Conversion</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0',
          fontSize:'23px' }}>Embrace the Future of Clean
          Energy</h6>
          </div>

        
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          className='m-1'>
  <div style={{ fontSize: '20px', color:'rgb(87, 163, 240)' }}className='me-1 fw-bolder'>Learn more</div>
  <img src={learnarrow} alt="next" style={{ width: '20px'}} className='mt-2' />
</div>


</a>
         
          </div>
    </Col>
</Row>  */}