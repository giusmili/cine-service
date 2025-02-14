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
                                </figcaption>
                                </figure>
                                `

})

  console.table(collection);

  /* localStorage */
  localStorage.setItem("collection", JSON.stringify(collection));
});
