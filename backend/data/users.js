const bcrypt = require('bcryptjs');
const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "u1",
        email: "u1@example.com",
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: "u2",
        email: "u2@example.com",
        password: bcrypt.hashSync('123456',10),
    }
]
export default users