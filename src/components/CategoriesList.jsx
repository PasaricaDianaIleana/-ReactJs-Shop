import React, { useState, useEffect } from "react";
import ApiHelper from "../helpers/api";
import { Table, Button } from "react-bootstrap";
import CategoryModal from "./CategoryModal";

function CategoriesList() {
  const [categories, setData] = useState([]);

  const [modal, setModal] = useState({
    showModal: false,
    categoryId: null,
    name: "",
    description: "",
  });

  useEffect(() => {
    ApiHelper.ProductCategories.all().then((res) => {
      setData(res);
    });
  }, []);

  function deleteCategory(categoryId) {
    ApiHelper.ProductCategories.deleteCategory(categoryId).then((res) =>
      console.log(res),
      window.location.reload());
    
  }
  function EditCategory(categoryId) {
   
      setModal({
        showModal: true,
        categoryId:categoryId,
        
      });
    
  }

  function AddNew() {
    setModal({ showModal: true });
  }
  function CloseModal() {
    setModal({ showModal: false });
  }
  return (
    <div>
      <h2>Categories</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>
              <Button variant="link" onClick={() => AddNew()}>
                Add New
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.categoryId}>
              <td>{c.categoryId}</td>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <td>
                <Button
                  variant="link"
                  onClick={() => EditCategory(c.categoryId)}
                >
                  Update
                </Button>
                <Button
                  variant="link"
                  onClick={() => deleteCategory(c.categoryId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CategoryModal isOpen={modal} close={CloseModal} />
    </div>
  );
}

export default CategoriesList;
