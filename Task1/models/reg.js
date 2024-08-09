const mongoose = require("mongoose");
//const validCategories = ['CSE' , 'ECE' ,'ME' , 'CSBS' , 'IT' , 'CIVIL' , 'CE' , 'EE'];
//connecting mongoDb with nodejs Javascript RunTime Environment

//To handle initial connection errors, you should use .catch() with async/await.
main()
  .then((res) => {
    console.log("Connection Successfull.");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb+srv://Booking:Booking@cluster0.c3z0f.mongodb.net/?retryWrites=true&w=majority");
  //await mongoose.connect("mongodb://127.0.0.1:27017/register");
}

//To handle errors after initial connection was established, you should listen for error events on the connection.
mongoose.connection.on('error', (err) => {
  console.log("Error connecting to DataBase");
});
//once connection is done
mongoose.connection.once('open', (err) => {
  console.log("Connected to DataBase");
});

const regSchema = new mongoose.Schema({
  regd_no : {
    type : String,
    maxLength : 20
  },
  name : {
    type : String
  },
  email : {
    type : String
    
  },
  country : {
    type : String,
    //enum : ['CSE' , 'ECE' ,'ME' , 'AI/ML' , 'CSE-DS' , 'CSBS' , 'IT' , 'CIVIL' , 'CE' , 'EE']
    //enum : validCategories,
    /*select : {
      CSE : 'CSE',
      ECE : 'ECE',
      ME : 'ME' ,
      CSBS : 'CSBS' ,
      IT : 'IT' ,
      CIVIL : 'CIVIL' ,
      CE : 'CE' ,
      EE : 'EE'
    }*/
  }
});
const data = mongoose.model("data",regSchema);//collection and model name is same i.e. data

module.exports = data;