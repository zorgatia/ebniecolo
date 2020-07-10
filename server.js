const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB();


app.use(express.json({ extended: false}));

app.use('/api/user',require('./routes/api/user'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/prof',require('./routes/api/prof'))
app.use('/api/project',require('./routes/api/project'))
app.use('/api/produit',require('./routes/api/produit'))




if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))
    app.get('*',(req,res)=> {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


const PORT =  process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));