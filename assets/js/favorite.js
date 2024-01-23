let favorite = document.querySelector("#favorite");

fetch("http://localhost:3000/Favorite")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        favorite.innerHTML += `
        <div class="clothes">
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
            </div>
        </div>
    `
    })
})