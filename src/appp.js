
import './App.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
import {tdata} from './Data'
import React,{useState} from 'react';

function App() {
  
const [Search, setSearch]=useState("")
  console.log(tdata);
  return (
    <div className="App">

      <Container>
        <h1 className='text-center mt-4'>Search Filter</h1>
        <Form>
          <InputGroup className='my-3'>
        <FormControl
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Search by name'
        />
          </InputGroup>
        </Form>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>phone number</th>
        </tr>
      </thead>
      <tbody>
      {
      tdata.filter((item)=>{
        return Search.toLowerCase()===''?item:item.first_name.toLowerCase().includes(Search)
      })
      
      
      
      .map((item)=> (
        <tr>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.phone_number}</td>
        </tr>
      ))
    }
      </tbody>
    </Table>
      </Container>
    </div>
  );
}

export default App;
