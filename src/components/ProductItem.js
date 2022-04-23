import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {useCart} from 'react-use-cart';

const ProductItem = (props) => {
    const {addItem} = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <Card className="p-0 overflow-hidden h-100 shadow">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.Title}</Card.Title>
              <Card.Text>{props.desc}</Card.Text>
              <Card.Text>{props.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {addItem(props.item)}}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
    
export default ProductItem