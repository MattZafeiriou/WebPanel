const userSchema = require('./schemas/userSchema');

function createUser(name, email, password, role) {
    const User = new userSchema({
        name: name,
        email: email,
        passwordHash: password,
        role: role
    });
    return User.save().then(() => {
        console.log('User created');
    }).catch((error) => {
        console.error('Error creating user: ', error.message);
    });
}

module.exports = createUser;