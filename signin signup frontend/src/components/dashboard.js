import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useHistory } from "react-router-dom"


const Dashboard = ({ setLoginUser }) => {
    const history = useHistory()

    return (
        <div className="dashboard">
            <h1>You are at Dashboard</h1>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <button class="btn btn-primary" onClick={() => history.push("/login")}>Logout</button>

                    <button class="btn btn-info" onClick={() => history.push("/addactivity")}>Add Activity</button>

                    <button class="btn btn-info" onClick={() => history.push("/showactivity")}>Show Activity</button>

                </Container>
            </Navbar>
            <br />


        </div>
    )
}

export default Dashboard