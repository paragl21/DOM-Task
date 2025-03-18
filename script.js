function NewText() {
    const text = document.querySelector("#text")
    text.innerHTML = "This is New Paragraph"
}
function OldText() {
    document.querySelector("#text").textContent = "This is Old Paragraph"

}


function addTask() {
    const ul = document.getElementById("list")
    const li = document.createElement("li")
    li.textContent = "New Task"
    ul.appendChild(li);
}

function removeTask() {
    const ul = document.querySelector
    ("li:last-child")
    ul.remove()
}

function hide() {
    const hide = document.querySelector("#hide")
    hide.style.visibility = "hidden";
}
function unhide() {
    document.querySelector("#hide").style.visibility = "visible"
}