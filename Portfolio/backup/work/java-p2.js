//Text animatio





const items = document.querySelectorAll('.show');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }



gsap.from(".slide1", {
    scrollTrigger:{
        trigger: "#slide-show",
        start: "0% 50%",
        end: "150% 100%",
        scrub: 2,
        // markers: true
    },
    x: -200,
    duration: 1

})

gsap.from(".slide2", {
    scrollTrigger:{
        trigger: "#slide-show",
        start: "0% 10%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    x: 100,
    duration: 1

})



///////add Event Listner/////------

window.addEventListener("mousemove", function(dets){
    document.querySelector("#slidephoto").style.top=`${dets.clientY}px`
    document.querySelector("#slidephoto").style.left=`${dets.clientX}px`
    document.querySelector("#slidephoto").style.transform =`translate(${-dets.clientX*0.24}px, ${-dets.clientY*0.7}px)`
    document.querySelector("#slidephoto").style.cursor = "pointer"
});


document.querySelectorAll("#work")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector("#scir1").style.display = "initial"
    })
})

document.querySelectorAll("#work")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(){
        document.querySelector("#scir1").style.display = "none"
    })
})

document.querySelectorAll("#about")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector("#scir2").style.display = "initial"
    })
})

document.querySelectorAll("#about")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(){
        document.querySelector("#scir2").style.display = "none"
    })
})

document.querySelectorAll("#contact")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector("#scir3").style.display = "initial"
    })
})

document.querySelectorAll("#contact")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(){
        document.querySelector("#scir3").style.display = "none"
    })
})




document.querySelector("#chainn")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "0px"
    document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#chainn")
.addEventListener("mouseleave", function(){
    document.querySelector("#chainn").style.color = "initial"
})

document.querySelector("#aty")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-100%"
    document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#aty")
.addEventListener("mouseleave", function(){
    document.querySelector("#aty").style.color = "initial"
})

document.querySelector("#mic")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-200%"
    document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#mic")
.addEventListener("mouseleave", function(){
    document.querySelector("#mic").style.color = "initial"
})



document.querySelector("#eff")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephoto").style.display = "initial"
    document.querySelector("#slidephoto").style.opacity = 1
    document.querySelector("#slidephoto").style.scale = 1
})

document.querySelector("#eff")
.addEventListener("mouseleave", function(){
    document.querySelector("#slidephoto").style.display = "hidden"
    document.querySelector("#slidephoto").style.opacity = 0
    document.querySelector("#slidephoto").style.scale = 0

})












