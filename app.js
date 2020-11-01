const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


//routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const paymentRoutes = require("./routes/payment")


//db connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tshirt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("hello connected");
});


//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//my routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('projfrontend/build'));
}

//port starting
const port = 3000;
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});