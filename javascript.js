// fetch url

const fetchUrl = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category));
}
// display Cateries
const displayCategories = (categories) =>{
    // console.log(categories)
 
    categories.forEach(category =>{
        
        const categoryName = Object.values(category)[1];
        const categoryId = Object.values(category)[0];
        // console.log(categoryId);
        const cateriesSection = document.getElementById('categoriies-sectiion');
        const createDiv = document.createElement('div');
        createDiv.classList.add('navbar-nav');
        createDiv.innerHTML = `<a onclick="getNewsId('${categoryId}')" class="nav-link">${categoryName}</a>`;
        cateriesSection.appendChild(createDiv);
        

    })
// display Cateries in dropdown
    categories.forEach(category =>{
        
        const categoryName = Object.values(category)[1];
        const categoryId = Object.values(category)[0];
        // console.log(categoryId);
        const dropdownCategories = document.getElementById('dropdown-categories');
        const createUl = document.createElement('li');
        createUl.classList.add('dropdown-item');
        createUl.innerHTML = `<a onclick="getNewsId('${categoryId}')"class="dropdown-item">${categoryName}</a>`;
        dropdownCategories.appendChild(createUl);
        

    })
    
};

fetchUrl();

const url = `https://openapi.programming-hero.com/api/news/category/08`;
        // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(news => displayData(news.data));
   
        const getPostDiv = document.getElementById('post');
        getPostDiv.innerHTML = '';
    

    

    const displayData = (data) => {
        
        const itemFound = document.getElementById('item-found');
        itemFound.innerHTML = `${data.length} item found`;
        
        data.forEach(post =>{
            
   
    
    
    
    
    const getPostDiv = document.getElementById('post');
    // console.log(post);
    const createPostDiv = document.createElement('div');
    createPostDiv.classList.add('card');
    createPostDiv.classList.add('m-3');
    createPostDiv.classList.add('custom-hight');
    createPostDiv.innerHTML =`
    
    <div class="row g-0">
    <div class="col-md-3 col-sm-12">
        <img src="${post.thumbnail_url}"
            class="img-fluid p-3 rounded-start" alt="...">
    </div>
    <div class="col-md-9 col-sm-12">
        <div class="card-body px-5 hight" style="height: 338px!important;">
            <div class="hight-80">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.details}</p>
            </div>
            <div class="d-flex justify-content-between align-item-center hight-20">
                <div class="d-flex">
                    <div><img style="max-height: 50px; " class="rounded-circle"
                            src="${post.author.img}"
                            alt=""></div>
                    <div class="mx-2">
                        <p class="px-1">${post.author.name ? post.author.name : 'no data found'} <br>${post.author.published_date ? post.author.published_date : 'no data found'}</p>

                    </div>
                </div>
                <div class="d-flex align-items-center"><i class="fa-regular fa-eye "></i>
                    <span class="px-2 text-bold">${post.total_view ? post.total_view : 'no data found'}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </div>
                <div id="modal" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="lunchModal('${post._id}')" class="d-flex align-items-center"><i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    </div>
    </div>
            
    `;
    
    getPostDiv.appendChild(createPostDiv);

        },)}
        

const getNewsId = (categoryId= "08") =>{
    
    
        
        // const caterieId = Object.values(cateries)[0];
        // console.log(caterieId);
        try{
            const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
        // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(news => displayData(news.data));
        }
        catch (error){
            const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
        // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(news => displayData(news.data));
        }
   
        const getPostDiv = document.getElementById('post');
        getPostDiv.innerHTML = '';
    

    

    const displayData = (data) => {
        
        const itemFound = document.getElementById('item-found');
        itemFound.innerHTML = `${data.length} item found`
        data.forEach(post =>{
            // console.log(post);
   
    const getPostDiv = document.getElementById('post');
    
    const createPostDiv = document.createElement('div');
    createPostDiv.classList.add('card');
    createPostDiv.classList.add('m-3');
    createPostDiv.classList.add('custom-hight');
    createPostDiv.innerHTML =`
    
    <div class="row g-0">
    <div class="col-md-3">
        <img src="${post.thumbnail_url}"
            class="img-fluid p-3 rounded-start" alt="...">
    </div>
    <div class="col-md-9">
        <div class="card-body px-5 hight" style="height: 338px!important;">
            <div class="hight-80">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.details}</p>
            </div>
            <div class="d-flex justify-content-between align-item-center hight-20">
                <div class="d-flex">
                    <div><img style="max-height: 50px; " class="rounded-circle"
                            src="${post.author.img}"
                            alt=""></div>
                    <div class="mx-2">
                        <p class="px-1">${post.author.name ? post.author.name : 'no data found'} <br>${post.author.published_date ? post.author.published_date : 'no data found'}</p>

                    </div>
                </div>
                <div class="d-flex align-items-center"><i class="fa-regular fa-eye "></i>
                    <span class="px-2 text-bold">${post.total_view ? post.total_view : 'no data found'}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </div>
                <div id="modal" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="lunchModal('${post._id}')" class="d-flex align-items-center"><i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    </div>
    </div>
            
    `;
    
    getPostDiv.appendChild(createPostDiv);
    
        }
        
    
    
        )
    }
    
}

const lunchModal = (postId) => {
    console.log(postId);
    const url = `https://openapi.programming-hero.com/api/news/${postId}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayPostDetails(data.data));
}
// display Cateries
const displayPostDetails = (data) =>{
    // console.log(data[0])
    const newsDetails = data[0];
    
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = newsDetails.title;
    const detailsBody = document.getElementById('body');
    detailsBody.innerHTML = `
    <img class="center" src="${newsDetails.image_url}">
    <p>"${newsDetails.details}"</p>
    `
    // console.log(newsDetails.title);
    
    
}

