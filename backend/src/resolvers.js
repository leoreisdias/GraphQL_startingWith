const users = [
    { id: 1, name: "Leonardo", email: "leonardo@gmail.com" },
    { id: 2, name: "Vanessa", email: "vanessa@gmail.com" },
]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => {

        }
    }
}