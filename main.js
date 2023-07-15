let cakeList = document.getElementById("cakeList");
//let basketCart = JSON.parse(localStorage.getItem("data")) || [];

let cakeListItemsData = [{
    id:"abcd",
    name:"Cake-1",
    price: 24.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
    img:"assets/images/cake-1.jpg",
    img2:"/products/cake-1.html"
  },{
    id:"efgh",  
    name:"Cake-2",
    price: 10.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
    img:"assets/images/cake-2.jpg",
    img2:"/products/cake-2.html",     
  },{ 
    id:"ijkl",
    name:"Cake-3",
    price: 24,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
    img:"assets/images/cake-3.jpg",
    img2:"/products/cake-3.html",
  },{
    id:"mnop",
    name:"Cake-4",
    price: 16.00,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
    img:"assets/images/cake-4.jpg",
    img2:"/products/cake-4.html",
  },{
   id:"qrst",
  name:"Cake-5",
  price: 15.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-5.jpg",
  img2:"/products/cake-5.html",
},{
  id:"uvwx",  
  name:"Cake-6",
  price: 10.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-6.jpg",
  img2:"/products/cake-6.html",
},{
  id:"yzab",
  name:"Cake-7",
  price: 24,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-7.jpg",
  img2:"/products/cake-7.html",
},{
  id:"cdef",
  name:"Cake-8",
  price: 16.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-8.jpg",
  img2:"/products/cake-8.html",
},{
  id:"ghij",
  name:"Cake-9",
  price: 24.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-9.jpg",
  img2:"/products/cake-9.html",
},{
  id:"klmn",  
  name:"Cake-10",
  price: 10.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-10.jpg",
  img2:"/products/cake-10.html",
},{
  id:"opqr",
  name:"Cake-11",
  price: 24,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-11.jpg",
  img2:"/products/cake-11.html",
},{
  id:"stuv",
  name:"Cake-12",
  price: 16.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-12.jpg",
  img2:"/products/cake-12.html",
},{
  id:"wxyz",
  name:"Cake-13",
  price: 24.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-13.jpg",
  img2:"/products/cake-13.html"
},{
  id:"rtfg",  
  name:"Cake-14",
  price: 10.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-14.jpg",
  img2:"/products/cake-14.html",
},{
  id:"jhyo",
  name:"Cake-15",
  price: 24,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-15.jpg",
  img2:"/products/cake-15.html",
},{
  id:"tyhk",
  name:"Cake-16",
  price: 16.00,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet, consequuntur.",
  img:"assets/images/cake-16.jpg",
  img2:"/products/cake-16.html",
},];

let basketCart = [];

  let generateCakeList = () => {
    return (cakeList.innerHTML = cakeListItemsData.map((x)=>{
        let {id, name, price, desc, img, img2} = x;
        return `                                      
          <div id = product-id-${id} class="card">
            <a href="${img2}" >
                <img src=${img} class="mx-auto d-block" style="width:100%">
            </a>
            <div class="card-body" style="text-align:center">
                <h5 class="card-title">${name}</h5>
                <h5 class="price">$ ${price}</h5>
                <p class="card-text">${desc}</p>
                <div class="row buttons">                     
                      <i onclick="decrement(${id})" class="bi bi-caret-left-square"></i>
                      <div id=${id} class="numItems">0</div>                    
                      <i onclick="increment(${id})" class="bi bi-caret-right-square"></i>                   
                </div>
              </div>    
          </div>                           
     `
    }).join(""));
 };
  generateCakeList();

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
    };
  
  let decrement = (id)=>{
    let selectedItem =id;
    let search = basketCart.find((x) => x.id === selectedItem.id);
    if (search.item === 0) return;
     else {
    search.item -= 1;
     }

  update(selectedItem.id);
};
 let update = (id)=> {
  
  let search = basketCart.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.item;
  calcCartQuantity()
   //localStorage.setItem("data", JSON.stringify(basketCart));
};
 
 let calcCartQuantity=()=>{
  let cartIcon = document.getElementById("cartQuantity");
  cartIcon.innerHTML = basketCart.map((x) =>x.item).reduce((x,y) =>x+y,0 );
 };

