const luuy = document.querySelector(".luuy")
const chitiet = document.querySelector(".chitiet")
const thamkhao = document.querySelector(".thamkhao")
if(luuy){
    luuy.addEventListener("click", function(){
        document.querySelector(".content-bottom-content-chitiet").style.display = "none"
        document.querySelector(".content-bottom-content-luuy").style.display = "block"
        document.querySelector(".content-bottom-content-thamkhao").style.display = "none"
    })
}
if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".content-bottom-content-chitiet").style.display = "block"
        document.querySelector(".content-bottom-content-luuy").style.display = "none"
        document.querySelector(".content-bottom-content-thamkhao").style.display = "none"
    })
}
if(thamkhao){
    thamkhao.addEventListener("click", function(){
        document.querySelector(".content-bottom-content-chitiet").style.display = "none"
        document.querySelector(".content-bottom-content-luuy").style.display = "none"
        document.querySelector(".content-bottom-content-thamkhao").style.display = "block"
    })
}
const butTon = document.querySelector(".content-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector(".content-bottom-content-big").classList.toggle("activeB")
    })
}