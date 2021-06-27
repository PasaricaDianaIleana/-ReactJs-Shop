import React, { useEffect, useState } from "react";
import { CardDeck,Card } from "react-bootstrap";
import ApiHelper from '../helpers/api';
import "../Styles/cards.css";
const ProductList=(props)=>{


    const[productsList,setProducts]=useState([])
    useEffect(()=>{
        var id=props.match.params.id;
     ApiHelper.Products.getProductsByCategory(id).then((product)=>{
         console.log(product)
         setProducts(product)
     })
    },[props.match.params.id])
    return(
        <div className="container-fluid">
        <div className="row">
            <CardDeck>
                {
                    productsList.map((products)=>(
                  <div className="col-lg-3" key={products.productId}>
                <Card>
                <Card.Img variant="top" src={products.image} className="image zoom-in"/>
               <span></span>
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
export default ProductList;