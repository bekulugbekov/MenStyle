let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach(product => {
        list.innerHTML += `
            <div style="margin-bottom:15px; background:#fff; padding:10px; border-radius:5px;">
                <strong>${product.name}</strong> - ${product.price.toLocaleString()} so'm
                <br>
                <img src="${product.img}" width="100" style="margin:5px 0;">
                <br>
                <button onclick="deleteProduct(${product.id})" 
                        style="background:red; color:white; padding:5px; border:none; cursor:pointer;">
                        O'chirish
                </button>
            </div>
        `;
    });
}

function addProduct() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;

    if (!name || !price || !img) {
        alert("Iltimos barcha maydonlarni to'ldiring!");
        return;
    }

    let newProduct = {
        id: Date.now(),
        name,
        price: Number(price),
        img
    };

    products.push(newProduct);
    saveProducts();
    renderProducts();

    alert("Mahsulot qo'shildi!");
}

function deleteProduct(id) {
    if (confirm("Rostdan ham o'chirmoqchimisiz?")) {
        products = products.filter(p => p.id !== id);
        saveProducts();
        renderProducts();
    }
}


renderProducts();

let category = document.getElementById("category").value;
let newProduct = {
    id: Date.now(),
    name,
    price: Number(price),
    img,
    category
};
products.push(newProduct);
saveProducts();
renderProducts();
