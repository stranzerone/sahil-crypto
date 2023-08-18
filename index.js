import express, { response }  from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import bcrypt from 'bcrypt';
import  session  from 'express-session';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const saltRound = 5;
const app = express();
const database= process.env.DATABASE;
const PORT = process.env.PORT;

app.use(
  session({
    key:"userId",
    secret:process.env.SECRETKEY,
    resave:false,
    saveUninitialized:false,
    cookie:{
      sameSite:false,
      httpOnly:false,
      secure:false
    },
   

  })
)
app.use(cookieParser());


mongoose.connect(database).then(
  console.log("server conndected")
)









app.use(bodyParser.json());
app.use( "*", cors({origin: "http://localhost:3000", credentials: true }));










const dataSchema = new mongoose.Schema({
    
user:{
  type:String,
  required:false
},
name:{
  type:String,
  required:false
},
image:{
  type:String,
  required:false
},
stocks:{
  type:Number,
  required:false
},
amount:{
  type:Number,
  required:false
},
price:{
  type:Number,
  required:true
},
check:{
  type:String,
  required:true
},
Wallet:{
  type:Number,
  required:false
}

})


const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true

  },
  password:{
    type:String,
    required:true
  },
  Token:{
    type:String,
    required:true
  },
  Wallet:{
    type:Number,
    required:true
  }
 


  
  
    
})
const Data = mongoose.model("data",dataSchema);

const Use =  mongoose.model("User",userSchema);






















   
 
 





app.post("/reg",(req,res)=>{
const dat = req.body;

  //email:dat.email,
   bcrypt.hash(dat.password,saltRound,function(err,hash){
if(err){
  console.log(err)
}else{
  console.log("password hashed")
  const user = new Use({
password:hash,
username:dat.username,
name:dat.name,
Wallet:10000000,



Token:"abcd"
  });
  Use.findOne({username:dat.username})
  .then((data)=>{
    if(data){
     res.send("ok");
      console.log("user is registerd");
   
     
    }else{
     res.send("no")
      user.save();
      console.log("user added")
    }


  })
}})
});






app.post("/login",(req,res)=>{

Use.findOne({username:req.body.username})
.then((datas)=>{
if(datas){

  console.log(req.body.username);
  console.log(datas.username);
  bcrypt.compare(req.body.password,datas.password,function(err,result){
    if(err){
      console.log(err);
    }if(result){
      const token = jwt.sign({ userId: datas._id }, "subscribe",{expiresIn:"1h"} );
      res.cookie('token', token);
      
      
   
      
      Use.updateOne({username:datas.username},{Token:token}).then(
        (response)=>{
          console.log("Token added to user");
        }
        
      )

      



      res.status(200).json({ message: 'Login successful' });
   
  
    }

  })}else{
    res.send("np");
    console.log("wrong");
    
  }
  
  
})
});



app.get('/auth', (req, res) => {
  const  token  = req.cookies.token;
  jwt.verify(token,"subscribe", (err, decoded) => {
    if (err) {
      console.log("errrssssss")
      return res.status(401).json({ message: 'no' });
     
    }
    // Token is valid
   
    console.log("verified");
   
    return res.status(200).json({ message: 'ok', decoded });
});
});


 

app.use(cookieParser());







