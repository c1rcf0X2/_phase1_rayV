let cakeList = document.getElementById("cakeList");

let basketCart = JSON.parse(localStorage.getItem("data")) || [];
 //console.log(basketCart);

  let generateCakeList = () => {
    return (cakeList.innerHTML = cakeListItemsData.map((x)=>{
        let {id, name, price, desc, img, img2} = x;
        let search = basketCart.find((x) => x.id === id) || [];
        return ` 
                                          
          <div id = product-id-${id} class="card" style="width:250px;>
            <a href="${img2}">
                <img src=${img} class="mx-auto d-block" style="width:100%">
            </a>
            
             <dittv class="card-body" style="text-align:center">
                <h5 class="card-title">${name}</h5>
                <h5 class="price">$ ${price}</h5>
                <p class="card-text">${desc}</p>
                <div class="row buttons">                     
                      <i onclick="decrement(${id})" class="bi bi-caret-left-square"></i>
                      <div id=${id} class="numItems">${search.item === undefined ? 0 : search.item}</div>                    
                      <i onclick="increment(${id})" class="bi bi-caret-right-square"></i>                   
                </div>
              </div>    
          </div>                                
     `
    }).join(""));
 };
  generateCakeList();
  
//   let generateCartList = () => {
//     return (cakeList.innerHTML = cakeListItemsData.map((x)=>{
//         let {id, name, price, desc, img, img2} = x;
//         let search = basketCart.find((x) => x.id === id) || [];
//         return `                                      
//           <div id = product-id-${id} class="card">
//             <a href="${img2}" >
//                 <img src=${img} class="mx-auto d-block" style="width:100%">
//             </a>
//             <div class="card-body" style="text-align:center">
//                 <h5 class="card-title">${name}</h5>
//                 <h5 class="price">$ ${price}</h5>
//                 <p class="card-text">${desc}</p>
//                 <div class="row buttons">                     
//                       <i onclick="decrement(${id})" class="bi bi-caret-left-square"></i>
//                       <div id=${id} class="numItems">${search.item === undefined ? 0 : search.item}</div>                    
//                       <i onclick="increment(${id})" class="bi bi-caret-right-square"></i>                   
//                 </div>
//               </div>    
//           </div>                           
//      `
//     }).join(""));
//  };
//   generateCartList();

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
    localStorage.setItem("data",JSON.stringify(basketCart));
    //basketCart = basketCart.filter((x) => x.Item <= 0);
};
 let update = (id)=> {
  
  let search = basketCart.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.item;
  calcCartQuantity();
   //localStorage.setItem("data", JSON.stringify(basketCart));
};

 
 let calcCartQuantity = () => {
  let cartIcon = document.getElementById("cartQuantity");
  cartIcon.innerHTML = basketCart.map((x) =>x.item).reduce((x,y) =>x+y,0 );
 };  

 calcCartQuantity();  //updates the cart when increment & decrement are active
