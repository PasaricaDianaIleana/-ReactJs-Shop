import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/button.css";
import CategoriesList from '../components/CategoriesList'
import "bootstrap/js/src/collapse.js";
import AddForm from '../components/AddForm'
import AddProductForm from './AddProductForm';
function Admin() {
   
    return (
        <div>
        <div className="d-flex">
            <div>
            <p>
                <a className="btn btn-primary" data-toggle="collapse"
                    href="#collapse" role="button" aria-expanded="false" aria-controls="collapse">Add category
                    
                </a>
                </p>
                <div className="collapse" id="collapse">
  <div className="card card-body" style={{color:"red"}}>
      <AddForm/>

      
  </div>
</div>
            
        </div>
        <div>
            <p>
                <a className="btn btn-primary" style={{marginLeft:"160px"}} data-toggle="collapse"
                    href="#collapseProd" role="button" aria-expanded="false" aria-controls="collapse">Add Product
                    
                </a>
                </p>
                <div className="collapse" id="collapseProd">
  <div className="card card-body" >
      <AddProductForm/>
  </div>
</div>
           
        </div>
      
      
        </div>
        <CategoriesList/>
        </div>
    )
}
export default Admin