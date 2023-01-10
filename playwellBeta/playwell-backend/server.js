require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require("./config/db")
const errorHandler = require("./middleware/error")



//Conect Db 
connectDB()

app.get("/", (req, res, next) => {
  res.send("Api running");
}); 


//CORS
app.use(cors(corsOptions))
app.use(express.json());

//Conecting Routes
app.use("/api/", require("./routes/subs"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handle (Should be last piece of middleware)
app.use(errorHandler)



const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("server runing on 5000");
});


process.on("unhandledRejection" , (err,promise)=>{
    console.log(`Logged Error : ${err}`);
    server.close(()=>process.exit(1))
})

