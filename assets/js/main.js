let bars=document.querySelector(".bars ")
let menu=document.querySelector(".nav-link")
let logo=document.querySelector(".logo")
bars.addEventListener("click",()=>{
    if(menu.clientHeight==0){
        menu.style.height=`${menu.scrollHeight}px`
        logo.style.display="none"
    }
    else{
        menu.style.height=0
        logo.style.display="block"

    }
});
window.addEventListener("resize",()=>{
    if(window.innerWidth>1120){
        menu.style.height=null
        
    }
});


