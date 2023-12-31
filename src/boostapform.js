import React, { useContext } from 'react';
import { productContext } from './productcontext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BootstrapForms() {
  const {
    setProductname,
    setProductprice,
    setProductquantity,
    setProductDes,
    setShowproduct,
  } = useContext(productContext);

  const handleProductNameChange = (event) => {
    setProductname(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductprice(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductquantity(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDes(event.target.value);
  };

  const handleSubmit = () => {
    setShowproduct(true);
  };

  return (
    
    <Form style={{ width: '40%', margin: '10% auto', padding: '10px', backgroundColor: 'goldenrod' }}>
  <h2>Enter the Product Details</h2>
  <div className="d-flex justify-content-center">
    <Form.Group className="mb-3" controlId="formGroupProductName">
      <Form.Control
        type="text"
        placeholder="Enter the product name"
        style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '20px' }}
        onChange={handleProductNameChange}
      />
    </Form.Group>
  </div>

  <div className="d-flex justify-content-center">
    <Form.Group className="mb-3" controlId="formGroupProductPrice">
      <Form.Control
        type="text"
        placeholder="Enter the product price"
        style={{ padding: '15px', marginBottom: '20px', width: '100%', borderRadius: '20px', border: '1px solid gray' }}
        onChange={handleProductPriceChange}
      />
    </Form.Group>
  </div>

  <div className="d-flex justify-content-center">
    <Form.Group className="mb-3" controlId="formGroupProductQuantity">
      <Form.Control
        type="text"
        placeholder="Enter the product quantity"
        style={{ padding: '15px', marginBottom: '20px', width: '100%', borderRadius: '20px', border: '1px solid gray' }}
        onChange={handleProductQuantityChange}
      />
    </Form.Group>
  </div>

  <div className="d-flex justify-content-center">
    <Form.Group className="mb-3" controlId="formGroupProductDescription">
      <Form.Control
        type="text"
        placeholder="Enter product description"
        style={{ padding: '15px', marginBottom: '20px', width: '100%', borderRadius: '20px', border: '1px solid gray' }}
        onChange={handleProductDescriptionChange}
      />
    </Form.Group>
  </div>

  <div className="d-flex justify-content-center">
    <Button
      variant="primary"
      type="submit"
      style={{ padding: '10px', backgroundColor: 'blue', borderRadius: '20px', border: 'none', color: 'white' }}
      onClick={handleSubmit}
    >
      Submit
    </Button>
  </div>
</Form>

  );
}

export default BootstrapForms;
