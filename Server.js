import App from "./App.js";
App.listen(process.env.PORT,()=>{
    console.log(`connection is successfully run at port ${process.env.PORT}`);
})