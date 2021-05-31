import React,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ApiHelper from '../helpers/api';
import { Card, CardDeck, Table } from 'react-bootstrap'
function Products(){

const [products,setProducts]=useState([]);
const[image,setImage]=useState('')
useEffect(()=>{

  ApiHelper.Products.getAll(44).then(res=>{

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
                 <Card style={{width:500}}>
                   <Card.Img variant="top" src={products.image} style={{width:200}}/>
                   <Card.Body>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
                   </Card>
    ))
             }
         
             </CardDeck>

                
              </div>
          </div>
      
    )
}
export default Products