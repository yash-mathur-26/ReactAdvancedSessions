const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(express.json());

const users = [
    {id:1,name:"Yash Mathur",email:"yash@mail.com",technology:"react js"},
    {id:2,name:"Devanshi Shah",email:"devanshi@mail.com",technology:"AWS"},
]

app.get('/api/users',(req,res)=>{
    res.json(users);
})

app.post('/api/users',(req,res)=>{
    const newUser = {id:users.length+1,...req.body};
    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(PORT,()=>{
    console.log('Server running at PORT 8081')
})