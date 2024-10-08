import express from 'express';
import formRoute from './routes/formRoute.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Vikhilesh')
})
mongoose.connect('mongodb+srv://vikhilesh2411:7JQ0e6816tATnidw@forms.5kqes.mongodb.net/?retryWrites=true&w=majority&appName=Forms').then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err.message);
})
app.use('/api/v1',formRoute);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found'
    });
});
app.use((err, req, res, next) => {
    console.error(err.stack);  
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!',
    });
});
app.listen(3000,()=>{
    console.log('port is listenting on 3000');
});

