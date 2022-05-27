import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useHistory } from "react-router-dom"



const AddActivity = () => {

    const history = useHistory()

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

    const addActivity = () => {
        addactivity.user_id = JSON.parse(
            localStorage.getItem("user_values")
        )._id
        axios
            .post("http://localhost:9002/addactivity", addactivity)
            .then((res) => {
                alert(res.data.message)
                history.push("/showactivity")
            })
    }

    return (

        <div className="addActivity">
            {console.log("addactivity", addactivity)}

            <table class="table">
                <tr >
                    Add Activity :
                    <td>
                        <textarea
                            className="form-control"
                            type="text"
                            name="addActivity"
                            id="addActivity"
                            onChange={handleChange}
                            rows="3"
                        >
                        </textarea>
                    </td>
                </tr><br />
                <tr >
                    Sub Activity :
                    <td>
                        <textarea
                            className="form-control"
                            type="text"
                            name="subActivity"
                            id="subActivity"
                            onChange={handleChange}
                            rows="1"
                        >
                        </textarea>
                    </td>
                </tr><br />
                <tr >
                    Start Date :
                    <td>
                        <input className="form-control"
                            name="startDate"
                            type="text"
                            maxlength="10"
                            id="startDate"
                            placeholder="dd/MM/YYYY"
                            onChange={handleChange}
                            onclick="scwShow(this,startDate);"
                        >
                        </input>
                    </td>
                </tr><br />
                <tr>
                    End Date :
                    <td>
                        <input className="form-control"
                            name="endDate"
                            type="text"
                            maxlength="10"
                            id="endDate"
                            placeholder="dd/MM/YYYY"
                            onChange={handleChange}
                            onclick="scwShow(this,endDate);"
                        >
                        </input>
                    </td>
                </tr><br />
                <tr>
                    Status :
                    <td>
                        <select className="form-select"
                            name="Status"
                            aria-label="Default select example"
                            value={addactivity.Status}
                            onChange={handleChange}>
                            <option >Add Your Status</option>
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </td>
                </tr>

                <td>
                    <button className="btn btn-info" onClick={addActivity}>Submit</button>
                </td>
                <td>
                    <button className="btn btn-info" onClick={() => history.push("/")}>Back</button>
                </td>
            </table>

        </div>

    )


}

export default AddActivity