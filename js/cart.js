// =======================
// CART
// =======================

let cart =
JSON.parse(localStorage.getItem("cart")) || [];


// =======================
// ADD TO CART
// =======================

function addToCart(id, name, price){

    const cleanPrice = Number(
        price.replace(/\./g, "")
             .replace("đ", "")
    );

    let item =
    cart.find(p => p.id === id);

    if(item){

        item.qty += 1;

    }else{

        cart.push({
            id: id,
            name: name,
            price: cleanPrice,
            qty: 1
        });
    }

    saveCart();

    updateCartCount();

    showToast();
}


// =======================
// SAVE CART
// =======================

function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// =======================
// UPDATE COUNT
// =======================

function updateCartCount(){

    const count =
    document.querySelector(".cart-count");

    if(!count) return;

    let total = 0;

    cart.forEach(item => {
        total += item.qty;
    });

    count.innerText = total;
}


// =======================
// RENDER CART
// =======================

function renderCart(){

    const body =
    document.getElementById("cart-body");

    if(!body) return;

    body.innerHTML = "";

    let total = 0;


    if(cart.length === 0){

        body.innerHTML = `
            <tr>
                <td colspan="5">
                    Giỏ hàng đang trống 🛒
                </td>
            </tr>
        `;

        document.getElementById("total")
        .innerText = "Tổng tiền: 0đ";

        return;
    }


    cart.forEach(item => {

        let sum =
        item.price * item.qty;

        total += sum;

        body.innerHTML += `

        <tr>

            <td>${item.name}</td>

            <td>
                ${item.price.toLocaleString()}đ
            </td>

            <td>

                <button onclick="changeQty(${item.id},-1)">
                    -
                </button>

                ${item.qty}

                <button onclick="changeQty(${item.id},1)">
                    +
                </button>

            </td>

            <td>
                ${sum.toLocaleString()}đ
            </td>

            <td>

                <button onclick="removeItem(${item.id})">
                    X
                </button>

            </td>

        </tr>
        `;
    });

    document.getElementById("total")
    .innerText =
    "Tổng tiền: " +
    total.toLocaleString() + "đ";
}


// =======================
// CHANGE QTY
// =======================

function changeQty(id,value){

    let item =
    cart.find(p => p.id === id);

    item.qty += value;

    if(item.qty <= 0){

        cart =
        cart.filter(p => p.id !== id);
    }

    saveCart();

    renderCart();

    updateCartCount();
}


// =======================
// REMOVE ITEM
// =======================

function removeItem(id){

    cart =
    cart.filter(p => p.id !== id);

    saveCart();

    renderCart();

    updateCartCount();
}


// =======================
// CHECKOUT
// =======================

function checkout(){

    if(cart.length === 0){

        alert("Giỏ hàng trống!");

        return;
    }

    alert("Thanh toán thành công 💖");

    cart = [];

    saveCart();

    renderCart();

    updateCartCount();
}


// =======================
// TOAST
// =======================

function showToast(){

    const toast =
    document.getElementById("toast");

    if(!toast) return;

    toast.innerText =
    "Đã thêm vào giỏ hàng 💖";

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2000);
}


// =======================
// RUN
// =======================

updateCartCount();

renderCart();