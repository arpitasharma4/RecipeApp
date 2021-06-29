const User = require("./models/User");      
const mongoose = require("mongoose");

exports.signup = (req, res) => {   
    let {firstName, lastName, email, password } = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        password,
    });
    user
        .save()
        .then(() => res.status(200).send(user))
        .catch((error) => {
            console.error(error);
            return res.status(500).send("ERROR");
        });
};

exports.login = (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email: email })
    .then((user) => {
        console.info(`User with email ${email} was successfully found!`);
    if (password === user.password) {
        console.info("login successfully");
        return res.status(200).send(user);
    }
    console.warn("Password was incorrect");
    return res.status(401).send("Password was incorrect");
})
.catch((error) => {
    console.error(`User with email ${email} doesn't exists!`);
    return res.status(404).send(`User with email ${email} doesn't exists!`);
});
};

