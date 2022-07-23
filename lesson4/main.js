const blocks = document.getElementsByClassName("block")//брать элементы по классу
// console.log(blocks)
//
const block3 = document.getElementById("block3")//брать элементы по id
//console.log(block3)

//block3.className = "changedClass"; // изменить название класса


// block3.classList.add("newCLass") //classList - список классов, add - добавить новый класс
//
// block3.classList.remove("block")  //remove - удалить класс

// console.log(block3.classList)

// block3.onclick = () => {
//     block3.classList.toggle("active")
// }

const block = document.querySelector(".block") // самый первый селектор

const block2 = document.querySelectorAll(".block") // все селекторы
// console.log(block2)


const button = document.getElementById("button")
const input = document.getElementById("input")

button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.innerText  = "delete"
    const changeButton = document.createElement("button")
    changeButton.innerText = "change"
    div.setAttribute("class", "block")
    div.innerText = input.value

    div.append(deleteButton, changeButton)
    document.body.append(div)
    input.value = ""

    
}

