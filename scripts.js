let docval;
docval = document

console.log(document)

console.log(document.title);

document.querySelector('.infocard')

// 1.Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

let genpkm = document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

console.log(genpkm)

// 2.Cambia el color de fondo de la primera generación de Pokimon.

let colorpkm = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");
    
if (colorpkm.length > 0) {
    colorpkm[0].style.background = 'red';
    }
    
// 3.Imprime por consola la URL de la página.

console.log(document.URL)

// 4.Imprime por consola el dominio de la página.

console.log(document.domain)

// 5.Imprime todos los nodos de imagen.

let imagesPoke = document.getElementsByTagName("img")

console.log(imagesPoke)

// 6.Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif".
for (const img of imagesPoke) {
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

// 7.Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying.

let mutedText = document.getElementsByClassName("infocard-lg-data text-muted");

let flyingType = document.getElementsByClassName("itype flying");

//No he conseguido sacarlo, lo más cerca que he estado ha sido cambiar el color del fondo del itype flying en lugar de toda la caja.