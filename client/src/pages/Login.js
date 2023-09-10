import React, {useEffect} from "react";
import {Form, Input, message} from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/Loginpage.css";

const Login = () => {

  const navigate = useNavigate()
    const submitHandler = async (values) => {
        try {
          const {data} = await axios.post('/users/login', values)
          message.success('Login sucessfull')
          localStorage.setItem('user', JSON.stringify({...data.user,password:''}))
          navigate('/')
        } catch (error) {
          message.error('Something went wrong')
        }
    };
    
     //prevent for login user
  useEffect(() => {
    if(localStorage.getItem('user')){
      navigate('/');
    }
  },[navigate]);



    return (
        <>
        <div className="login-page ">
        
        <div className="row-container">
          <h2>Welcome to Expense Tracker Application!</h2>
          {/* <div className="col-md-6">
            <img src={img} alt="login-img" width={"100%"} height="100%" />
    </div> */}
          <div className="box-container">
            <Form layout="vertical" onFinish={submitHandler}>
              <h3>Login Form</h3>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  Not a user ? Click here to Register !
                </Link>
                <button className="btn">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
        </>
    );
};

export default Login;