import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "./config.js";

const name = document.querySelector("#Product_Name");
const price = document.querySelector("#Product_Price");
const description = document.querySelector("#Product_Description");
const image = document.querySelector("#Product_Image");
const addProductBtn = document.querySelector("#add-btn");
addProductBtn.addEventListener("click", async() => {
    const nameValue = name.value;
    const priceValue = price.value;
    const imageValue = image.value;
    const descriptionValue = description.value;


    await addDoc(collection(db, "product"), {
        name: nameValue,
        price: priceValue,
        image: imageValue,
        description: descriptionValue,
        createdAt: new Date(),
    });
    alert("Added product successfully");
});