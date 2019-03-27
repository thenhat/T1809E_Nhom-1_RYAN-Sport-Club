var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(3000);

app.get("/", function (req, res) {
    res.render("index");
});
app.get("/IndoorSports", function (req, res) {
    res.render("IndoorSports");
});
app.get("/OutdoorSports", function (req, res) {
    res.render("OutdoorSports");
});
app.get("/Recreation", function (req, res) {
    res.render("Recreation");
});
app.get("/Ativities", function (req, res) {
    res.render("Ativities");
});
app.get("/Studios", function (req, res) {
    res.render("Studios");
});
app.get("/SuggestionComplaints", function (req, res) {
    res.render("SuggestionComplaints");
});
app.get("/Feedback", function (req, res) {
    res.render("Feedback");
});
app.get("/SIGNUP", function (req, res) {
    res.render("SIGNUP");
});
app.get("/Gym", function (req, res) {
    res.render("Gym");
});
app.get("/KickFit", function (req, res) {
    res.render("KickFit");
});
app.get("/Boxing", function (req, res) {
    res.render("Boxing");
});
app.get("/cycling", function (req, res) {
    res.render("cycling");
});
app.get("/walking", function (req, res) {
    res.render("walking");
});
app.get("/Skateboarding", function (req, res) {
    res.render("Skateboarding");
});
app.get("/chess", function (req, res) {
    res.render("chess");
});
app.get("/LOL", function (req, res) {
    res.render("LOL");
});
app.get("/PILATES", function (req, res) {
    res.render("Pilates");
});
app.get("/WEIGHT-LIFTING", function (req, res) {
    res.render("Weight");
});
app.get("/Kettlebell", function (req, res) {
    res.render("Kettlebell");
});
app.get("/Gallery", function (req, res) {
    res.render("Gallery");
});
app.get("/blogs", function (req, res) {
    res.render("blogs");
});
app.get("/blog-1", function (req, res) {
    res.render("BLOGS/blog-1");
});
app.get("/blog-2", function (req, res) {
    res.render("BLOGS/blog-2");
});
app.get("/blog-3", function (req, res) {
    res.render("BLOGS/blog-3");
});
app.get("/blog-4", function (req, res) {
    res.render("BLOGS/blog-4");
});

