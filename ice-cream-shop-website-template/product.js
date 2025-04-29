import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "./config.js";
const loadmore = document.querySelector("#loadmore");
const product = document.querySelector(".product-container");
const querySnapshot = await getDocs(collection(db, "product"));

loadmore.addEventListener("click", () => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        product.innerHTML += `
    <div class="product">
        <h3>${doc.data().name || "No Name Given"}</h3>
        <p>${doc.data().price || "No Price Given"}</p>
        <img src="${doc.data().image|| "No Image Given"}"></img>
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
});