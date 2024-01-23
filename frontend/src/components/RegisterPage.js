import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "./MainScreen";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import Loading from "./Loader";
import { useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import { useSelector } from "react-redux";

function RegisterPage(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
   /*  const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false); */

    const dispatch = useDispatch();
    const history = useNavigate();

    const userRegister = useSelector((state)=> state.userRegister);
    //if error try userLogin instead of userRegister

    const {loading, userInfo, error} = userRegister;

    useEffect(()=>{

        console.log(userInfo)

        if (userInfo != null){
            console.log(userInfo)
            history("/mynotes");
        }
    }, [userInfo, history])




    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword){
            setMessage("Passwords do not match");
        }
        else{

            dispatch(register(name, email, password, pic));
        }


        /* if (password !== confirmPassword){
            setMessage("Passwords do not match");
        }
        else{
            setMessage(null);
            try{
                const config={
                    headers: {
                        "Content-type": "application/json",
                    },

                };
                setLoading(true);

                const {data} = await axios.post(
                    "/api/users",
                    {name, password, email, pic},
                    config
                )

            }catch(error){
                setError(error.response.data.message);

            }

        }
        console.log(email);
        setLoading(false); */
    }

    const postDetails =(pics)=>{

        if (!pics){
            return setPicMessage("Please select an image");

        }
       setPicMessage(null);
       if(pics.type==="image/jpeg" || pics.type==="image/png"){
        console.log("here");
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", 'NotesApp');
           /*  data.append("cloud_name", 'dwhqkvhst');  */
            fetch("https://api.cloudinary.com/v1_1/dwhqkvhst/image/upload", {
                method: "POST",
                body: data,

            }).then((res)=> res.json()).then((data)=> {
                console.log(data);
                setPic(data.url.toString())
            })
            .catch((err) =>{
                console.log(error);

            });

       }else{
        return setPicMessage("Please select an image");
       }




    }



    function Register(){
        return(
    <div className="center">
        {error && <ErrorMessage> {error} </ErrorMessage>}
        {message && <ErrorMessage>{message}</ErrorMessage>}
        {loading && <Loading/>}

    <Form onSubmit ={submitHandler}>
        <Form.Group className="mb-3 width-controll" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" value = {name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3 width-controll" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 width-controll" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3 width-controll" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
      </Form.Group>

      {picMessage && (<ErrorMessage>{picMessage}</ErrorMessage>)}

      <Form.Group /* controlId="pic" */>
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control
            onChange={(e)=>{postDetails(e.target.files[0])}}
            id = "custom-file"
            type ="file"
            label = "Upload Profile Picture"
            accept=".png,.jpg,.jpeg,.webp"
          
        />

       
      </Form.Group> 

      <h3>Already Have an Account? <Link to="/login"><span>Login </span></Link></h3>
     
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
    }



    return(
        <MainScreen title="Sign Up" child={Register()}/>
    );

}

export default RegisterPage;