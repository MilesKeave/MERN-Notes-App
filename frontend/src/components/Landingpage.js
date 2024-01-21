import {Container, Row, Button} from "react-bootstrap";
import "./Landingpage.css"


const Landingpage = ({history}) =>{

   /*  useEffect(()=>{
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo){
            history.push("/mynotes");
        }


    }, [histroy]) */

    return(
      
        <div className = "main yellow">
            <Container>
                <Row>
                    <div className = "intro-text">
                        <div>
                            <h1 className = "title"> Welcome to your Notes App</h1>
                            <p className = "subtitle"> A safe space to store your notes</p>
                        </div>
                        <div className = "buttonContainer">
                            <a href = "/login">
                                <Button size="lg" variant="primary" className= "landingButton">
                                    Login
                                </Button>
                            </a>
                            <a href = "/register">
                                <Button size="lg" variant="outline-primary" className= "landingButton">
                                    Sign up
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>

       

    )
}

export default Landingpage