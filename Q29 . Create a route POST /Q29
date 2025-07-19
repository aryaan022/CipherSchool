const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the homepage!' });
});

app.get('/about', (req, res) => {
    res.json({ message: 'About page' });
});

app.get('/users', (req, res) => {
    res.json({ users: ['User1', 'User2', 'User3'] });
});

app.post('/message', (req, res) => {
    console.log(req.body);
    res.json({ status: 'Message received' });
});

app.delete('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.json({ status: `User with ID ${req.params.id} deleted` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
