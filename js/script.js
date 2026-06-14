const productList = [
{
    id: 1,
    name: "Canon EOS R6",
    price: 30000000,
    image: "../assets/canon.jpg",
    description: "Canon EOS R6 là máy ảnh mirrorless full-frame cao cấp với khả năng lấy nét cực nhanh, chống rung 5 trục và quay video 4K chất lượng cao."
},
{
    id: 2,
    name: "Nikon Z6 II",
    price: 46000000,
    image: "../assets/nikon.jpg",
    description: "Nikon Z6 II sở hữu cảm biến full-frame 24.5MP, khả năng chụp liên tiếp tốc độ cao và hệ thống lấy nét chính xác."
},
{
    id: 3,
    name: "Fujifilm X-T5",
    price: 43000000,
    image: "../assets/fujifilm.jpg",
    description: "Fujifilm X-T5 nổi bật với cảm biến 40MP, thiết kế cổ điển sang trọng và màu ảnh đặc trưng."
},
{
    id: 4,
    name: "Sony Alpha A7 IV",
    price: 52000000,
    image: "../assets/sony-alpha a7.webp",
    description: "Sony A7 IV là mẫu máy ảnh full-frame mạnh mẽ với công nghệ AI lấy nét thông minh."
},
{
    id: 5,
    name: "Canon EOS R8",
    price: 39000000,
    image: "../assets/canon-r8.jpg",
    description: "Canon EOS R8 có thiết kế nhỏ gọn, phù hợp cho cả người mới bắt đầu và chuyên nghiệp."
},
{
    id: 6,
    name: "Nikon Z5",
    price: 35000000,
    image: "../assets/nikon-z5.jpeg",
    description: "Nikon Z5 là chiếc máy ảnh full-frame giá tốt với khả năng chống rung hiệu quả."
}
];

// Thêm vào giỏ hàng
function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = productList.find(item => item.id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart-count").innerText = cart.length;

    alert(product.name + " đã được thêm vào giỏ hàng!");
}

// Mua ngay
function buyNow(id) {

    const product = productList.find(item => item.id === id);

    const result = confirm(
        "Bạn có muốn mua " +
        product.name +
        "\nGiá: " +
        product.price.toLocaleString("vi-VN") +
        " VNĐ ?"
    );

    if (result) {
        alert("Đặt hàng thành công!");
    }
}

// Hiển thị sản phẩm
function showProducts() {

    const container = document.getElementById("product-list");

    if (!container) return;

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `
        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    style="
                        height:250px;
                        width:100%;
                        object-fit:contain;
                        padding:10px;
                        transition:0.4s;
                        cursor:pointer;
                    "
                    onmouseover="
                        this.style.transform='scale(1.1)';
this.style.filter='brightness(1.1)';
                    "
                    onmouseout="
                        this.style.transform='scale(1)';
                        this.style.filter='brightness(1)';
                    "
                >

                <div class="card-body text-center">

                    <h5 class="text-primary fw-bold">
                        ${product.name}
                    </h5>

                    <p style="
                        color:#666;
                        min-height:90px;
                        font-size:14px;
                    ">
                        ${product.description}
                    </p>

                    <p class="text-danger fw-bold fs-5">
                        ${product.price.toLocaleString("vi-VN")} VNĐ
                    </p>

                    <button
                        class="btn btn-success"
                        onclick="addToCart(${product.id})">
                        🛒 Thêm vào giỏ hàng
                    </button>

                    <button
                        class="btn btn-danger ms-2"
                        onclick="buyNow(${product.id})">
                        ⚡ Mua ngay
                    </button>

                </div>

            </div>

        </div>
        `;
    });

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

showProducts();