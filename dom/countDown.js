const d= document;

export default function countDown (id, limitDate, mensaje) {
    const $countDown = d.getElementById(id);
    const countDownDate = new Date(limitDate).getTime()
    
    
    let countTempo = setInterval(() => {
        let fechaActual = new Date().getTime()
        let falta = countDownDate - fechaActual;
        let days = Math.floor(falta / (1000 * 60 * 60 * 24));
        let hours = Math.floor(falta % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(falta % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(falta % (1000 * 60) / 1000);

        
        $countDown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos para QATAR 2022</h3>`
        if(falta <= 0) {
            clearInterval(countTempo)
            $countDown.innerHTML = `<h3 class="empezoMundial">${mensaje}</h3> <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/06/trofeo-grupos-mundial-qatar.jpg?quality=100&strip=info" alt="">`
        }
    }, 1000);
}