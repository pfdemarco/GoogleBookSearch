const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs

// Connect to the Mongo DB
// This uses mongodb atlas (https://www.mongodb.com/cloud/atlas)
// Follow the steps to create a free mongo db cluster.
// Click CONNECT on your cluster to get your connection uri.
// Use 0.0.0.0/0 for your ip whitelist (allow everything).
// Your connection uri should look something like this:
// mongodb+srv://<username>:<password>@reactapp.t7dug.mongodb.net/<dbname>?retryWrites=true&w=majority
// Set the MONGO_URI environment variable in your heroku deploy:
// https://devcenter.heroku.com/articles/config-vars#using-the-heroku-cli
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
