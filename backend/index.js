const express = require("express");
const cors = require("cors");
const jobRouter = require("./routes/job/jobRoute");
const usersRouter = require("./routes/user/userRoute");
const postRouter = require("./routes/post/postRoute");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/jobs", jobRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is Listening at PORT: ", PORT);
});
