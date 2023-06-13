import React from 'react';
import { GrFacebookOption} from 'react-icons/gr';
import { SiTwitter,SiGoogle} from 'react-icons/si';
import {AiFillPhone,AiFillHome} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import { FiInstagram} from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css";

export default function Footer() {

  return (
    <>
      <section style={{ backgroundColor: 'rgb(32 158 46)',color: 'white',opacity: 0.83 }} className='footer'>
        <hr/>
        <Container >
          <Row >
            <Col >
              <h6 >
                FarmStead
              </h6>
              <p>
              Farming isn’t something that can be taught. Each plant tells its own story that has to be read repeatedly.
              </p>
              <section >
                <div>
                    <div style={{ width:"180px",marginLeft:'5px'}}>
                      <hr/>
                      <a href='#!' className='me-4 text-reset'>
                          <GrFacebookOption/>
                      </a>
                      <a href='#!' className='me-4 text-reset'>
                          <SiTwitter/>
                      </a>
                      <a href='#!' className='me-4 text-reset'>
                          <SiGoogle />
                      </a>
                      <a href='#!' className=' text-reset'>
                          <FiInstagram />
                      </a>
                    </div>
                    
                   </div>
                </section>
            </Col>

            <Col >
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Fertilizer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pesticides
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Watering Recommendation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Crop Diseases Detection
                </a>
              </p>
            </Col>

            <Col >
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col >
              <h6 >Contact</h6>
              <p>
                <AiFillHome/> <span>KARACHI, POSTAL CODE 74500, PAKISTAN</span>
              </p>
              <p>
                <MdEmail/>  info@farmstead.com
              </p>
              <p>
                <AiFillPhone/> + 92 000 000 00
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <div className='text-center  p-4' style={{ backgroundColor: 'rgb(32 158 46)',color: 'white',opacity: 0.83 }}>
      <hr/>
        © 2022 Copyright:&nbsp;
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         FarmStead.com
        </a>
      </div>
      </>
  );
}