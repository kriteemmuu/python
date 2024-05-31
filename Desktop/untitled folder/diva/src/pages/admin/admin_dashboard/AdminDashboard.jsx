import React, { useState, useEffect } from 'react';
import { createProductApi, getAllProducts } from '../../../apis/Api';
import { toast } from 'react-toastify';

const AdminDashboard = () => {

    // State for all fetched products
    const [products, setProducts] = useState([]);

    // Call API initially (Page Load) - Set all fetched products to state
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.Products);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(products);

    // UseState for product details
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');

    // State for image
    const [productImage, setProductImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    // Image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0];
        setProductImage(file); // for backend
        setPreviewImage(URL.createObjectURL(file));
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a form data (text, files)
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productPrice', productPrice);
        formData.append('productCategory', productCategory);
        formData.append('productDescription', productDescription);
        formData.append('productImage', productImage);

        // Make an API call
        createProductApi(formData).then((res) => {
            // For successful API
            if (res.status === 201) {
                toast.success(res.data.message);
                setProducts([...products, res.data.product]);
            }
        }).catch((error) => {
            // For error status code
            if (error.response) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message);
                } else if (error.response.status === 500) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Something went wrong!");
                }
            } else {
                toast.error("Something went wrong!");
            }
        });
    };

    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>

                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create a New Product</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="">
                                        <label>Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)} type="text" className='form-control' placeholder='Enter Product Name' />

                                        <label className='mt-2'>Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control' placeholder='Enter Product Price' />

                                        <label className='mt-2'>Choose Category</label>
                                        <select onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                                            <option value="maternity_clothes">Maternity Clothes</option>
                                            <option value="nursing_gear">Nursing Gear</option>
                                            <option value="baby_products">Baby Products</option>
                                            <option value="maternity_accessories">Maternity Accessories</option>
                                        </select>

                                        <label className='mt-2'>Enter Description</label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control' placeholder='Enter Product Description'></textarea>

                                        <label className='mt-2'>Choose Product Image</label>
                                        <input onChange={handleImage} type='file' className='form-control' />

                                        {/* Preview Image */}
                                        {previewImage && <img src={previewImage} alt='preview' className='img-fluid rounded mt-2' />}
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" className="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='table mt-2'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((singleProduct) => (
                            <tr key={singleProduct._id}>
                                <td>
                                    <img width={'40px'} height={'40px'} src={`http://localhost:5500/products/${singleProduct.productImage}`} alt="" />
                                </td>
                                <td>{singleProduct.productName}</td>
                                <td>{singleProduct.productPrice}</td>
                                <td>{singleProduct.productCategory}</td>
                                <td>{singleProduct.productDescription}</td>
                                <td>
                                    <button className='btn btn-primary'>Edit</button>
                                    <button className='btn btn-danger ms-2'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminDashboard;
