import React, { useReducer, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { DummyProducts_ApiUrl } from '../../helpers/config';
import { getJson } from '../../helpers/helperFn';
import {
  iState,
  ACTIONS_TYPE,
  ProductPageReducer,
} from '../../reducer/ProductPageReducer';
import './ProductPage.scss';

const ProductPage = () => {
  const [state, dispatch] = useReducer(ProductPageReducer, iState);

  useEffect(() => {
    dispatch({
      type: ACTIONS_TYPE.FETCH_START,
    });
    (async () => {
      try {
        const data = await getJson(DummyProducts_ApiUrl);
        console.log(data.products);
      } catch (err) {}
    })();
  }, []);
  console.log(state);
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
