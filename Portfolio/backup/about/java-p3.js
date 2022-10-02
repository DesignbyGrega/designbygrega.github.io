//Text animatio

const allTextArray = document.querySelectorAll('.fancy');
let j=0;
(animatedText=()=>{
    let text = allTextArray[j]
    text.style.display="block"
    const textString = text.textContent;
    const splitText = textString.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] === " ") {
            text.innerHTML += "<span class='space'>" + splitText[i] + "</span>";
        } else {
            text.innerHTML += "<span>" + splitText[i] + "</span>";
        }
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        if (char < splitText.length) {
            const span = text.querySelectorAll('span')[char];
            span.classList.add('fade');
            char++;
            if (char === splitText.length) {
                j++;
              animatedText();
              return
            }
        }
    }
})()



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











