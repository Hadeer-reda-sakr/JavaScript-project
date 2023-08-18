


let products=[{

  Name:'toys',
  tag:'cro2',
  price:400,
  incart:0
},

{

  Name:'baby',
  tag:'cro7',
  price:9000,
  incart:0
},

{

  Name:'hat',
  tag:'cro1',
  price:500,
  incart:0
},

{

  Name:'star',
  tag:'cro4',
  price:200,
  incart:0
},
{

  Name:'collection',
  tag:'jew1',
  price:4000,
  incart:0
},{

  Name:'necklace',
  tag:'jew2',
  price:900,
  incart:0
},{

  Name:'bracelet',
  tag:'jew3',
  price:300,
  incart:0
},{

  Name:'ring',
  tag:'jew5',
  price:800,
  incart:0
},{

  Name:'feather',
  tag:'mac1',
  price:200,
  incart:0
},{

  Name:'square',
  tag:'mac6',
  price:600,
  incart:0
},{

  Name:'carv',
  tag:'mac3',
  price:800,
  incart:0
},{

  Name:'plant',
  tag:'mac4',
  price:9000,
  incart:0
},
];

var allcarts = document.querySelectorAll('.addcart');

for (let i = 0; i < allcarts.length; i++) {
  allcarts[i].addEventListener("click",()=>{
    cartnumbers(products[i]);
    totalcoast(products[i]);
  })
  
}

function onloadcartnumbers() {

  let productnumbers= localStorage.getItem('cartnumbers');
  if(productnumbers){
    document.querySelector('.carti span').textContent= productnumbers;
  }
}

function cartnumbers(products) {
  
let productnumbers= localStorage.getItem('cartnumbers');

productnumbers=parseInt(productnumbers);

if(productnumbers){
  localStorage.setItem('cartnumbers',productnumbers + 1) ;
  document.querySelector('.carti span').textContent= productnumbers + 1;
}
else{
  localStorage.setItem('cartnumbers', 1) ;
  document.querySelector('.carti span').textContent= 1;

}

setItem(products);

}

function setItem (products) {
  let cartItems=localStorage.getItem('productsincart');

  cartItems=JSON.parse(cartItems);


if(cartItems !=null){
if (cartItems[products.tag] ==undefined) {
  cartItems={
    ...cartItems,[products.tag]:products
  }
  
}
  cartItems[products.tag].incart += 1;
}
else{
  products.incart=1;

   cartItems={
    [products.tag]:products
  }
}


  
  localStorage.setItem("productsincart",JSON.stringify(cartItems) );
}

function totalcoast (products) {
  
  let cartcost= localStorage.getItem('totalcost');
 

  if (cartcost !=null) {

  cartcost=parseInt(cartcost);

    localStorage.setItem("totalcost",cartcost + products.price);
  }
  else{
     localStorage.setItem("totalcost",products.price);
  }
 
} 



 
function displaycard() {
  let carditems = localStorage.getItem("productsincart");
  carditems=JSON.parse(carditems);
let productContainer  = document.querySelector(".product");
let cartcost= localStorage.getItem('totalcost');

  if(carditems  && productContainer){
    productContainer.innerHTML ='';
    Object.values(carditems).map(item =>{
    productContainer.innerHTML += `
    
    <div class="product"> 
    <i class="fa fa-times remove-icon fa1" onclick=" rmove(this,'${item.tag}')" aria-hidden="true"></i>

    
         <img style="width: 100px; height: 100px;" src="./imag/${item.tag}.jpg" >
         
         <span>${item.Name}</span>

         

         <div class ="price" id="pri">${item.price}EGP</div>
         <div class ="quantity">
         <i class="fa fa-sort-asc fa1" aria-hidden="true"></i>
         <span>${item.incart}</span>
         <i class="fa fa-sort-desc fa1" aria-hidden="true"></i>
         </div>
         <div class="total">${item.incart * item.price}EGP</div>
</div>
    `
    });
    productContainer.innerHTML += `<div class ="baskettotal">
    <h4 class="basket"> Bascket Total :  </h4>

    <h4 class="basket" id ="finalcost"> ${cartcost} </h4>
    
    </div>
        `

}


}

onloadcartnumbers();
displaycard();


function costdown(products) {
  var dataInCart = document.getElementById("pri");
if(dataInCart == null){
  dataInCart=0;
}else{
  dataInCart=parseInt( dataInCart.textContent);
}
  var cost = localStorage.getItem("totalcost");


 var presentcost= parseInt(cost);

var textfinal = document.getElementById("finalcost");
console.log(presentcost)
var finalcost =  dataInCart ;
if(finalcost==undefined){finalcost=0};
cost=localStorage.setItem("catrs",finalcost)
console.log("ccccc"+finalcost);
textfinal.innerHTML=finalcost;


}




function rmove(a,Pname){
  var counter  = localStorage.getItem("cartnumbers");
  if (counter < 0) {
    localStorage.setItem("cartnumbers",0);
  }else
  localStorage.setItem("cartnumbers",--counter);
  a.parentElement;
  a.parentElement.remove();

 costdown();

 downloadcartnumbers();
}

function downloadcartnumbers() {

  var span=parseInt( document.getElementById("spa").innerText);
  
var spanv = document.getElementById("spa").innerHTML=Number(span - 1);

 if(spanv == 0 ){
  localStorage.clear(allcarts);
 }

  }
 
/*top button*/
let mybu = document.getElementById("topbtn");

window.onscroll=function(){scrollFunction()};

function scrollFunction () {

  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybu.style.display = "block";
  } else {
    mybu.style.display = "none";
  }
}

function topbtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


 
