const flowers = [

    {
        id: 1,
        name: "Hoa Hồng",
        price: "900.000đ",
        type:"Bó hoa",
        color: "Đỏ,Hồng,Trắng",
        occasion: "Tình yêu",
        image: "../assets/image/hoahong/hoahong.jpg",
        folder: "hoahong",
        desc: "Bó hoa hồng đỏ sang trọng, thích hợp tặng người yêu."
    },

    {
        id: 2,
        name: "Hoa Tulip Premium",
        price: "750.000đ",
        type: "Bó hoa",
        color: "Full Màu",
        occasion: "Sinh nhật",
        image: "../assets/image/hoatulip/hoatulip.jpg",
        folder: "hoatulip",
        desc: "Tulip nhẹ nhàng, tinh tế và hiện đại."
    },

    {
    id: 3,
    name: "Hoa Hướng Dương",
    price: "700.000đ",
    type: "Bó hoa",
    color: "Vàng",
    occasion: "Chúc mừng",
    image: "../assets/image/hoahuongduong/hoahuongduong.jpg",
    folder: "hoahuongduong",
    desc: "Hoa hướng dương tươi sáng, mang ý nghĩa may mắn và thành công."
},

    {
    id: 4,
    name: "Hoa Sen",
    price: "650.000đ",
    type: "Giỏ hoa",
    color: "Hồng,Trắng",
    occasion: "Chúc mừng",
    image: "../assets/image/hoasen/hoasen.jpg",
    folder: "hoasen",
    desc: "Hoa sen thanh tao, mang vẻ đẹp nhẹ nhàng và ý nghĩa bình an."
},

   {
    id: 5,
    name: "Hoa Cúc Trắng",
    price: "400.000đ",
    type: "Bó hoa",
    color: "Trắng",
    occasion: "Kỷ niệm",
    image: "../assets/image/hoacuc/hoacuc.jpg",
    folder: "hoacuc",
    desc: "Hoa cúc trắng tinh khôi, mang vẻ đẹp nhẹ nhàng và thanh lịch."
},

{
        id: 6,
        name: "Hoa Cẩm Tú Cầu",
        price: "850.000đ",
        type: "Bó hoa",
        color: "Xanh,Hồng,Trắng",
        occasion: "Sinh nhật",
        image: "../assets/image/hoacamtucau/hoacamtucau.jpg",
        folder: "camtu",
        desc: "Thiết kế hiện đại, tone màu nhẹ nhàng."
},

{
        id: 7,
        name: "Hoa Ly",
        price: "860.000đ",
        type: "Bó hoa",
        color: "Trắng,Hồng,Vàng",
        occasion: "Chúc mừng",
        image: "../assets/image/hoaly/hoaly.jpg",
        folder: "hoaly",
        desc: "Bó hoa ly sang trọng, tượng trưng cho sự thanh cao, hạnh phúc và thịnh vượng."
    },

    {
        id: 8,
        name: "Hoa Cát Tường",
        price: "650.000đ",
        type: "Bó hoa",
        color: "Hồng,Trắng,Tím",
        occasion: "Chúc mừng",
        image: "../assets/image/hoacattuong/hoacattuong.jpg",
        folder: "hoacattuong",
        desc: "Bó hoa cát tường thanh lịch, tượng trưng cho may mắn, hạnh phúc và những điều tốt đẹp trong cuộc sống."
    },
];
// =======================
// RENDER DANH SÁCH HOA
// =======================

const flowerContainer =
document.getElementById("flower-container");

if(flowerContainer){

    renderFlowers(flowers);

}

// =======================
// FUNCTION RENDER
// =======================

function renderFlowers(data){

    flowerContainer.innerHTML = "";

    data.forEach(flower => {

        flowerContainer.innerHTML += `

            <div class="flower-card">

                <div class="badge">HOT</div>

                <img src="${flower.image}" alt="">

                <div class="flower-info">

                    <h3>${flower.name}</h3>

                    <p class="price">${flower.price}</p>

                    <p>

                        ${flower.type} •
                        ${flower.color} •
                        ${flower.occasion}

                    </p>

                    <a href="chi-tiet.html?id=${flower.id}"
                       class="detail-btn">

                        Xem chi tiết

                    </a>

                </div>

            </div>

        `;

    });

}

