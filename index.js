var Click=document.querySelector(".click-event");
var para=Click.querySelector("p");

var len=Click.querySelectorAll(".button").length;
for(var i=0;i<len;i++){
    var Btn=Click.querySelectorAll(".button")[i];

    Btn.addEventListener("click",function(){
        var text=this.innerHTML;
        
        handler(text);
        
    });
}


function handler(text){
  
    switch(text){
        case "button1":
            para.innerHTML="You have clicked in "+text;
            var Btn1=Click.querySelector("."+text);
            Btn1.classList.add("animation");
            setTimeout(function(){
                Btn1.classList.remove("animation");
            },1000);
            break;
        case "button2":
            para.innerHTML="You have clicked in "+text;
            var Btn2=Click.querySelector("."+text);
            Btn2.classList.add("animation");
            setTimeout(function(){
                Btn2.classList.remove("animation");
            },1000);
            break;
        case "button3":
            para.innerHTML="You have clicked in "+text;
            var Btn3=Click.querySelector("."+text);
            Btn3.classList.add("animation");
            setTimeout(function(){
                Btn3.classList.remove("animation");
            },1000);
            break;
    }

}

var form=document.querySelector("form");
var name1=form.querySelector("#name");
var email=form.querySelector("#email");
var password=form.querySelector("#password");

form.addEventListener("submit",Handler);
function Handler(e){
e.preventDefault();
 var personInfo={
    name: name1.value,
    email:email.value,
    password:password.value,
 }
 console.log(personInfo);
 
}
