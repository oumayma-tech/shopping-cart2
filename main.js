var plus=document.getElementsByClassName("plus-btn")

var minus=document.getElementsByClassName("minus-btn")


function Totalprice(){
    let Total=document.querySelector(".total-price")
    let price=document.getElementsByClassName("unit-price")
    let Quantité=document.getElementsByClassName("qute")
let sum=0
    for(let i=0;i<price.length;i++){
       
        sum=sum+price[i].innerHTML*Quantité[i].innerHTML
       console.log(sum)
       
    }
    Total.innerHTML=sum 
}
 

for(var i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        // console.log(this.nextElementSibling)
        this.nextElementSibling.innerHTML=Number(this.nextElementSibling.innerHTML)+1
        Totalprice()
})
minus[i].addEventListener("click",function(){
    console.log(this.previousElementSibling)
    if(Number(this.previousElementSibling.innerHTML)>0)  this.previousElementSibling.innerHTML=Number(this.previousElementSibling.innerHTML)-1
 else this.previousElementSibling.innerHTML=0
 Totalprice()
})
}



    var docremove=document.getElementsByClassName("fa-trash-alt")
    for(let i=0;i<docremove.length;i++){
        docremove[i].addEventListener("click",function(){
        this.parentElement.parentElement.parentElement.remove()
        Totalprice()
        })
    }
    var hearts=Array.from(document.getElementsByClassName("fa-heart"))
for(let heart of hearts){
     heart.addEventListener('click',function(){
         if(heart.style.color!=="red") heart.style.color="red"
         else heart.style.color="#212529"
     })
}  
