import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

export default function UserDetails() {
  let baseURL = "  http://localhost:3002/users";
  let [user , setUsers] = useState ([]);
  let navigate = useNavigate();
  
  let {id} = useParams();
  console.log(id);
  const BackToUsers=() =>{
    navigate("/users");
  };
  useEffect(()=>{
    axios
    .get(`${baseURL}/${id}`)
    .then((response)=>{
      setUsers(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, [ ]);

  return (
    <div className=" bg-light p-5 text-success text-center">
      <div className="container">
        <div className="row">
        <h1 className='mb-5'>User Details</h1>
        <div className="alert alert-warning mt-2 mb-5">
            <h2>Username : {user?.username}</h2>
            <h2>Password : {user?.password}</h2>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat perspiciatis optio non deserunt in architecto facilis ducimus! Fuga adipisci alias incidunt eveniet distinctio velit eum est, nobis deserunt corrupti?</p>
        </div>
      </div>
    </div>
  )
}