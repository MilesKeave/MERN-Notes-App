import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";


function MainScreen(props){
    const title = props.title;
    const child = props.child;

    return(

       <div className = "mainback">
            <Container >
                <Row>
                    <div className = "page">
                       
                        <h1 className = "heading">{title}</h1>
                        <hr/>
                    <div>
                    {child}
                    </div>
                    </div>
                </Row>
            </Container>
            </div>
        
    );


}

export default MainScreen