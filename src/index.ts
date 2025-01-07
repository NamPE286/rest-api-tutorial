import express from "express";

const app = express();

app.get("/abc", (req, res) => {
    res.send("Hello");
});

app.listen(8000, () => {
    console.log("Server started on port 8000")
})