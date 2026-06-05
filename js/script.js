const productList = [
    {
        id: "01",
        name: "Máy ảnh Canon",
        price: 30000000,
        image: "../assets/canon.jpg",
        productLink: "https://mayanhtop1.com/may-anh-chuyen-nghiep-nhung-lua-chon-tot-nhat-hien-nay"
    },

    {
        id: "02",
        name: "Máy ảnh Nikon",
        price: 46000000,
        image: "../assets/nikon.jpg",
        productLink: "https://vunhatcamera.vn/vi/bai-viet/18/may-anh-chuyen-nghiep-cho-studio-gia-duoi-50-trieu.html"
    },

    {
        id: "03",
        name: "Máy ảnh Fujifilm",
        price: 43000000,
        image: "../assets/fujifilm.jpg",
        productLink: "https://techspot.vn/may-anh-fujifilm-xh2-body-chinh-hang-p38333613.html"
    }
];

function showProduct() {

    const container = document.getElementById("product-list");

    if (!container) {
        console.log("Không tìm thấy product-list");
        return;
    }

    container.innerHTML = "";

    productList.forEach(item => {

        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">

                    <img src="${item.image}"
                         class="img-fluid object-fit-cover"
                         height="250"
                         style="object-fit: contain; width: 100%; background-color: #f8f9fa; padding: 10px;">

                    <div class="card-body">

                        <h5>${item.name}</h5>

                        <p>
                            Giá:
                            ${item.price.toLocaleString("vi-VN")} VNĐ
                        </p>

                        <a href="${item.productLink}"
                           target="_blank"
                           class="btn btn-primary">
                            Xem sản phẩm
                        </a>

                    </div>
                </div>
            </div>
        `;
    });
}

showProduct();