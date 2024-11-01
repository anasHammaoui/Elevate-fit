// Global variables for filtring
let sorting = document.getElementById('sorting');
let categorie = document.getElementById("wCategorie");
let productNames = document.querySelectorAll('.product-name');
// price variables
let priceDiv = document.getElementById('price-div');
let priceRange = document.getElementById('priceRange');
let price = document.getElementById("p");
let productsPrice = document.querySelectorAll(".pro-price");
sorting.addEventListener('change', ()=> {

//  Filter with category
    if(sorting.value == "categorie") {
            // hide all other sorting
    priceDiv.classList.add("hidden");
    productNames.forEach((product) => {
        product.parentNode.parentNode.classList.remove("hidden");
    })
    // ************
    // start sorting by categorie
        categorie.classList.remove("hidden");
       categorie.addEventListener("change", ()=>{
        productNames.forEach((product) =>{
            product.parentNode.parentNode.classList.remove("hidden");
            let splited =product.innerHTML.split(' ');
            if (categorie.value == "All"){
                product.parentNode.parentNode.classList.remove("hidden");
            } else if (!(splited.includes(categorie.value))) {
                product.parentNode.parentNode.classList.add("hidden");
            }
    })
       })
     } else if (sorting.value == "price") { //filter with price
           // hide all other sorting
        categorie.classList.add("hidden");
        productNames.forEach((product) => {
        product.parentNode.classList.remove("hidden");
    })
        // start sorting by price
        priceDiv.classList.remove("hidden");
        priceRange.addEventListener("change", ()=> {
            productsPrice.forEach((productPrice) => {
                let priceInt = parseInt(productPrice.textContent.replace('$',''));
               if(priceRange.value <= priceInt) {
                productPrice.parentNode.classList.add("hidden");
               } else{
                productPrice.parentNode.classList.remove("hidden");
               }
            })
        })
     } else {
        // hide all other sorting
        priceDiv.classList.add("hidden");
        categorie.classList.add("hidden");
        productNames.forEach((product) => {
        product.parentNode.classList.remove("hidden");
    })
     }
})
// product page
let productsImg = document.querySelectorAll("#pro-img");
productNames.forEach((name,index)=> {
    name.addEventListener("click",()=> {
        // setproduct title to localstrorage
        localStorage.setItem("productName", name.textContent);
        // setproduct price to localstrorage
            let priceInt = parseInt(productsPrice[index].textContent.replace('$',''));
             localStorage.setItem("productPrice", productsPrice[index].textContent);
        // set product image to local storage
            localStorage.setItem("product-Img", productsImg[index].src)
   })
})  
// cart page
let productsInPanier = JSON.parse(localStorage.getItem("ProPanierDetail")) || {name :  [], prices: [], imgs: [], quant: []};

const cartIcons = document.querySelectorAll('#cart-icon');
let cartItems = productsInPanier;
function addCartItems(title,img,price,quant) {
    let test = 0;
    productsInPanier.name.forEach((pro,i)=>{
        if (pro === title){
            productsInPanier.quant[i] +=1;
            test =1;
        }
    })
 
         if (test !=1) {
            cartItems.name.push(title);
            cartItems.prices.push(price);
            cartItems.imgs.push(img);
            cartItems.quant.push(quant);    
         }
}

cartIcons.forEach((cart) => {
    cart.addEventListener("click", ()=> {
        let proImg = cart.parentNode.parentNode.querySelector("#pro-img").src;
        let proName = cart.parentNode.parentNode.parentNode.querySelector(".product-name").textContent;
        let proPrice = parseInt(cart.parentNode.parentNode.parentNode.querySelector(".pro-price").textContent.replace('$',''));
        let proQuant = 1;
        addCartItems(proName,proImg,proPrice,proQuant);
        localStorage.setItem("ProPanierDetail",JSON.stringify(cartItems));
    })
})  