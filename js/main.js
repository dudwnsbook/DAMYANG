//(function (window, document) {
//    'use strict';
//
//   const weather = document.getElementById("weather");
//   const weatheron =document.querySelector(".weatherBlock");
//   
//    
//    weather.addEventListener('click',function(){
//      toggleElements();
//      
//    });
//    
//    function toggleElements(){
//        weatheron.classList.toggle('on');
//        
//      
//    }
//    })(window,document)


var toggleBtn = document.querySelector(".togBtn");
var menuView = document.querySelector("#leftMenu");
var closeBtn = document.querySelector(".close");
var NullBox = document.querySelector(".menu_box_null");
var MenuToggleBtn = document.getElementsByClassName("MenuCon");
var MenuToggleBtnLen = MenuToggleBtn.length;
var MenuBlock = document.getElementsByClassName("leftMenuSub");
var menuTit=document.querySelectorAll(".MenuTit");
var MenuBlockLen = MenuBlock.length;

var Btn = document.querySelectorAll(".xi-angle-right-min");
var clickCount = 0;
let count =0;


var detpar = document.querySelectorAll(".dethParent");
var dethBtn = document.querySelectorAll(".dethTit");
var dethUl = document.querySelectorAll(".deth");

toggleBtn.addEventListener('click', function () {
    menuView.style.left = 0 + "%";

    NullBox.classList.add("on");

});

closeBtn.addEventListener('click', function () {
    menuView.style.left = -100 + "%";
    NullBox.classList.remove("on");
    // NullBox.style.left = -100 + "%";
})
NullBox.addEventListener('click', function () {
    menuView.style.left = -100 + "%";
    NullBox.classList.remove("on");
    // NullBox.style.left = -100 + "%";
})
for(var a=0; a<MenuBlockLen; a++){
    MenuToggleBtn[a].setAttribute("data-value",a);
}
for(var b=0; b<detpar.length; b++){
    detpar[b].setAttribute("data-value",b);
}


for (var x = 0; x<MenuToggleBtnLen; x++) {  //서브1개
    menuTit[x].addEventListener('click', function (event) {

        var tarValue=event.target.parentNode;
        var targetChild = event.target.lastChild;
        console.log(targetChild);
        
        for(var z= 0; z<detpar.length; z++){
            detpar[z].classList.remove("on");
        }
        
        if(tarValue.className=="MenuCon on"){
            tarValue.classList.remove("on");
            // targetChild.style.transform="rotate(90deg)";
            targetChild.style.transform="rotate(0)";
            
        }
        else{
            for(var y= 0; y<MenuToggleBtnLen; y++){
                if(tarValue.dataset.value == y){
                    tarValue.classList.add("on");
                    targetChild.style.transform="rotate(90deg)";
                   
                }
                else{
                    MenuToggleBtn[y].classList.remove("on");
                    Btn[y].style.transform="rotate(0)";
                }
            }
        }

    });

}
for(var i=0; i<dethBtn.length; i++){
    dethBtn[i].addEventListener("click",function(event){
        var dethTarVa=event.target.parentNode;
   


        if(dethTarVa.className=="MenuSubCon dethParent on"){
            dethTarVa.classList.remove("on");
        }
        else{
            for(var j=0; j<dethBtn.length; j++){
                if(dethTarVa.dataset.value == j){
                    dethTarVa.classList.add("on");
                   
                }
                else{
                    detpar[j].classList.remove("on");
                }
            }
        }
    })
}
