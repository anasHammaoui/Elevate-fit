// JS for Single product detail


        // var ProductImg = document.getElementById("product-img");//larger image
        // var SmallImg = document.getElementsByClassName("small-img");//it returns list of 4 images having index 0,1,2,3 as we have 4 images with class name "small0-img" 

        // SmallImg[0].onclick = function()//when user click on first image or images at 0 index, it will display as ProdcutImg.src replace with clicked or SmallImg[0], so we get smallimg[0] in bigger form, similarly when click on smallimg[1], it will display in bigger picture and so on 
        // {
        //     ProductImg.src = SmallImg[0].src;   
        // }

        // SmallImg[1].onclick = function()
        // {
        //     ProductImg.src = SmallImg[1].src;   
        // }

        // SmallImg[2].onclick = function()
        // {
        //     ProductImg.src = SmallImg[2].src;   
        // }

        // SmallImg[3].onclick = function()
        // {
        //     ProductImg.src = SmallImg[3].src;   
        // }

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
            localStorage.setItem("productImg", productsImg[index].src)
   })
})  
