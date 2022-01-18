console.log("Enter USD ");
let stdin3 = process.openStdin();
stdin3.addListener("data",function(str3){
    let usd = parseInt(str3);
  var a = usd;
  var c = usd * 33.1;
  var message = usd+'USD is ' + c + ' THB.';
    console.log(message)
stdin3.destroy()    
});