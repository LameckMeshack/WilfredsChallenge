let menu=document.querySelector("#menu");
let nav=document.querySelector("#nav");
let navHeight=document.querySelector("#navHeight");
menu.addEventListener("mouseenter",()=>{
    if(nav.classList.contains("invisible")){
        nav.classList.remove("invisible");
    }else
    {
        nav.classList.add("invisible");
    }
})