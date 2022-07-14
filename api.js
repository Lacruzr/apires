const URL = 'https://api.thedogapi.com/v1/images/search';

cargaPerro();

function cargaPerro(){
fetch(URL)
.then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;console.log(data);

    });
}