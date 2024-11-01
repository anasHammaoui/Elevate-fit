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
        <p id="data-title" data-title="${productsInPanier.name[i]}">${productsInPanier.name[i]}</p>
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
// show total price in navbar
document.getElementById("home-price").innerHTML = `$${tot}`;
// increase price when increase quanitity at cart
let quantInput = document.querySelectorAll("#quant");
quantInput.forEach((q,i)=>{
    q.addEventListener("change",()=>{
        productsInPanier.quant[i] = q.value;
        localStorage.setItem("ProPanierDetail",JSON.stringify(productsInPanier));
    })
})
    // total price
    localStorage.setItem("totalPrice",tot);