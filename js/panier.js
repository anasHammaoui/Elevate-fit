// // add to from hover icon in product
// let tr = document.createElement("tr");  
// let td = document.createElement("td");
// let img = document.createElement("img");
// let div = document.createElement("div");
// let p = document.createElement("p");
// let small = document.createElement("small");
// let span = document.createElement("span");

// localStorage.setItem("pannierContent",document.getElementById("pannierContent").outerHTML);
// document.getElementById("pannierContent").remove()



let productsInPanier = JSON.parse(localStorage.getItem("ProPanierDetail")) || {name :  [], prices: [], imgs: [],quant: []};
let bodyContent = document.getElementById("body-content");
let totalContent = document.querySelector(".tab-price");
let tot = 0;
productsInPanier.name.forEach((_, i) => {
    bodyContent.innerHTML += `
        <tr id="pannierContent">
<td class="row justify-content-start" >
    <img id="cart-img" src=${productsInPanier.imgs[i]} alt="product">
    <div>
        <p data-title="${productsInPanier.name[i]}">${productsInPanier.name[i]}</p>
    <small>Price: <span data-price="${productsInPanier.prices[i]}">$${productsInPanier.prices[i]}</span></small>
    <span id="remove" class="text-orange cursor-pointer">Remove</span>
    </div>
</td>
<td><input type="number" name="quantity" id="quant" value="${productsInPanier.quant[i]}"></td>
<td data-totPrice="50">$${productsInPanier.prices[i]*productsInPanier.quant[i]}.00</td>
</tr>
    `;
})
// set total to localstorage
productsInPanier.name.forEach((_,i) => {
    tot = tot + (productsInPanier.prices[i] * productsInPanier.quant[i]); 
})
// show total price in cart
totalContent.innerHTML = `
 <tbody class="total-price">
            <tr class="d-flex justify-content-between">
                <td>Total</td>
                <td data-total="0">$${tot}</td>
            </tr>
        </tbody>
`

// show total price in navbar
document.getElementById("home-price").innerHTML = `$${tot}`;
    // remove funtion
    let remove = document.querySelectorAll("#remove");
remove.forEach((r,i)=>{
    r.addEventListener("click",()=>{
        r.parentNode.parentNode.parentNode.remove();
        productsInPanier.name.splice(i,1);
        productsInPanier.prices.splice(i,1);
        productsInPanier.imgs.splice(i,1);
        productsInPanier.quant.splice(i,1);
        localStorage.setItem("ProPanierDetail",JSON.stringify(productsInPanier));
    tot = tot - (productsInPanier.prices[i] * productsInPanier.quant[i]); 
    })
})

    // total price
    localStorage.setItem("totalPrice",tot);