//const express require("express"); //Forma antigua

import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import veterinarioRoutes  from './routes/veterinarioRoutes.js'
import pacienteRoutes  from './routes/pacienteRoutes.js'

const app = express();

app.use(express.json());
dotenv.config();

conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
  origin : function (origin, callback){
    if (dominiosPermitidos.indexOf(origin)!== -1){
      //El Origen del Request está permitido
      callback(null,true)
    }else{
      callback( new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use('/api/veterinarians',veterinarioRoutes);
app.use('/api/patients',pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});




