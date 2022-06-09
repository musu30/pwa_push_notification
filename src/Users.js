import React, { useState, useEffect } from "react";
import {Table,Alert} from 'react-bootstrap'
import axios from 'axios';
function Users() {
  const [data, setData] = useState([]);
  const [mode,setMode]=useState('online');
  useEffect(() => {
    let url = "https://fakestoreapi.com/products";


    axios.get(url)
      .then(res => {
        setData(res.data);
        localStorage.setItem("users",JSON.stringify(res.data));
      }).catch(err=>{

          let collection=localStorage.getItem("users");
          setData((JSON.parse(collection)))
          setMode('offline')
      })
  },[]);
  return (
    <div>
        <div>
        {
            mode==='offline'?<div> <Alert  variant="warning">
            you are in offline mode
          </Alert></div>:null
        }
        </div>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>category</th>
            <th>Price</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody >
         { data.map((item) => {
       return(
            <tr style={{color: "black"}}>
                
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.title}</td>
            </tr>
       )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
