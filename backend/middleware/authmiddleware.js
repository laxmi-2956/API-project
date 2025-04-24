require("dotenv").config()
 const jwt = require("jsonwebtoken");
const isAuth = (req, res, next) => {

  console.log("Cookies: ", req.cookies); 
  
  let token = req.cookies?.verificationtoken;
 

  jwt.verify(token,  process.env.privateKey,(err, decoded)=> {
     
      if(err){
        return res.status(400).json({message:err})
      }
      if(!decoded){
        return res.status(400).json({message: "token is not valid"})
      }

      
      console.log("Decoded Token: ", decoded); 
      req.user = decoded.user;
      console.log("req.user: ", req.user);
      next()
  });
  
};
    

module.exports = isAuth;