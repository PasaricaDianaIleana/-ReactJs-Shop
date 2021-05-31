import React, { useState, useEffect } from 'react';
import ApiHelper from '../helpers/api';
import { Table, Button, Modal } from 'react-bootstrap'


function CategoriesList() {

    const [categories, setData] = useState([]);
    const [show, setShow] = useState({
        showModal: false,
        name: '',
        categoriesId: null
    });
    useEffect(() => {
        ApiHelper.ProductCategories.all().then((res) => {
            setData(res)
        })

    })
    const handleClose = () => setShow({ showModal: false });
    function handleShow() {

        setShow({ showModal: true });
    }
    function handleChange(event) {
        const newData = { ...show }
        newData[event.target.name] = event.target.value;
        setShow(newData)
        console.log(newData)
    }
    function deleteCategory(categoryId) {
        //

        ApiHelper.ProductCategories.deleteCategory(categoryId)
            .then((res) => console.log(res))

    }
    function UpdateCategory(categoryId, e) {
        //alert("Button clicked")
        alert(show.categoryId)
        console.log("na")


    }

    return (
        <div>
            <Table bordered hover size="sm" className='w-50 mt-5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>

                </thead>
                <tbody>

                    {categories.map((c) => (
                        <tr key={c.categoryId}>
                            <td>
                                {c.categoryId}
                            </td>
                            <td>
                                {c.name}
                            </td>
                            <td>
                                <Button onClick={() => handleShow(c.categoryId)}>Update</Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => deleteCategory(c.categoryId)}>Delete</Button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </Table>
            <Modal show={show.showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => UpdateCategory(e, categories.categoryId)} >
                        <label>
                            Name:
                       <input type="text" name="name" value={show.name || ''} onChange={(event) => handleChange(event)} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default CategoriesList