import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import miLogo from './assets/miLogo.png'
import cert from './assets/comptia-security-ce-certification.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  

  return (
    <>

    <Navbar style={{width: "100vw", backgroundColor: 'black', display: 'inline-flex', paddingTop: '3vh', height: "7vh"}}>
        <NavbarBrand style={{color: 'white', fontWeight: 'bold', paddingInline: '10vw', fontSize: '25px'}}>portfolio</NavbarBrand>
        <NavLink style={{color: 'white',  fontSize: '20px'}}>Resume</NavLink>
        <NavLink style={{color: 'white',  fontSize: '20px', paddingLeft: '5vw'}}>Work</NavLink>
        <NavLink style={{color: 'white',  fontSize: '20px', paddingLeft: '5vw'}}>Contact</NavLink>
      </Navbar>

    <Container fluid style={{height: '90vh', width: '100vw', backgroundColor: 'black'}}>

      <Row fluid style={{width: '100vw', height: '89vh', display: 'inline-flex', backgroundColor: 'black'}}>

        <Col style={{width: '50vw', backgroundColor: 'black', textAlign: 'center'}}><h1 style={{color: 'whitesmoke', fontSize: '100px', paddingTop: '25vh'}}>حسننني</h1></Col>

        <Col style={{width: '50vw', backgroundColor: 'black'}}>

          <img src={miLogo} style={{height: '80vh', width: '40vw', paddingLeft: '5vw'}}></img>

        </Col>

      </Row>

    </Container>

    <div style={{ height: '50vh', backgroundColor: 'beige', marginRight: '0px', paddingRight: '0px'}}>

    </div>
    
    
    
    </>
    
   
  )
}

export default App













 
      {/* <Row style={{display: "inline-flex"}}>
        <Col style={{width: '50vw'}}>
          <h1 style={{fontSize: '15vh', paddingLeft: '10vw', paddingTop: '15vh'}}>Hassan</h1>
        </Col>

        <Col style={{width: '50vw', paddingTop: '0vh'}}><img src={miLogo} height={700} width={700} /></Col> */}
      {/* </Row> */}