const jwt=require("jsonwebtoken")

//middleware help to prevent the  use of repeated code 

//middleware require 3 paramaetes  req,res, next

async function authArtist(req,res,next) {

    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"unauthorised"
        })
    }

    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET)
        if(decoded!=='artist'){
            return res.status(403).json({
                messgae:"you don't have access"
            })
        }
        req.user=decoded //created a new property
        next();
        /*if token mismatched then catch error will through the error 
        but if the token is correct and the if condition is not satisifed then 
        next() will work and 
        router.post('/create', authMiddlewar e.authArtist ,upload.single("music"), musicController.createMusic);
        to transfer the request to the next function like here it is upload.single('music') ie multer then to transfer the request to 
        the next method we use next() else request won't pass */

    }
    catch(error){
    console.log(error)
    return res.status(401).json(
      {  message:"unauthorised"}
    )}
    
    
}

async function authUser(req,res,next){
    const token=res.cookies.token;
    if(!token){
        res.status(401).json({
            message:"unauthorised"
        })
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role!=="user"){
            return res.status(403).json({
                message:"you don't have access"
            })
        }
        req.user=decoded // creeted new property by middleware 
        //we can use this later 
        next()
        
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            message:"Unauthorised"
        })
        
    }

}
module.exports={authArtist,authUser}