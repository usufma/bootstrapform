import React, { useContext } from 'react';
import { productContext } from './productcontext';
import Card from 'react-bootstrap/Card';

const ProductDetails = () => {
  const {
    productName,
    productPrice,
    productQuantity,
    productDes,
  } = useContext(productContext);


  return (
    <Card style={{ width: '35%', marginLeft: '30%', marginTop: '5%', padding: '10px', backgroundColor: 'goldenrod' }}>
      <Card.Body>
        <Card.Title style={{width: '40%', marginLeft: '35%', padding: '10px', backgroundColor: 'blue', color: 'white' }}>Product Details</Card.Title>
        <Card.Text style={{fontSize:'24px', color:'red' }} >Product Name: {productName}</Card.Text>
        <Card.Text style={{fontSize:'24px', color:'red'}}>Product Price: {productPrice}</Card.Text>
        <Card.Text style={{fontSize:'24px', color:'red' }}>Product Quantity: {productQuantity}</Card.Text>
        <Card.Text style={{fontSize:'24px', color:'red' }}>Product Description: {productDes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
