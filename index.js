import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import userRoute from './src/routes/user.route.js'
import jobRoute from './src/routes/job.route.js'
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();
//setup view engine settings
app.set('view engine', 'ejs');
app.set('views',path.join(path.resolve(),'src','views'));
app.use(session({
    secret: 'JobSeekkeyboardcat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // This line is important to set secure to false for local development purposes. In production, it should be set to true.
 }));

//end view engine settings
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(express.static('public'));
app.use(ejsLayouts);
app.use(userRoute);
app.use(jobRoute);


app.listen('3000');
