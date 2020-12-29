const express = require('express')
const app = express()
 
app.get('/api/user/login', (req, res) => {
    res.send('Hello World!')
})
 
app.listen(3001, () => {
    return console.log('blog server running on port 3001!')
})