//--Data--//
let product = document.querySelector(".product");
let search = document.querySelector("#search");
let sort = document.querySelector("#sort");
let arr_1 = [];
let arr_2 = [];

function getAllData() {
    fetch("http://localhost:3000/Estore")
    .then(res => res.json())
    .then(data => {
        arr_2 = data;
        product.innerHTML = "";
        arr_1 = arr_1.length || search.value ? arr_1 : data;
        arr_1.forEach(element => {
            product.innerHTML += `
                <div class="clothes">
                    <div class="heart"><i class="bi bi-heart" onclick="goFavorite(${element.id})"></i></div>
                    <div class="picture">
                        <img src="${element.image}" alt="">
                    </div>
                    <div class="green">
                        <div class="icons">
                            <i class="bi bi-star" id="yellow"></i>
                            <i class="bi bi-star" id="yellow"></i>
                            <i class="bi bi-star" id="yellow"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p>${element.name}</p>
                        <div class="dollar">
                            <span id="span1">$${element.price}.00</span>
                            <span id="span2">$60.00</span>
                        </div>
                        <button onclick="viewDetails(${element.id})">View Details</button>
                    </div>
                </div>
            `
        })
    })
}

getAllData();

// --Search--//
search.addEventListener("input", (e)=>{
    arr_1 = arr_2;
    arr_1 = arr_1.filter((el)=> {
        return el.name.toLowerCase().includes(e.target.value.toLowerCase())
    });
    getAllData();
})

// --Sort--//
sort.addEventListener("change", (e)=> {
    if(e.target.value == "asc"){
        arr_1 = arr_1.sort((a,b)=> a.price - b.price)
    }
    else if(e.target.value == "dsc"){
        arr_1 = arr_1.sort((a,b)=> b.price - a.price)
    }
    else{
        arr_1 = []
    }
    getAllData();
})

//--Details--//
function viewDetails(id) {
    window.location = `./details.html?id=${id}`
}

//--Favorite--//
function goFavorite(id) {
    axios.get(`http://localhost:3000/Estore/${id}`)
    .then(res => {
        axios.post("http://localhost:3000/Favorite", res.data);
        alert("Your chosen data has been sent Favorite page!")
    })
}

// //--Navbar--//
let nav = document.querySelector("nav");
let header = document.querySelector("header");

window.addEventListener("scroll", ()=> {
    if(window.scrollY>250){
        nav.style.position = "fixed";
        header.style.display = "none";
    }
    else{
        nav.style.position = "";
        header.style.display = "";
    }
})

//--Modal--//
let modal = document.querySelector(".modal");
let list = document.querySelector("#list");

list.addEventListener("click", ()=> {
    modal.classList.toggle("none");
})