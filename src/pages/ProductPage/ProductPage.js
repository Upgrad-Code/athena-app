import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { DummyProducts_ApiUrl } from '../../helpers/config';
import './ProductPage.scss';

// console.log(DummyProducts_ApiUrl);

const ProductPage = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <p>Product page..</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
