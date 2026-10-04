

let inp = document.querySelector("#taskInput")
let addbtn = document.querySelector("#addBtn")
let taskList = document.querySelector("#taskList")
let count = document.querySelector("#taskCount")
let clearBtn = document.querySelector("#clearBtn");
let filters = document.querySelectorAll(".filter");


inp.addEventListener("keydown", (e)=>{
        if(e.key === "Enter"){
            addbtn.click();
        }
      })
addbtn.addEventListener("click", ()=>{
    if(inp.value === ""){
        alert("please add some task!")
        return;
    }
    
    let task = inp.value.trim();
     
    let li = document.createElement("li")
    li.classList.add("task-item")
    li.innerHTML = `
         <div class="task-check"></div>
         <span class="task-text">${task}</span>
         <button class="delete-btn">✕</button>
    `;
     
      taskList.appendChild(li);
      count.textContent = taskList.children.length
      let check = li.querySelector(".task-check")
      check.addEventListener("click", ()=>{
        li.classList.toggle("completed")
       
      })

    let del = li.querySelector(".delete-btn")
    del.addEventListener("click", ()=>{
        
        li.remove();
         count.textContent = taskList.children.length;
    })

     count.textContent = taskList.children.length;

 
})
clearBtn.addEventListener("click", () => {

    let completedTasks = document.querySelectorAll(".completed");

    completedTasks.forEach((task) => {
        task.remove();
    });

    count.textContent = taskList.children.length;
});

filters.forEach((filter) => {

    filter.addEventListener("click", () => {

        let tasks = document.querySelectorAll(".task-item");
        let visibleCount = 0;

        tasks.forEach((task) => {

            if (filter.textContent === "All") {
                task.style.display = "flex";
                visibleCount++;
            }

            if (filter.textContent === "Pending") {
                if (task.classList.contains("completed")) {
                    task.style.display = "none";
                } else {
                    task.style.display = "flex";
                    visibleCount++;
                }
            }

            if (filter.textContent === "Completed") {
                if (task.classList.contains("completed")) {
                    task.style.display = "flex";
                    visibleCount++;
                } else {
                    task.style.display = "none";
                }
            }

        });

        count.textContent = visibleCount;
    });

});