import { useState } from 'react'
import miLogo from './assets/miLogo.png';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Container style={{height: '100vh', width: '100vw', margin: '0', color: 'black'}}>

      <Row style={{width: '100vw', display: 'inline-flex'}}>

        <Col style={{width: '50vw', paddingTop: '10vh'}}><h1 style={{color: 'white', fontSize: '200px'}}>حسن</h1></Col>

        <Col style={{width: '50vw', paddingTop: '6vh'}}><img src={miLogo} width={700} /></Col>
      </Row>
      


    </Container>


  
      
    

    
    </>
    
  )
}

export default App




        {/* <img src={miLogo} height={500} width={500} fluid/> */}
