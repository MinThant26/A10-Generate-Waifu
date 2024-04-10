const axios = require('axios');

async function getImage(){
    const response = await axios.get('https://api.nekosapi.com/v3/images');

    const images = response.data.items;
    const safeImages = images.filter(images => images.rating === "safe");
    const randomIndex = Math.floor(Math.random() * safeImages.length);
    
    return safeImages[randomIndex].image_url;
}

module.exports = getImage;