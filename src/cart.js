
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
        let {img,name,price} = search;
        return`
        <div class="cart-item">
         <img width="100"src="${img}" alt=""/>
         <div class="details">
         <div class ="title-price-x">
          <span class="searchName">${name}</span>
          <span class="searchPrice">$ ${price}</span>
          <span><i onclick="removeItem(${id})" class="bi bi-x-square"></i> </span>   
           
           </div></br>
         <div class ="cart-buttons">
         
         <i onclick="decrement(${id})" class="bi bi-caret-left-square"></i>
         <div id=${id} class="numItems">${item}</div>                    
         <i onclick="increment(${id})" class="bi bi-caret-right-square"></i>   </div>
         </div>
         <span class="totItemPrice">$${item * search.price}</span>
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

    let increment = (id) => {
        let selectedItem = id;
        let search = basketCart.find((x) => x.id === selectedItem.id);
        if (search === undefined) {
        basketCart.push({
          id:selectedItem.id,
          item: 1,
        });
      } else {
        search.item += 1;
         };
        generateCartItems();
        update(selectedItem.id);
        localStorage.setItem("data",JSON.stringify(basketCart));
        };
      
      let decrement = (id)=>{
        let selectedItem =id;
        let search = basketCart.find((x) => x.id === selectedItem.id);
        if(search === undefined) return;  //fixes cannot read properties of undefined(reading 'item') when decrement is active from 0
        else if (search.item === 0) return;
         else {
        search.item -= 1;
         }
         update(selectedItem.id);
         basketCart = basketCart.filter((y) => y.item !== 0); //removes item=0 lines in local storage
         generateCartItems();
        localStorage.setItem("data",JSON.stringify(basketCart));
        //basketCart = basketCart.filter((x) => x.Item <= 0);
    };

    let update = (id)=> {
  
        let search = basketCart.find((x) => x.id === id);
      
        document.getElementById(id).innerHTML = search.item;
        calcCartQuantity();
         //localStorage.setItem("data", JSON.stringify(basketCart));
         TotalAmount();
      };

    let removeItem = (id) => {
      let selectedItem = id;
       console.log(selectedItem.id);
      basketCart = basketCart.filter((x) => x.id !== selectedItem.id);
      generateCartItems();
      TotalAmount();
      calcCartQuantity();
      localStorage.setItem("data",JSON.stringify(basketCart));
      };
    
    let deleteCart =() => {
      basketCart = []
      generateCartItems();
      calcCartQuantity();
      localStorage.setItem("data", JSON.stringify(basketCart));
    };
    let TotalAmount = () => {
      if(basketCart.length !== 0){
        let amount = basketCart.map((x) => {
          let {item, id} = x;
          let search = cakeListItemsData.find((y) => y.id === id) || [];
          return item * search.price;
        }).reduce((x,y) => x + y, 0)
        //console.log(amount);
        label.innerHTML = `
        <span class = "Total-bill">Total Bill: $ ${amount}</span>
        <button class="check-out">Check Out</button>
        <button onclick="deleteCart()" class="delete">Delete</button>
        `;
      } else return;
    };
 
   TotalAmount();