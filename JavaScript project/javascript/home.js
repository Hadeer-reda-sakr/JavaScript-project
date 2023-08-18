/*slide show*/
var i=0;

var images =["./imag/istockphoto-1412760774-612x612.jpg","./imag/s1 (1).jpg","./imag/s1 (4).jpg","./imag/pottery-1139047_1280.jpg","./imag/s1 (5).jpg"];

var time =2500;

var button = document.querySelector("#b1");
console.log(button);
button.addEventListener("click",pervious);

var imag= document.getElementById("img");

var button1 = document.getElementById("next");
button1.addEventListener("click",execute);


function changeImg() {
    img.setAttribute("src",images[i]);
    
    if(i<images.length-1){
      i++;
    }
    else{
        i=0;
    }

    setTimeout(changeImg,time);
}

window.onload=changeImg;
/*nent button*/
var ii = 0;
var j =4;
function execute(){
    var img = document.images[0];

    var source = images

    img.setAttribute("src",source[ii]);
    
    ii++;

    if(ii== Number(5)){
    ii=0;}
   }
/*previous button*/
   function pervious(){
    var img = document.images[0];

    var source = images

   


    img.setAttribute("src",source[j]);
    j--;

    if(j< 0){
    j=source.length - 1;}
   }


   /*show category*/ 

var buttoncrochet = document.getElementById("cro");
buttoncrochet.addEventListener("click",display)

var buttonmacramia = document.getElementById("btnmiddle");
buttonmacramia.addEventListener("click",display2)


var buttonjewlery = document.getElementById("jew");
buttonjewlery.addEventListener("click",display3)

var divcrochet = document.getElementById("crochet");

var divjewelry = document.getElementById("jewelry");

var divmacramea = document.getElementById("macramea");

var Allproduct = document.getElementById("Allproduct");

Allproduct.addEventListener("click",displayall)

function display () {

  divjewelry.style.display="none";
  divjewelry.style.visibility="hidden";
  divmacramea.style.display="none";
  divmacramea.style.visibility="hidden";

  divcrochet.style.visibility="visible"
  divcrochet.style.display="flex";
}

function display2 () {

  divjewelry.style.display="none";
  divjewelry.style.visibility="hidden";
  divcrochet.style.display="none";
  divcrochet.style.visibility="hidden";
  
  divmacramea.style.visibility="visible"
  divmacramea.style.display="flex";
}


function display3 () {

  divmacramea.style.display="none";
  divmacramea.style.visibility="hidden";
  divcrochet.style.display="none";
  divcrochet.style.visibility="hidden";

  divjewelry.style.visibility="visible"
  divjewelry.style.display="flex";

}

function displayall () {

  divjewelry.style.visibility="visible"
  divjewelry.style.display="flex";

  divmacramea.style.visibility="visible"
  divmacramea.style.display="flex";

  divcrochet.style.visibility="visible"
  divcrochet.style.display="flex";

}

/*top button*/
let mybutton = document.getElementById("topbtn");

window.onscroll=function(){scrollFunction()};

function scrollFunction () {

  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topbtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
