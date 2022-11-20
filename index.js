const { request, response } = require("express");
const express = require(`express`);
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let shoppingCart = [];



app.get("/calculate", (request, response) => {
    const { a , b , operator} = request.query;
    // console.log(operator)
    // const checkOperator = function(){
    //     if(operator == "/"){
    //         return divide(a,b);
    //     }
    //     else if(operator == "-"){
    //         return minus(a,b);
    //     }
    //     else if(operator == "*"){
    //         return multiple(a,b);
    //     }
    //     else{
    //         return sum(a,b);
    //     }
    // }
    // const sum = function(a,b){
    //     return parseInt(a) + parseInt(b);
    // }
    // const minus = function(a,b){
    //     return parseInt(a) - parseInt(b);
    // }
    // const multiple = function(a,b){
    //     return parseInt(a) * parseInt(b);
    // }
    // const divide = function(a,b){
    //     return parseInt(a) / parseInt(b);
    // }
    // let result = checkOperator();
    response.send({
        result: result,
    });
});

    app.get('/all-cart', (request, response) => {
        response.send({
            data: shoppingCart,
            //timeStamp: Date.now(),
        })
    });

    app.post("/", (request, response) => {
        const item = request.body;
        item.id = Date.now().toString();
        shoppingCart.push(item);
    response.send({
        message: "Đã thêm món"
    });
});
    app.put('/:id', (request, response) => {
        const id = request.params.id;
        console.log(id)
        const newData = request.body;
        for(let i = 0;i<shoppingCart.length;i++){
            if(shoppingCart[i].id == id){
                shoppingCart[i] = {...shoppingCart[i], ...newData};
                break;
            }
        }
        response.send({
            message: "Đã cập nhật",
            data: shoppingCart,
        });

    });

    app.delete("/:id", (request, response) => {
        const id = req.params.id;
        for(let i = 0;i<shoppingCart.length;i++){
            if(shoppingCart[i].id == id){
                shoppingCart.splice(i,1);
            }
        }
        response.send({
            data: shoppingCart,
        })
    })

app.listen(5000, () => {
    console.log(`server is running on http://127.0.15000`);
})
