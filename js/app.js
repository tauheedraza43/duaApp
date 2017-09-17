var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var fNameInput = document.getElementById("firstName");
var lNameInput = document.getElementById("lastName");
var cellNoInput = document.getElementById("cellNo");
var ageInput = document.getElementById("age");
var database = firebase.database();
var auth = firebase.auth();

function signup() {
    var email = emailInput.value;
    var password = passwordInput.value;
    var fName1 = fNameInput.value.slice(0,1).toUpperCase();
    var fName2 = fNameInput.value.slice(1).toLowerCase();
    var fName = fName1+fName2;
    var lName1 = lNameInput.value.slice(0,1).toUpperCase();
    var lName2 = lNameInput.value.slice(0,1).toLowerCase();
    var lName = lName1+lName2;
    var cellNo = cellNoInput.value;
    var age = ageInput.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            var currentUser = {
                email : email,
                fName : fName,
                lName : lName,
                cellNo : cellNo,
                age : age,
            }
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            location = 'login.html';
        })
        .catch(function (error) {
            console.log("Error" , error.message);
        })


}

function login() {
    var email = emailInput.value;
    var password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)    
        .then(function(user){
            location = 'home.html';
        })
        .catch(function(error){
            alert("Error", error.message);
        })
}