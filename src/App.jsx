import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Nav, Navbar, NavbarBrand } from 'reactstrap'
import miLogo from './assets/miLogo.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  

  return (
    <Container style={{height: '100vh', width: '100vw', color: 'white'}}>
      <Row style={{display: "inline-flex"}}>
        <Col style={{width: '50vw'}}><h1 style={{fontSize: '15vh', paddingLeft: '10vw', paddingTop: '15vh'}}>حسنننني</h1></Col>
        <Col style={{width: '50vw', paddingTop: '0vh'}}><img src={miLogo} height={700} width={700} /></Col>
      </Row>
    </Container>
  )
}

export default App
