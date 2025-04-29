import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "./config.js";
const productDetailBtn = document.querySelector(".product-detail");
const url = new URLSearchParams(window.location.search);
const productId = url.get("id");
const querySnapshot = await getDocs(collection(db, "product"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    if (doc.id === productId) {
        productDetailBtn.innerHTML += `
        <div class="product">
            <h3>${doc.data().name || "No Name Given"}</h3>
            <p>${doc.data().price || "No Price Given"}</p>
            <p>${doc.data().image || "No Image Given"}</p>
            <p>${doc.data().description || "No Description Given"}</p>
            <button class="come_back" onclick="window.location.href = './home.html'">Come Back</button>
        </div>
        `;
    }
});