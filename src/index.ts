import * as dotenv from "dotenv";

dotenv.config();


import app from './server';


app.listen(3002, () => {
    console.log('server started on port 3002')
})




