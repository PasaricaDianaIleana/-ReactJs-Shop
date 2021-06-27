import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/button.css";
import CategoriesList from '../components/CategoriesList'
import "bootstrap/js/src/collapse.js";
import ProductsAdmin  from '../components/ProductsAdmin'
function Admin() {
   
    return (
        <div>
        <CategoriesList/>
    <ProductsAdmin/>
        </div>
    )
}
export default Admin