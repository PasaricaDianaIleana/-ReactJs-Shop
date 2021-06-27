import React, { useEffect, useState } from 'react'
import ApiHelper from '../helpers/api';
import { Table, Button } from 'react-bootstrap'
import ProductModal from './ProductModal'
function ProductsAdmin() {
    const [product, setProduct] = useState([]);
    const [modal, setModal] = useState({
        showModal: false,
        productId: 0,
        name: '',
        description: '',
        price: 0,
        basePrice: 0,
        categoryId: 0,
        image: "",
    })
  
 
    useEffect(() => {
        ApiHelper.Products.getAll().then((res) => {
            setProduct(res)
           console.log(res)
        })
    },[])

function AddProduct(){
    setModal({showModal:true})
}
function CloseModal(){
    setModal({showModal:false})
}
function EditProduct(productId){
//alert(productId)

setModal({
    showModal:true,
    productId:productId,
})

}

    function deleteProduct(productId) {
        ApiHelper.Products.deleteProduct(productId).then((res) => console.log(res))
    }

    return (
        <div>
            <h2>Products</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Base Price</th>
                        <th><Button variant="link" onClick={() => AddProduct()}>Add New</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((p) => (
                        <tr key={p.productId}>

                            <td>{p.productId}</td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>{p.categoryId}</td>
                            <td>{p.price}</td>
                            <td>{p.basePrice}</td>
                            
                            <td>
                                <Button variant="link" onClick={()=>EditProduct(p.productId)} >Update</Button>
                                <Button variant="link" onClick={() => deleteProduct(p.productId)}>Delete</Button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </Table>
          <ProductModal open={modal} close={CloseModal}/>
        </div>
    )

}
export default ProductsAdmin;