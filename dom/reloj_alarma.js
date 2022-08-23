const d= document;
let clockTempo;

export function reloj (reloj, activar, frenar){
    d.addEventListener("click", (e) =>{
        
        if (e.target.matches(activar)){
        clockTempo= setInterval(() => {
        let clockHour = new Date().toLocaleTimeString()
        d.querySelector(reloj).innerHTML = `<h3>${clockHour}</h3>`
        }, 1000);
        e.target.disabled = true
        }
        
        if (e.target.matches(frenar)){
        clearInterval(clockTempo);
        d.querySelector(reloj).innerHTML=null;
        d.querySelector(activar).disabled=false;
        }
    })
}

export function alarma (audio, activar, frenar) {
    let alarmaTempo;
    const $etiquetaAudio = d.createElement ("audio");
    $etiquetaAudio.src = audio

    d.addEventListener("click", (e)=>{
        if(e.target.matches(activar)) {
            alarmaTempo = setTimeout(() => {
            $etiquetaAudio.play();
        }, 1000);
        e.target.disabled = true
        }

        if (e.target.matches(frenar)) {
            clearTimeout(alarmaTempo);
            $etiquetaAudio.pause();
            $etiquetaAudio.currentTime = (0)
            d.querySelector(activar).disabled=false;
        }
    })
}