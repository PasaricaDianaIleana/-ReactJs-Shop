import React, { useState, useEffect } from 'react'
import ApiHelpers from "../helpers/api";


function AddForm() {
    const [data, setData] = useState({

        name: "",

    });


    function submit(e) {
        e.preventDefault();

        const response = { name: data.name }
        console.log(response)
        ApiHelpers.ProductCategories.postMethod(response).then((response) => console.log(response))



    }
    function handleChange(event) {
        const newData = { ...data }
        newData[event.target.name] = event.target.value;
        setData(newData)

    }



    return (

        <form onSubmit={(e) => submit(e)}>
            <div className="form-group">
                <input className="form-control" onChange={(event) => handleChange(event)} id="name" placeholder="name" name="name" value={data.name} type="text"></input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" >Add</button>
            </div>
        </form>

    )
}



export default AddForm