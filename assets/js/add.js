let form = document.querySelector("form");
let name = document.querySelector("#name");
let price = document.querySelector("#price");
let image = document.querySelector("#image");
let table = document.querySelector("#table");
let file = document.querySelector("input[type=file]")

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

    let imageInp = file.value.trim();
    let nameInp = name.value.trim();
    let priceInp = price.value.trim();

    let inputs = [file, name, price]

    // console.log(inputs);

    if (imageInp && nameInp && priceInp) {
        let src = file.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            let obj = {
                image: e.target.result,
                name: name.value,
                price: price.value
            }
            axios.post("http://localhost:3000/Estore", obj)
                .then(res => {
                    window.location = "./index.html"
                })
        }
        reader.readAsDataURL(src);
    }
    else{
        inputs.forEach(input => {
            let p_text_display = input.value.trim() == "" ? 'block' : 'none'
            input.previousElementSibling.style.display = p_text_display
        })
    }
})

fetch("http://localhost:3000/Estore")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            table.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.price}</td>
                <td>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                </td>
                <td>
                    <button onclick="updateEl(${element.id})">Update</button>
                </td>
            </tr>
        `
        })
    })

function deleteEl(id) {
    axios.delete(`http://localhost:3000/Estore/${id}`);
    window.location.reload();
}

function updateEl(id) {
    window.location = `./update.html?id=${id}`
}