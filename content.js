const fs = require('fs');

const getJson = (position) => {
  const data = fs.readFileSync("./data.json");
  const json = JSON.parse(data);
  return json[position];
};

const avatar = (req, res, next) => {
    const position = req.cookies.position || "Good";
    req.position = position;
    req.description = getJson(position);
    next();
}

const insanity = (req, res, next) => {
    const insanity = req.cookies.insanity || "1";
    req.insanity = insanity;
    next();
}

const faves = (req, res, next) => {
    const faveFood = req.cookies.food || "Tiramisu";
    const faveColor = req.cookies.color || "Blue";

    if(req.position === "Good"){
        req.description.likes.push(faveColor, faveFood);
    }
    if(req.position === "Evil"){
        req.description.dislikes.push(faveColor, faveFood);
    }

    next();
};


module.exports = {
	avatar,
	faves,
	insanity
}