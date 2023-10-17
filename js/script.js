let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

if(localStorage.hasOwnProperty("username") || localStorage.hasOwnProperty("password")){
    if(userInfo != null)
    userInfo.style.display = "flex"
    if(userData != null)
    userData.innerHTML= localStorage.getItem("username")

    if(document.querySelector("#logout") != null)
    document.querySelector("#logout").addEventListener("click", function(){
        localStorage.clear()
        setTimeout(()=>{
            window.location = "login.html"
        } , 1500 )
    });

    // if(window.location.href.indexOf("login") > -1 || window.location.href.indexOf("register") > -1)
    //     window.location = "index.html";
    if(document.getElementById('logout') != null)
        document.getElementById('logout').style.setProperty('display', 'block', 'important');
    if(document.getElementById('links') != null)
        document.getElementById('links').style.setProperty('display', 'none', 'important');
    if(document.getElementsByClassName('shopping-cart')[0])
        document.getElementsByClassName('shopping-cart')[0].style.display = 'block';
}
else
{
    if(document.getElementById('links') != null)
        document.getElementById('links').style.setProperty('display', 'block', 'important');
    if(document.getElementById('logout') != null)
        document.getElementById('logout').style.setProperty('display', 'none', 'important');
    if(document.getElementsByClassName('shopping-cart')[0])
        document.getElementsByClassName('shopping-cart')[0].style.display = 'none';
}

// products

let allProducts = document.querySelector(".products");
let products = [
    {
        id: 1,
        title: "YSL Perfume",
        price: "50",
        imageUrl: "./images/000.webp",
        gender:"Woman",
    },
    {
        id: 2,
        title: "Chanel Perfume",
        price: "44",
        imageUrl: "./images/bg-04.jpg",
        gender:"Woman & Man",
    },
    {
        id: 3,
        title: "Chance Perfume",
        price: "57",
        imageUrl: "./images/bg-09-300x300.jpg",
        gender:"Man",
    },
    {
        id: 4,
        title: "L’interdit Perfume",
        price: "35",
        imageUrl: "./images/0000.jpg",
        gender:"Woman",
    },
    {
        id: 5,
        title: "N*5 Chanel",
        price: "64",
        imageUrl: "./images/bg-05.jpg",
        gender:"Woman",
    },
    {
        id: 6,
        title: "Miss Dior",
        price: "22",
        imageUrl: "./images/dior-miss-dior-eau-de-parfum-review-1.jpg",
        gender:"Woman",
    },
    {
        id: 7,
        title: "Rose Gold",
        price: "57",
        imageUrl: "./images/1111.jpg",
        gender:"Woman",
    },
    {
        id: 8,
        title: "Gabriel Chanel",
        price: "22",
        imageUrl: "./images/1.jpg",
        gender:"Man",
    },
    {
        id: 9,
        title: "Chanel Paries",
        price: "67",
        imageUrl: "./images/bg-03.jpg",
        gender:"Man",
    },
]

const categories = [...new Set(products.map((item)=>
    {return item}))]

function drawItems(){
    let i=0;
    products.map((item) =>{
        if(allProducts != null)
        allProducts.innerHTML += `
        <div class="col" id="product">
            <div class="card h-100">
                <img src="${item.imageUrl}" class="card-img-top" alt="..." style="height:250px">
                <div class="card-body text-center">
                    <h3 class="card-title" id="cardContainer" >${item.title}</h3>
                    <h5 class="card-text">Special Perfume For ${item.gender}</h5>
                    <h5 class="card-text fw-bold">Price : ${item.price} $</h5>
                    <div class="product-item-action">
                    <button type="button" class="btn btn-outline-secondary mt-2 add-to-cart" onclick='AddToCart(${i++})' id="myButton" value="Add To Cart">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
            `;
    })
}
drawItems()

// Cart

var cart = []

if (localStorage.getItem('productsInCart')) {
    cart = JSON.parse(localStorage.getItem('productsInCart'));
}

function AddToCart(a){
    cart.push({...categories[a]});
    localStorage.setItem('productsInCart', JSON.stringify(cart));
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    localStorage.setItem('productsInCart', JSON.stringify(cart));
    displayCart();
}
let badge = document.querySelector(".badge")
let cartsProducts = document.querySelector(".carts_products")

function displayCart(){
    let j = 0;  total=0;
    if(document.getElementById("count"))
    if(cart != null)
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        if(document.getElementById('CartItem') != null)
        document.getElementById('CartItem').innerHTML="Your Cart is Empty"
        if(badge != null)
        badge.style.display = "none"
        // myPro.style.display = "none"
        if(cartsProducts != null)
        cartsProducts.style.display = "none"

    }
    else{
        badge.style.display = "block"
        if(cartsProducts != null)
        cartsProducts.style.display = "block"

        // myPro.style.display = "block"

        if(document.getElementById("CartItem"))
        document.getElementById("CartItem").innerHTML= cart.map((item)=>
        {

            total=parseInt(total)+parseInt(item.price);
            if(document.getElementById("total"))
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class="col">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.imageUrl}" class="img-fluid rounded-start" style="height:220px" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">Special Perfume For ${item.gender}</p>
                                <p class="card-text">Price : ${item.price} $</p>
                                <p class="card-foot del-icon" ><i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></p>
                            
                            </div>
                        </div>
                    </div>
                </div>`
            );
        })
        }
    }
    displayCart()
    

    // search

    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('find');
        const cards = document.querySelectorAll('#product');
        const searchOpt = document.getElementById('selectSearch');
        const nothingFound = document.getElementById("nothing-alert");

        function filterByName(searchQuery) {
            let number = 0;
            cards.forEach(function (card) {
                const name = card.querySelector("h3").textContent.toLowerCase();

                if (name.includes(searchQuery.toLowerCase())) {
                    nothingFound.style.display = "none";
                    card.style.display = "block";
                    number++;
                } else {
                    card.style.display = "none";
                }
            });
            if (number === 0) {
                nothingFound.style.display = "block";
            }
        }

        function filterByCategory(searchQuery) {
            let number = 0;
            cards.forEach(function (card) {
                const name = card.querySelector("h5").textContent.toLowerCase();

                if (name.includes(searchQuery.toLowerCase())) {
                    nothingFound.style.display = "none";
                    card.style.display = "block";
                    number++;
                } else {
                    card.style.display = "none";
                }
            });
            if (number === 0) {
                nothingFound.style.display = "block";
            }
        }

        function updateSearchResults() {
            const searchQuery = searchInput.value.trim();
            if (searchOpt.value === "0") {
                filterByName(searchQuery);
            } else if (searchOpt.value === "1") {
                filterByCategory(searchQuery);
            }
        }

        if (searchInput != null) {
            searchInput.addEventListener("input", updateSearchResults);
        }

        // Add an event listener to the dropdown to change the search behavior
        if(searchOpt != null)
            searchOpt.addEventListener("change", updateSearchResults);
    });
    
if(localStorage.getItem=("usename")){
    function addToCart(id){


    }
    
}else{
    window.location = "login.html"
}

let addToCartBtn = document.querySelector("#myButton");

let opt = {
  initialText: "Add to Cart",
  textOnClick: "Item Added",
  interval: 1000,
};

let setAddToCartText = () => {
  addToCartBtn.innerHTML = opt.textOnClick;
  let reinit = () => {
    addToCartBtn.innerHTML = opt.initialText;
  };
  setTimeout(reinit, opt.interval);
};

if(addToCartBtn != null)
addToCartBtn.addEventListener("click", setAddToCartText);