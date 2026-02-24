if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const port = process.env.PORT || 3000;

// this is the route to use the funcanality of the express routes
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const user = require("./routes/user.js");


// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("MongoDB connection successful");
}).catch(err => {
    console.log("MongoDB connection error:", err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 3600 // time period in seconds
});

store.on("error", (err) => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,  // this is curr date + 7 days with hrs., min, sec, milisec.
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

// app.get("/", (req, res) => {
//     res.send("Welcome to the Airbnb website");
// });

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    // console.log(res.locals.success);
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser", async(req, res)=>{
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student"
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/", user);

// This is called a “catch-all” middleware — it’s used to handle any request 
// that doesn’t match your defined routes.
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});


app.use((err, req, res, next) => {
    console.error("ERROR OCCURRED AT:", req.originalUrl);
    console.error(err.stack);
    const { status = 500, message = "Something went wrong!" } = err;
    res.status(status).render("error.ejs", { message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});