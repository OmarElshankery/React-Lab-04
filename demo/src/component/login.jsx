import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Login({onValChange}){
  let {id} = useParams();
  let [user ,setUsers] = useState();
  let baseURL = "http://localhost:3002/users";
  let navigate = useNavigate();

  useEffect(() =>{
    axios.get(`${baseURL}/${id}`).then((response)=>{
      setUsers(response.data);
    });

  }, [id]);
  
  const [formValue, setFormValue] = useState({
      username : "",
      password : "",
  });

  const [errors, setErrors] = useState({
      username :null,
      password :null,
  });

  useEffect(() => {
    if(id){
      axios.get(`${baseURL}/${id}`).then((response)=>{
      setUsers(response.data);
        setFormValue(response.data);
      });
    }
  }, [id]);

  useEffect(() => {}, [formValue.username]);
    const getNameValues = (e) => {
      if (e.target.value.length <= 3) {
        setErrors({
          ...errors,
          username: "UserName Must Be Grater Than 3",
        });
      }else {
        setErrors({
          ...errors,
          username: null,
        });
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value,
        });
      }
    };
  useEffect(() => {}, [formValue.password]);
    const getPasswordValues = (e) => {
      if (e.target.value.length <= 8) {
        setErrors({
          ...errors,
          password: "Password Must Be Grater Than 8 ",
        });
      }else {
        setErrors({
          ...errors,
          password: null,
        });
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value,
        });
      }
    };
  const clickHandler=( )=>{
    if(id){
      axios.put(`${baseURL}/${id}`,formValue)
      .then((response)=>{
        navigate('/users');
      }).catch (error =>{
        console.log(error);
      });
    }else{
      axios
      .post(baseURL,formValue)
      .then ((response)=>{})
      .catch ((error)=>{
        console.log(error);
      });
    }
    navigate("/users");
    };
    return (
      <div className="bg-dark p-5 text-light">
          <h2 className="text-center mb-3">Login</h2>
          <div className="container">
              <div className="row">
                  <input
                  className={`form-control mb-1 ${errors.username ?"red" :"green"}`}
                   type="text"
                   name="username"
                   placeholder={id? `${user?.username}`:"Enter Your Name"}
                   onChange={onValChange}
                   onClick={getNameValues}
                   defaultValue={user?.username}
                  />
                  {errors.username && <p className="text-danger">{errors.username}</p>}
                  <input
                  className={`form-control ${errors.password ?"red":"green"}`}
                   type="password"
                   name="password"
                   placeholder={id? `${user?.password}`:"Enter Your Password"}
                   onChange={getPasswordValues}
                  defaultValue={user?.password}
                  />
                  {errors.password && <p className="text-danger">{errors.password}</p>} 
                  <button className="btn btn-warning mt-4" onClick={clickHandler}>
                    { id? "Edit User":"Add New User"}
                  </button>
                </div>
              </div>
          </div>
    );
}  
export default Login;