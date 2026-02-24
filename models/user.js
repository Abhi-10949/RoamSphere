const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// and user-name and password is auto provided by passport-local-mongoose
// like this as shown below
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);