document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
  
    const routes = {
      '/index.html': homePage,
      '/pictures.html': picturesPage,
      '/favorites.html': favoritesPage,
    };
  
    function router() {
      const path = window.location.pathname.split("/").pop();
      const route = routes[`/${path}`] || routes['/index.html'];
      if (route) {
        content.classList.add('fade-out');
        setTimeout(() => {
          route();
          
          content.classList.remove('fade-out');
          content.classList.add('fade-in');
        }, 500);
      }
    }
  
    function homePage() {
      content.innerHTML = `
        <h2>Welcome to Space Explorer</h2>
        <p>Explore the universe with NASA APIs.</p>
      `;
    }
  
    function picturesPage() {
      content.innerHTML = '<div class="spinner"></div>';
      fetch('https://api.nasa.gov/planetary/apod?count=10&api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => {
          content.innerHTML = '<h2>Space Pictures</h2>';
          data.forEach((picture, index) => {
            const div = document.createElement('div');
            div.classList.add('picture');
            div.innerHTML = `
              <h3>${picture.title}</h3>
              <img src="${picture.url}" alt="${picture.title}">
              <p>${picture.explanation}</p>
              <button onclick="addToFavorites(${index})">Add to Favorites</button>
            `;
            content.appendChild(div);
          });
          window.picturesData = data;
        });
    }
  
    window.addToFavorites = function(index) {
      const picture = window.picturesData[index];
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.push(picture);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Added to favorites');
    };
  
    function favoritesPage() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const favoritesList = document.getElementById('favorites-list');
      favoritesList.innerHTML = '';
      if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites yet.</p>';
      } else {
        favorites.forEach((item, index) => {
          const div = document.createElement('div');
          div.classList.add('picture');
          div.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.url}" alt="${item.title}">
            <p>${item.explanation}</p>
            <button onclick="removeFromFavorites(${index})">Remove</button>
          `;
          favoritesList.appendChild(div);
        });
      }
    }
  
    window.removeFromFavorites = function(index) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      router();
    };
  
    window.onpopstate = router;
    router();
  });
  