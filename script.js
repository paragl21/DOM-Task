                            // Task-1

function NewText() {
    const text = document.querySelector("#text")
    text.innerHTML = "This is New Paragraph"
    
}
function OldText() {
    document.querySelector("#text").textContent = "This is Old Paragraph"

}

                            // Task-2 & 3

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

                            // Task-4

function hide() {
    const hide = document.querySelector("#hide")
    hide.style.visibility = "hidden";
}
function unhide() {
    document.querySelector("#hide").style.visibility = "visible"
}

                            // Task-5

function backgroundChange() {    
    const colors = ["blue", "red", "grey", "green", "yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

                            // Task-6

function updateCount() {
    const inputText = document.getElementById("inputText").value.length
    const charCount = document.getElementById("charCount")
    console.log("UpdateCount",charCount.innerHTML = inputText)
  
}


                            // Task-7


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("AddTaskButton").addEventListener("click", AddTask);
});

function AddTask() {
    const inputElement = document.getElementById("inputtask");
    const inputtask = inputElement.value 

    const li = document.createElement("li");
    li.innerHTML = inputtask;

    const btn = document.createElement("button")
    btn.innerHTML = "Remove"

    const container = document.createElement("div")
    container.appendChild(li)
    container.appendChild(btn)
     
    btn.addEventListener("click", function() {
        container.remove()
    })
    document.getElementById("addlist").appendChild(container)
}


                            // Task-8

const searchbox = document.getElementById("searchtask")
const listitems = document.querySelectorAll(".list-items")

searchbox.addEventListener("input",function() {
    searchval = searchbox.value.toLowerCase()
    // console.log("searchbox",searchval);
    // console.log("listitems",listitems);
    
        
    // listitems.forEach(items => {
   
    
    const obj = listitems.length && [...listitems].map(iteam => 
        iteam.innerHTML.toLowerCase())
            const filteritem = obj.filter(objitem => objitem.includes(searchval));
            console.log(filteritem);
            
            [...listitems].map((item,i) => {
                item.style.display = filteritem.includes(obj[i]) ? "block" : "none";
            })

    

    // if(textval.includes(searchval)){
    //     items.style.display = "block"
    // } else {
    //     items.style.display = "none"
    // }
})


