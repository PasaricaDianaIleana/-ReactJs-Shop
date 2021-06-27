import React, { useEffect } from "react";
import { useState } from "react";
import ApiHelper from "../helpers/api";
import { Modal, Button, Form } from "react-bootstrap";
const CategoryModal = (props) => {
  const [category, setCategory] = useState({
    name: "",
    categoriesId: null,
    description: "",
  });
  useEffect(() => {
    //console.log(props)
    if (props.isOpen.categoryId != null) {
      //console.log("edit mode")
      let categoryId = props.isOpen.categoryId;
      ApiHelper.ProductCategories.getCategoryById(categoryId).then(
        (categoryData) => {
          // console.log(categoryData)
          setCategory(categoryData);
        }
      );
    }
    else{
      setCategory([])
    }
  }, [props.isOpen.categoryId]);
  function handleChange(event) {
    const newData = { ...category };
    newData[event.target.name] = event.target.value;
    setCategory(newData);
  }
  function Submit(e) {
    e.preventDefault();
    if(props.isOpen.categoryId==null){
    AddCategory();
}else {
    UpdateCategory();
}
  }

  function AddCategory() {
    const dataValues = {
      name: category.name,
      description: category.description,
    };
    ApiHelper.ProductCategories.postMethod(dataValues).then((response) =>
      console.log(response),
      window.location.reload());
    
}
  
function UpdateCategory(){
    const dataValues={
        categoryId:props.isOpen.categoryId,
        name: category.name,
        description: category.description,  
    }
ApiHelper.ProductCategories.updateCategory(props.isOpen.categoryId,dataValues).then((values)=>{
    console.log(values)
    window.location.reload();
})
}
  return (
    <Modal show={props.isOpen.showModal} onHide={props.close}>
     
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              id="name"
              onChange={(event) => handleChange(event)}
              value={category.name || ""}
              name="name"
              type="text"
              placeholder="Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Desciption</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event)}
              value={category.description || ""}
              type="text"
              id="description"
              name="description"
              placeholder="Description"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.close}>
          Close
        </Button>
        <Button variant="success" onClick={Submit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CategoryModal;
