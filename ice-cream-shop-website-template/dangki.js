import auth from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const btnButton = document.querySelector("#btn-register")
const btnChange = document.querySelector("#change_to_login")
btnChange.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `./dangnhap.html`;
});

btnButton.addEventListener("click", (e) => {
    e.preventDefault(); //xoa reload
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user)
            alert(`${user.email} has signed up`)
            window.location.href = `./index.html`;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
            alert(`Đăng kí lỗi: ${errorCode}`);

        });

});