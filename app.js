const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
const { Db } = require("mongodb");

const app = express();
app.use(express.static((__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(`mongodb://localhost:27017/ocrp`, { useNewUrlParser: true ,useUnifiedTopology: true});

const data = new mongoose.Schema({
    name: String,
    mail: String,
    username: String,
    password: String,
    mobile: Number,
    address1: String,
    address2: String,
    aadhar: Number
});
const Data = mongoose.model("Data", data);

app.get(`/`,(req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get(`/index.html`,(req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get(`/success.html`,(req, res)=>{
    res.sendFile(__dirname+"/success.html");
});

app.get(`/registration.html`,(req, res)=>{
    res.sendFile(__dirname+"/registration.html");
});

app.post(`/registration.html`,(req, res)=>{
    const fullName = req.body.fullname;
    const mail = req.body.emailaddress;
    const userName = req.body.username;
    const password = req.body.password;
    const mobile = req.body.mobile;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const aadhar = req.body.aadhar;
    const newData = new Data({
        name: fullName,
        mail: mail,
        username: userName,
        password: password,
        mobile: mobile,
        address1: address1,
        address2: address2,
        aadhar: aadhar
    });
    // newData.save();              remember to uncomment this line at the end
    res.sendFile(__dirname+"/success.html");
});

app.get(`/login.html`,(req, res)=>{
    res.sendFile(__dirname+"/login.html");
});

app.post(`/login.html`,(req,res)=>{
    const login = req.body.login;
    const password = req.body.password;
    console.log(login);
    console.log(password);
});

app.get(`/em-report.html`,(req, res)=>{
    res.sendFile(__dirname+"/em-report.html");
});

app.post(`/em-report.html`,(req, res)=>{
    res.sendFile(__dirname+"/success.html");
})

app.get(`/report.html`,(req, res)=>{
    res.sendFile(__dirname+"/report.html");
});

app.post(`/report.html`,(req, res)=>{
    res.sendFile(__dirname+"/success.html");
})

app.get(`/about.html`,(req, res)=>{
    res.sendFile(__dirname+"/about.html");
});

app.get(`/privacy.html`,(req, res)=>{
    res.sendFile(__dirname+"/privacy.html");
});

app.listen(3000,()=>{
    console.log(`Server started on port 3000`);
});