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