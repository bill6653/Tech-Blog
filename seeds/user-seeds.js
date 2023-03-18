// todo: build user seeds js

const { User } = require('../models');

const userData = [
    {
        name: "Xandromus",
        email: "Xandromus@gmail.com",
        password: "p@ssword1"
    },
    {
        name: "Lernantino",
        email: "Lernantino@gmail.com",
        password: "p@ssword2"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;