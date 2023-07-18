
let label = document.getElementById("label");
 let CartBasket = document.getElementById("cart-basket");

let basketCart = JSON.parse(localStorage.getItem("data")) || [];

// console.log(basketCart);
let calcCartQuantity = () => {
    let cartIcon = document.getElementById("cartQuantity");
    cartIcon.innerHTML = basketCart.map((x) => x.item).reduce((x,y) => x + y, 0 );
   };
  
    calcCartQuantity();

    let generateCartItems = () => {
    if(basketCart.length !==0){
        //console.log("NOT EMPTY");  //test if cart is not empty
       return CartBasket.innerHTML = basketCart.map((x) => {
        return`
        <div class="cart-item<>Hello></div>`
       });
     }else{
        //console.log("EMPTY");
        CartBasket.innerHTML =`` ; 
        label.innerHTML =`
        <div class="cart-heading">
        <h2>Cart is Empty</h2>
        <a href = "index.html">
        <button class ="HomeBtn">Back to Home</button></a>
        </div>`;
  

     }
    };
  
    generateCartItems();