window.onload = getImage;

const loading = document.querySelector('.img-container h1');

async function getImage(){
    loading.classList = 'show';

    const response = await fetch('http://localhost:3000/image');
    const data = await response.json();
    const image = data.image;

    createImage(image);
}

function createImage(image){
    const img = document.querySelector('.image');

    img.src = image;

    const wait = setInterval(() => {
        loading.classList = 'hide';

        clearInterval(wait);
    },1000);
}