var allerrors = [];

var vaildValus =[];


subBtn=document.getElementById("subBtn")
subBtn.addEventListener("click",function (e){   

    e.preventDefault();

   

  const errors = document.getElementsByClassName("error");

  console.log(errors)
  let errornum = 0;
  let noerrornum = 0;
  let sportsch=0;
  function errfun(num,array,index) {
    
    allerrors[errornum]=num;
    errornum++;
  }
    function noerrorfun(num,array,index) 
    {
        vaildValus[noerrornum]=num;
        noerrornum++;
        
    }
    (!/^[a-zA-xZ\s]{8,}$/g.test(name1.value))? errfun(0) : noerrorfun(0);
    (!/^[a-z]{3,}\d*@(yahoo|gamil)(.com)$/.test(email.value)) ? errfun(1):noerrorfun(1);
    (!/^\w{8,}$/.test(password.value))? errfun(2) : noerrorfun(2);
    
    (!/^\w^[0-9]{8}$/.test(phone.value))? errfun(3) : noerrorfun(3);
   
   

    for (let i = 0; i < allerrors.length; i++) {
        errors[allerrors[i]].style.display = "block";  
    }
    
    for (let i = 0; i < vaildValus.length; i++) {
        errors[vaildValus[i]].style.display = "none";
      
    }

    allerrors =[];
    vaildValus=[];
})

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
