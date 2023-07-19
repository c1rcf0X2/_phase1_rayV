
let label = document.getElementById("label");                                           //4
 let CartBasket = document.getElementById("cart-basket");                               //5
//console.log(cakeListItemsData);//2
let basketCart = JSON.parse(localStorage.getItem("data")) || [];    //1

// console.log(basketCart);
let calcCartQuantity = () => {                                                          //3
    let cartIcon = document.getElementById("cartQuantity");                             //3
    cartIcon.innerHTML = basketCart.map((x) => x.item).reduce((x,y) => x + y, 0 );      //3
   };  
    calcCartQuantity();                                                                 //3

    let generateCartItems = () => {
    if(basketCart.length !==0){                                                         
       // console.log("NOT EMPTY");  //test if cart is not empty
       return (CartBasket.innerHTML = basketCart.map((x) => {
        let {id, item} = x;
        let search = cakeListItemsData.find((y) => y.id === id) || [];
        return`
        <div class="cart-item">
         <img width="100"src="${search.img}" alt=""/>
         <div class="details">
         <div class ="title-price-x">
          
          <span class="searchName">${search.name}</span>
          <span class="searchPrice">$ ${search.price}</span>
          <span><i class="bi bi-x-square"></i> </span>        
           </div></br>
         <div class ="cart-buttons">
         
         <i onclick="decrement(${id})" class="bi bi-caret-left-square"></i>
         <div id=${id} class="numItems">${search.item === undefined ? 0 : search.item}</div>                    
         <i onclick="increment(${id})" class="bi bi-caret-right-square"></i>      </div>
         </div>
        </div>
        </div>`;
       })
       .join(""));
     }else{
        //console.log("EMPTY");
        CartBasket.innerHTML =`` ; 
        label.innerHTML =`
        <div class="cart-heading">
        <h1>Cart is Empty</h1>
        <a href = "index.html">
        <button class ="HomeBtn">Back to Home</button></a>
        </div>`;
       }
    };
  
    generateCartItems();