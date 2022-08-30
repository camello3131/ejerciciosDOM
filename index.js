/*class Vehiculos {
    constructor (nombre, marca) {
        this.nombre = nombre
        this.marca = marca
    }
}

class Auto extends Vehiculos {
    constructor (nombre, marca, velocidad) {
        super (nombre, marca)
        this.velocidad = velocidad
    }
    sonar () {
        console.log (`Soy un auto ${this.nombre} y mi velocidad maxima es de ${this.velocidad}`)
    }
}

class Camioneta extends Vehiculos {
    constructor (nombre, marca, velocidad) {
        super (nombre, marca)
        this.velocidad = velocidad
    }
    sonar () {
        console.log (`Soy una camioneta ${this.nombre} y mi velocidad maxima es de ${this.velocidad}`)
    }
}


const ranger = new Camioneta ("Ranger", "Ford", "145")
const siena = new Auto ("Siena", "Fiat", "135")
console.log (siena)
console.log (ranger)
siena.sonar()
ranger.sonar()
console.log (Date.now());

(function (lucas){
    lucas.log("asdasd")
})(console)
*/




/*
let mensaje = prompt("dame un texto")

function contar (m){
    console.log(m.length)
}
contar (mensaje)
*/



/*
const numero = prompt (Number("elige un numero"))

const mensajeObjet = new String ("holaa mundo");
console.log (mensajeObjet.slice(0, numero))
*/
/*
const mensaje = prompt("dame un string")
const mensajeee = prompt("dame un string")
const longitud = prompt ("que longitud muñe?")

const contarCarac = (cadena= "") =>{
    (!cadena) ? console.log("no hay string") : console.log (cadena.length)
}

contarCarac(mensajeee)

function contarCaracteres (m) {
    if (typeof m === "string") {
        console.log(m.length)
    } else {
        return console.log("no es un string")
    }
}

contarCaracteres(mensaje)

const recortar = (mens, longitud = "") => {
    (!mens)? console.log ("no hay nada aca che") 
    : (longitud==="")? console.log("te falto decirme la longitud capo")
    :console.log(mens.slice(0, longitud))
}

recortar(mensajeee, longitud);

*/
/*
const cadenaAarray = (cadena = "", cortador = undefined) => {
    (!cadena) ? console.log ("no che.. te falta la cadena") 
    : (cortador === undefined) ? console.log ("te falta el cortador")
        : console.log (cadena.split(cortador))
}

cadenaAarray ("enero, febrero, marzo, helado hola que tal", " " || ",")
cadenaAarray ()


const repetir = (cadenaa = "", cantidad = undefined) => {
    if (!cadenaa) return console.warn("falta el texto")
    if (cantidad === undefined) return console.warn("falta cantidad")
    if (cantidad === 0) return console.error ("no puedo imprimir 0 veces")
    if (cantidad < 0) return console.error ("no te hagas el pillo")
    if (cantidad === NaN) return console.error ("me tenes que pasar un numero wachin")

    for(let i=1; i<=cantidad; i++){
        console.info(`${cadenaa}, ${i}`)
    }
}

repetir ("hola", 58)

*/

/*
const text = prompt("dame un texto que te lo invierto")

const invertir = (tex="") => {
    if (!tex) return console.warn("debes pasarme una cadena")
    console.log (tex.split("").reverse().join(""))
}

invertir(text)






const encontrar = (cadena= "", texto="") => {
    if (!cadena) return console.warn("no ingresaste una cadena")
    if (!texto) return console.warn("no ingresaste la palabra a buscar")

    let i = 0
    contador = 0

    while (i != -1) {
        i = cadena.indexOf(texto, i)
        if (i != -1) {
        i++
        contador++
        }
    }

    return console.log (contador + " palabras encontradas")
}

encontrar ("mundo mundo", "mundo")





let palabra = prompt ("pasame palabra y te digo si es palindromo")

const palindromo = (palabra= "") => {
    if (!palabra) return console.log("no hay palabra che")

    if (palabra.split("").reverse().join("") === palabra){
        console.log ("true")
    } else{
        console.log ("false")
    }
}

palindromo(palabra)




const eliminarPatron = (texto = "", patron="") => {

    (!texto)
    ? console.warn ("no hay texto capo")
    : (!patron)
        ? console.warn ("y el patron?")
        : console.info (texto.replace(new RegExp(patron, "ig"), ""))
}


eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")*/

