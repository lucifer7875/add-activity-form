import React, { useState } from "react";

import { useHistory } from "react-router-dom"


const Dashboard = ({ setLoginUser }) => {
    const history = useHistory()

    return (
        <div className="dashboard">
            <h1>You are at Homepage</h1>

            <button onClick={() => history.push("/login")}>Logout</button>

        </div>
    )
}

export default Dashboard