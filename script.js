var menuIcon = document.querySelector(".menu");
var like = document.querySelector(".play-video-info")
var SideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var likebutton = document.querySelector(".likebuttonvideo")

 menuIcon.onclick = function(){
    SideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
   //  likebutton.classList.toggle("change-like-button-color");
 }

 like.onclick = function(){
   likebutton.classList.toggle("change-like-button-color")
 }

