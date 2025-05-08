const e = require ('express');
const func= require("./funciones2.js");
const app= e();

app.use(e.json());

app.post('/operaciones2', (req,res)=>{
try{
    const resul= req.body.map(e=>{
        const funcion= func[e.fn];
        if (funcion) throw new Error("Operacion no soportada!!");
        return {...e,resultado: funcion.value(e.op1, e.op2)}
    })
    res.status(201).json(resul);
}catch(e){
    res.status(500).json({mensaje: e.message})}
});

app.listen(5000,()=>{
    console.log("App iniciada")
});


