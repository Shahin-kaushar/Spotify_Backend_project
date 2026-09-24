//server ko start karna 
require("dotenv").config();//this should be the very first line it is important to load the environment variables first then start loading the folder
const app=require("./src/app");
const connectDB=require("./src/db/db");
connectDB();

app.listen(3000,()=>{
    console.log("server is runnig on port 3000");
});