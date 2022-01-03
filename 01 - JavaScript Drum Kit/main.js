const bodyElement = document.querySelector("body");
bodyElement.addEventListener('keydown', addAnimation);
bodyElement.addEventListener('keyup', removeAnimation);

function addAnimation(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!audio) {
        return;
    }
    key.classList.add("playing");
    audio.play();
}

function removeAnimation(event) {
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(key) {
        key.classList.remove("playing");
    }
    
}