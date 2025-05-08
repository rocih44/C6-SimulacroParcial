const e = require ('express');
const func= require("./funciones.js");
const app= e();

app.use(e.json());

app.post('/operaciones', (req,res)=>{
    const resul= req.body.map(e=>{
        const funcion= func.find(o=>o.name == e.fn);
        return {...e,resultado: funcion.value(e.op1, e.op2)}
    })
    res.status(201).json(resul)
});

app.listen(5000,()=>{
    console.log("App iniciada")
});

console.log("Hola mundo!!");
