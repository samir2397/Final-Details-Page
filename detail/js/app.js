let slider=document.querySelector(".slide-wrapper ul")
let next=document.querySelector("#nextIcon")
let prev=document.querySelector("#prevIcon")
next.addEventListener("click",function(){
    nextslider()
})
prev.addEventListener("click",function(){
    prevslider()
})
let pos=0;
function nextslider(){
    pos++;
    if(pos==slider.children.length){
        pos=0;
    }
    slider.style.left=(-1300*pos)+"px"
}
function prevslider(){
    pos--;
    if(pos==-1){
        pos=slider.children.length-1
    }
    slider.style.left=(-1300*pos)+"px"
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
