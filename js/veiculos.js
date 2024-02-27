document.addEventListener("DOMContentLoaded",function () {
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTask.addEventListener("click", function () {
        if(taskInput.value.trim() !== ""){
            const currentTask = document.createElement("li");
            currentTask.innerHTML = `${taskInput.value.trim()} <button class = "deleteButton">Deletar</button>`;
            currentTask.getElementsByClassName("deleteButton")[0];
            const deleteBtn = currentTask.querySelector(".deleteButton");
            deleteBtn.addEventListener("click",function(){
                taskList.removeChild(currentTask);
            });
            

            removeAll.addEventListener("click",function(){
                taskList.removeChild(currentTask);
            });
            taskList.appendChild(currentTask);
        }else{
            alert("O campo deve ser preenchido.")
        }
    });
})