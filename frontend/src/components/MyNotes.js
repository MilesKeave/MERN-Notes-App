
import react from "react";
import MainScreen from "./MainScreen";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import notes from "../Data/notes.js";
import "./MyNotes.css";
import Accordion from 'react-bootstrap/Accordion';


function MyNotes(){

    function child1(){

        const variant = "Warning";

        const deleteHandler =(id)=> {
            if(window.confirm("Are you sure?")){

            }

        }

        return (
<div>
            <div className = "newNote" style={{marginLeft: 10}}>
            <Button style={{marginLeft: 10}} variant="success"> Create New Note</Button> 
            </div>

        <div className = "rows">
       
            {(notes).map((note) => (
                <Accordion defaultActiveKey="0" className="hide">
                <Accordion.Item eventKey={note._id.toString()} className="hide">

                        <Card
                        bg={variant.toLowerCase()}
                        key={variant} 
                        /* text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} */
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Accordion.Header >
                        <Card.Header className="hide">{"Note: "}{note._id}</Card.Header>
                        </Accordion.Header>
                        <Accordion.Body >
                        <Card.Body>
                        <Card.Title> {note.title} </Card.Title>
                        <Card.Text>
                            {note.content}
                        </Card.Text>
                        <Button variant="outline-primary" href={'/notes/${note._id}'}> {"Edit"}</Button>
                        <Button variant="outline-danger" onClick ={()=> {deleteHandler(note._id)}}> {"Delete"}</Button>
                        </Card.Body>
                        </Accordion.Body>
                    </Card>
                    </Accordion.Item>
                    </Accordion>
                    )
                    

                )}
            
                </div>

</div>


        );
    };
    


    return(
    <MainScreen title = "Welcome back Miles" child = {child1()} > My Notes </MainScreen> 
    );

}

export default MyNotes