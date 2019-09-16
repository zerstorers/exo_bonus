var clik = document.getElementById("cmpt_click");
var enter = document.getElementById("cmpt_enter");
var leave = document.getElementById("cmpt_leave");
var dbltclick = document.getElementById("cmpt_dbltclick");


clik.addEventListener("click" , function(){
    cmpt_click =+ 1 ;
    document.getElementById("cmpt_click").innerHTML = cmpt_click;
});






// clik.addEventListener("click" , function(){
//     if (clik > 10) {
//         part-one.style.background.color "green";

//     }
    
// });