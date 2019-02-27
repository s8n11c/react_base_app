var pickle = require('pickle')
var express = require('express')
var fs = require('fs')
var app = express()


const port=7070;


app.get('/', function (req, res) {
  res.send('You must be Lost !! ')
})


app.get('/setBitches', function (req,res){
  console.log("request", req)

  let path='./bitchesDB'

const storeData = (req, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}
})

app.get('/getBitches', function (req,res){

    // read js data from file
    let path='./bitchesDB'
    const loadData = (path) => {
   try {
     pickle.dumps(fs.readFileSync(path, 'utf8'), function(pickled)
     {
       console.log("pickled:", pickled);
  //     pickle.loads(pickled, function(original)
    //   {
      //   console.log("original:", original);
//       });
     });
   } catch (err) {
     console.error(err)
     return false
   }



 }
})

console.log(" server now is up and running on port ", port)
app.listen(port)
