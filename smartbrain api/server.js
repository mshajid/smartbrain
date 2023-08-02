const express = require('express');
const bodyParser = require('body-parser');



const app = express()
app.use(bodyParser.json());

const database = {
    users: [
        {
            id: '123',
            name: 'john',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'doe',
            email: 'doe@gmail.com',
            password: 'cookiesjar',
            entries: 0,
            joined: new Date()
        },
        {
            id: '125',
            name: 'malik',
            email: 'malik@gmail.com',
            password: 'friedrice',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send('This is working')
})

app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0]. password) {
        res.json('Success')
    } else {
        res.status(400).json('error login in. Try again!')
    }
})

app.listen(3000, ()=> {
    console.log('app is running on Port 3000');
})