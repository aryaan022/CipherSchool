const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect('YOUR_MONGODB_ATLAS_CONNECTION_STRING', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ status: 'User created', user });
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.put('/users/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ status: 'User updated', updatedUser });
});

app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ status: 'User deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
