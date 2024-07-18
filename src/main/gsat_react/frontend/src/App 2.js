import './App.css';
import { Button, Navbar, Container, Nav, NavDropdown, Modal, Form } from 'react-bootstrap';
import { IoIosBasket } from "react-icons/io";
import { useState } from 'react';
// import styled from 'styled-components';

// const SquareButton = styled(Button)`
//   border-radius: 0; /* 각지게 만들기 위해 설정 */
// `;


function App() {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checked, setChecked] = useState(false);


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">GSAT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" style={{ fontSize: "12px" }}onClick={handleShow}>로그인</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <IoIosBasket />

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>로그인 </div>
      <LoginModal handleShow={handleShow} show={show} handleClose={handleClose}    />

      <br /> 
    </div>
  )
}


function LoginModal(props){
  return(
    <>
        {/* <Button variant="primary" onClick={props.handleShow}>
        로그인
      </Button> */}

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="아이디"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Example textarea</Form.Label> */}
              <Form.Control as="textarea" rows={1} placeholder="비밀번호"
              />
            </Form.Group>
            <input id="name" type="checkbox" />          
            <label htmlFor="name">아이디 기억하기</label>
            
          </Form>

        </Modal.Body>
        {/* <Modal.Footer> */}
        <div className="d-grid gap-2">
      <Button variant="light" size="lg">
        로그인
      </Button>
      <Button variant="dark" size="lg">
        회원가입
      </Button>
      <Button variant="success" size="lg">
        SNS 로그인
      </Button>
    </div>
        {/* <Button variant="light" onClick={props.handleClose}>Light</Button>{' '}

          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>   
    </>
  )
}
export default App;
