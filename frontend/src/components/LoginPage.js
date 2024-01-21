import MainScreen from "./MainScreen";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loader";
import ErrorMessage from "./ErrorMessage";

function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            const config={
            headers: {"Content-type":"application/json"}
            }

            setLoading(true);
            const{data} = await axios.post("/api/users/login", {
                email,password
            }, config);

            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
        }
   
        catch(error){
            //console.log(error);
            setError(true);
            
            //console.log(error);
            setLoading(false);

        }
        
    }

    



    function Login(){
        return(
            <div className="center">
               
                {error && (<ErrorMessage>{"Invalid Email or Password"}</ErrorMessage>)}
                {loading && (<Loading/>)}

            <Form onSubmit = {submitHandler}>
      <Form.Group className="mb-3 width-controll" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 width-controll" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      <h3>Dont Have an Account? <Link to="/register"><span>Sign Up </span></Link></h3>
    </Form>
    </div>
  );
    }



    return(
        <MainScreen title="Login" child={Login()}/>
    );


}

export default LoginPage;