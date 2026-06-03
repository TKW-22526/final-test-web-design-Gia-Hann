let cart =
JSON.parse(localStorage.getItem("cart")) || [];



function renderCart(){

    const body =
    document.getElementById("cart-body");

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

                <button
                onclick="changeQty(${item.id},-1)">
                    -
                </button>

                ${item.qty}

                <button
                onclick="changeQty(${item.id},1)">
                    +
                </button>

            </td>

            <td>
                ${sum.toLocaleString()}đ
            </td>

            <td>

                <button
                onclick="removeItem(${item.id})">

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
}



function removeItem(id){

    cart =
    cart.filter(p => p.id !== id);

    saveCart();

    renderCart();
}



function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}



function checkout(){

    if(cart.length === 0){

        alert("Giỏ hàng trống!");

        return;
    }

    alert("Thanh toán thành công 💖");

    cart = [];

    saveCart();

    renderCart();
}



renderCart();