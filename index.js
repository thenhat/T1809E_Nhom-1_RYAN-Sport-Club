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
app.get("/TPHCM", function (req, res) {
    res.render("TPHCM");
});
app.get("/HANOI", function (req, res) {
    res.render("HANOI");
});
app.get("/DANANG", function (req, res) {
    res.render("DANANG");
});
app.get("/BIENHOA", function (req, res) {
    res.render("BIENHOA");
});
app.get("/PILATES", function (req, res) {
    res.render("Pilates");
});
app.get("/KETTLEBELL POWER", function (req, res) {
    res.render("KETTLEBELL-POWER");
});
app.get("/WEIGHT LIFTING", function (req, res) {
    res.render("WEIGHT-LIFTING");
});
