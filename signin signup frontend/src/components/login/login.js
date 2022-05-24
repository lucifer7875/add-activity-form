import React, { useState } from "react";
import "./login.css"
import axios from "axios";
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: "",

    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const Login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)

                // setLoginUser(res.data.user)
                history.push("/dashboard")
            })

    }

    return (
        <div className="Login">
            {/* {console.log("User", user)} */}
            <h1>Login</h1>

            <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handlechange}
            /><br></br><br></br>
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handlechange}
            />
            <br></br>  <br></br>
            <button onClick={Login} >Login</button>

            <br></br>

            or

            <br></br>
            <button onClick={() => history.push("/register")}>Register</button><br></br>(New User First Register)


        </div>
    )
}

export default Login