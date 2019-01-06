console.log("starting");


setTimeout(() => {
  console.log("function 1 is running ")
} ,2000)

setTimeout(function(){
  console.log("function 2 is running ")
},0)

console.log(" finished")
