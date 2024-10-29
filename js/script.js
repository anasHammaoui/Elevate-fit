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
let price = document.getElementById("wCategorie");
let productNames = document.querySelectorAll('.product-name');
let a = 0;
sorting.addEventListener('change', ()=> {
//  Filter with category
    if(sorting.value == "categorie") {
        categorie.classList.remove("hidden");
       categorie.addEventListener("change", ()=>{
        productNames.forEach((product) =>{
            product.parentNode.classList.remove("hidden");
            let splited =product.innerHTML.split(' ');
            if (categorie.value == "All"){
                product.parentNode.classList.remove("hidden");
            } else if (!(splited.includes(categorie.value))) {
                product.parentNode.classList.add("hidden");
            }
    })
       })
     } else if (sorting.value == "price") { //filter with price
        price.classList.remove("hidden");
     } else {
        categorie.classList.add("hidden");
        
     }
})