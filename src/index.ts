import express from 'express';


const app = express();

app.get("/", (req, res) => {
    res.json({message: 'Hello Express'});

})

app.listen(3002, () => {
    console.log('server started on port 3002')
})

