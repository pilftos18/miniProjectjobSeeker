import UserModel from '../models/user.model.js';


export default class UserController {

    getLogin(req, res) {
        res.render('user-login', {errorMessage: null});
    }

    postregister(req, res) { 

        const {name, email, password} = req.body;
        UserModel.add(name, email, password);
        res.render('user-login', {errorMessage: null});
    }

    isvalidate(req, res) {  

        if (!req.session) {
            return res.render("404", { msg: "Session middleware is not working" });
        }
        const { email, password } = req.body;
        const userToAuthenticate = UserModel.isValidaUser(email, password);
        // console.log("authenticate",userToAuthenticate);
        
        if (!userToAuthenticate) {
            res.render("404", {msg: "user not found pls register"});
        }
        if(userToAuthenticate?.email === email && userToAuthenticate?.password === password) {
            if(!req.session){
                return res.render("404", { msg: "Session is not initialized" });
            }
          req.session.user = userToAuthenticate;
          res.redirect("/jobs");
        } else {
          res.render("404", { msg: "invalid credentials" });
        }
    }

  logout(req, res){
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
  }

   
    
}