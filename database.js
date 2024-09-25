import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
    
const  appSettings = {
    databaseURL: 'https://linkdspace-87fd9-default-rtdb.firebaseio.com/',

}

const app = initializeApp(appSettings);
const database = getDatabase(app);

const usersListInDB = ref(database, "users") //databse name

const id = document.querySelector("#id");
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("#frm");
const tableBody = document.querySelector("tbody");
const avatar = document.getElementById("avatar");

form.addEventListener("submit", function (event){
    event.preventDefault();//look this up

    if (id.value){
        return;
    }

    if (!user.value.trim() || !pass.value.trim() ){
            alert("please complete all of those fields before logging in.")
            return;
    }

    const newUser = {
        user: user.value.trim(),
        pass: pass.value.trim(),
        avatar: avatar.src
    }

    push(usersListInDB,newUser);

    window.location.href="feed.html"
})




