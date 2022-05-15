const express = require('express');
const app = express();
const port = 3000;
const dogRouter=require('./routes/dogs');
const adminRouter=require('./routes/admin');

app.use('/',dogRouter);
app.use('/admin',adminRouter);

app.listen(port, () => {console.log('listening on port 3000');});