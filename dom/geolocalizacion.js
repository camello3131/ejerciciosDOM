const d = document
const n = navigator

export default function getGeolocation(id){
    const $id = d.getElementById(id)
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const succes =  (position) => {
        let cords = position.coords

        $id.innerHTML = `<p>Tu posicion actual es :</p>
            <ul>
                    <li>latitud: ${cords.latitude} </li>
                    <li>longitud: ${cords.longitude} </li>
                    <li>presicion: ${cords.accuracy} metros </li>
                    <a href="https://www.google.com.ar/maps/@${cords.latitude},${cords.longitude},15z" target="blank" rel="noopener">Ver en Google Maps</a>
            </ul>
        `
    };
    
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.error(err.message)
    }

    n.geolocation.watchPosition(succes, error, options)
}