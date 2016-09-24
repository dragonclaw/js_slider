var nextSlide = function () {
    var current = document.getElementById("active");
    var next = document.getElementById("active").nextElementSibling;
    if(current==document.body.lastElementChild)
        next=document.body.firstElementChild;
    current.removeAttribute("id");
    next.setAttribute("id","active");
}