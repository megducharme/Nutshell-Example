// let APIManager = require("./main")

APIManager.getAllUsers()
.then(result => {
    console.log(result);
    loginVerification(result);
});

function loginVerification(users){

    //values from the form when someone hits submit
    let userName = 'meg';
    // let name = docuemnet.getElementById("entryName")
    let email = 'meg@meg.meg';
    // let email = docuemnet.getElementById("entryName")

    let currentUser = users.find(user => {
        return user.userName === userName && user.email === email;
    });

    if(currentUser){
        alert("yay you are logged in now!");
        sessionStorage.setItem("activeUser", JSON.stringify(currentUser));
        //take them to a new view
    }else{
        alert("you are not in our db, please register");
    }

}

function register(){
    //values from the form when someone hits submit
    let userName = 'meg';
    // let name = docuemnet.getElementById("entryName")
    let email = 'meg@meg.meg';
    // let email = docuemnet.getElementById("entryName")

    //get users from the database
    APIManager.getAllUsers().then(allUsers =>{
        let registeringUser = {
            userName: username,
            email: email
        }
        //loop over the users in the database and compare values from the form
        for(let i = 0; i < allUsers.length; i++){
            if(allUsers[i].userName === userName || allUsers[i].email === email){
                alert("your username AND email must be unique. We found a duplicate in your database.")
            }else{
                alert("woooo! you're logged in!")
                //add them to db! and theeeeeennnn
                APIManager.addUserToDb(registeringUser)
                .then(userThatWasAdded => {
                    sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
                })
                //change the view
            }
        }
    })




}