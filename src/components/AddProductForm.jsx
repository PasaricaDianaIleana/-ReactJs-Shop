import React, { useState} from 'react'
import ApiHelper from '../helpers/api';

function AddProductForm() {

    const [data, setData] = useState({
        name: "",
        productId: 0,
        price: 0,
        basePrice: 0,
        description: "",
        categoryId: 0,

    })

    function handleChange(event) {
        const newData = { ...data }
        newData[event.target.name] = event.target.value;
        setData(newData)

    }

    function formSubmit(e) {
        e.preventDefault();
        const formValues = {
            name: data.name,
            price: data.price,
            basePrice: data.basePrice,
            description: data.description,
            categoryId: data.categoryId,


        }
        console.log(formValues)
        ApiHelper.Products.postProduct(formValues)
            .then((res) => console.log(res))

    }
    return (


        <form autoComplete="off" onSubmit={(e) => formSubmit(e)} >

            <div className="form-group">
                <input className="form-control" placeholder="Name" name="name"
                    value={data.name || ''} type="text" onChange={(event) => handleChange(event)} />
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Price" name="price"
                    value={data.price || ''} type="text" onChange={(event) => handleChange(event)} />
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="basePrice" name="basePrice"
                    value={data.basePrice || ''} type="text" onChange={(event) => handleChange(event)} />
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Description" name="description"
                    value={data.description || ''} onChange={(event) => handleChange(event)} />
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Category Id" name="categoryId"
                    value={data.categoryId || ''} type="text" onChange={(event) => handleChange(event)} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )

}
export default AddProductForm;