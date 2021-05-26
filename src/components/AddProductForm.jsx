import React,{useState,useEffect} from 'react'
import ApiHelper from '../helpers/api';




function AddProductForm(){

  
    const [data,setData]=useState({
        name:"",
        price:0,
        basePrice:0,
        description:"",
        categoryId:0,
        image:'',
        imageFile:null

    })
      
    function handleChange(event) {
        const newData = { ...data }
        newData[event.target.name] = event.target.value;
        setData(newData)

    }

    function formSubmit(e){
        e.preventDefault();
       const formValues={
           name:data.name,
           price:data.price,
           basePrice:data.basePrice,
           description:data.description,
           categoryId:data.categoryId,
           image:data.image,
          
       }
       console.log(formValues)
       ApiHelper.Products.postProduct(formValues)
       .then((res)=>console.log(res))
       .then(res=>res.json());
    }
return(
    
    
 <form autoComplete="off" onSubmit={(e)=>formSubmit(e)} >
     <img src={data.image} className='img-fluid'></img>
     <div className="form-group">
         <input type="file" accept="image/*"  className="form-control-file"/>
     </div>

<div className="form-group">
    <input className="form-control" placeholder="Name" name="name" 
    value={data.name || ''} type="text"  onChange={(event) => handleChange(event)}/>
</div>
<div className="form-group">
    <input className="form-control" placeholder="Price" name="price"
     value={data.price || ''} type="text"  onChange={(event) => handleChange(event)}/>
</div>
<div className="form-group">
    <input className="form-control" placeholder="basePrice" name="basePrice"
     value={data.basePrice || ''} type="text"  onChange={(event) => handleChange(event)}/>
</div>
<div className="form-group">
    <textarea className="form-control" placeholder="Description" name="description"
     value={data.description || ''}   onChange={(event) => handleChange(event)}/>
</div>
<div className="form-group">
    <input className="form-control" placeholder="Category Id" name="categoryId"
     value={data.categoryId || ''} type="text"  onChange={(event) => handleChange(event)}/>
</div>
     <div className="form-group">
         <button type="submit" className="btn btn-primary">Submit</button>
     </div> 
 </form>
)

}
export default AddProductForm;