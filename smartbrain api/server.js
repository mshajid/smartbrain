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
    res.send(database.users)
})

app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0]. password) {
        res.json('Success')
    } else {
        res.status(400).json('error login in. Try again!')
    }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '128',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(`Welcome ${name}, This is your email ${email} that registered with our smartbrain system `)
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach((user) => {
        if(user.id === id) {
            found = true;
            return res.json(user)
        }
    })
    if (!found) {
        res.status(400).json('There is no such a user.')
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body; 
    let found = false;
    database.users.forEach((user) => {
        if(user.id === id) {
            found=true;
            user.entries ++;
            return res.json(user.entries);
        }
    })
    if (!found) {
        res.status(400).json('There is no such a user with the ID')
    }
})

app.listen(3000, ()=> {
    console.log('app is running on Port 3000');
})