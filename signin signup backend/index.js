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
    addActivity: [{}],

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

app.post("/register", (req, res) => {                                                            // URL BASE POST APP
    const { userName, firstName, lastName, mobileNumber, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {                                                 // check email
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

// Addactivity form Route

app.post("/addactivity", async (req, res) => {
    const { user_id } = req.body

    console.log(req.body)
    delete req.body.user_id

    User.updateOne({ _id: user_id }, { $push: { addActivity: req.body } })
        .then(
            (result, err) => {
                return res.status(200).json({ data: result, message: "Data added Successfully" })
            }
        )
})
//get activity
app.get("/getactivity/:id", async (req, res) => {
    // console.log("showing data")
    console.log(req.params.id)
    console.log("got a request")

    const data = await User.findById(req.params.id)
    console.log(data)
    res.send(data)
    console.log("server request ends here")
})

app.listen(9002, () => {
    console.log("BE started at port 9002")
})

