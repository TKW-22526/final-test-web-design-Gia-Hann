
const flowers = [
    {
        id: 1,
        name: "Hoa Hồng",
        price: "900.000đ",
        image: "../assets/image/hoahong/hoahong.jpg",
        folder: "hoahong",
        desc: "Bó hoa hồng đỏ cao cấp, thể hiện tình yêu mãnh liệt.",
        fullDesc: `🌹 Ý nghĩa: Tượng trưng cho tình yêu mãnh liệt, lãng mạn và sự chung thủy.

🎁 Phù hợp: Người yêu, cầu hôn, kỷ niệm.

✨ Điểm nổi bật: Hoa loại 1, bó thủ công tinh tế, giữ tươi 3–5 ngày.

🚚 Dịch vụ: Giao nhanh trong ngày, gói quà miễn phí.`
    },

    {
        id: 2,
        name: "Hoa Tulip Premium",
        price: "750.000đ",
        image: "../assets/image/hoatulip/hoatulip.jpg",
        folder: "hoatulip",
        desc: "Tulip phong cách châu Âu tinh tế.",
        fullDesc: `🌷 Ý nghĩa: Tình yêu nhẹ nhàng, thanh lịch.

🎁 Phù hợp: Sinh nhật, người yêu.

✨ Điểm nổi bật: Hoa nhập khẩu, màu sắc tự nhiên.

🚚 Dịch vụ: Giao nhanh 2–4 giờ.`
    },

    {
        id: 3,
        name: "Hoa Hướng Dương",
        price: "700.000đ",
        image: "../assets/image/hoahuongduong/hoahuongduong.jpg",
        folder: "hoahuongduong",
        desc: "Luôn hướng về ánh sáng.",
        fullDesc: `🌻 Ý nghĩa: Niềm tin, hy vọng và thành công.

🎁 Phù hợp: Tốt nghiệp, khai trương.

✨ Điểm nổi bật: Màu vàng rực rỡ, tươi lâu.

🚚 Dịch vụ: Giao trong ngày.`
    },

    {
        id: 4,
        name: "Hoa Sen",
        price: "650.000đ",
        image: "../assets/image/hoasen/hoasen.jpg",
        folder: "hoasen",
        desc: "Thanh tịnh và bình an.",
        fullDesc: `🪷 Ý nghĩa: Thanh cao, thuần khiết.

🎁 Phù hợp: Lễ chùa, biếu tặng.

✨ Điểm nổi bật: Thiết kế sang trọng.

🚚 Dịch vụ: Giao cẩn thận.`
    },

    {
        id: 5,
        name: "Hoa Cúc Trắng",
        price: "400.000đ",
        image: "../assets/image/hoacuc/hoacuc.jpg",
        folder: "hoacuc",
        desc: "Giản dị và chân thành.",
        fullDesc: `🌼 Ý nghĩa: Hiếu thảo, chân thành.

🎁 Phù hợp: Thăm hỏi, tri ân.

✨ Điểm nổi bật: Tinh khôi, nhẹ nhàng.

🚚 Giao nhanh.`
    },

    {
        id: 6,
        name: "Hoa Cẩm Tú Cầu",
        price: "850.000đ",
        image: "../assets/image/hoacamtucau/hoacamtucau.jpg",
        folder: "hoacamtucau",
        desc: "Tinh tế nhẹ nhàng.",
        fullDesc: `💐 Ý nghĩa: Biết ơn, cảm xúc sâu sắc.

🎁 Phù hợp: Người thân, bạn bè.

✨ Điểm nổi bật: Màu pastel đẹp.

🚚 Giao nhanh.`
    },

    {
        id: 7,
        name: "Hoa Ly",
        price: "860.000đ",
        image: "../assets/image/hoaly/hoaly.jpg",
        folder: "hoaly",
        desc: "Sang trọng quý phái.",
        fullDesc: `🌺 Ý nghĩa: Thanh cao, may mắn.

🎁 Phù hợp: Khai trương, tân gia.

✨ Điểm nổi bật: Hương thơm nhẹ.

🚚 Giao đảm bảo tươi.`
    },

    {
        id: 8,
        name: "Hoa Cát Tường",
        price: "650.000đ",
        image: "../assets/image/hoacattuong/hoacattuong.jpg",
        folder: "hoacattuong",
        desc: "May mắn và hạnh phúc.",
        fullDesc: `🌸 Ý nghĩa: Viên mãn, hạnh phúc.

🎁 Phù hợp: Sinh nhật, người yêu.

✨ Điểm nổi bật: Cánh mềm mại.

🚚 Giao nhanh đẹp.`
    }
];

