var imgbox = document.querySelector(".img-box");
var imgwrap = document.querySelector(".img-wrap");
var orgimg = document.getElementById("orgimg");
var line = document.getElementById("line");
orgimg.style.width = imgbox.offsetWidth + "px";

var leftspace = imgbox.offsetLeft;


imgbox.onmousemove =(e)=>{
    var boxwidth = (e.pageX - leftspace) + "px";
    imgwrap.style.width = boxwidth; 
    line.style.left = boxwidth;
}