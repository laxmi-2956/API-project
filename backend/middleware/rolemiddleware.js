const CheckAdmin = (req , res, next)=>{
   
    console.log(req.user)


    if(req.user.role!= "admin"){
        return  res.status(401).json({message :"u can't access this resourses"})
    }
    next()

}


module.exports =CheckAdmin