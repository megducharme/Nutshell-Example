const APIManager = Object.create(null, {
    getAllUsers: {
        value: () => {
            return fetch("http://localhost:8088/users", {
                method: "GET"
            }).then(result => result.json());
        }
    },
    addUserToDb: {
        value: (user) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(result => result.json());
        }
    }
});




// module.exports = APIManager