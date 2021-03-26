const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));


app.listen(3000,function(){
    console.log(`app listening on port 8888 : 3000`);
});