/*


const obtenerRandom = (min, max) => console.log (Math.floor(Math.random() * (max - min) + min));

obtenerRandom(501, 600)




const capicua = (numero) => {
    if (!numero) return console.warn ("no hay numero")


    let convertAndReverse = numero.toString().split("").reverse().join("")
    if(convertAndReverse != numero) {
        console.log ("no es capicua :(")
    } else {
        console.log ("capicuaaaaa")
    }
}

capicua(2002)




let factor = 1;

const factorial = (n) => {
    if (!n) return console.warn ("no ingresaste nada")
    if (n === 0) return console.warn ("numero no puede ser 0")
    if (n< 0) return console.warn ("numero no puede ser numero negativo")
    if (typeof n !== "number") return console.warn("tenes que poner un numero")


    for (let i = n; i>1; i--) {
        factor *= i
    }
    console.log (factor)
}


factorial (8)

*/

/*

let esDivisible = false

const primo = (n) => {
    if (!n) return console.warn ("no ingresaste nada")
    if (n < 0) return console.warn ("los numeros negativos no pueden ser primos")
    if (typeof n !== "number") return console.warn ("debes ingresar un numero")
    if (n === 0) return console.warn ("0 no puede ser primo")

    for (let i = 2 ; i < n; i++) {
        if ((n % i) === 0) {
            esDivisible = true
            break
        }
    }
    return (esDivisible) ? console.log ("no es primo") : console.log ("si es primo")
}

primo (10)



const parImpar = (num) =>{
    if (typeof num !== "number") return console.warn ("debes ingresar un numero")
    if (!num) return console.warn ("no ingresaste nada")

    
    if ((num % 2) === 0) {
        console.log ("es par")
    } else {
        console.log ("es impar")
    }
}

parImpar (3)


function convertirGrados (grados=undefined, unidad = undefined) {
    if (grados === undefined) return console.warn ("no ingresaste grados")
    if(typeof grados !== "number") return console.error ("no es un numero")
    if (unidad === undefined) return console.warn ("no ingresaste unidad")
    if (unidad.length != 1) return console.warn ("valor no reconocido")
    if (!/(C|F)/.test(unidad)) return console.warn ("unidad incorrecta")


    if (unidad === "C") {
        let fahr = Math.round(grados * 1.8 + 32)
        console.log (`${grados}°C es igual a ${fahr}°F`)
    }

    if (unidad === "F") {
        let cel = Math.round((grados - 32) / 1.8)
        console.log (`${grados}°F es igual a ${cel}°C`)
    }
}

convertirGrados (20, "F")

*/

