// console.log(`fuckyou`)
let message = document.querySelector("#message")

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector("input").value
    let movie = document.createElement("li")
    let movieTitle = document.createElement("Span")
    movieTitle.addEventListener("click", crossOffMovie)
    movieTitle.textContent = inputField
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click", deleteMovie)
    deleteBtn.textContent = "X"
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    document.querySelector("input").value = ""
    message.textContent = "Added dat muthafucka to the list"
    reavealMessage()
}

function deleteMovie(event){
    event.target.parentNode.remove()
    let bango = event.target.parentNode.childNodes[0].textContent
    message.textContent = `${bango} Removed`
    reavealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} Watched`
    }
    else {
        message.textContent = `${event.target.textContent} Watched Undone`
    }
    reavealMessage()
}

function reavealMessage(){
    message.classList.remove("hide")
    setTimeout(function () {(message.classList.add("hide"))},1000)
}


document.querySelector(`form`).addEventListener("submit", addMovie)

