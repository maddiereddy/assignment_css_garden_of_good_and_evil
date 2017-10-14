
const content = require('./content');

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

var cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['asdf1234567890qwer']
}));

const exphbs = require("express-handlebars");
const hbs = exphbs.create({
  defaultLayout: "main",
  partialsDir: 'views/',
  helpers: {
    setSelected: function(value, currentValue) {
      if (value == currentValue) {
        return "selected";
      } else {
        return "";
      }
    },
    setChecked: function(value, currentValue) {
      if (value == currentValue) {
        return "checked";
      } else {
        return "";
      }
    }
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(content.avatar);
app.use(content.faves);
app.use(content.insanity);

app.get('/', (req , res) => {
    res.render('index', 
      {
        description: req.description,
        insanity: req.cookies.insanity,
        color: req.cookies.color,
        food: req.cookies.food,
        position: req.cookies.position     
      }
    );     
});

app.post('/', (req, res) => {
    
    res.cookie("food", req.body.food);
    res.cookie("color", req.body.colorPicker);
    res.cookie("insanity", req.body.insanity);
    res.cookie("position", req.body.position);
    
    res.redirect("back");
});


app.use(express.static(__dirname + "/public"));

app.listen(4300, () => {
  console.log("Listening on localhost:4300!");
});