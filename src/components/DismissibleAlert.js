import React from "react"
import { Alert } from "react-bootstrap"

const DismissibleAlert = (props) => {
    return (
        <React.Fragment>
            <div></div>
            <div className="col-md-6 alert">
                <Alert variant="danger" onClose={() => props.setShowAlert(false)} dismissible>
                    {props.message}
                </Alert>
            </div>
        </React.Fragment>
    )
}

export default DismissibleAlert;