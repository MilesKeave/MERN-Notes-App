const express = require("express");
const notes = require("./Data/notes.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddlewares.js");


dotenv.config();
connectDB();
app.use(express.json());

/* app.use(notFound);
app.use(errorHandler); */
app.get("/", (req, res) => {res.send("API is running..")});

app.get("/api/notes", (req, res) => {res.json(notes)});

app.use("/api/users", userRoutes);

/* 

No longer used- was 

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n)=> n._id = req.params.id)
    console.log(req.params);
    res.send(note)
}) */
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5002

app.listen(PORT, console.log('server started port ' + PORT.toString()) );
