document.addEventListener('DOMContentLoaded', function(){
    const task = document.getElementById("inputBox");
    const Addtask = document.getElementById("Addtask");
    const taskList = document.getElementById("tasksList");


    Addtask.addEventListener('click',function(){
        const taskValue = task.value.trim();
        console.log("This is a task value", taskValue)

        if(taskValue !==""){
            const li = taskValue;
            taskList.appendChild(li);
            task.value
        }
    })
})