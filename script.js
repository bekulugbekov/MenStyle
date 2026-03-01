let products = JSON.parse(localStorage.getItem("products")) || [
    {id:1, name:"Erkaklar futbolkasi", price:150000, img:"https://avatars.mds.yandex.net/i?id=c1ce32787eba34c7534f78347bb2452cb85905de-4592836-images-thumbs&n=13"},
    {id:2, name:"Klassik kostyum", price:850000, img:"https://avatars.mds.yandex.net/i?id=ba860d526d3e7a96666d74ac361efde8bbf73f27-5666476-images-thumbs&n=13"},
    {id:3, name:"Jins shim", price:300000, img:"https://via.placeholder.com/200"},
    {id:4, name:"Paypoq", price:30000, img:"https://avatars.mds.yandex.net/i?id=aa011aad2abe912fd15a3b32b0a828279682f593-12799296-images-thumbs&n=13"},
    {id:5, name:"Krasovka", price:300000, img:"https://avatars.mds.yandex.net/i?id=95888311f35e02fdb5da3c3b75f6abf85f99a9f4-12528575-images-thumbs&n=13"},
    {id:6, name:"Sumka", price:300000, img:"https://avatars.mds.yandex.net/i?id=32dd459b359ad603ac5bdb8201225ced8030f339-4248462-images-thumbs&n=13"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveData() {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts() {
    const list = document.getElementById("product-list");
    if(!list) return;
    list.innerHTML = "";
    products.forEach(p => {
        list.innerHTML += `
            <div class="product">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p>${p.price.toLocaleString()} so'm</p>
                <button onclick="addToCart(${p.id})">Savatga qo'shish</button>
            </div>
        `;
    });
    updateCartCount();
}

function addToCart(id) {
    cart.push(products.find(p => p.id === id));
    saveData();
    updateCartCount();
    alert("Mahsulot savatga qo'shildi!");
}

function updateCartCount() {
    const count = document.getElementById("cart-count");
    if(count) count.innerText = cart.length;
}

function goToCheckout() {
    window.location.href = "checkout.html";
}

renderProducts();