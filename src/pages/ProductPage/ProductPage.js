import React, { useReducer, useEffect, useContext } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import { DummyProducts_ApiUrl } from '../../helpers/config';
import { getJson } from '../../helpers/helperFn';
import { ProductPageContext } from '../../context/ProductPageContext';

import { ACTIONS_TYPE } from '../../reducer/ProductPageReducer';
import './ProductPage.scss';

const ProductPage = () => {
  const { state, dispatch } = useContext(ProductPageContext);
  console.log(state);
  // const [state, dispatch] = useReducer(ProductPageReducer, iState);

  useEffect(() => {
    dispatch({
      type: ACTIONS_TYPE.FETCH_START,
    });
    (async () => {
      try {
        const data = await getJson(DummyProducts_ApiUrl);
        dispatch({
          type: ACTIONS_TYPE.FETCH_SUCCESS,
          payload: data.products,
        });
      } catch (err) {
        dispatch({
          type: ACTIONS_TYPE.FETCH_ERROR,
          payload: err,
        });
      }
    })();
  }, []);

  // console.log(state);

  return (
    <section className="product-page">
      <Container>
        <Row>
          <Col md={2}>
            <p>Products</p>
          </Col>
          <Col md={10}>
            <Row>
              {state.isLoading ? (
                <p>Please wait while content has been loaded...</p>
              ) : state.error ? (
                <p>{state.error}</p>
              ) : (
                <Row>
                  {state.products &&
                    state.products.map((el) => {
                      return (
                        <Col md={4} key={el.id} className="mb-3">
                          <Card>
                            {/* <img alt="Sample" src={el.thumbnail} /> */}
                            <CardBody>
                              {/* <CardTitle tag="h5">{el.title}</CardTitle> */}
                              <CardSubtitle className="mb-2" tag="h6">
                                {el.title}
                              </CardSubtitle>
                              <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                              >
                                ${el.price}
                              </CardSubtitle>
                              <Button>Add to cart</Button>
                              <Button color="danger">Remove from cart</Button>
                            </CardBody>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductPage;
