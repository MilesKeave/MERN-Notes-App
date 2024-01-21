import Alert from 'react-bootstrap/Alert';
import react from "react";


function ErrorMessage({variant="danger", children}){

    return(
            <Alert key={variant} variant={variant} style={{fontSize: 20}}>
                    <strong>{children}</strong>
            </Alert>
        );

}

export default ErrorMessage;