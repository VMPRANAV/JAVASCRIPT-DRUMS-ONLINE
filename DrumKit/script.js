window.addEventListener('keydown',(e)=>{
const keyCode = e.key.toUpperCase().charCodeAt(0);
const audio =  document.querySelector(`audio[data-key="${keyCode}"]`);
const key = document.querySelector(`div[data-key="${keyCode}"]`);
if(!audio)return;
audio.currentTime=0;
audio.play();
key.classList.add("playing");
setTimeout(()=>{
key.classList.remove("playing");
},100);
}); 


  