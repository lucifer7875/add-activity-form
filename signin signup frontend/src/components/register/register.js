import React, { useState } from "react";
import "../login/login.css"
import "./register.css"
import { useHistory } from "react-router-dom"
import axios from "axios"
import Form from 'react-bootstrap/Form'

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { userName, firstName, lastName, mobileNumber, email, password, confirmPassword } = user
        if (userName && firstName && lastName && mobileNumber && email && password && (password === confirmPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("incorrect input")
        }
    }

    return (
        < div className="Register" >
            {console.log("User", user)}
            <h1>Register </h1>
            <Form className="row g-3">

                <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    id="validationDefaultuserName"
                    value={user.userName}
                    onChange={handlechange}
                    required

                />
                <br></br>

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    id="validationDefaultfirstName"
                    value={user.firstName}
                    onChange={handlechange}
                    required
                />
                <br></br>

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"

                    id="validationDefaultlastName"
                    value={user.lastName}
                    onChange={handlechange}
                    required
                />
                <br></br>

                <input
                    type="number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    id="validationDefaultmobileNumber"
                    value={user.mobileNumber}
                    onChange={handlechange}
                    required
                />
                <br></br>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"

                    id="validationDefaultemail"
                    value={user.email}
                    onChange={handlechange}
                    required
                />
                <br></br>

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"

                    id="validationDefaultpassword"
                    value={user.password}
                    onChange={handlechange}
                    required
                />
                <br></br>

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Confirm Password"

                    id="validationDefaultconfirmPassword"
                    value={user.confirmPassword}
                    onChange={handlechange}
                    required
                />
                <br></br>


                <button onClick={register}>Register</button><br></br>
                or
                <br></br>
                <button onClick={() => history.push("/login")}>Login</button>
                <br></br> (User allready register)

            </Form>

        </div >
    )


}

export default Register