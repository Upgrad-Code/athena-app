import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './HomePage.scss';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button>Fetch Content</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
