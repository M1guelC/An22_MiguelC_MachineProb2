const express = require("express");
const mongoose = require("mongoose")
const loginRoute = require("./routes/loginRoute")
const productRoute = require("./routes/prodRoute")
const userRoute = require("./routes/userRoute")
const app = express();
const port = 4000


app.use(express.json())
mongoose.connect(
    "mongodb+srv://MiguelC:Ilovemongodb@sandbox.al4elz5.mongodb.net/An22_Sample_Database?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use("/login", loginRoute)
app.use("/products", productRoute)
app.use("/users", userRoute)

app.get("/", async (req, res) => {
    res.send("Hello")
})

mongoose.connection.once('open', () => console.log("Now Connected to MongoDb Atlas"))
app.listen(port, () => {
    console.log("App is running at port " + port)
})