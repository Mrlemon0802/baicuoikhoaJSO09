import auth from "./config.js";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const btnButton = document.querySelector("#btn-LOGIN")
const btnGGButton = document.querySelector("#btn-GGLOGIN")
const provider = new GoogleAuthProvider();
const btnChange = document.querySelector("#change_to_register")
btnChange.addEventListener("click", (e) => {

    e.preventDefault();
    window.location.href = `./dangki.html`;
});

btnButton.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert(`${user.email} đã đăng nhập thành công`);
            window.location.href = `./index.html`;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(`Đăng nhập lỗi: ${errorCode}`);
        });
});



btnGGButton.addEventListener("click", (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            if (user) {
                alert(`${user.email} đã đăng nhập thành công`);
                window.location.href = `./index.html`;
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
});