/*

const precio = (monto, descuento) => {
    if (!monto) return console.warn ("no ingresaste monto")
    if (!descuento) return console.warn ("no ingresaste descuento")
    if (typeof monto !== "number") return console.warn ("debes ingresar un numero")

    let total = monto - ((monto * descuento) / 100)
    console.log (total)
}

precio (1000, 20)




const contarLetras = (cadenaT = "") => {
    if (!cadenaT) return console.warn ("ingresa una cadena de texto")
    if (typeof cadenaT != "string") return console.warn ("debes ingresar un string")

    let vocales = 0;
    let consonantes = 0;

    cadenaT = cadenaT.toLocaleLowerCase()

    for (const letra of cadenaT) {
        if (/[aeiou]/.test(letra)) vocales++;
        if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes++;
    }

    console.log ({
        cadenaT,
        vocales,
        consonantes
    })

    console.log (`Vocales: ${vocales} -- Consonantes: ${consonantes}`)
}

contarLetras ("Hola MuNdO")



const validarNombre = (nombre = "") => {
if (!nombre) return console.warn ("debes ingresar un nombre")
if (typeof nombre != "string") return console.warn ("debes ingresar un string")

let exprReg = /^[A-Za-zÑñáúó/s]+$/g.test(nombre);

return (exprReg)
? console.log ("el nombre es valido")
: console.log ("el nombre no es valido");
}

validarNombre ("lucas britos")



const validarMail = (mail) =>{
    if (!mail) return console.warn ("debes ingresar un mail")
    if (typeof mail != "string") return console.warn ("debes ingresar un string")

    let expre = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail);

    return (expre)
    ? console.log ("es un mail")
    : console.log ("no es un mail")
}

validarMail ("")
validarMail("lucasbritosboccazzi@outlook.com")
validarMail("asaa@dsaa.com")
validarMail (2)


const validando = (nombre = "", mail= "") => {
    if (!mail) return console.warn ("debes ingresar un mail")
    if (typeof mail != "string") return console.warn ("debes ingresar un string")
    if (!nombre) return console.warn ("debes ingresar un nombre")
    if (typeof nombre != "string") return console.warn ("debes ingresar un string")

    let exprReg = /^[A-Za-zÑñáúó/s]+$/g.test(nombre);
    let expre = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail);

    if (!expre) {
        console.warn ("email invalido")
    }
    if (!exprReg) {
        console.warn ("nombre invalido")
    }

    if (expre && exprReg) {
        console.log ("ambos son validos")
    }
}

validando ("lucas", "lucasbritosbocazzi@outlook.com")
validando ("", "lucasbritosbocazzi@outlook.com")
validando ("lucas", "")
validando ("aa s s 56", "lucasbritosbocazzi@outlook.com")
validando ("lucas", "aaaa")

*/
/*

const calcularPotencia = (n=undefined) => {
    if (!n) return console.warn  ("Pasame un algunos numeros dentro de un array")
    if (!(n instanceof Array)) return console.error ("debes ingresar un arreglo")
    if (n.length < 1) return console.warn ("el array no puede estar vacio")
    
    for (const numero of n) {
        if (typeof numero != "number") return console.warn ("todas las posiciones del array tienen que ser numeros")
    }

    let nuevoArray = []

    n.forEach (function (numero) {
        nuevoArray.push (numero * numero)
    })
    console.log (nuevoArray)
}

calcularPotencia([1, 4, 5])
calcularPotencia(2)
calcularPotencia([])
calcularPotencia(["hola", "que"])


const maxMin = (n) => {
    if (!n) return console.warn  ("Pasame un algunos numeros dentro de un array")
    if (!(n instanceof Array)) return console.error ("debes ingresar un arreglo")
    if (n.length < 1) return console.warn ("el array no puede estar vacio")
    for (const numero of n) {
        if (typeof numero != "number") return console.warn ("todas las posiciones del array tienen que ser numeros")
    }

    
    let result = []
    maximo = Math.max(...n)
    minimo = Math.min (...n)

    result.push (maximo, minimo)
    console.log (result)
}

maxMin ([1, 4, 5, 99, -60])

////////////////////////////////////


const objetc = {pares: [], impares :[]}

const parOImpar = (n = undefined) =>{
    n.forEach(function(numero){
        if ((numero % 2) === 0) {
            objetc.pares.push (numero)
        } else {
            objetc.impares.push (numero)
        }
    })
    console.log (objetc)
}

parOImpar ([1,2, 3, 5, 5, 7, 10, 8, 12])

*/

