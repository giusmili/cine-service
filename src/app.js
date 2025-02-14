import {collection} from './modele.js'

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
 
  const parentFigure = document.querySelector(".collection")

    collection.map((element) =>{
    // console.log(element.title)
    parentFigure.innerHTML += `<figure id="${element.id}"> 
                                <img src="${element.image}" alt="${element.title}" loading="lazy">
                                <figcaption>
                                <h2>${element.title}</h2>
                                <ul>
                                    <li><strong>date</strong> : <time datetime="${element.date}">${element.date}</time></li>
                                    <li><strong>réalisateur</strong> : ${element.director}</li>
                                    <li><strong>genre</strong> : ${element.genre}</li>
                                    <li><strong>sortie dvd</strong> : ${element.sortie}</li>
                                </ul>
                                <button 
                                type="button" 
                                aria-label="link" 
                                class="btn-primary">Consulter le site officiel
                                </button>
                                </figcaption>
                                </figure>
                                `

})
const btns = document.querySelectorAll(".btn-primary");

        const links = [
            "https://www.allocine.fr/film/fichefilm_gen_cfilm=27782.html",
            "https://www.allocine.fr/film/fichefilm_gen_cfilm=296.html",
            "https://www.allocine.fr/film/fichefilm_gen_cfilm=727.html"
        ];

        btns.forEach((button, index) => {
            console.log(button);

            button.addEventListener("click", () => {
                if (index < links.length) {
                    window.open(links[index]);
                } else {
                    window.alert("No link associated with this button");
                }
            });
        });

  /* localStorage */
  localStorage.setItem("collection", JSON.stringify(collection));
});
