import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(
    "mongodb://localhost:27017/taskDB",
    {

        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("DB Connected")
    })

const userSchema = new mongoose.Schema({
    name: "string",
    email: "string",
    password: "string",
})
const User = new mongoose.model("User", userSchema)

// routes
app.post("/login", (req, res) => {                                   // URL BASE POST APP
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login successfull", user: user })
            } else {
                res.send({ message: "password did not match" })
            }
        } else {
            res.send({ message: "User not found" })
        }
    })
})

app.post("/register", (req, res) => {                                // URL BASE POST APP
    const { userName, firstName, lastName, mobileNumber, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {                  // check email
        if (user) {
            res.send({ message: "user already registerd" })
        } else {
            const user = new User({
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                mobileNumber: mobileNumber,
                email: email,
                password: password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered , plese Login " })
                }
            })
        }
    })

})


app.listen(9002, () => {
    console.log("BE started at port 9002")
})

