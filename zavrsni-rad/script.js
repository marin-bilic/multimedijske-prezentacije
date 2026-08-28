const content = document.querySelector(".container");
const nav = document.querySelector(".nav");


changeNavBg = ()=>{
    oldPos = nav.querySelector(".indicator").getBoundingClientRect().left;
    currentPos = nav.querySelector(".current").getBoundingClientRect().left;

    newPos = currentPos;

    nav.querySelector(".background").style.marginLeft=`calc(${newPos}px - 53.5rem)`;

}
if(!nav.querySelector(".current")){
    nav.querySelector(".logo").classList.add("current");
    changeNavBg();
}

nav.querySelectorAll("li").forEach((item)=>item.addEventListener("click", (e)=>{
    nav.querySelector(".current").classList.remove("current");
    e.target.classList.add("current");
    changeNavBg();
}
))