// =======================
// SEARCH HOA
// =======================

const search = document.getElementById("search");

if(search){

    search.addEventListener("keyup", function(){

        const keyword =
        search.value.toLowerCase();

        const filteredFlowers =
        flowers.filter(flower => {

            return flower.name
                .toLowerCase()
                .includes(keyword);

        });

        renderFlowers(filteredFlowers);

    });

}

// =======================
// CHI TIẾT HOA
// =======================

const detail =
document.getElementById("detail");

if(detail){

    const params =
    new URLSearchParams(window.location.search);

    const id = params.get("id");

    const flower =
    flowers.find(item => item.id == id);

    if(flower){

        detail.innerHTML = `

        <section class="detail-page">

            <!-- LEFT -->

            <div class="detail-left">

                <div class="main-image">

                    <img id="mainImg"
                    src="${flower.image}"
                    alt="">

                </div>

                <!-- THUMB -->

                <div class="thumb-list">

                    ${[1,2,3,4].map(num => `

                    <img
                    class="${num === 1 ? 'active-thumb' : ''}"

                    src="../assets/image/${flower.folder}/${num}.jpg"

                    alt="">

                    `).join('')}

                </div>

                <!-- INFO -->

                <div class="spec-box">

                    <h2>Thông tin sản phẩm</h2>

                    <div class="spec-grid">

                        <div class="spec-item">
                            <span>Tên hoa</span>
                            <strong>${flower.name}</strong>
                        </div>

                        <div class="spec-item">
                            <span>Loại</span>
                            <strong>${flower.type}</strong>
                        </div>

                        <div class="spec-item">
                            <span>Màu sắc</span>
                            <strong>${flower.color}</strong>
                        </div>

                        <div class="spec-item">
                            <span>Dịp tặng</span>
                            <strong>${flower.occasion}</strong>
                        </div>

                    </div>

                </div>

                <!-- DESC -->

                <div class="desc-box">

                    <h2>Mô tả</h2>

                    <p>

                        ${flower.desc}

                    </p>

                </div>

            </div>

            <!-- RIGHT -->

            <div class="detail-right">

                <div class="info-card">

                    <div class="top-badge">

                        <span>HOT</span>
                        <span>${flower.color}</span>

                    </div>

                    <h1>${flower.name}</h1>

                    <div class="price-box">

                        <div class="price">

                            ${flower.price}

                        </div>

                        <p>

                            Giá ưu đãi hôm nay

                        </p>

                    </div>

                    <!-- META -->

                    <div class="meta-list">

                        <div class="meta-item">

                            <i class="fa-solid fa-gift"></i>

                            <div>

                                <p>Loại hoa</p>

                                <strong>${flower.type}</strong>

                            </div>

                        </div>

                        <div class="meta-item">

                            <i class="fa-solid fa-palette"></i>

                            <div>

                                <p>Màu sắc</p>

                                <strong>${flower.color}</strong>

                            </div>

                        </div>

                        <div class="meta-item">

                            <i class="fa-solid fa-heart"></i>

                            <div>

                                <p>Dịp tặng</p>

                                <strong>${flower.occasion}</strong>

                            </div>

                        </div>

                    </div>

                    <!-- BUTTON -->

                    <a href="tel:0376411452"
                       class="call-btn">

                        <i class="fa-solid fa-phone"></i>

                        Gọi đặt hoa

                    </a>

                    <a href="https://zalo.me/0376411452"
                       target="_blank"
                       class="message-btn">

                        <i class="fa-regular fa-message"></i>

                        Nhắn tin Zalo

                    </a>

                </div>

            </div>

        </section>

        `;

        // =======================
        // ĐỔI ẢNH
        // =======================

        const mainImg =
        document.getElementById("mainImg");

        const thumbs =
        document.querySelectorAll(".thumb-list img");

        thumbs.forEach(img => {

            img.addEventListener("click", () => {

                mainImg.src = img.src;

                document
                .querySelector(".active-thumb")
                ?.classList.remove("active-thumb");

                img.classList.add("active-thumb");

            });

        });

    }

}

// TEST

console.log("Website shop hoa hoạt động"); 