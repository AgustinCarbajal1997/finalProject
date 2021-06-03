const $burgerBox = document.querySelector(".panel-btn"),
    $nav = document.querySelector(".nav"),
    $header = document.querySelector(".header")

    // MENU HAMBURGUESA
document.addEventListener("click", e=>{
    if(e.target === $burgerBox){
        console.log("menu")
        if(!$nav.classList.contains("isActive")){
            $nav.classList.add("isActive");
        }else{
            $nav.classList.remove("isActive");
        }
    }
})

    //SCROLL CLASSLIST
window.addEventListener("scroll", e=>{
    if(window.pageYOffset > 200){
        $header.classList.add("scrollActive")
    }else{
        $header.classList.remove("scrollActive")
    }
        
})
    
