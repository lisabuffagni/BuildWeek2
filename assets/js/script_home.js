
let albumIDs = [173465852, 6328172, 81797, 7898271, 85609322, 63203772, 228423362, 47702742]
let albumData= []
 async function loadAlbums() {
  
  for(i=0; i<albumIDs.length; i++) {
    albumData[i]= await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumIDs[i]}`).then(response => response.json()) //chiamata GET, response trasformata in JSON e inserita nell'array0
    
  }
  console.log(albumData)
  
  let albumList= document.querySelectorAll('.albumList')
  console.log(albumList)
  fillAlbum()
}





let albumList= document.querySelectorAll('.albumList')
    console.log(albumList)

addEventListener('DOMContentLoaded', loadAlbums())

function fillAlbum() {
  let albumList= document.querySelectorAll('.albumList')
  console.log(albumList)
  albumData.forEach(alb => {
    let albumCard= document.createElement('div')
    albumCard.classList.add('column', 'my-2')
    albumList[0].appendChild(albumCard)
    albumCard.innerHTML= `<div class="card bg-dark text-white" style="width: 10rem;" id="id album">
                            <img src="${alb.cover} " class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${alb.title.slice(0,11)}...</h5>
                                <h6 class="card-subtitle mb-2 text-white-50">${alb.artist.name}</h6>
                              </div>
                            </div>`

  });
}






`<div class="column my-2">
<div class="card bg-dark text-white" style="width: 10rem;" id="id album">
  <img src=" " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> titlo</h5>
    <h6 class="card-subtitle mb-2 text-white-50">artista</h6>

  </div>
</div>
</div>`


/* let closeFaBtn= document.querySelector('#FaCloseBtn')
console.log(closeFaBtn)
let sidebar= document.querySelector('aside')
let url1= 'https://striveschool-api.herokuapp.com/api/deezer/album/75621062'
 */

/* sessionStorage.clear() */


/* let albums= document.querySelectorAll(".albumName")
console.log(albums)


    

albums.forEach(alb => {
    alb.addEventListener('click', (evt) => {
        
        sessionStorage.clear()
        console.log(evt.target)
        console.log(evt.target.attributes[0].nodeValue)
        sessionStorage.setItem('idalbum', evt.target.attributes[0].nodeValue)
        })
})
 */