import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';
import studentsRoutes from './routes/Student.js';
const port = 5000;

 
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/students',studentsRoutes)
// app.use(bodyParser.json({limit:"20mb",extended:true}));
// app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

const uri =`mongodb+srv://praktisTwo:4WerKp5OIgvm1CEG@cluster0.33vow.mongodb.net/mongoose?retryWrites=true&w=majority`;
console.log(uri)

 
 
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

  mongoose.connect('mongodb://localhost:27017/praktisTwo',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => console.log(err.message));
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })