// hi
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.listen(8080, ()=>{
    console.log("Listening on 8080");
})