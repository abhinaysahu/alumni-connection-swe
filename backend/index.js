const express = require("express");
const cors = require("cors");
const jobRouter = require("./routes/job/jobRoute");
const usersRouter = require("./routes/user/userRoute");
const postRouter = require("./routes/post/postRoute");
const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow only this origin
  // or use an array for multiple origins:
  // origin: ['http://example1.com', 'http://example2.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  exposedHeaders: ['Content-Range', 'X-Content-Range'], // Headers that can be exposed to the client
  credentials: true, // Allow cookies to be sent with requests
  maxAge: 3600 // How long the results of a preflight request can be cached
};

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: `./config/config.env` });
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/jobs", jobRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is Listening at PORT: ", PORT);
});
