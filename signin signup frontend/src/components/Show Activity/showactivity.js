import React from "react";

class ShowActivity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();

    }

    callAPI() {
        // fetch data from API
        fetch("http://localhost:9002/addactivity").then(
            (response) => Response.json()
        ).then((data) => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default ShowActivity

