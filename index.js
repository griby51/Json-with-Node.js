//-------Lowdb-------
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const data_ = new FileSync("data.json")
const data = low(data_)

//main
//var txt = "Salut"
var id = "ddiu" 

data.defaults({message: [], number: []}).write()

if(!data.get("number").find({id: id}).value()){
    data.get("number").push({id: id, nbr: 1}).write()
}

let datanumber = data.get("number").filter({id: id}).find("nbr").value().nbr
let newnumber = datanumber + 1
console.log(newnumber)

data.get("number").find({id: id}).assign({nbr: newnumber}).write()

/*if(!data.get("message").find({text: txt}).value()){
    console.log("Unfind message")
    data.get("message").push({text: txt}).write()
}else{
    console.log("Find")
}*/