const content = document.querySelector(".container");
const nav = document.querySelector(".nav");

// NAVIGATION BAR
changeNavBg = ()=>{
    oldPos = nav.querySelector(".indicator").getBoundingClientRect().left;
    currentPos = nav.querySelector(".current").getBoundingClientRect().left;

    newPos = currentPos;

    nav.querySelector(".background").style.marginLeft=`calc(${newPos}px - 53.5rem)`;

}

// INCLUDING OTHER HTML
let changePage = (currentPage)=>{
    fetch(`./pages/${currentPage}.html`)
        .then(response => response.text())
        .then(text => content.innerHTML=text)


    
}

if(!nav.querySelector(".current")){
    nav.querySelector(".motivacija").classList.add("current");
    changeNavBg();
    changePage("kviz-znanja");
};

nav.querySelectorAll("li").forEach((item)=>item.addEventListener("click", (e)=>{
    nav.querySelector(".current").classList.remove("current");
    changePage(e.target.classList[0])
    e.target.classList.add("current");
    changeNavBg();
}
))