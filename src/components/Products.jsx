import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ApiHelper from '../helpers/api';
import { Card, CardDeck } from 'react-bootstrap'
import "../Styles/cards.css";
const Products = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    ApiHelper.Products.getAll().then((res) => {

      setProducts(res)
      //console.log(res)
    })


  },[]);
  return (

    <div className="container">
      <div className="row">

        <CardDeck>
          {
            products.map((products) => (
              <div className="col-lg-3" key={products.productId} >
                <Card >
                
                  <Card.Img variant="top" src={products.image} className="image" alt="image" />
                  <span>  </span>
                 
                  <Card.Body className="card-info">
                      <span>{products.name}</span>
                      <p className="base-price"> {products.basePrice} lei</p>
                      <p className="price">{products.price} lei</p>
                  </Card.Body>
                </Card>
              </div>
            ))
          }

        </CardDeck>


      </div>
    </div>

  )
}
export default Products