import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "./config.js";

const product = document.querySelector(".product-container");
const querySnapshot = await getDocs(collection(db, "product"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    product.innerHTML += `
    <div class="product">
        <h3>${doc.data().name || "No Name Given"}</h3>
        <p>${doc.data().price || "No Price Given"}</p>
        <p>${doc.data().description || "No Description Given"}</p>
        <button class="view-detail" data-id="${doc.id}">View Detail</button>
    </div>
    `;
    const productDetailBtn = document.querySelectorAll(".view-detail");
    productDetailBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
            const productId = e.target.getAttribute("data-id");
            window.location.href = `./product_detail.html?id=${productId}`;
        });
    });
});