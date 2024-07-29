import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../assets/heroImage.png'; 
import dish1 from '../assets/dish1.png' 
import dish2 from '../assets/dish2.png'; 
import dish3 from '../assets/dish3.png'; 
import category1 from '../assets/category1.png'; 
import category2 from '../assets/category2.png'; 
import category3 from '../assets/category3.png'; 

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <h1>Welcome to Foodies Paradise</h1>
      </div>

      {/* Featured Dishes */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Dishes</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={dish1} />
              <Card.Body>
                <Card.Title>Dish 1</Card.Title>
                <Card.Text>Delicious and mouth-watering Dish 1.</Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={dish2} />
              <Card.Body>
                <Card.Title>Dish 2</Card.Title>
                <Card.Text>Delicious and mouth-watering Dish 2.</Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={dish3} />
              <Card.Body>
                <Card.Title>Dish 3</Card.Title>
                <Card.Text>Delicious and mouth-watering Dish 3.</Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Categories */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Categories</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={category1} />
              <Card.Body>
                <Card.Title>Category 1</Card.Title>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={category2} />
              <Card.Body>
                <Card.Title>Category 2</Card.Title>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={category3} />
              <Card.Body>
                <Card.Title>Category 3</Card.Title>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
