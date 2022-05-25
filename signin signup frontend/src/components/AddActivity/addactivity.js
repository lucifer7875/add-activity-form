import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { History } from "history";



const AddActivity = () => {

    const [addactivity, setUser] = useState({
        addActivity: "",
        subActivity: "",
        startDate: "",
        endDate: "",
        Status: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...addactivity,
            [name]: value
        })
    }

    return (

        <div>



            {/* <select class="form-select" name="Work Status" aria-label="Default select example">

                <option value="1">Done</option>
                <option value="2">Pending</option>
            </select> */}

            <Container>
                <button class="btn btn-info">Submit</button>..
                <button class="btn btn-info">Back</button>
            </Container>
        </div>








    )


}

export default AddActivity