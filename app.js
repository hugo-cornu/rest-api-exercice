// IMPORTING EXPRESS FUNCTIONNALITIES
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const indexRouter = require("./routes/index.routes.js");
app.use("/", indexRouter);
const footballTeamsRouter = require("./routes/football-teams.routes.js");
app.use("/football-teams", footballTeamsRouter);

// GET /deliberate/error
app.get("/deliberate/error", (request, response, next) => {
  throw new Error("hello");
});

const addErrorHandling = require("./error-handling.js");
addErrorHandling(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
