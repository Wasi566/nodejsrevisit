const mongoose = require("mongoose");

const dbConnect = ()=>{
    
        
        mongoose.connect(process.env.DATABASE_URL, 
           {
            useNewurlParser:true ,
            useUnifiedTopology:true
           }
        ).then(console.log("DB Connected Successfully"))
        .catch((error)=>{
            console.log("DB facing connection issues");
            console.log(error);
            process.exit(1);
        })

   
}
module.exports = dbConnect ;
