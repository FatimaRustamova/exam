let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/Estore/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML = `
        <div class="clothes">
            <div class="picture">
                <img src="${data.image}" alt="">
            </div>
            <div class="green">
                <div class="icons">
                    <i class="bi bi-star" id="yellow"></i>
                    <i class="bi bi-star" id="yellow"></i>
                    <i class="bi bi-star" id="yellow"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                </div>
                <p>${data.name}</p>
                <div class="dollar">
                    <span id="span1">$${data.price}.00</span>
                    <span id="span2">$60.00</span>
                </div>
            </div>
        </div>
    `
})