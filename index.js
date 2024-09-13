const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';
let FAVORITES = [];

document.addEventListener('DOMContentLoaded', onInit);

function onInit() {
    loadRandomImages();
    document.getElementById('refresh').addEventListener('click', loadRandomImages);
}

function loadRandomImages() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const randomImagesContainer = document.getElementById('random-images');
            randomImagesContainer.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                const image = data[i];
                
                const imageContainer = document.createElement('div');
                imageContainer.className = 'image-container';

                const img = document.createElement('img');
                img.src = image.url;
                img.alt = 'Cat';
                img.className = 'cat-image';

                const likeButton = document.createElement('button');
                likeButton.textContent = 'Like';
                likeButton.dataset.url = image.url;
                likeButton.dataset.action = 'like';
                likeButton.addEventListener('click', () => likeImage(likeButton));

                imageContainer.appendChild(img);
                imageContainer.appendChild(likeButton);
                randomImagesContainer.appendChild(imageContainer);
            }
        });
}

function likeImage(button) {
    const url = button.dataset.url;

    if (!FAVORITES.includes(url)) {
        FAVORITES.push(url);
        displayFavorites();
    }
}

function unlikeImage(button) {
    const url = button.dataset.url;

    const index = FAVORITES.indexOf(url);
    if (index > -1) {
        FAVORITES.splice(index, 1);
        displayFavorites();
    }
}

function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites');
    favoritesContainer.innerHTML = '';

    FAVORITES.forEach(url => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Cat';
        img.className = 'cat-image';

        const unlikeButton = document.createElement('button');
        unlikeButton.textContent = 'Unlike';
        unlikeButton.dataset.url = url;
        unlikeButton.dataset.action = 'unlike';
        unlikeButton.addEventListener('click', () => unlikeImage(unlikeButton));

        imageContainer.appendChild(img);
        imageContainer.appendChild(unlikeButton);

        favoritesContainer.appendChild(imageContainer);
    });
}
