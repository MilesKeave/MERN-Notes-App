
import react from "react";
import MainScreen from "./MainScreen";


function MyNotes(){

    function child1(){

        return (

            <div>
                <h1 className = "heading">
                    yoyoyoyo
                </h1>
            </div>
        );
    };
    


    return(
    <MainScreen title = "Welcome back Miles" child = {child1()} > My Notes </MainScreen> 
    );

}

export default MyNotes