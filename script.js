window.addEventListener("keydown",(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('keyOver');
    //  console.log(key)
})

const keys = document.querySelectorAll(".key");
// console.log(keys)

keys.forEach(key => {
    // console.log(key)
    key.addEventListener('transitionend',(e)=>{
        // console.log(e)
        if(e.propertyName !=='transform'){
            return;
        }
        key.classList.remove('keyOver');
    })
});



