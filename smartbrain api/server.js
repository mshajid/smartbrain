const express = require('express');
const app = express()

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
            id: '123',
            name: 'doe',
            email: 'doe@gmail.com',
            password: 'cookiesjar',
            entries: 0,
            joined: new Date()
        },
        {
            id: '123',
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
    res.json(' Sign in is working!')
})

app.listen(3000, ()=> {
    console.log('app is running on Port 3000');
})