/*

const ordenar = (n) => {
    if (!n) return console.warn  ("Pasame un algunos numeros dentro de un array")
    if (!(n instanceof Array)) return console.error ("debes ingresar un arreglo")
    if (n.length < 1) return console.warn ("el array no puede estar vacio")
    
    for (const numero of n) {
        if (typeof numero != "number") return console.warn ("todas las posiciones del array tienen que ser numeros")
    }

    return console.log ({
        original: n,
        asc: n.map(el => el).sort(),
        desc: n.map(el => el).sort().reverse()
    })
}

ordenar ([7, 5,7,8,6])



const eliminarDuplicados = (arr) => {
    if (!arr) return console.warn  ("Pasame un algunos numeros dentro de un array")
    if (!(arr instanceof Array)) return console.error ("debes ingresar un arreglo")
    if (arr.length < 1) return console.warn ("el array no puede estar vacio")

    return console.log ({
        original: arr,
        sinDuplicados: arr.filter((value, index, self)=> self.indexOf(value) === index)
    })
}

eliminarDuplicados (["x", 10, "x", 2, "10", 10, true, true])


const obtenerPromedio  = (n) => {
    if (!n) return console.warn  ("Pasame un algunos numeros dentro de un array")
    if (!(n instanceof Array)) return console.error ("debes ingresar un arreglo")
    if (n.length < 1) return console.warn ("el array no puede estar vacio")
    
    for (const numero of n) {
        if (typeof numero != "number") return console.warn ("todas las posiciones del array tienen que ser numeros")
    }

    let suma = 0

    for(let i = 0; i< n.length; i++) {
    suma = (n[i] + suma)
    }

    let promedio = suma / n.length

    console.log(promedio)
}

obtenerPromedio([9,8,7,6,5,4,3,2,1,0])
*/
/*
class Peliculas {
    constructor ({id, titulo, director, anio, pais, genero, calificacion}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnio(anio)
        this.validarPais(pais)
        this.validarGenero(genero)
        this.validarCalificacion(calificacion)
    }

    static get listaGeneros () {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "FilmNoir", "GameShow", "History", "Horror", "Musical", "Music", "Mystery", "News", "RealityTV", "Romance", "SciFi", "Short", "Sport", "TalkShow", "Thriller", "War", "Western"]
    }

    static generosAceptados() {
        return console.info (`los generos aceptados son: ${Peliculas.listaGeneros.join(", ")}`)
    }

    validarNumero (propiedad, valor) {
        if (!valor) return console.warn (`no ingresaste valor para ${propiedad}`)
        if(typeof valor !== "number") return console.warn (`el valor ${valor} no es un numero`)
        return true
    }

    validarCadena(propiedad, valor){
        if (!valor) return console.warn (`No ingresaste ${propiedad}`);
        if (typeof valor !== "string") return console.warn (`Debes ingresar un string para ${propiedad}`);
        return true;
    }

    validarArray (propiedad, valor) {
        if (!valor) return console.warn (`no ingresaste ${propiedad}`)
        if (!(valor instanceof Array)) return console.warn (`la propiedad ${propiedad} no es un array`)
        for (const cadena of valor) {
            if (typeof cadena !== "string") return console.warn (`el valor ${valor} no es un string`)
        }

        if (valor.length <= 0) return console.warn ("el arreglo esta vacio")
        return true
    }

    validarIMDB (id) {
        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error (`IMDB id "${id}" no es valido. Debe tener 9 caracteres`)
            }
        }
    }

    validarTitulo (titulo){
        if (this.validarCadena("titulo", titulo)) {
            if (this.titulo.length > 100) return console.warn ("el titulo no puede tener mas de 100 caracteres")
        }
    }


    validarDirector(director) {
        if(this.validarCadena("director",director)) {
            if (this.director.length > 50) return console.warn("el nombre del director no puede tener mas de 50 caracteres")
        }
    }

    validarAnio(anio) {
        if(this.validarNumero("año", anio)) {
            if (this.anio.length < 4) return console.warn (`el año ${anio} es invalido`)
        }
    }

    validarPais (pais) {
        this.validarArray ("pais", pais)
    }
    
    validarGenero (genero) {
        (this.validarArray ("genero", genero))
            for (const gener of genero) {
                if(!Peliculas.listaGeneros.includes(gener)){
                    console.log (`el genero ${gener} no es valido`)
                    Peliculas.generosAceptados()
                }
            }
        }

        validarCalificacion(calificacion) {
            if(this.validarNumero("calificacion", calificacion)) {
                (calificacion < 0 || calificacion > 10)?
                    console.warn("la calificacion debe ser entre 0 u 10") 
                    : this.calificacion = calificacion.toFixed(1)                
            }
        }

        fichaTecnica () {
            console.info(`Ficha tecnica:\nTitulo: "${this.titulo}"\nDirector: ${this.director}\nAño: ${this.anio}\nPais: ${this.pais.join("-")}\nGeneros: ${this.genero.join(", ")}\nCalificacion: ${this.calificacion}
            `)
        }
}


const misPelis = [
    {
        id: "ff2222222",
        titulo: "hola",
        director: "Lucas",
        anio: 1999,
        pais: ["argentina"],
        genero: ["Comedy", "Sport"],
        calificacion: 8.4
    },
    {
        id: "ff2222222",
        titulo: "hola",
        director: "Lucas",
        anio: 1999,
        pais: ["argentiana"],
        genero: ["Comedy", "Sport"],
        calificacion: 8.4
    },
    {
        id: "ff2222222",
        titulo: "hola",
        director: "Lucsas",
        anio: 1999,
        pais: ["argentina"],
        genero: ["Comedy", "Sport"],
        calificacion: 8.4
    }
]


misPelis.forEach(el => new Peliculas(el).fichaTecnica())


*/
/*
const nombre = prompt("como te llamas?")
const edad = prompt ("que edad tenes?")
const direccion = prompt ("cual es tu direccion")
const num = prompt ("ingresa un numero")

const texto = `Amor!. Ibas a hacer dormir a la Emi, pero parece que te dormiste vos. jaja`

const hablar = (texto) => speechSynthesis.speak (new SpeechSynthesisUtterance(texto));

hablar (texto)
*/
import { scrollTopBtn } from "./dom/btn_scroll.js";
import countDown from "./dom/countDown.js";
import { darkMode } from "./dom/darkMode.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { reloj, alarma } from "./dom/reloj_alarma.js";
import { moveBall } from "./dom/teclado.js"
import responsiveMedia from "./dom/objetoResponsive.js"
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo.js";
import carrusel from "./dom/slider.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    reloj("#reloj", "#activar", "#frenar");
    alarma("assets/alarma.mp3", "#activar-audio", "#frenar-audio");
    countDown("countdown", "Nov 20, 2022 13:00:00", "Empezo el mundial!!!!")
    scrollTopBtn(".scroll-top-btn")
    responsiveMedia("youtube", 
    "(min-width: 1024px)", 
    `<a href="https://www.youtube.com/embed/eQGG1vp7AEk">Ver Video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/eQGG1vp7AEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
    responsiveMedia("gmaps",
    "(min-width: 1024px)", 
    `<a href="https://goo.gl/maps/55sjitMAQeeDo3WL9">Ver Mapa</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1395920.8612193477!2d-116.2844521152903!3d37.86116133226967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b81baaba3e8c81%3A0x970427e38e6237ae!2s%C3%81rea%2051%2C%20Nevada%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1661494672382!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    )
    getGeolocation("geolocation")
    searchFilters(".card-filter", ".card")
    draw("#winner-btn", ".player")
    carrusel();
})

d.addEventListener("keydown", (e) => {
    moveBall(e, ".ball", ".stage")
})

darkMode(".btn-dark", "darkMode")