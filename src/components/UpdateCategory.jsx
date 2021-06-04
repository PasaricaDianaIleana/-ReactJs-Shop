import React,{useEffect, useState,useLocation} from 'react'
import {Form} from 'react-bootstrap'


const UpdateCategory=(props)=>{

    useEffect(()=>{
        alert(props)
    })
    return(
        <div className="row">
            <div className="col-md-12">
                <div>list of products
                  
                </div>
            </div>
        </div>
    )
}
/*function UpdateCategory(props){


const [data,setData]=useState({
    name:"",
    description:""
})
useEffect(
    ()=>{
     
    }
)
    return (
        <Form >
        <Form.Group >
          <Form.Label>Name:</Form.Label>
          <Form.Control id="name" name="name"  type="text" placeholder="Name"></Form.Control>
        </Form.Group>
 
   <Form.Group>
    <Form.Label>Desciption</Form.Label>
    <Form.Control type="text"   id="description" name="description"   placeholder="Description"></Form.Control>
   </Form.Group>

   </Form>
    )
}

*/
export default UpdateCategory