let closeFaBtn= document.querySelector('#FaCloseBtn')
console.log(closeFaBtn)
let sidebar= document.querySelector('aside')
let url1= 'https://striveschool-api.herokuapp.com/api/deezer/album/75621062'
 /* closeFaBtn.addEventListener('click', () => sidebar.classList.add('d-none')) */
async function getAlbum() {

let arr=[]
 await fetch(url1).then(response => response.json()).then(json => arr.push(json)) //chiamata GET, response trasformata in JSON e inserita nell'array
    console.log(arr)
}

getAlbum()