// =======================
// ELEMENTS
// =======================

const flowerContainer = document.getElementById("flower-container");
const searchInput = document.getElementById("search");
const detailContainer = document.getElementById("detail");


// =======================
// RENDER
// =======================

function renderFlowers(data) {
    if (!flowerContainer) return;

    flowerContainer.innerHTML = data.map(flower => `
        <div class="flower-card">
            <div class="badge">BÁN CHẠY</div>

            <img src="${flower.image}" alt="${flower.name}">

            <div class="flower-info">

                <h3>${flower.name}</h3>

                <p class="price">${flower.price}</p>

                <p class="short-desc">
                    ${flower.desc}
                </p>

                <a href="chi-tiet.html?id=${flower.id}" class="detail-btn">
                    Xem chi tiết
                </a>

                <button onclick="addToCart(${flower.id}, '${flower.name}', '${flower.price}')">
                    Thêm giỏ hàng
                </button>

            </div>
        </div>
    `).join('');
}


// INIT
if (flowerContainer) renderFlowers(flowers);


// =======================
// SEARCH
// =======================

if (searchInput) {
    searchInput.addEventListener("input", () => {

        const keyword = searchInput.value.toLowerCase();

        const result = flowers.filter(f =>
            f.name.toLowerCase().includes(keyword)
        );

        renderFlowers(result);
    });
}


// =======================
// DETAIL
// =======================

if (detailContainer) {

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const flower = flowers.find(f => f.id === id);

    if (!flower) {
        detailContainer.innerHTML = "<h2>Không tìm thấy sản phẩm</h2>";
    } else {

        detailContainer.innerHTML = `
        <section class="detail-page">

            <div class="detail-left">

                <div class="main-image">
                    <img id="mainImg" src="${flower.image}">
                </div>

                <div class="thumb-list">
                    ${[1,2,3,4].map(n => `
                        <img src="../assets/image/${flower.folder}/${n}.jpg">
                    `).join('')}
                </div>

            </div>

            <div class="detail-right">

                <h1>${flower.name}</h1>

                <div class="price">${flower.price}</div>

                

                <div class="desc-box">
                    <h3>Mô tả chi tiết</h3>
                    <p class="full-desc">
                    ${flower.fullDesc}
                    </p>
                </div>

                <a href="tel:0376411452" class="call-btn">📞 Gọi ngay</a>

                <a href="https://zalo.me/0376411452" class="message-btn">
                    💬 Zalo
                </a>

            </div>

        </section>
        `;

        const mainImg = document.getElementById("mainImg");
        document.querySelectorAll(".thumb-list img").forEach(img => {
            img.addEventListener("click", () => {
                mainImg.src = img.src;
            });
        });
    }
}


// CART
// =======================

// lấy dữ liệu giỏ hàng
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// thêm vào giỏ hàng
function addToCart(id, name, price) {

    // chuyển giá về number
    const cleanPrice = Number(
        price.replace(/\./g, "").replace("đ", "")
    );

    // tìm sản phẩm tồn tại
    let item = cart.find(p => p.id === id);

    if (item) {

        item.qty += 1;

    } else {

        cart.push({
            id: id,
            name: name,
            price: cleanPrice,
            qty: 1
        });
    }

    // lưu localStorage
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    // cập nhật số lượng
    updateCartCount();

    // hiện thông báo đẹp
    showToast();
}

// cập nhật số lượng cart
function updateCartCount() {

    const count = document.querySelector(".cart-count");

    if (!count) return;

    let total = 0;

    cart.forEach(item => {
        total += item.qty;
    });

    count.innerText = total;
}

// =======================
// TOAST
// =======================

function showToast(){

    const toast =
    document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


// chạy lần đầu
updateCartCount()
const cartIcon = document.querySelector(".cart");

cartIcon.classList.add("bump");

setTimeout(() => {
    cartIcon.classList.remove("bump");
},300);

