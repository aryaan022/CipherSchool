const mongoose = require('mongoose');

mongoose.connect('YOUR_MONGODB_ATLAS_CONNECTION_STRING', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    addSampleUser();
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

async function addSampleUser() {
    const user = new User({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'secret123'
    });

    await user.save();
    console.log('Sample user added');
}
