import React from "react";
import { useState, useEffect } from "react";
import ApiHelper from "../helpers/api";
import { Modal, Button, Form } from "react-bootstrap";

const ProductModal = (props) => {
  const [image, setImage] = useState()
  const [product, setProducts] = useState({
    showModal: false,
    productId: null,
    name: "",
    description: "",
    price: 0,
    basePrice: 0,
    categoryId: null,
    image: "",
  });
  useEffect(() => {
    //console.log(props)
    if (props.open.productId) {
      let productId = props.open.productId;
      ApiHelper.Products.getProductById(productId).then((product) => {
        setProducts(product)
      })
    }
    else{
      setProducts([])
    }
  }, [props.open.productId])
  function handleInputChange(e) {
    const newData = { ...product }
    newData[e.target.name] = e.target.value;
    setProducts(newData)
    console.log(newData);
  }
  function AddProduct() {
    const formValues = {
      name: product.name,
      price: product.price,
      basePrice: product.basePrice,
      description: product.description,
      categoryId: product.categoryId,
    }
    console.log(formValues)
    let formData = new FormData();
    formData.append('File', image);
    ApiHelper.Products.postProduct(formValues)
      .then(res => {
        //console.log(res.productId)
        fetch(
          `http://localhost:63202/api/product/image/` + res.productId,
          {
            method: 'POST',
            body: formData,
          })
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  function fileChange(event) {
    setImage(event.target.files[0]
    )
  }
  function UpdateProduct() {
    const values = {
      productId: props.open.productId,
      name: product.name,
      description: product.description,
      price: product.price,
      basePrice: product.basePrice,
      categoryId: product.categoryId,
      image: product.image
    }
    ApiHelper.Products.editProduct(props.open.productId, values).then((data) => {
      console.log(data)
      window.location.reload();
    })
  }
  function submit(e) {
    e.preventDefault();
    if (props.open.productId == null) {
      AddProduct();
    } else {
      UpdateProduct();
    }

  }
  return (
    <Modal show={props.open.showModal} onHide={props.close}>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              onChange={(e) => handleInputChange(e)}
              id="name"
              name="name"
              value={product.name || ""}
              type="text"
              placeholder="Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              id="description"
              onChange={(e) => handleInputChange(e)}
              name="description"
              value={product.description || ''}
              type="text"
              placeholder="Description"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control
              id="price"
              name="price"
              onChange={(e) => handleInputChange(e)}
              value={product.price || ''}
              type="text"
              placeholder="0"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Base Price:</Form.Label>
            <Form.Control
              id="basePrice"
              name="basePrice"
              onChange={(e) => handleInputChange(e)}
              value={product.basePrice || ""}
              type="text"
              placeholder="0"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Category </Form.Label>
            <Form.Control
              as="select"
              size="sm"
              name="categoryId"
              custom
              value={product.categoryId || ''}
              onChange={(e) => handleInputChange(e)}
            >
              <option>Select a category:</option>
              <option>9</option>
              <option>94</option>
              <option>113</option>
            </Form.Control>
          </Form.Group>
          <label>Product photo </label>
          <br />
          <input
            type="file"
            onChange={fileChange}
            id="file"

            name="file"
          ></input>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"
          onClick={props.close}
        >
          Close
        </Button>
        <Button variant="success"
          onClick={submit}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ProductModal;