app.post("/data",(req,res)=>{


const get= req.body;
const token =req.cookies.token;
const add = parseFloat(get.stocks);
const price = parseFloat(get.price);

Use.findOne({Token:token}).then(
  (response)=>{
   console.log("user found",response);
   Data.updateOne({user:response.username},{Wallet:response.Wallet})
    Data.find({user:response.username,name:get.name}).then(

      (respon)=>{
if(respon.length>0){
  console.log(respon);
        console.log("there is an data for user",add);
        console.log("new entry stoks",respon[0].stocks);
       const oldS=  parseFloat(respon[0].stocks);
       const latesS=oldS+add;
       console.log("now your total is ",latesS)
        const oldAmount= parseFloat(respon[0].amount);
        
        const adding = parseFloat(latesS)*price;

        Data.updateOne({name:get.name},{stocks:latesS,amount:adding}).then(
          (resp)=>{
            console.log(resp);
          }
        )
        const NewWallet =parseFloat(get.stocks)*parseFloat(get.price);

        Use.findOne({Token:token}).then(
          (res)=>{
           console.log("oooo",get.amount);
           const Owallet= parseFloat(res.Wallet);
          
           const NewWall= Owallet-NewWallet;
           Use.updateOne({Token:token},{Wallet:NewWall}).then(
            (respo)=>{
              console.log(respo);
            }
           )
          }
        )

}else{
  console.log("no response");



 const NWallet = parseFloat(get.stocks)*parseFloat(get.price);
 
  const data = new Data({
   user:response.username,
   name:get.name,
   image:get.image,
   stocks:get.stocks,
   amount:NWallet,
   price:get.price,
   check:get.check,
   Wallet:"000"
   
      })
      data.save();
      Use.findOne({Token:token}).then(
        (res)=>{
          const oldwallet =res.Wallet;
          const NewWallet = parseFloat(oldwallet)-NWallet;
         Use.updateOne({Token:token},{Wallet:NewWallet}).then(
          (respo)=>{
            console.log(respo);
          }
         )
        }
      )
     

    
 
 
}
      }
    
    )
  }

)



})





   app.get("/trade", (req, res) => {
    Data.findOneAndDelete({stocks:0}).then(
      (ress)=>{
        console.log(ress,"I have deleted data successfully");
      }
    )

    Use.findOne({ Token: req.cookies.token }).then((result) => {
      Data.find({ user: result.username }).then((data) => {
        if (data) {
          res.send(data);
          console.log("data sent");
        } else {
          console.log("no user");
        }
      });
    });
  });
  

   app.get("/nav",(req,res)=>{
    const token = req.cookies.token;
    console.log(token);
    
    Use.findOne({Token:token}).then(
      (result)=>{
        res.send(result);
        console.log(result.username);
      }
    )

   
   })










   app.post("/sell",(req,res)=>{
const Token =req.cookies.token;
const amo = parseFloat(req.body.current);
console.log(Token);
console.log("requested money",amo);

Use.findOne({Token:Token}).then(
  (resp)=>{
    const New = parseFloat(resp.Wallet)+amo;
    console.log("money going to be added is ",amo);
    console.log("new balance will be ",New);
    console.log("your old balance is",resp.Wallet);
    Use.updateOne({Token:Token},{Wallet:New}).then(
     (response)=>{
      console.log(response);
      Data.updateOne({username:response.user},{Wallet:response.Wallet}).then(
        (update)=>{
          console.log(update,"this is updaated data");
        }
        
      )
     }
    )

    Data.find({user:resp.username,name:req.body.name}).then(
      (respp)=>{
        console.log(respp);
const oldStocks= respp[0].stocks;
console.log("stocks in your data",respp[0].stocks);
const oldAmo=respp[0].amount;
const newAmo=  parseFloat(req.body.total);
console.log("you were having number of stoks",oldStocks);
console.log("you are selling stoks",req.body.stocks);
const latestS= oldStocks- parseFloat(req.body.stocks);
const latestA=oldAmo-newAmo;
console.log("here are are your selling stoks",req.body.stocks);
console.log(latestS);
Data.updateMany({user:resp.username,name:req.body.name},{stocks:latestS,amount:latestA}).then(
  (ree)=>{
    console.log(ree);
  }
)

      }




    )
   
  }
)

   })


app.post("delete",(req,res)=>{

 const  Token =req.cookies.token;
 console.log("ihave got uer to delete");
 Use.findOne({Token:Token}).then(
  (response)=>{
    const user =response.username;
    console.log("user is being deleted");

    Data.findOneAndDelete({user:user,name:req.body.name}).then(
      (ress)=>{
        console.log(ress);
      }
    )

  }
 )

})



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})