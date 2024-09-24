
// Start show Offer
let showOffer =document.querySelector(".showOffer") 
let x = document.getElementById("x")
let showMePro = document.getElementById("showMePro")
let MyServices = document.querySelector(".My-Services")




// Start show Offer
showMePro.addEventListener("click",(Event)=>{
    Event.preventDefault()
     showOffer.style.display = "block"
})

x.addEventListener("click",(Event)=>{
    showOffer.style.display = "none"
})   
// End show Offer



let iHouse = document.getElementById("iHouse")
let Iperson = document.getElementById("Iperson")
let Ipreper = document.getElementById("Ipreper")
let Iskills = document.getElementById("Iskills")
let imessge = document.getElementById("imessge")


iHouse.onclick = function(){
    this.style.color = "white"
    Iperson.style.color = "gray"
    Ipreper.style.color = "gray"
    Iskills.style.color = "gray"
    imessge.style.color = "gray"
}

Iperson.onclick = function(){
    this.style.color = "white"
    iHouse.style.color = "gray"
    Ipreper.style.color = "gray"
    Iskills.style.color = "gray"
    imessge.style.color = "gray"
}

Ipreper.onclick = function(){
    this.style.color = "white"
    Iperson.style.color = "gray"
    iHouse.style.color = "gray"
    Iskills.style.color = "gray"
    imessge.style.color = "gray"
}

Iskills.onclick = function(){
    this.style.color = "white"
    Iperson.style.color = "gray"
    Ipreper.style.color = "gray"
    iHouse.style.color = "gray"
    imessge.style.color = "gray"
}

imessge.onclick = function(){
    this.style.color = "yellowgreen"
    Iperson.style.color = "gray"
    Ipreper.style.color = "gray"
    Iskills.style.color = "gray"
    iHouse.style.color = "gray"
}






