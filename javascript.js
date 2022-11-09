// fetch url

const fetchUrl = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCateries(data.data.news_category));
}
// display Cateries
const displayCateries = (cateries) =>{
    console.log(cateries)
    

    cateries.forEach(caterie =>{
        
        caterieName = Object.values(caterie)[1];
        const cateriesSection = document.getElementById('categoriies-sectiion');
        const createDiv = document.createElement('div');
        createDiv.classList.add('navbar-nav');
        createDiv.innerHTML = `<a class="nav-link">${caterieName}</a>`;
        cateriesSection.appendChild(createDiv);
        

    })
// display Cateries in dropdown
    cateries.forEach(caterie =>{
        
        caterieName = Object.values(caterie)[1];
        const dropdownCategories = document.getElementById('dropdown-categories');
        const createUl = document.createElement('li');
        createUl.classList.add('dropdown-item');
        createUl.innerHTML = `<a class="dropdown-item" href="#">${caterieName}</a>`;
        dropdownCategories.appendChild(createUl);
        

    })

    

    
};

fetchUrl();


const fetchNews = () => {
    
        const url = `https://openapi.programming-hero.com/api/news/1`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
    
    
}

fetchNews();