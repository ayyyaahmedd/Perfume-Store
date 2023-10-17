let allProducts1 = document.querySelector(".products")

if(localStorage.hasOwnProperty('productsInCart')){
    // let productsInCart = localStorage.getItem('productsInCart');
    // let item = JSON.parse(productsInCart)
    drawCartProducts(cart)
}


function drawCartProducts(products){
    let y = products.map((item) =>{
        return `
        <div class="col">
            <div class="card h-100">
                <img src="${item.imageUrl}" class="card-img-top" alt="..." style="height:250px">
                <div class="card-body text-center">
                    <h3 class="card-title" id="cardContainer" >${item.title}</h3>
                    <h5 class="card-text">Special Perfume For ${item.gender}</h5>
                    <h5 class="card-text fw-bold">Price : ${item.price} $</h5>
                </div>
            </div>
        </div>
            `;
    })
    allProducts1.innerHTML = y
}
