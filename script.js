let tasks=document.getElementById("tasksinput")
let upcomingTasks=document.getElementById("taskoverview")



function display() {
    
    let overview=document.createElement("li")
   let newTask=tasks.value
    overview.innerHTML= newTask + "<button onclick='deleteItem(event)'>X</button>"
    upcomingTasks.append(overview)
    console.log(upcomingTasks);
    
}


function deleteItem(event) {
    let disable=event.target
    disable.parentElement.remove()
    
    
}


