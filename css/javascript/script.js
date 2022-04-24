// const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links');
// toggleButton.addEventListener('click', function(){
//     for(var i =0; i< navbarLinks.length; i++){
//         navbarLinks[i].classList.toggle('active');
//     }
// })
window.onresize = screen;
window.onload = screen;
function screen(){
    myWidth = window.innerWidth;
    document.getElementById('screen-size').innerHTML = "Width is: " + myWidth;
}

var acc = document.getElementsByClassName("hamburger");
// var acc = document.getElementById("hamburger");
var i;
for(i = 0; i<acc.length; i++){
    acc[i].addEventListener("click", function(){
        // Toggle between adding and removing the active class, to ighlight the button that controls the panel
         this.classList.toggle("active");
        // this.idList.toggle("active");

        // Toggle between hiding and showing the active panel
         var panel = this.nextElementSibling;
    //    var panel = document.getElementsByClassName("panel");
        if(panel.style.display === "block"){
            panel.style.display ="none";
        }else{
            panel.style.display ="block"
        }
    });
}

var panel = document.getElementsByClassName("panel");
function myFunction(x) {
    if (x.matches) { // If media query matches
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }
  
  var x = window.matchMedia("(max-width: 1200px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
