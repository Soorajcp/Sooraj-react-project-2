import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Customer service</Nav.Link>
                <Nav.Link href="#action2">Support</Nav.Link>
                <Nav.Link href="#action2">Store</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row>
            {products.map((product, index) => {
              return (
                <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
                  <Card className=' card mt-3'>
                    <Card.Img variant="top" src={product.image} className='image mx-auto d-block'/>
                    <Card.Body>
                      <Card.Title className='text-center'>{product.title}</Card.Title>
                      <h3 className='price text-center'>${product.price}</h3>
                      <Card.Text className='description text-center'>
                        {product.description}
                      </Card.Text>
                      <Button variant="dark" className='mx-auto d-block'>View product</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
      <hr />
      <footr>
        <p className='footer-sec text-center'>Copyrights 2024-26.  All Rights Reserved.</p>
      </footr>
    </>
  )
}

export default App
