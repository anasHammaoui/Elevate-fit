let productPageName = document.getElementById("product-page-name");
let productPagePrice = document.getElementById("product-price");
let productPageimg= document.querySelectorAll("#product-img");
let getName = localStorage.getItem("productName");
let getPrice =  localStorage.getItem("productPrice");
let getImg =  localStorage.getItem("product-Img");
productPageName.textContent = getName;
productPagePrice.textContent = getPrice;
productPageimg.forEach(pr =>{
    pr.src = getImg;
})

// add to cart from detail page
// cart page
let productsInPanier = JSON.parse(localStorage.getItem("ProPanierDetail")) || {name :  [], prices: [], imgs: [], quant: []};

const addToCart = document.getElementById('addToCart');
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

    addToCart.addEventListener("click", ()=> {
        let proImg = document.getElementById("product-img").src;
        let proName = document.querySelector("#product-page-name").textContent;
        let proPrice = parseInt(document.querySelector("#product-price").textContent.replace('$',''));
        let proQuant= document.getElementById("quanti").value;
        // let proQuant = 1;
        // proQuantChange.addEventListener("change",()=>{
        //     proQuant++;
        //     console.log(proQuant)
        // })
        addCartItems(proName,proImg,proPrice,proQuant);
        localStorage.setItem("ProPanierDetail",JSON.stringify(cartItems));
    })