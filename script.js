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

function backgroundChange() {    
    const colors = ["blue", "red", "grey", "green", "yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function updateCount() {
    const inputText = document.getElementById("inputText").value.length
    const charCount = document.getElementById("charCount")
    console.log("UpdateCount",charCount.innerHTML = inputText)
  
}



    
    function AddTask() {
        const inputtask = document.getElementById("inputtask").value
        const li = document.createElement("li")
        

        li.innerHTML = inputtask + '<button onclick ="this.parentElement.remove()">Remove</button>'
        document.getElementById('addlist').appendChild(li)
        
        
}



