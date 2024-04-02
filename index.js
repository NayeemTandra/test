const menuBar=document.querySelector(".nav--target")
const menu=document.querySelector(".nav--ul")

menuBar.addEventListener("click",()=>{
    if(menu?.classList.contains("show-ul")){
        menu.classList.remove("show-ul")

    }else{
        menu.classList.add("show-ul")

    }
})