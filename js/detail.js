let productPageName = document.getElementById("product-page-name");
let productPagePrice = document.getElementById("product-price");
let productPageimg= document.getElementById("product-img");
let getName = localStorage.getItem("productName");
let getPrice =  localStorage.getItem("productPrice");
let getImg =  localStorage.getItem("productImg");
productPageName.textContent = getName;
productPagePrice.textContent = getPrice;
productPageimg.src = getImg;