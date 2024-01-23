let form = document.querySelector("form");
let name = document.querySelector("#name");
let price = document.querySelector("#price");
let image = document.querySelector("#image");
let table = document.querySelector("#table");
let file = document.querySelector("input[type=file]");

fetch(`http://localhost:3000/Estore/${id}`)
.then(res => res.json())
.then(data => {
    image.src = data.image;
    name.value = data.name;
    price.value = data.price;
})

file.addEventListener("input", (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            image.src = reader.result
        }
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let obj = {
        image: image.src,
        name: name.value,
        price: price.value
    }
    axios.patch(`http://localhost:3000/Estore/${id}`, obj)
        .then(res => {
            window.location = "./index.html"
        })
})