import React, {useEffect} from "react";
import {Form, Input, message} from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/registerPage.css";

const Register = () => {

  const navigate = useNavigate()
    //from submit
    const submitHandler = async (values) => {
       try {
         await axios.post('/users/register', values)
         message.success('Registration sucessfull')
         navigate('/login')
       } catch (error) {
         message.error('invalid details')
       }
    };

  //prevent for login user
  useEffect(() => {
    if(localStorage.getItem('user')){
      navigate('/');
    }
  },[navigate]);




    return (
        <div className="register-page"> 
         <div className="box">
          <Form className='register-Form' layout="vertical" onFinish={submitHandler}>
            <h1> Register Form </h1>
            <Form.Item label="Name" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input type="email"/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type="password"/>
            </Form.Item>
            <div className="d">
              <Link to="/login">Already registered? Login</Link>
              <button className="button1">Register</button>
            </div>
          </Form>
          </div>
        </div>
    );
};

export default Register;