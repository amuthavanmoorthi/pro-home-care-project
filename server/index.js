const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql");

var expressFunction = express();
expressFunction.use(cors());
expressFunction.use(bodyparser.json())
expressFunction.use(express.json())
expressFunction.use(bodyparser.urlencoded({extended:true}))
expressFunction.use(express.static('static'))

var sqlConnect = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "mysql@123!",
    database : "phc"
})

sqlConnect.connect((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Database connected");
    }
})

expressFunction.post ("/Register", (requst, response) =>{
    let {first_name, last_name, email, phone_number, password, roll, address, landmark, city, state} = requst.body
    let insertQuery = 'insert into users (first_name,last_name, email, phone_number, password, roll, address, landmark, city, state, username) values (?,?,?,?,?,?,?,?,?,?,?)'

    sqlConnect.query(insertQuery,[first_name, last_name, email,phone_number, password, roll, address,  landmark, city, state, email], (error, result) =>{
        if (error) {
            response.send({"status":"error"})
            console.log(error)
        } else {
            response.send({"status" : "success"})
        }
    } )
})


expressFunction.post ("/Wedding", (requst, response) =>{
    let {workname,place,count,date,time,phone,address} = requst.body
    let weddingInsertQuery = 'insert into wedding(workname,place,count,date,time, phone, address)values(?,?,?,?,?,?,?)'
    sqlConnect.query(weddingInsertQuery,[workname,place,count,date,time,phone,address], (error, result) =>{
        if (error) {
            response.send({"status":"error"})
            console.log(error)
        } else { 
            response.send({"status" : "success"})
        }
    } )
})

expressFunction.post ("/Painting", (requst, response) =>{
    let {work_name, date, time, phone, address} = requst.body
    let paintingInsertQuery = 'insert into painting(work_name,date,time,phone,address)values(?,?,?,?,?)'
    sqlConnect.query(paintingInsertQuery,[work_name,date,time, phone, address], (error, result) =>{
        if (error) {
            response.send({"status":"error"})
            console.log(error)
        } else { 
            response.send({"status" : "success"})
        }
    } )
})

expressFunction.post ("/HomeCleaning", (requst, response) =>{
    let {work_name, date, time, phone, address} = requst.body
    let paintingInsertQuery = 'insert into home_cleaning(work_name,date,time,phone,address)values(?,?,?,?,?)'
    sqlConnect.query(paintingInsertQuery,[work_name,date,time, phone, address], (error, result) =>{
        if (error) {
            response.send({"status":"error"})
            console.log(error)
        } else { 
            response.send({"status" : "success"})
        }
    } )
})

//Get All
expressFunction.get("/getAll",(request,response)=>{
    var selectingQuery = "select * from users";
    sqlConnect.query(selectingQuery,(error,result)=>{
        if (error) {
            response.send(error)
            console.log(error)
        } else {
            response.send(result)
        }
    })
})

expressFunction.get("/getAllPainting",(request,response)=>{
    var selectingQuery = "select * from painting";
    sqlConnect.query(selectingQuery,(error,result)=>{
        if (error) {
            response.send(error)
            console.log(error)
        } else {
            response.send(result)
        }
    })
})



expressFunction.get("/getAllWedding",(request,response)=>{
    var selectingQuery = "select * from wedding";
    sqlConnect.query(selectingQuery,(error,result)=>{
        if (error) {
            response.send(error)
            console.log(error)
        } else {
            response.send(result)
        }
    })
})

expressFunction.get("/getAllWorker",(request,response)=>{
    var selectingQuery = "select * from home_cleaning";
    sqlConnect.query(selectingQuery,(error,result)=>{
        if (error) {
            response.send(error)
            console.log(error)
        } else {
            response.send(result)
        }
    })
})


//login
expressFunction.post("/Login", (request, response)=>{
    let {username, password} = request.body
    var loginQuery = "select * from users where username=?"
    sqlConnect.query(loginQuery,[username], (error, result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else if(result.length>0){
            var dbusername = result[0].username
            var dbpassword = result[0].password
            var id = result[0].id   
            var roll = result[0].roll
            if(dbusername === username && dbpassword === password){
                response.send({"status":"success","id":id, "roll":roll})
            }
            else{
                response.send({"status":"invalid"})
            }
        }
        else{
            response.send({"status" : "empty_set"})
        }
    })
})

//get one 
expressFunction.get('/getone/:id', (request, response) =>{
    let {id} = request.params
    let getonequery = 'select * from users where id = ?'
    sqlConnect.query(getonequery, [id], (error, result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})


//update
expressFunction.put('/update/:id', (request, response) =>{
    let {id} = request.params
    let {first_name,last_name, email, phone_number,password, roll, address, landmark, city, state} = request.body

    let updateQuery = 'update users set first_name = ? ,last_name = ? , email = ?, phone_number = ? ,password = ?, roll = ?, address = ?, landmark = ?, city = ?, state = ? where id = ?'

    sqlConnect.query(updateQuery, [first_name,last_name, email, phone_number,password, roll, address, landmark, city, state, id], (error, result) => {
        if(error){
            response.send({"status" : "error"})
            console.log(error)
        }
        else{
            response.send({"status" : "success"})
        }
    })
})
expressFunction.post('/delete', (request,response)=>{
    let id = request.body.id
    let deletequery = 'delete from users where id=?'
    sqlConnect.query(deletequery,[id],(error,result)=>{
        if(error){ 
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

expressFunction.post('/homeCleaningDelete', (request,response)=>{
    let {home_cleaning_id} = request.body
    console.log(home_cleaning_id);
    let deletequery = 'delete from home_cleaning where home_cleaning_id =?'
    sqlConnect.query(deletequery,[home_cleaning_id],(error,result)=>{
        if(error){ 
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

expressFunction.post('/PaintDelete', (request,response)=>{
    let {painting_id} = request.body
    console.log(painting_id);
    let deletequery = 'delete from painting where painting_id =?'
    sqlConnect.query(deletequery,[painting_id],(error,result)=>{
        if(error){ 
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

expressFunction.post('/WeddingDelete', (request,response)=>{
    let {wedding_id} = request.body
    console.log(wedding_id);
    let deletequery = 'delete from wedding where wedding_id =?'
    sqlConnect.query(deletequery,[wedding_id],(error,result)=>{
        if(error){ 
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

expressFunction.listen(7000,()=>{
    console.log("Port Running 7000");
})