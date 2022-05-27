import React from "react"
import "./getactivity.css"
class getActivity extends React.Component {
    // Constructor
    constructor(props) {
        super(props)

        this.state = {
            items: {},
            DataisLoaded: false,
        }
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        const user_id = JSON.parse(localStorage.getItem("user_values"))._id
        fetch(`http://localhost:9002/getactivity/${user_id}`)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.setState({
                    items: json.addActivity,
                    DataisLoaded: true,
                })
            })

            .catch((error) => console.log(error))
    }
    render() {
        var allItems = this.state.items
        var parsedList
        if (Array.isArray(allItems)) {
            console.log("items is present")
            console.log(allItems)
            parsedList = allItems.map((activity, index) => (


                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{activity.addActivity}</td>
                    <td>{activity.subActivity}</td>
                    <td>{activity.startDate}</td>
                    <td>{activity.endDate}</td>
                    {activity.Status == "Pending" ? (
                        <td className="red">{activity.Status}</td>
                    ) : (
                        <td className="green">{activity.Status}</td>
                    )}

                </tr>

                //    <ul>
                //         <li>{activity.addActivity}</li>
                //         <li>{activity.subActivity}</li>
                //         <li>{activity.startDate}</li>
                //         <li>{activity.endDate}</li>

                //         {activity.Status == "Pending" ? (
                //             <li className="red">{activity.Status}</li>
                //         ) : (
                //             <li className="green">{activity.Status}</li>
                //         )}
                //     </ul>
            ))
        }

        // return <div className="navigation">{parsedList}</div>
        return <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">addActivity</th>
                    <th scope="col">subActivity</th>
                    <th scope="col">startDate</th>
                    <th scope="col">endDate</th>
                    <th >Status</th>
                </tr>
            </thead>
            <tbody>
                {parsedList}
            </tbody>
        </table>
    }
}

export default getActivity
