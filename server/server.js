const express = require('express')
const app = express()
app.use(express.static(`${__dirname}/public`))
app.get('/',(req,res)=> {
    res.sendFile(path.join(_dirname,'../public/index.html'))
})
app.listen(4000, () => console.log(`server running on 4000`))
