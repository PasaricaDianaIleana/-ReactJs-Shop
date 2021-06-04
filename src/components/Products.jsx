import React,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ApiHelper from '../helpers/api';
import { Card, CardDeck} from 'react-bootstrap'
import "../Styles/cards.css";
function Products(){

const [products,setProducts]=useState([]);

useEffect(()=>{

  ApiHelper.Products.getAll().then(res=>{

    console.log(res)
    setProducts(res)
  })
    //fetch('https://localhost:44395/api/produt/44')
  
   // .then(res=>{
     // console.log(res)
      //setData(res.url)
  //  })

},[]);



    return(

      <div className="container">
          <div className="row">
           
            <CardDeck>
             {
               products.map((products)=>(
                 <div className="col-lg-3" >
                 <Card >
                   <Card.Img variant="top" src={products.image} className="image"/>
                   <Card.Body>
      <Card.Text>
        
      </Card.Text>
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